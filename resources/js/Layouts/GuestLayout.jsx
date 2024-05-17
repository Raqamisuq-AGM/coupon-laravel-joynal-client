import { init } from "@/Plugins/template/app.js";
import { useEffect } from "react";
export default function Guest({ children }) {
    useEffect(() => {
        init();
    }, []);
    return (
        <div className="flex min-h-screen w-full items-center justify-center">
        {/* Main Content Starts */}
        <main className="container flex-grow p-4 sm:p-6">
            {children}
        </main>
        {/* Main Content Ends */}
      </div>
    );
}
