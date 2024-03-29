import { getDiscountedPricePercentage } from "../utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import WishlistButton from "./WishlistButton";


const ProductCard = ({ data: { attributes: p, id } }) => {
    return (
        <Link
            href={`/product/${p.slug}`}
            className="overflow-hidden bg-white cursor-pointer transition hover:shadow-md rounded-b-lg z-[10]"
        >
        <div className="overflow-hidden relative z-[10]">

            <Image
            className="transform duration-200 hover:scale-105"
                width={500}
                height={500}
                src={p.thumbnail.data.attributes.url}
                alt={p.name}
            />
            <WishlistButton productId={id} />
        </div>
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">{p.name}</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        &#8377;{p.price}
                    </p>

                    {p.original_price && (
                        <>
                            <p className="text-base  font-medium line-through">
                                &#8377;{p.original_price}
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                {getDiscountedPricePercentage(
                                    p.original_price,
                                    p.price
                                )}
                                % off
                            </p>
                        </>
                    )}
                </div>
            </div>
        </Link>
    );
};




export default ProductCard;