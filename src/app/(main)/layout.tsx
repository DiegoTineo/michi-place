import ProtectedLayout from "@/modules/auth/layouts/protectedLayout";
import { AppBar } from "@/modules/core/components/appBar/AppBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="bg-red fixed inset-0 overflow-auto bg-cover bg-center bg-repeat-y"
            style={{
                backgroundImage: "url('../background.jpg')",
            }}
        >
            {/* <div> */}
                {/* <ProtectedLayout> */}
                    <AppBar contained />
                    {children}
                {/* </ProtectedLayout> */}
            {/* </div> */}
        </div>
    );
}
