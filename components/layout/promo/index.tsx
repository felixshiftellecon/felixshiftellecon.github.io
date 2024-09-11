import Grid from 'components/grid';
import Image from 'next/image';
import { FaEgg } from 'react-icons/fa6';
import { GiBee } from 'react-icons/gi';
import { LuWheat } from 'react-icons/lu';
import { RiTreeFill } from 'react-icons/ri';

const iconStyle = { color: 'teal' };

export default function Promo() {
  return (
    <section className="text-lg container mx-auto my-[70px] flex max-w-[1140px] items-center justify-between bg-teal px-2.5">
      <div>
        <h2 className="mb-8 text-header-2 font-semibold leading-none">Locally Farmed Products</h2>
        <Grid className="flex flex-col">
          <Grid.Item className="mb-5 flex items-center">
            <FaEgg size={50} style={iconStyle} className="mr-2.5 w-10" />
            Pasture raised chickens
          </Grid.Item>
          <Grid.Item className="mb-5 flex items-center">
            <LuWheat size={50} style={iconStyle} className=" mr-2.5 w-10" />
            Animals fed top quality, locally farmed, organic food
          </Grid.Item>
          <Grid.Item className="mb-5 flex items-center">
            <RiTreeFill size={50} style={iconStyle} className=" mr-2.5 w-10" />
            Forest based apiary
          </Grid.Item>
          <Grid.Item className="flex items-center ">
            <GiBee size={50} style={iconStyle} className="mr-2.5 w-10" />
            Bees born and raised in Appalachia
          </Grid.Item>
        </Grid>
      </div>
      <div className="hidden md:block">
        <Image
          src="https://i.postimg.cc/sgR7zZLH/fresh-eggs.jpg"
          width="446"
          height="445"
          alt="Fresh Eggs"
        />
      </div>
    </section>
  );
}
