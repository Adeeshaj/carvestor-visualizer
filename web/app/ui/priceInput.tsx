
export default function PriceInput() {
    return (
        <div className="flex justify-center items-center w-screen gap-[29px] ">

            <div className="flex sm:text-9xl text-3xl font-bold text-center text-[#9139ba]">
                <p className="flex-1 gap-9">Rs. </p>
                <input type="number" className="flex-1 border-b border-[#9139ba] focus:outline-none focus:border-[#9139ba] max-w-md mx-auto"/>
            </div>
        </div>
        
    );  
}