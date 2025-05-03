'use client';
import { Button } from 'components/button';
import { Product } from 'lib/shopify/types';
import { useRouter } from 'next/navigation';

export default function FeaturedCard({ product }: { product: Product }) {
  const router = useRouter();
  return (
    <div
      className="relative w-3/5 shrink-0 cursor-grab overflow-hidden rounded-xl bg-secondary-light-blue bg-opacity-50 shadow-md last:mr-0 sm:w-2/5 lg:w-[28%]"
      style={{ height: '450px' }}
    >
      {' '}
      {/* Fixed height */}
      <div
        className="no-repat h-52 w-full items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('${product.featuredImage.url}')`
        }}
      ></div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-main-red-barn">{product.title}</h2>
        <p className="text-base leading-none text-slate-500">
          {product.description.substring(0, 90)}...
        </p>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <Button onClick={() => router.push(`/product/${product.handle}`)} className="w-full">
          View Product
        </Button>
      </div>
    </div>
  );
}
