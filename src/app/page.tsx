import ProductCard from '@/components/ProductCard';
import { getAllProducts } from '@/lib/api';
import { Product } from '@/types/product';
import { Suspense } from 'react';

export default async function HomePage() {
  const products: Product[] | string = await getAllProducts();

  if (typeof products === 'string') {
    return <h1 className='text-center'>Products are not accessible</h1>
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="w-full flex flex-col items-center justify-center p-[20px]">
        <h1>Mini Storefront with Dynamic Previews</h1>
        <div className='flex flex-wrap gap-[20px] items-center justify-center'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </Suspense>

  );
}
