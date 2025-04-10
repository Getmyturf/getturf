
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import FeaturedTurfs from "../components/FeaturedTurfs";
import Map from "../components/Map";
import Footer from "../components/Footer";
import { ArrowDown, MapPin, Calendar, CreditCard, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SearchBar />
        
        {/* How it works section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How getTurf Works</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Book your perfect turf in just a few simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: <MapPin className="h-8 w-8 text-turf-600" />,
                  title: "Find Nearby Turfs",
                  description: "Search for available turfs based on your location and preferences."
                },
                {
                  icon: <Calendar className="h-8 w-8 text-turf-600" />,
                  title: "Select Date & Time",
                  description: "Choose your preferred date and time slot for booking."
                },
                {
                  icon: <CreditCard className="h-8 w-8 text-turf-600" />,
                  title: "Make Payment",
                  description: "Secure your booking by making an online payment."
                },
                {
                  icon: <Clock className="h-8 w-8 text-turf-600" />,
                  title: "Enjoy Your Game",
                  description: "Show up at the venue and enjoy your game stress-free."
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="bg-turf-50 p-4 rounded-full mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  
                  {index < 3 && (
                    <div className="hidden md:block absolute translate-x-[80px] translate-y-[30px]">
                      <ArrowDown className="h-8 w-8 text-gray-300 rotate-[-30deg]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <FeaturedTurfs />
        <Map />
        
        {/* CTA Section */}
        <section className="py-16 bg-turf-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Own a Turf? List it on getTurf
            </h2>
            <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-8">
              Reach thousands of players looking for venues like yours. Increase bookings and maximize your turf's potential.
            </p>
            <button className="bg-white text-turf-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg">
              List Your Turf
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
