
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu, UserPlus, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-blue-600 font-bold text-2xl">
              GetMyTurf
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={navigationMenuTriggerStyle()}>
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Browse</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      <Link to="/location" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">By Location</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Find turfs based on your location
                        </p>
                      </Link>
                      <Link to="/sports" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">By Sport</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Browse facilities for specific sports
                        </p>
                      </Link>
                      <Link to="/featured" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Featured</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Explore our top-rated facilities
                        </p>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/how-it-works" className={navigationMenuTriggerStyle()}>
                    How It Works
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contact" className={navigationMenuTriggerStyle()}>
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            
            {isAuthenticated ? (
              // Logged in state
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hidden md:flex">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      {user?.name.charAt(0).toUpperCase() || "U"}
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/bookings">My Bookings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              // Logged out state
              <>
                <Button variant="ghost" asChild className="hidden md:flex items-center gap-1">
                  <Link to="/login">
                    <LogIn className="h-5 w-5 mr-1" />
                    Login
                  </Link>
                </Button>
                <Button variant="ghost" asChild className="hidden md:flex items-center gap-1 text-green-600 hover:text-green-700">
                  <Link to="/register">
                    <UserPlus className="h-5 w-5 mr-1" />
                    Sign Up
                  </Link>
                </Button>
              </>
            )}
            
            <Button variant="ghost" asChild className="hidden md:flex items-center gap-1 text-green-600 hover:text-green-700">
              <Link to="/register-turf">
                <UserPlus className="h-5 w-5 mr-1" />
                Register Turf
              </Link>
            </Button>
            
            <Button variant="default" asChild className="hidden md:flex">
              <Link to="/book-now">Book Now</Link>
            </Button>
            
            {/* Mobile menu button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>GetMyTurf</SheetTitle>
                  <SheetDescription>
                    Book sports facilities in your city
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4 space-y-4">
                  <SheetClose asChild>
                    <Link to="/" className="block py-2 hover:text-blue-600">Home</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/sports" className="block py-2 hover:text-blue-600">Browse Sports</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/location" className="block py-2 hover:text-blue-600">Browse Locations</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/how-it-works" className="block py-2 hover:text-blue-600">How It Works</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/contact" className="block py-2 hover:text-blue-600">Contact</Link>
                  </SheetClose>
                  
                  <div className="border-t pt-4">
                    {isAuthenticated ? (
                      <>
                        <SheetClose asChild>
                          <Link to="/dashboard" className="block py-2 hover:text-blue-600">Dashboard</Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link to="/profile" className="block py-2 hover:text-blue-600">Profile</Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link to="/bookings" className="block py-2 hover:text-blue-600">My Bookings</Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <button onClick={logout} className="block py-2 w-full text-left hover:text-red-600">Logout</button>
                        </SheetClose>
                      </>
                    ) : (
                      <>
                        <SheetClose asChild>
                          <Link to="/login" className="block py-2 hover:text-blue-600">Login</Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link to="/register" className="block py-2 hover:text-blue-600">Sign Up</Link>
                        </SheetClose>
                      </>
                    )}
                  </div>
                  
                  <div className="pt-4">
                    <SheetClose asChild>
                      <Link to="/book-now">
                        <Button variant="default" className="w-full">Book Now</Button>
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
