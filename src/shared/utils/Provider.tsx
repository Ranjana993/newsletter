"use client"
import { NextUIProvider } from "@nextui-org/react"
import { usePathname } from "next/navigation"
import { Toaster } from "react-hot-toast";

interface ProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  const pathname = usePathname()
  return (
    <NextUIProvider>
      {pathname !== "/dashboard/new-email" &&
        pathname !== "/" &&
        pathname !== "/sign-up" &&
        pathname !== "/subscribe" &&
        pathname !== "/success" &&
        pathname !== "/sign-in" ? (
        <div className="w-full flex">
          <div className="w-[290px] h-screen overflow-y-scroll">
            {/* <DashboardSidebar /> */}
            dashboard
          </div>
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </NextUIProvider>
  )
}













