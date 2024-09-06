"use client"

import React from "react";
import { useFormContext } from "react-hook-form";
import { Input, InputProps } from "@nextui-org/react";

interface Props {
    name: string;
}

type ExtendedProps = Props & InputProps;

export const RHFInput = ({ name, ...others }: ExtendedProps) => {
    const { register } = useFormContext();
    return <Input {...register(name)} {...others} />;
};
