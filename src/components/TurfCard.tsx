
import { Star, MapPin, Calendar, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TurfCardProps {
  id: string;
  name: string;
  image: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
  sportTypes: string[];
  featured?: boolean;
}

const TurfCard = ({ 
  name, 
  image, 
  location, 
  rating, 
  reviewCount, 
  price, 
  sportTypes,
  featured = false 
}: TurfCardProps) => {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow ${featured ? 'border-2 border-orange-500' : ''}`}>
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        {featured && (
          <Badge className="absolute top-2 right-2 bg-orange-500">
            Featured
          </Badge>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium ml-1">{rating}</span>
            <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
          </div>
        </div>
        
        <div className="flex items-center mt-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-1 text-gray-400" />
          <span>{location}</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-3">
          {sportTypes.map((sport, index) => (
            <Badge key={index} variant="outline" className="bg-gray-50 text-gray-700 font-normal">
              {sport}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="text-turf-600 font-semibold">
            ₹{price}<span className="text-gray-500 font-normal text-sm">/hour</span>
          </div>
          <Button className="bg-turf-600 hover:bg-turf-700 text-white">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TurfCard;
