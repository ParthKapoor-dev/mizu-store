import getProducts from "@/actions/get-products";
import { cn } from "@/lib/utils";
import { SingleProduct } from "./SingleProduct";
import { Product } from "@/types";


interface FeaturedProductsProps {
}

export async function FeaturedProducts({ }: FeaturedProductsProps) {

  const products = await getProducts({ isFeatured: true });
  console.log(products)
  const featuredProducts : Product[] = Array(9).fill(products[0]);

    return (
        <div className="flex items-center justify-between flex-wrap mx-auto px-[12vw]">
            {featuredProducts.map( item => (
                <SingleProduct prod={item} key={item.id}/>
            ))}
        </div>
    )
}
