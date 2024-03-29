
export default function Pagination() {
    return (
        <nav aria-label="Page navigation example">
            <ul className="flex justify-center items-center -space-x-px h-10 text-base">
                <li>
                <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-base bg-white border border-e-0 border-base rounded-s-lg hover:bg-base hover:text-white">
                    <span className="sr-only">Previous</span>
                    <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                </a>
                </li>
                <li>
                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-base bg-white border border-base hover:bg-base hover:text-white ">1</a>
                </li>
                <li>
                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-base bg-white border border-base hover:bg-base hover:text-white ">2</a>
                </li>
                <li>
                <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-white text-bold border border-base bg-base hover:bg-base hover:text-white">3</a>
                </li>
                <li>
                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-base bg-white border border-base hover:bg-base hover:text-white ">4</a>
                </li>
                <li>
                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-base bg-white border border-base hover:bg-base hover:text-white ">5</a>
                </li>
                <li>
                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-base bg-white border border-base rounded-e-lg hover:bg-base hover:text-white ">
                    <span className="sr-only">Next</span>
                    <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                </a>
                </li>
            </ul>
        </nav>
    );
}