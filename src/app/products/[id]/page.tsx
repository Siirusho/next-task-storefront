import Image from 'next/image';
import { Metadata } from 'next';
import { getProductById } from '@/lib/api';
import { Product } from '@/types/product';
import { Suspense } from 'react';

type PageProps = {
  params: Promise<{ id: string }>
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await (params)
  const product: Product | string = await getProductById(id);

  if (typeof product === 'string') {
    return {
      title: 'Product Not Found',
    };
  }

  const ogImageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/og/products/${id}`;

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description: product.description,
      images: [ogImageUrl],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params

  const product = await getProductById(id);

  if (typeof product === 'string') {
    return <h1 className='text-center'>This product is not accessible</h1>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col w-[600px] h-screen justify-center items-center max-w-2xl mx-auto p-6">
        <Image
          priority
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="object-contain"
        />
        <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-green-700 font-semibold text-xl mt-4">${product.price}</p>
      </div>
    </Suspense >
  );
}
