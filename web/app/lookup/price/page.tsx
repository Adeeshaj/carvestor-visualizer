import Menu from '@/app/ui/menu';
import Filter from '@/app/ui/filter';
import PriceView from '@/app/ui/priceView';

export default function Page() {
    return (
        <>
            <div className='mt-10'><Menu /></div>
            <div className='mt-10'><Filter /></div>
            <div className='mt-10'><PriceView /></div>
        </>
    );
  }
  
