
import React from 'react';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';
import { Check, MapPin, Star, IndianRupee } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const BookNow = () => {
  // Sample turfs data - in a real app this would come from an API
  const availableTurfs = [
    {
      id: 1,
      name: "Green Valley Turf",
      location: "Delhi, India",
      price: 1200,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      facilities: ["Changing Rooms", "Parking", "Refreshments"]
    },
    {
      id: 2,
      name: "Urban Soccer Field",
      location: "Mumbai, India",
      price: 950,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1542852869-c3bbbeb73b8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      facilities: ["Floodlights", "Parking", "Locker Rooms"]
    },
    {
      id: 3,
      name: "Central Park Field",
      location: "Bangalore, India",
      price: 1500,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1556056504-5c7696baaed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      facilities: ["Equipment Rental", "Cafe", "Showers"]
    },
    {
      id: 4,
      name: "Riverside Turf",
      location: "Chennai, India",
      price: 800,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      facilities: ["Changing Rooms", "Drinking Water", "First Aid"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Book Your Turf</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Browse and book available turfs in your area. All prices are listed in Indian Rupees (₹).</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {availableTurfs.map((turf) => (
            <Card key={turf.id} className="h-full hover:shadow-lg transition-shadow">
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
              
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-xl font-bold">{turf.name}</CardTitle>
                <CardDescription className="flex items-center text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  {turf.location}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-6 pt-0">
                <div className="mt-2">
                  <h4 className="font-medium text-gray-700 mb-2">Facilities:</h4>
                  <ul className="space-y-1">
                    {turf.facilities.map((facility, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex justify-between items-center">
                <div className="font-bold text-blue-600 flex items-center">
                  <IndianRupee className="h-4 w-4 mr-1" />
                  {turf.price}/hr
                </div>
                <Link to={`/book/${turf.id}`}>
                  <button className="bg-blue-600 text-white font-medium px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookNow;
