import Products from '@/components/Products';
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
        <Products products={products} />
      </main>
    </Suspense>

  );
}
