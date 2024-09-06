"use client";

import {
    Avatar,
    Button,
    Card,
    CardBody,
    CardHeader,
    Skeleton,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
    const { data: session, status } = useSession();
    const router = useRouter();

    const handleLogout = () => {
        signOut({ callbackUrl: "/auth/login" });
    };

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/auth/login");
        }
    }, [status, router]);

    if (status === "unauthenticated") {
        return null;
    }
    return (
        (status.match("loading") || status.match("authenticated")) && (
            <>
                <div className="absolute inset-0 flex flex-col w-full h-full justify-center items-center">
                    <Card className="bg-white max-w-lg p-5 shadow-md">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                            {status.match("loading") ? (
                                <Skeleton
                                    className="flex w-full h-8"
                                    style={{ marginBottom: "0.5rem" }}
                                />
                            ) : (
                                <div className="flex flex-col items-center justify-center flex-nowrap space-y-2">
                                    <span className="font-bold text-xl">
                                        You logged in as
                                    </span>
                                    <span className="font-semibold text-large">
                                        {session?.user?.name}
                                    </span>
                                </div>
                            )}
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <div className="flex flex-col justify-center items-center space-y-4">
                                {status.match("loading") ? (
                                    <div>
                                        <Skeleton className="flex rounded-full w-12 h-12" />
                                    </div>
                                ) : (
                                    <Avatar
                                        isBordered
                                        src={
                                            session?.user?.image || "/cat2.png"
                                        }
                                        className="w-32 h-32"
                                    />
                                )}

                                <Button onClick={handleLogout} color="danger" disabled={!status.match("authenticated")}>
                                    log out
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </>
        )
    );
}