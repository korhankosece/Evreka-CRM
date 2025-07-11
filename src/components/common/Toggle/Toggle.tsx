import { ToggleContainer, ToggleSwitch, ToggleInput, ToggleLabel } from './Toggle.styles';

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

const Toggle = ({ checked, onChange, label }: ToggleProps) => {
  return (
    <ToggleContainer>
      <ToggleInput type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <ToggleSwitch $checked={checked} />
      {label && <ToggleLabel>{label}</ToggleLabel>}
    </ToggleContainer>
  );
};

export default Toggle;
