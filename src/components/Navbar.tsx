
import { Search, MapPin, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-turf-600">getTurf</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-turf-600 px-3 py-2 rounded-md text-sm font-medium">
              Find Turfs
            </a>
            <a href="#" className="text-gray-700 hover:text-turf-600 px-3 py-2 rounded-md text-sm font-medium">
              List Your Turf
            </a>
            <a href="#" className="text-gray-700 hover:text-turf-600 px-3 py-2 rounded-md text-sm font-medium">
              How It Works
            </a>
            <Button variant="outline" size="sm" className="ml-4">
              <MapPin className="h-4 w-4 mr-2" />
              Location
            </Button>
            <Button className="bg-turf-600 hover:bg-turf-700 text-white">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-turf-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-turf-600 hover:bg-gray-50"
          >
            Find Turfs
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-turf-600 hover:bg-gray-50"
          >
            List Your Turf
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-turf-600 hover:bg-gray-50"
          >
            How It Works
          </a>
          <div className="flex flex-col space-y-2 mt-4">
            <Button variant="outline" size="sm" className="justify-start">
              <MapPin className="h-4 w-4 mr-2" />
              Location
            </Button>
            <Button className="bg-turf-600 hover:bg-turf-700 text-white justify-start">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
