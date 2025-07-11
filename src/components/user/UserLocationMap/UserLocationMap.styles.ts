import styled from 'styled-components';

export const MapWrapper = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.grey[200]};
`;
