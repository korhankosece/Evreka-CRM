import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 16px 24px;
  background: ${({ theme }) => theme.colors.success.main};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  animation: ${slideIn} 0.3s ease-out;
  z-index: 1000;
`;
