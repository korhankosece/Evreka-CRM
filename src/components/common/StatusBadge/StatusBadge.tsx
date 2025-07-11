import { HTMLAttributes } from 'react';

import { StyledBadge } from './StatusBadge.styles';

export interface StatusBadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  status: 'active' | 'inactive';
  text?: string;
}

const StatusBadge = ({ status, text, ...props }: StatusBadgeProps) => {
  // Use the provided text or capitalize the status if no text provided
  const displayText = text || status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <StyledBadge $status={status} {...props}>
      {displayText}
    </StyledBadge>
  );
};

export default StatusBadge;
