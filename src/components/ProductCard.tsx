'use client';

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Link href={`/products/${product.id}`} prefetch={false} className='no-underline text-inherit h-[350px] w-[500px]'>
            <Card className="hover:shadow-xl transition h-full">
                <CardContent className="h-full p-4 flex flex-col items-center">
                    <Image
                        priority
                        src={product.image}
                        alt={product.title}
                        width={200}
                        height={200}
                        className="object-contain"
                    />
                    <CardTitle className="mt-4 text-center text-basefont-semibold">
                        {product.title}
                    </CardTitle>
                    <p className="text-green-600">${product.price}</p>
                </CardContent>
            </Card>
        </Link>
    );
}
