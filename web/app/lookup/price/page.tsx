import Menu from '@/app/ui/menu';
import Filter from '@/app/ui/filter';
import PriceView from '@/app/ui/priceView';
import { getStaticProps } from '@/app/data/priceStaticData';


export default async function Page() {
    const brands = await getStaticProps("brands");
    const models = await getStaticProps("models");
    const bodyTypes = await getStaticProps("bodyTypes");
    const conditions = await getStaticProps("conditions");
    const fuelTypes = await getStaticProps("fuelTypes");
    const transmissions = await getStaticProps("transmissions");
    const trimEditions = await getStaticProps("trimEditions");

    return (
        <>
            <div className='mt-10'><Menu /></div>
            <div className='mt-10'><Filter 
                brands={brands} 
                models={models}
                bodyTypes={bodyTypes}
                conditions={conditions}
                fuelTypes={fuelTypes}
                transmissions={transmissions}
                trimEditions={trimEditions}
                /></div>
            <div className='mt-10'><PriceView /></div>
        </>
    );
  }
  
