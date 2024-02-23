'use client';

interface Option {
    value: string;
    label: string;
  }
  
interface DropdownMenuProps {
    header: string;
    options: Option[];
}
  

const DropdownMenu: React.FC<DropdownMenuProps> = ({header, options}) => {




    return (
        <div>
        <select id="countries" className="text-xs font-medium text-left text-[#313144] rounded-lg bg-white block w-full p-2.5 border-[1.3px] border-[#b8bbc2]">
            <option className="text-xs font-medium text-left text-[#313144]" value="" selected disabled>
                {header}
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
        </div>
    );
};

export default DropdownMenu;
