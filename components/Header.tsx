"use client"

import { UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Menu, Stethoscope, Search, Bell, HelpCircle } from "lucide-react"
import { useNavigation } from "@/lib/context/navigation"

export default function Header() {
  const { setIsMobileNavOpen } = useNavigation()

  return (
    <header className="border-b border-blue-100 bg-white/90 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileNavOpen(true)}
            className="md:hidden text-blue-600 hover:text-blue-700 hover:bg-blue-50"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex items-center">
            <div className="h-8 w-8 rounded-md bg-blue-500 text-white flex items-center justify-center mr-3">
              <Stethoscope className="h-4 w-4" />
            </div>
            <div className="font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent hidden sm:block">
              MediQuery EHR Assistant
            </div>
            <div className="font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent sm:hidden">
              MediQuery
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-400" />
            <input
              type="text"
              placeholder="Search across all patient data..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-blue-100 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white/80 text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 hidden sm:flex"
          >
            <HelpCircle className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 hidden sm:flex"
          >
            <div className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-yellow-400 rounded-full border-2 border-white"></span>
            </div>
          </Button>

          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox:
                  "h-8 w-8 ring-2 ring-blue-100 ring-offset-2 rounded-full transition-shadow hover:ring-blue-200",
              },
            }}
          />
        </div>
      </div>

      {/* Mobile search bar - only visible on small screens */}
      <div className="px-4 pb-3 md:hidden">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-400" />
          <input
            type="text"
            placeholder="Search patient data..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-blue-100 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white/80 text-sm"
          />
        </div>
      </div>
    </header>
  )
}


