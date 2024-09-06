
import Image from "next/image";
import { LoginForm } from "@/modules/auth/components/LoginForm";
import { AppBar } from "@/modules/core/components/appBar/AppBar";

export default function Page() {

    return (
        <>
            
            <AppBar contained />

            <div className="flex flex-col lg:flex-row w-full h-full">
                <div
                    className="
                        flex flex-col grow 
                        justify-center items-center 
                        max-h-24 lg:max-h-full 
                        min-h-16 
                        mx-5 sm:mx-16 lg:mx-0
                        mt-16 lg:mt-0
                    "
                >
                    <div className="bg-white rounded-full p-14 hidden lg:flex">
                        <span
                            className="
                                select-none
                                text-center 
                                text-8xl 
                                font-extrabold
                            "
                        >
                            ALL <br /> CATS <br /> ARE <br /> COOL
                        </span>
                    </div>
                </div>

                <div
                    className="
                        flex grow 
                        justify-center place-items-start lg:place-items-center
                        bg-white 
                        mx-5 sm:mx-16 lg:mx-0
                        p-10 rounded-t-3xl lg:rounded-none 
                    "
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.97)" }}
                >
                    <div
                        className="
                            shrink
                            flex 
                            flex-col
                            items-center justify-center 
                            w-full 
                            container 
                            max-w-md md:py-10
                            space-y-2 lg:space-y-5
                        "
                    >
                        <div className="flex flex-col items-center justify-center">
                            <Image
                                alt=""
                                height={100}
                                width={200}
                                src={"/catmichiplace.png"}
                                className="h-auto w-auto max-h-28 md:max-h-64"
                                priority // this is important for the image to load first
                            />
                        </div>

                        <LoginForm />
                    </div>
                </div>
            </div>
        </>
    );
}
