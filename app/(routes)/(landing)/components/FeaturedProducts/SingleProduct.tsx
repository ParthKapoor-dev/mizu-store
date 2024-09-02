"use client";

import { cn } from "@/lib/utils";
import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";


interface SingleProductProps {
    prod: Product
}

export function SingleProduct({ prod }: SingleProductProps) {

    const router = useRouter();
    const handleClick = () => {
        router.push(`/product/${prod?.id}`);
    };
    const previewModal = usePreviewModal();
    const cart = useCart();

    const onPreview: MouseEventHandler<HTMLDivElement> = (event) => {
        event.stopPropagation();
        previewModal.onOpen(prod);
    };

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem(prod);
    }

    return (
        <div className="w-1/3 flex items-center justify-center my-8">
            <div className="flex flex-col gap-4" onClick={onPreview}>
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
