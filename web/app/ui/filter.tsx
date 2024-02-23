import DropdownMenu from "./dropdown";

const countries = [
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'FR', label: 'France' },
    { value: 'DE', label: 'Germany' }
  ];

export default function Filter() {
    return (
        <div className="flex flex-col justify-start
         items-center gap-[29px]">
            <div className="flex justify-center items-start overflow-hidden gap-2.5 px-[50px] py-2.5">
                <div className="grid grid-cols-4 gap-4">
                    <DropdownMenu header={"Brand"} options={countries}/>
                    <DropdownMenu header={"Brand"} options={countries}/>
                    <DropdownMenu header={"Brand"} options={countries}/>
                    <DropdownMenu header={"Brand"} options={countries}/>
                    <DropdownMenu header={"Brand"} options={countries}/>
                    <DropdownMenu header={"Brand"} options={countries}/>
                    <DropdownMenu header={"Brand"} options={countries}/>
                    <DropdownMenu header={"Brand"} options={countries}/>
                    <DropdownMenu header={"Brand"} options={countries}/>
                    <DropdownMenu header={"Brand"} options={countries}/>
                </div>
            </div>
            <div className="flex justify-end items-end overflow-hidden gap-2.5 px-[50px] py-2.5">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[260px] h-10 gap-[9px] rounded-lg bg-[#9139ba] border-[1.3px] border-[#b8bbc2]" >
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                        <p className="flex-grow-0 flex-shrink-0 text-2xl font-medium text-center text-white">Search</p>
                    </div>
                </div>
            </div>
      </div>
    );
}