'use client';

import CustomCarousel from 'components/custom-carousel';
import FeaturedCard from 'components/featured-card';
import { Product } from 'lib/shopify/types';

export default function Featuredproducts({ products }: { products: Product[] }) {
  return (
    <>
      <section className="container mx-auto my-[70px] max-w-[1140px] pl-12">
        <div className="px-2.5">
          <h2 className="mb-2.5 pb-5 text-center text-header-2 font-semibold leading-none">
            Featured Products
          </h2>
          <h3 className="mx-auto max-w-3xl text-center text-header-3 leading-none">
            <p>Welcome to the Sugar Snap Pea Online Farm Stand</p>
            <br></br>
            <p>All products are available for local purchase only</p>
            <br></br>
            <p>No items will be shipped</p>
          </h3>
        </div>
        <CustomCarousel className="mt-12 pl-2.5">
          {products?.map((product: Product) => <FeaturedCard key={product.id} product={product} />)}
        </CustomCarousel>
      </section>
    </>
  );
}
