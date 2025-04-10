
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-turf-600 to-turf-500">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554062614-6da4e84e8a2b?q=80&w=1000')] bg-cover bg-center opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="text-center md:max-w-3xl md:mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Find <span className="text-orange-500">Perfect Turf</span> for Your Game
          </h1>
          <p className="mt-6 text-xl text-white opacity-90">
            Book football fields, cricket grounds, and multi-sport turfs near you. 
            Join thousands of players finding their ideal playing space.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button className="text-turf-700 bg-white hover:bg-gray-100 text-lg px-8 py-6 h-auto">
              Find Nearby Turfs
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
              How It Works
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
