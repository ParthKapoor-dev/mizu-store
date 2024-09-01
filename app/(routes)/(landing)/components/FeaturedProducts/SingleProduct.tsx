import { cn } from "@/lib/utils";
import { Product } from "@/types";
import Image from "next/image";


interface SingleProductProps {
    prod: Product
}

export async function SingleProduct({ prod }: SingleProductProps) {

    console.log(prod)

    return (
        <div className="w-1/3 flex items-center justify-center my-8">
            <div className="flex flex-col gap-4">
                <Image src={prod.images[0].url} alt=""
                    width={350}
                    height={200}
                    className="rounded-xl"
                />

                <div className="flex justify-between text-lg">

                    <div className="flex flex-col">
                        <p>
                            {prod.name}
                        </p>

                        <p className="dark:text-gray-400">
                            {prod.category.name}
                        </p>
                    </div>

                    <div className=" h-fit py-1 px-3 rounded-3xl flex items-center dark:bg-black border-[0.5px]">
                        ₹{prod.price}
                    </div>



                </div>
            </div>
        </div>
    )
}
