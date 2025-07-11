import { SelectHTMLAttributes } from 'react';

import { StyledSelect } from './Select.styles';

export interface SelectOption {
  value: string | number;
  label: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: SelectOption[];
  onChange: (value: string | number) => void;
}

const Select = ({ options, onChange, ...props }: SelectProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find((opt) => opt.value.toString() === e.target.value);
    if (selectedOption) {
      onChange(selectedOption.value);
    }
  };

  return (
    <StyledSelect onChange={handleChange} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
