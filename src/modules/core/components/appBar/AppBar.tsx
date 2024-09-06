"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import { Like } from "../like/Like";

interface Props {
    children?: React.ReactNode;
    contained?: boolean;
}

export const AppBar = ({ children, contained = false }: Props) => {
    const [showLike, setShowLike] = useState(false);

    const handleLike = () => {
        setShowLike(true);
        setTimeout(() => {
            setShowLike(false);
        }, 1000);
    };

    return (
        <>
            {showLike && <Like />}
            <div
                className={`
              px-4
              z-50 absolute top-0 left-0 right-0 
              flex items-center
              justify-center 
              w-full 
              min-h-16 max-h-16 
            bg-black shadow-sm shadow-neutral-950
            `}
            >
                <div
                    className={`
                w-full
                ${contained && "container"} 
                
              `}
                >
                    <div className="flex w-full h-full bg items-center justify-between">
                        <Button variant="light">
                            <Image
                                alt=""
                                src={"/lightmichiplace.png"}
                                width={171}
                                height={171}
                                className="h-auto w-auto max-h-12 lg:max-h-14 -mb-2"
                                priority
                            />
                        </Button>
                        <Button
                            size="sm"
                            className="bg-white text-black font-bold text-xs"
                            onClick={handleLike}
                        >
                            ALL CATS ARE COOL
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
