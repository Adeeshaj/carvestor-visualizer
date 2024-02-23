import Image from "next/image";

export default function Card() {
    return (
        <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-md">
            <div className="flex">
                <Image  width={300} height={150} src="https://via.placeholder.com/150" alt="Image"/>
                <div className="p-8">
                <div className="max-w-xl bg-white rounded-xl overflow-hidden shadow-md">
                <div className="p-6">
                    <div className="font-bold text-xl mb-2">Vehicle Details</div>
                        <div className="grid grid-cols-5 gap-4">
                            <div>
                                <span className="font-semibold">Brand:</span> Renault
                            </div>
                            <div>
                                <span className="font-semibold">Model:</span> KWID
                            </div>
                            <div>
                                <span className="font-semibold">Trim / Edition:</span> RXT 2019
                            </div>
                            <div>
                                <span className="font-semibold">Year of Manufacture:</span> 2019
                            </div>
                            <div>
                                <span className="font-semibold">Condition:</span> Used
                            </div>
                            <div>
                                <span className="font-semibold">Transmission:</span> Automatic
                            </div>
                            <div>
                                <span className="font-semibold">Body type:</span> Hatchback
                            </div>
                            <div>
                                <span className="font-semibold">Fuel type:</span> Petrol
                            </div>
                            <div>
                                <span className="font-semibold">Engine capacity:</span> 1,000 cc
                            </div>
                            <div>
                                <span className="font-semibold">Mileage:</span> 26,000 km
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        </div>
        </div>
    );
}