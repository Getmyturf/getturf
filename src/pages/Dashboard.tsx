
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { CalendarDays, MapPin, Clock, Ticket, CalendarClock, Settings, LogOut } from "lucide-react";

const Dashboard = () => {
  const { user, logout } = useAuth();

  // Sample upcoming bookings
  const upcomingBookings = [
    {
      id: 1,
      turfName: "Green Valley Football Turf",
      sport: "Football",
      date: "April 15, 2025",
      time: "6:00 PM - 7:00 PM",
      location: "Koramangala, Bangalore",
    },
    {
      id: 2,
      turfName: "SportZone Cricket Ground",
      sport: "Cricket",
      date: "April 20, 2025",
      time: "8:00 AM - 10:00 AM",
      location: "Indira Nagar, Bangalore",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* User Profile Card */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-3xl font-bold mx-auto mb-4">
                  {user?.name.charAt(0).toUpperCase() || "U"}
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{user?.name}</h2>
                <p className="text-gray-600">{user?.email}</p>
              </div>
              
              <hr className="my-4" />
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/profile">
                    <Settings className="mr-2 h-4 w-4" /> Account Settings
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/bookings">
                    <Ticket className="mr-2 h-4 w-4" /> My Bookings
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/schedule">
                    <CalendarClock className="mr-2 h-4 w-4" /> My Schedule
                  </Link>
                </Button>
                <Button variant="destructive" className="w-full justify-start" onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </Button>
              </div>
            </div>
          </div>
          
          {/* Main Dashboard Content */}
          <div className="md:w-2/3 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Welcome back, {user?.name}!</CardTitle>
                <CardDescription>Here's a summary of your upcoming turf bookings</CardDescription>
              </CardHeader>
              <CardContent>
                {upcomingBookings.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingBookings.map(booking => (
                      <div key={booking.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg">{booking.turfName}</h3>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {booking.sport}
                          </span>
                        </div>
                        <div className="text-gray-600 space-y-2">
                          <div className="flex items-center">
                            <CalendarDays className="h-4 w-4 mr-2" />
                            <span>{booking.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{booking.time}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{booking.location}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">You don't have any upcoming bookings</p>
                    <Button asChild>
                      <Link to="/book-now">Book a Turf Now</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/bookings">View All Bookings</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Quick Booking</CardTitle>
                <CardDescription>Book a turf for your next game</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button asChild size="lg" className="h-auto py-6">
                  <Link to="/book-now?sport=football">
                    <div className="flex flex-col items-center">
                      <span className="text-lg mb-1">Football</span>
                      <span className="text-xs">120+ turfs available</span>
                    </div>
                  </Link>
                </Button>
                <Button asChild size="lg" className="h-auto py-6">
                  <Link to="/book-now?sport=cricket">
                    <div className="flex flex-col items-center">
                      <span className="text-lg mb-1">Cricket</span>
                      <span className="text-xs">80+ turfs available</span>
                    </div>
                  </Link>
                </Button>
                <Button asChild size="lg" className="h-auto py-6">
                  <Link to="/book-now?sport=badminton">
                    <div className="flex flex-col items-center">
                      <span className="text-lg mb-1">Badminton</span>
                      <span className="text-xs">95+ courts available</span>
                    </div>
                  </Link>
                </Button>
                <Button asChild size="lg" className="h-auto py-6">
                  <Link to="/book-now?sport=tennis">
                    <div className="flex flex-col items-center">
                      <span className="text-lg mb-1">Tennis</span>
                      <span className="text-xs">65+ courts available</span>
                    </div>
                  </Link>
                </Button>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/sports">View All Sports</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
