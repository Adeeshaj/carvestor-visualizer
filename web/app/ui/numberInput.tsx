'use client';

import React, { useState, ChangeEvent, FocusEvent } from 'react';

interface NumberInputProps {
  min: number;
  max: number;
  label: string;
  id: string;
}

const NumberInput: React.FC<NumberInputProps> = ({ min, max, label, id }) => {
  const [value, setValue] = useState<number | string>('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue === '' || (Number(newValue) >= min && Number(newValue) <= max)) {
      setValue(newValue);
    }
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
  };

  return (
    <div className="relative">
      <input
        type="number"
        id={id}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        min={min}
        max={max}
        className="text-xs font-medium text-left text-[#313144] rounded-lg bg-white block w-full p-2.5 border-[1.3px] border-[#b8bbc2]"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={`absolute bg-white text-gray-500 duration-300 transform -translate-y-4 scale-75 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 
          ${(isFocused || value) ? 'top-2 text-sm' : 'top-1/2 -translate-y-1/2 text-m'}
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default NumberInput;
