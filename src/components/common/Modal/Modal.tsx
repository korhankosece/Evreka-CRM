import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalContent,
  ModalFooter,
  BodyStyle,
} from './Modal.styles';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children, footer }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <BodyStyle isOpen={isOpen} />
      {createPortal(
        <ModalOverlay>
          <ModalContainer ref={modalRef}>
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <CloseButton onClick={onClose}>&times;</CloseButton>
            </ModalHeader>
            <ModalContent>{children}</ModalContent>
            {footer && <ModalFooter>{footer}</ModalFooter>}
          </ModalContainer>
        </ModalOverlay>,
        document.body
      )}
    </>
  );
};

export default Modal;
