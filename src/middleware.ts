import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

const authMiddleware = withAuth(
    function onSuccess(req) {
        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ token }) => token != null,
        },
        pages: {
            signIn: "/auth/login",
        },
    }
);

export default function middleware(req: NextRequest) {
    // return (authMiddleware as any)(req);
    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/auth/login"],
};

