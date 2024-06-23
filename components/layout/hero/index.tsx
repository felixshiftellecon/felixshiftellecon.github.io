import { Button } from 'components/button';
import Image from 'next/image';
import Link from 'next/link';
import Arrow from 'public/arrow/arrow';
import Header from '../header';

const HeroContent = () => {
  return (
    <div className="container relative z-10 mx-auto pl-10 lg:pt-0">
      <div className="mx-auto flex flex-col items-center justify-between pb-10 md:flex-row">
        <Image
          src="https://i.postimg.cc/PrRQncMK/PXL-20240320-210824160.jpg"
          width={400}
          height={520}
          alt="bee loading"
          className=""
          priority
        />
        <div className="flex max-w-2xl flex-col items-center">
          <h2 className="text-center text-3xl font-semibold leading-tight md:text-center lg:text-5xl">
            <p>Sugar Snap Pea</p>
            <p>Online Farm Stand</p>
          </h2>
          <div className="min-[380px] mt-8 flex flex-col items-center gap-2.5">
            <Link href="/products">
              <Button>Go to products</Button>
            </Link>
          </div>
        </div>
        <Image
          src="https://i.postimg.cc/rmspThjC/bee-beard.jpg"
          width={400}
          height={520}
          alt="bee beard"
          className=""
          priority
        />
      </div>
      <div className="flex flex-col items-center pt-10">
        <Image
          src="https://i.postimg.cc/pd6mmbp1/rail-chicken.jpg"
          width={1000}
          height={1120}
          alt="rail chickens"
          className=""
          priority
        />
      </div>
    </div>
  );
};

const ArrowBounce = () => {
  return (
    <div className="absolute bottom-5 left-1/2 z-40 hidden -translate-x-1/2 animate-bounce rounded-full bg-secondary-light-blue p-4 text-center lg:block">
      <Arrow width="1.2rem" height="1.2rem" fill="#FFFFFF" className="rotate-90"></Arrow>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative mx-auto overflow-hidden bg-teal px-2.5 pb-10 lg:h-[100vh] lg:pb-0">
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-4/6 w-1/4 rounded-full opacity-60 blur-xl"></div>
      <Header />
      <HeroContent />
      <ArrowBounce />
    </section>
  );
}
