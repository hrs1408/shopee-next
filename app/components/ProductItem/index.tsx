import Image from 'next/image'
import React from "react";

type props = {
    id: string;
    thumbnail: string;
    price: number;
    title: string;
    stock: number;
}

const ProductItem: React.FC<props> = (props) => {
    return (
        <div className={"group border border-transparent hover:border-red-600 transition-all cursor-pointer relative max-w-[202px] min-h-[284px] bg-white mt-3"}>
            <div className={"p-2"}>
                <div className={"w-full flex justify-center"}>
                    <Image
                        className={"object-scale-down"}
                        loading="lazy"
                        src={props.thumbnail}
                        width={"150"}
                        height={"170"}
                    />
                </div>
                <p className={"pt-1 line-clamp-2"}>
                    {props.title}
                </p>
                <div className={"flex justify-between items-center pt-4 absolute bottom-2 w-[93%]"}>
                    <p className={"price text-red-600 font-bold"}>
                       ${props.price}
                    </p>
                    <div className="sold text-gray-400 text-sm ml-auto">
                        Đã bán {props.stock}
                    </div>
                </div>
            </div>
            <button className={"flex justify-center py-1 w-full bg-red-600 hidden group-hover:block absolute bottom-[-10%] border border-red-600 z-10"}>
                <p className={"text-white text-sm"}>Tìm sản phẩm tương tự</p>
            </button>
        </div>
    )
}

export default ProductItem;