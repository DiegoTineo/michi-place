"use client";

import { RHFInput } from "@/modules/core/components/RHF/RHFInput";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Button,
    Divider,
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";
import { signIn } from "next-auth/react";

const InitSetupSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type InitSetupSchemaType = z.infer<typeof InitSetupSchema>;

const defaultValues: InitSetupSchemaType = {
    email: "",
    password: "",
};

export const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [showPopover, setShowPopover] = useState(false);

    useEffect(() => {
        if (showPopover) {
            const timer = setTimeout(() => {
                setShowPopover(false);
            }, 1500); // hide the popover after 1.5 seconds

            return () => clearTimeout(timer); // clear the timer when the component unmounts
        }
    }, [showPopover]);

    const methods = useForm<InitSetupSchemaType>({
        resolver: zodResolver(InitSetupSchema),
        defaultValues,
    });

    const {
        formState: { errors },
        setError,
    } = methods;

    const onSubmit = methods.handleSubmit((data) => {
        signIn("credentials", {
            email: data.email,
            password: data.password,
            callbackUrl: "/",
        });
    });

    const handleGoogleSignIn = async () => {
        setIsLoading(true);
        try {
            await signIn("google", { callbackUrl: "/" });
        } catch (error) {
            setError("root", {
                type: "manual",
                message: "Error when logging in with google",
            });
            console.error("Error signing in with Google", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={onSubmit}
                className="w-full flex flex-col items-center justify-center space-y-3 md:space-y-6 container max-w-md"
            >
                <span className="text-md md:text-xl font-medium text-center">
                    Welcome back, please login
                </span>

                <RHFInput
                    isRequired
                    fullWidth
                    name="email"
                    type="email"
                    label="Email"
                    variant="flat"
                    placeholder="example@email.com"
                    isInvalid={!!errors.email}
                    errorMessage={errors.email?.message}
                />

                <RHFInput
                    isRequired
                    fullWidth
                    name="password"
                    type="password"
                    label="Password"
                    variant="flat"
                    placeholder="********"
                    isInvalid={!!errors.password}
                    errorMessage={errors.password?.message}
                />

                <div className="flex space-x-3 w-full justify-center">
                    <Button
                        fullWidth
                        disabled={isLoading}
                        className="bg-white  border-1"
                    >
                        Singup
                    </Button>
                    <Button
                        fullWidth
                        disabled={isLoading}
                        type="submit"
                        className="bg-black text-white"
                    >
                        Login
                    </Button>
                </div>

                <div className="flex w-full justify-center items-center space-x-4">
                    <Divider orientation="horizontal" className="max-w-24" />
                    <span className="text-xs">Or</span>
                    <Divider orientation="horizontal" className="max-w-24" />
                </div>
                <Button
                    disabled={isLoading}
                    onClick={() => handleGoogleSignIn()}
                    fullWidth
                    startContent={<FcGoogle />}
                    className="
                        bg-white border-1"
                >
                    Login with Google
                </Button>

                <Popover
                    placement="bottom"
                    showArrow={true}
                    isOpen={showPopover}
                >
                    <PopoverTrigger>
                        <div
                            className="text-blue-500 p-1 hover:opacity-80 cursor-pointer"
                            onClick={() => setShowPopover(true)}
                        >
                            Forgot my password
                        </div>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="px-1 py-2">
                            <div className="text-tiny">
                                This is just a test application 😉
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </form>
        </FormProvider>
    );
};
