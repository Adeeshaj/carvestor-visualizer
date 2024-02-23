import Cards from '@/app/ui/cards';
import Menu from '@/app/ui/menu';
import Pagination from '@/app/ui/pagination';
import PriceInput from '@/app/ui/priceInput';

export default function Page() {
    return (
        <div>
            <div className='mt-10'><Menu /></div>
            <div className='mt-10'><PriceInput /></div>
            <div className='mt-10'><Cards /></div>
        </div>
    );
  }
