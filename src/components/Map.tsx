
import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const MapLocation = ({ active, onClick, top, left, name }: { 
  active: boolean;
  onClick: () => void;
  top: string;
  left: string;
  name: string;
}) => {
  return (
    <div 
      className={cn(
        "absolute cursor-pointer group",
        active ? "z-10" : "z-0"
      )}
      style={{ top, left }}
      onClick={onClick}
    >
      <div className={cn(
        "flex items-center justify-center w-6 h-6 rounded-full transition-all duration-200 transform",
        active ? "bg-orange-500 scale-125" : "bg-turf-600 group-hover:scale-110"
      )}>
        <MapPin className="w-4 h-4 text-white" />
      </div>
      <div className={cn(
        "absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-md text-sm whitespace-nowrap opacity-0 transition-opacity duration-200",
        active ? "opacity-100" : "group-hover:opacity-100"
      )}>
        {name}
      </div>
    </div>
  );
};

const Map = () => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  
  const locations = [
    { id: '1', name: 'Koramangala', top: '45%', left: '50%' },
    { id: '2', name: 'HSR Layout', top: '55%', left: '55%' },
    { id: '3', name: 'Indiranagar', top: '40%', left: '60%' },
    { id: '4', name: 'Whitefield', top: '35%', left: '75%' },
    { id: '5', name: 'Electronic City', top: '70%', left: '45%' },
    { id: '6', name: 'Jayanagar', top: '60%', left: '30%' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Browse Turfs by Location</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Find the perfect turf near you from our wide network of sports facilities across the city.
          </p>
        </div>
        
        <div className="relative w-full h-96 md:h-[500px] rounded-xl bg-gray-100 overflow-hidden border border-gray-200">
          {/* This would normally be an actual map integration */}
          <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=12.9716,77.5946&zoom=12&size=1200x800&style=feature:road|color:0xFFFFFF&style=feature:landscape|color:0xF2F2F2&style=feature:poi|color:0xE8F5E9&key=YOUR_API_KEY')] bg-cover bg-center opacity-60"></div>
          
          {locations.map((location) => (
            <MapLocation
              key={location.id}
              active={activeLocation === location.id}
              onClick={() => setActiveLocation(location.id)}
              top={location.top}
              left={location.left}
              name={location.name}
            />
          ))}
          
          <div className="absolute bottom-4 left-4 bg-white py-2 px-4 rounded-lg shadow-md text-sm text-gray-700">
            <div className="font-medium">Showing 42 turfs in Bangalore</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
