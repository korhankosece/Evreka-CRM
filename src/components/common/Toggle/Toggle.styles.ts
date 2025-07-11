import styled from 'styled-components';

export const ToggleContainer = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const ToggleSwitch = styled.div<{ $checked: boolean }>`
  position: relative;
  width: 40px;
  height: 20px;
  background: ${({ $checked, theme }) =>
    $checked ? theme.colors.primary.main : theme.colors.grey[300]};
  border-radius: 10px;
  padding: 2px;
  transition: background 0.2s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: white;
    transform: translateX(${({ $checked }) => ($checked ? '20px' : '0')});
    transition: transform 0.2s ease-in-out;
  }
`;

export const ToggleInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const ToggleLabel = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.875rem;
`;
