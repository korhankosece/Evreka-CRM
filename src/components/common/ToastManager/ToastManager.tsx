import { useState } from 'react';

import Toast from '../Toast';

interface ToastManagerProps {
  successMessage?: string;
  errorMessage?: string;
  onSuccessDismiss?: () => void;
  onErrorDismiss?: () => void;
}

const ToastManager = ({
  successMessage,
  errorMessage,
  onSuccessDismiss,
  onErrorDismiss,
}: ToastManagerProps) => {
  const [showSuccess, setShowSuccess] = useState(!!successMessage);
  const [showError, setShowError] = useState(!!errorMessage);

  const handleSuccessDismiss = () => {
    setShowSuccess(false);
    onSuccessDismiss?.();
  };

  const handleErrorDismiss = () => {
    setShowError(false);
    onErrorDismiss?.();
  };

  return (
    <>
      {showSuccess && successMessage && (
        <Toast message={successMessage} onClose={handleSuccessDismiss} />
      )}
      {showError && errorMessage && <Toast message={errorMessage} onClose={handleErrorDismiss} />}
    </>
  );
};

export default ToastManager;
