import styled from 'styled-components';

export const DetailRow = styled.div`
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[200]};

  &:last-child {
    border-bottom: none;
  }
`;

export const Label = styled.div`
  width: 150px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 500;
`;

export const Value = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.colors.text.primary};
`;
