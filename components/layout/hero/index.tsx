import { Button } from 'components/button';
import Image from 'next/image';
import Link from 'next/link';
import Arrow from 'public/arrow/arrow';
import Header from '../header';

const HeroContent = () => {
  return (
    <div className="container relative z-0 mx-auto">
      <div className="mx-auto flex flex-col items-center justify-between md:flex-row">
        <Image
          src="https://i.postimg.cc/PrRQncMK/PXL-20240320-210824160.jpg"
          width={500}
          height={650}
          alt="bee loading"
          className="w-1/3 flex-shrink-0"
          priority
        />

        <div className="mx-4 flex flex-grow flex-col items-center justify-center">
          <h2 className="text-center text-3xl font-semibold leading-tight text-main-red-barn md:text-center lg:text-5xl">
            Sugar Snap Pea
          </h2>
          <h2 className="text-center text-3xl font-semibold leading-tight text-main-red-barn md:text-center lg:text-5xl">
            Online
          </h2>
          <h2 className="text-center text-3xl font-semibold leading-tight text-main-red-barn md:text-center lg:text-5xl">
            Farm Stand
          </h2>
          <div className="min-[380px] mt-8 flex flex-col items-center gap-2.5">
            <Link href="/products">
              <Button>Go to products</Button>
            </Link>
          </div>
        </div>

        <Image
          src="https://i.postimg.cc/rmspThjC/bee-beard.jpg"
          width={500}
          height={650}
          alt="bee beard"
          className="w-1/3 flex-shrink-0"
          priority
        />
      </div>

      <div className="relative z-0 mb-20 flex flex-col items-center pt-10">
        <Image
          src="https://i.postimg.cc/pd6mmbp1/rail-chicken.jpg"
          width={1000}
          height={750}
          alt="rail chickens"
          className="h-auto w-full"
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
    <section className="container relative z-10 mx-auto mt-4 max-w-[1140px] bg-teal px-4">
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-4/6 w-1/4 rounded-full opacity-60 blur-xl"></div>
      <Header />
      <HeroContent />
      <ArrowBounce />
    </section>
  );
}
