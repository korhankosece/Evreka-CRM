import styled from 'styled-components';

export const MapWrapper = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.grey[200]};
`;

export const StyledMapContainer = styled.div`
  height: 100%;
  width: 100%;
`;
