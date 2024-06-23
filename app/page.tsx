import Featuredproducts from 'components/layout/featured-products';
import Hero from 'components/layout/hero';
import Promo from 'components/layout/promo';
import { getCollectionProducts } from 'lib/shopify';

export const metadata = {
  title: 'Sugar Snap Pea Farm',
  description: 'Sugar Snap Pea Farm Online Farm Stand',
  openGraph: {
    type: 'website'
  },
  verification: {
    google: 'ephPAYWfbfSOHHWnGeqEHiOPuxTXr300eIzTmT2oJcY'
  }
};

const { FEATURED_PRODUCT_SLUG } = process.env;

export default async function HomePage() {
  const featuredProductsHome = await getCollectionProducts({
    collection: FEATURED_PRODUCT_SLUG || '',
    reverse: true
  });
  return (
    <>
      <Hero />
      <Featuredproducts products={featuredProductsHome} />
      <Promo />
    </>
  );
}
