import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';


export default function Products({ products }: { products: Product[] }) {
    return (
        <>
            <h1>Mini Storefront with Dynamic Previews</h1>
            <div className='flex flex-wrap gap-[20px] items-center justify-center'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}
