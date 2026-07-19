import React from 'react';
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from 'lucide-react';
import './Modal.css';

export type ModalType = 'info' | 'warning' | 'error' | 'confirm';

interface ModalProps {
  isOpen: boolean;
  type: ModalType;
  title: string;
  message: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  type,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
}) => {
  if (!isOpen) return null;

  const renderIcon = () => {
    switch (type) {
      case 'info': return <Info className="modal-icon text-blue" size={32} />;
      case 'warning': return <AlertTriangle className="modal-icon text-warning" size={32} />;
      case 'confirm': return <AlertTriangle className="modal-icon text-warning" size={32} />;
      case 'error': return <AlertCircle className="modal-icon text-danger" size={32} />;
      default: return null;
    }
  };

  return (
    <div className="modal-overlay">
      <div className={`modal-container modal-${type}`}>
        <button className="modal-close-btn" onClick={onCancel}>
          <X size={20} />
        </button>
        
        <div className="modal-content">
          <div className="modal-icon-container">
            {renderIcon()}
          </div>
          <h3 className="modal-title">{title}</h3>
          <div className="modal-message">{message}</div>
        </div>

        <div className="modal-actions">
          {(type === 'confirm' || type === 'warning') && onCancel && (
            <button className="btn btn-outline modal-btn-cancel" onClick={onCancel}>
              {cancelText}
            </button>
          )}
          <button 
            className={`btn modal-btn-confirm ${type === 'error' ? 'btn-danger' : (type === 'confirm' || type === 'warning' ? 'btn-warning' : 'btn-primary')}`} 
            onClick={onConfirm || onCancel}
          >
            {type === 'info' || type === 'error' ? 'OK' : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};
