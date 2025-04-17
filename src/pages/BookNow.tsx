
import React from 'react';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';
import { MapPin, IndianRupee, PlusCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BookNow = () => {
  // Empty array for turfs - will be populated by turf owners in the future
  const availableTurfs = [];

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
            {/* Turf cards will be displayed here when added by owners */}
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
