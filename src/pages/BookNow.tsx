
import React from 'react';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';
import { MapPin, IndianRupee, PlusCircle, Calendar, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BookNow = () => {
  // Sample turfs with relevant details
  const availableTurfs = [
    {
      id: 1,
      name: "Green Valley Cricket Turf",
      location: "Koramangala, Bangalore",
      price: 1200,
      rating: 4.8,
      sport: "Cricket",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      availableSlots: 5
    },
    {
      id: 2,
      name: "Urban Cricket Arena",
      location: "HSR Layout, Bangalore",
      price: 1500,
      rating: 4.6,
      sport: "Cricket",
      image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      availableSlots: 3
    },
    {
      id: 3,
      name: "Victory Volleyball Court",
      location: "Indiranagar, Bangalore",
      price: 900,
      rating: 4.5,
      sport: "Volleyball",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      availableSlots: 7
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

        {availableTurfs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableTurfs.map((turf) => (
              <Card key={turf.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={turf.image} 
                    alt={turf.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {turf.sport}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle>{turf.name}</CardTitle>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{turf.location}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <IndianRupee className="h-4 w-4 text-gray-600 mr-1" />
                      <span className="font-bold text-lg">{turf.price}</span>
                      <span className="text-gray-500 text-sm ml-1">/ hour</span>
                    </div>
                    <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{turf.availableSlots} slots</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-amber-500 mb-4">
                    {"★".repeat(Math.floor(turf.rating))}
                    <span className="text-gray-700 ml-1">({turf.rating})</span>
                  </div>
                </CardContent>
                
                <CardFooter className="border-t bg-gray-50 p-4">
                  <Link to={`/book/${turf.id}`} className="w-full">
                    <Button className="w-full">Book Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="max-w-3xl mx-auto shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <PlusCircle className="h-20 w-20 text-blue-500 mx-auto" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">No Turfs Available Yet</h2>
              <p className="text-gray-600 mb-6">
                We're waiting for turf owners to register their facilities. Be the first to list your cricket or volleyball turf!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/register-turf">
                  <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full">
                    Register Your Turf
                  </button>
                </Link>
                <Link to="/">
                  <button className="bg-gray-100 text-gray-800 font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors w-full">
                    Back to Home
                  </button>
                </Link>
              </div>
              <p className="mt-6 text-sm text-gray-500">
                Are you looking to play? Check back soon as turf owners begin to register their facilities.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BookNow;
