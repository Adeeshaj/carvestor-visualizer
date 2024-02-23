import Card from "./card";
import Pagination from "./pagination";

export default function Cards() {
    return (
        <div className="grid grid-cols-1 gap-4">
            <Card/>
            <Pagination />
        </div>
    );
}