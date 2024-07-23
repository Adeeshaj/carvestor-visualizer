import DropdownMenu, {Option} from "./dropdown";
import React from 'react';
import NumberInput from "./numberInput";



const countries = [
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'FR', label: 'France' },
    { value: 'DE', label: 'Germany' }
  ];

export default function Filter({ brands, models, bodyTypes, conditions, fuelTypes, transmissions, trimEditions}:{
    brands: { options: Option[] }, 
    models: { options: Option[] },
    bodyTypes: { options: Option[] },
    conditions: { options: Option[] },
    fuelTypes: { options: Option[] },
    transmissions: { options: Option[] },
    trimEditions: { options: Option[] },}) {
    return (
        <div className="flex flex-col justify-start
         items-center gap-[29px]">
            <div className="flex justify-center items-start overflow-hidden gap-2.5 px-[50px] py-2.5">
                <div className="grid grid-cols-4 gap-4">
                    <DropdownMenu label={"Brand"} options={brands.options} id={"brand"}/>
                    <DropdownMenu label={"Model"} options={models.options} id={"model"}/>
                    <NumberInput min={0} max={Number.MAX_SAFE_INTEGER} label="Mileage (km)" id="milage"/>
                    <DropdownMenu label={"BodyType"} options={bodyTypes.options} id={"bodytype"}/>
                    <DropdownMenu label={"Condtion"} options={conditions.options} id={"condition"}/>
                    <DropdownMenu label={"Fuel Type"} options={fuelTypes.options} id={"fueltype"}/>
                    <DropdownMenu label={"Transmission"} options={transmissions.options} id={"transmission"}/>
                    <NumberInput min={0} max={9999} label="Engine Capacity (cc)" id="enginecapacity"/>
                    <NumberInput min={0} max={9999} label="Year of Manufacture" id="yearofmanufacture"/>
                    <DropdownMenu label={"Trim Edtion"} options={trimEditions.options} id={"trimedition"}/>
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