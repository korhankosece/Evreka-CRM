import { ChangeEvent, useState, useEffect, useMemo } from 'react';

import { StyledSearchInput } from './SearchInput.styles';

import { debounce } from '../../../utils/debounce';

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  debounceMs?: number;
  className?: string;
}

const SearchInput = ({
  value: externalValue,
  onChange,
  placeholder = 'Search...',
  debounceMs = 400,
  className,
}: SearchInputProps) => {
  const [value, setValue] = useState(externalValue);

  const debouncedOnChange = useMemo(() => debounce(onChange, debounceMs), [onChange, debounceMs]);

  useEffect(() => {
    setValue(externalValue);
  }, [externalValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    debouncedOnChange(newValue);
  };

  return (
    <StyledSearchInput
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default SearchInput;
