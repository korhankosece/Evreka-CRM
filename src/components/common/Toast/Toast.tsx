import { useEffect } from 'react';

import { createPortal } from 'react-dom';

import { ToastContainer } from './Toast.styles';

interface ToastProps {
  message: string;
  duration?: number;
  onClose: () => void;
}

const Toast = ({ message, duration = 3000, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return createPortal(<ToastContainer>{message}</ToastContainer>, document.body);
};

export default Toast;
