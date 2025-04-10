
import React from 'react';
import Navbar from '@/components/Navbar';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Search, MapPin, Star, Filter, ChevronRight, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Featured turfs data (now empty to allow turf owners to add their own)
  const featuredTurfs = [
    {
      id: 1,
      name: "Green Valley Turf",
      location: "Delhi, India",
      price: 1200,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Urban Soccer Field",
      location: "Mumbai, India",
      price: 950,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1542852869-c3bbbeb73b8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Central Park Field",
      location: "Bangalore, India",
      price: 1500,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1556056504-5c7696baaed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Riverside Turf",
      location: "Chennai, India",
      price: 800,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Nearby locations
  const nearbyLocations = [
    { id: 1, name: "Delhi", count: 24 },
    { id: 2, name: "Mumbai", count: 18 },
    { id: 3, name: "Bangalore", count: 12 },
    { id: 4, name: "Chennai", count: 8 },
    { id: 5, name: "Hyderabad", count: 5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Find Your Perfect Turf</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">Discover and book the best sports facilities near you</p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-lg p-2 flex items-center shadow-lg max-w-2xl mx-auto">
              <div className="flex-1 flex items-center bg-gray-100 rounded-l-md px-4 py-3">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="bg-transparent outline-none w-full text-gray-800"
                />
              </div>
              <div className="px-4 py-3 border-l border-gray-200">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <button className="bg-blue-600 text-white rounded-r-md px-6 py-3 font-medium hover:bg-blue-700 transition-colors flex items-center">
                <Search className="h-5 w-5 mr-2" />
                <span>Search</span>
              </button>
            </div>

            {/* Turf Owner CTA */}
            <div className="mt-8">
              <Link to="/register-turf" className="inline-flex items-center text-blue-100 hover:text-white">
                <UserPlus className="h-5 w-5 mr-2" />
                <span>Are you a turf owner? Register your facility here</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Turfs Carousel */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Featured Turfs</h2>
          <Link to="/featured" className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
            <span>View all</span>
            <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent>
            {featuredTurfs.map((turf) => (
              <CarouselItem key={turf.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={turf.image} 
                      alt={turf.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-white p-1 rounded-md flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium ml-1">{turf.rating}</span>
                    </div>
                  </div>
                  
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-lg font-bold">{turf.name}</CardTitle>
                    <CardDescription className="flex items-center text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {turf.location}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <span className="font-bold text-blue-600 flex items-center">
                      <IndianRupee className="h-4 w-4 mr-1" />
                      {turf.price}/hr
                    </span>
                    <Link to="/book-now">
                      <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700 transition-colors">
                        Book Now
                      </button>
                    </Link>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static w-10 h-10 mr-2" />
            <CarouselNext className="relative static w-10 h-10 ml-2" />
          </div>
        </Carousel>
      </div>

      {/* Browse by Location */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Browse by Location</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {nearbyLocations.map(location => (
              <Link key={location.id} to={`/location/${location.name.toLowerCase()}`}>
                <Card className="hover:shadow-md transition-shadow hover:border-blue-200 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <MapPin className="h-8 w-8 text-blue-600 mb-3" />
                      <h3 className="font-bold text-lg mb-1">{location.name}</h3>
                      <p className="text-gray-500">{location.count} turfs</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">How It Works</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Find a Turf</h3>
            <p className="text-gray-600">Search for turfs based on your location, availability, and preferences.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CalendarIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Book a Slot</h3>
            <p className="text-gray-600">Choose your preferred time slot and make a reservation instantly.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FootballIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Play & Enjoy</h3>
            <p className="text-gray-600">Arrive at the venue, show your booking confirmation, and start playing!</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Turf?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">Join thousands of sports enthusiasts who find and book turfs through our platform every day.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link to="/book-now">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors w-full md:w-auto">
                Book a Turf
              </button>
            </Link>
            <Link to="/register-turf">
              <button className="bg-transparent text-white border border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors w-full md:w-auto mt-4 md:mt-0">
                Register Your Turf
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GetMyTurf</h3>
              <p className="text-gray-400">The easiest way to find and book sports facilities near you.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/featured" className="text-gray-400 hover:text-white transition-colors">Search Turfs</Link></li>
                <li><Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <TwitterIcon className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} GetMyTurf. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Custom icons
const CalendarIcon = (props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
};

const FootballIcon = (props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      <path d="M2 12h20"></path>
    </svg>
  );
};

const FacebookIcon = (props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
};

const TwitterIcon = (props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  );
};

const InstagramIcon = (props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
};

export default Index;
