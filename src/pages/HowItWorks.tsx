
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Search, CalendarIcon, FootballIcon, Clock, CreditCard, Users } from 'lucide-react';

const HowItWorks = () => {
  // Steps to book a turf
  const bookingSteps = [
    {
      icon: <Search className="h-10 w-10 text-blue-600" />,
      title: "Find a Turf",
      description: "Search for turfs based on your location, sport type, and availability. Filter results based on your preferences.",
      details: [
        "Enter your location or use current location",
        "Choose your preferred sport type",
        "Filter by price, ratings, and facilities"
      ]
    },
    {
      icon: <CalendarIcon className="h-10 w-10 text-blue-600" />,
      title: "Select Date & Time",
      description: "Choose the date and time slot that works best for you. View availability in real-time.",
      details: [
        "View availability calendar",
        "Pick your preferred date",
        "Select from available time slots"
      ]
    },
    {
      icon: <CreditCard className="h-10 w-10 text-blue-600" />,
      title: "Complete Payment",
      description: "Secure your booking by completing the payment process. Multiple payment options available.",
      details: [
        "Credit/Debit cards accepted",
        "UPI payment options",
        "Secure payment gateway"
      ]
    },
    {
      icon: <FootballIcon className="h-10 w-10 text-blue-600" />,
      title: "Play & Enjoy",
      description: "Arrive at the venue, show your booking confirmation, and start playing!",
      details: [
        "Receive booking confirmation via email/SMS",
        "Get directions to the venue",
        "Enjoy your game!"
      ]
    }
  ];

  // Benefits of using GetMyTurf
  const benefits = [
    {
      title: "Hassle-free Booking",
      description: "Book your preferred turf in just a few clicks without any phone calls or visits."
    },
    {
      title: "Real-time Availability",
      description: "Check real-time availability of turfs and book instantly."
    },
    {
      title: "Verified Venues",
      description: "All venues on our platform are verified to ensure quality and authenticity."
    },
    {
      title: "Secure Payments",
      description: "Make secure payments online with multiple payment options."
    },
    {
      title: "Instant Confirmation",
      description: "Receive instant booking confirmation via email and SMS."
    },
    {
      title: "Customer Support",
      description: "24/7 customer support to assist you with any queries or issues."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">How GetMyTurf Works</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Find, book, and play at the best sports facilities near you in just a few simple steps.</p>
        </div>

        {/* Booking Process */}
        <div className="mb-20">
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
            <div className="space-y-16 relative">
              {bookingSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:text-left md:pl-12'}`}>
                    <Card className="relative h-full">
                      <CardContent className="p-6">
                        <div className={`flex flex-col items-center md:items-${index % 2 === 0 ? 'end' : 'start'}`}>
                          <div className="mb-4">{step.icon}</div>
                          <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                          <p className="text-gray-600 mb-4">{step.description}</p>
                          <ul className={`space-y-2 text-left ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <Check className={`h-5 w-5 text-green-500 ${index % 2 === 0 ? 'md:order-2' : ''}`} />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2 md:pl-12' : 'md:pr-12'}`}>
                    {/* This div is intentionally empty for layout purposes */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose GetMyTurf?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* For Turf Owners */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">Are You a Turf Owner?</h2>
              <p className="text-xl mb-6">
                List your sports facility on GetMyTurf and reach thousands of sports enthusiasts in your area. It's free to get started!
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="h-6 w-6 text-green-400 mr-2" />
                  <span>Increase visibility and bookings</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-6 w-6 text-green-400 mr-2" />
                  <span>Manage your schedule efficiently</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-6 w-6 text-green-400 mr-2" />
                  <span>Receive payments securely</span>
                </li>
              </ul>
              <a 
                href="/register-turf" 
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
              >
                Register Your Turf
              </a>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white/10 p-6 rounded-lg">
                <Users className="h-20 w-20 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom icon component for Football
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

// Custom icon component for Calendar
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

export default HowItWorks;
