"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import React from "react";

interface Props {
    children: React.ReactNode;
}
export const MainProvider = ({ children }: Props) => {
    return (
      <>
          <NextUIProvider>
            <SessionProvider>
              {children}
            </SessionProvider>
         </NextUIProvider>
        </>
    );
};
