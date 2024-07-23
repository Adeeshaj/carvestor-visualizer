'use client';

import React, { useState, ChangeEvent, FocusEvent } from 'react';

export interface Option {
    value: string;
    label: string;
  }
  
export interface DropdownMenuProps {
    options: Option[];
    label: string;
    id: string;
}
  


const DropdownMenu: React.FC<DropdownMenuProps> = ({options, label, id}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');


    const handleFocus = (e: FocusEvent<HTMLSelectElement>) => {
        setIsFocused(true);
    };
    
    const handleBlur = (e: FocusEvent<HTMLSelectElement>) => {
        setIsFocused(false);
    };

    const handleChange = (e: FocusEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedValue(value);
      };

    return (
        <div className="relative">
        <select id={id} className="text-xs font-medium text-left text-[#313144] rounded-lg bg-white block w-full p-2.5 border-[1.3px] border-[#b8bbc2]" defaultValue=""
        onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange}>
            <option className="text-xs font-medium text-left text-[#313144]" value="" >
            </option>
            {options.map((op) => (
                <option
                    key={op.value}
                    className="text-xs font-medium text-left text-[#313144]"
                    value={op.value}
                >
                    {op.label}
                </option>
            ))}
        </select>
        <label
        htmlFor={id}
        className={`absolute bg-white text-gray-500 duration-300 transform -translate-y-4 scale-75 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
          (isFocused || selectedValue) ? 'top-2 text-sm' : 'top-1/2 -translate-y-1/2 text-m'
        }`}
      >
        {label}
      </label>
        </div>
    );
};

export default DropdownMenu;
