
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SearchBar = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 -mt-10 relative z-20 max-w-5xl mx-auto mb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="font-medium text-sm flex items-center gap-2">
            <MapPin className="h-4 w-4 text-turf-600" />
            Location
          </label>
          <Input 
            placeholder="Enter your location" 
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <label className="font-medium text-sm flex items-center gap-2">
            <Search className="h-4 w-4 text-turf-600" />
            Sport Type
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select sport" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="football">Football</SelectItem>
              <SelectItem value="cricket">Cricket</SelectItem>
              <SelectItem value="basketball">Basketball</SelectItem>
              <SelectItem value="tennis">Tennis</SelectItem>
              <SelectItem value="multisport">Multi-sport</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="font-medium text-sm flex items-center gap-2">
            <Calendar className="h-4 w-4 text-turf-600" />
            Date & Time
          </label>
          <Input type="datetime-local" className="w-full" />
        </div>
        
        <div className="space-y-2">
          <label className="font-medium text-sm flex items-center gap-2">
            <Users className="h-4 w-4 text-turf-600" />
            Players
          </label>
          <div className="flex items-center gap-2">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Players" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-5">1-5</SelectItem>
                <SelectItem value="6-10">6-10</SelectItem>
                <SelectItem value="11-15">11-15</SelectItem>
                <SelectItem value="16+">16+</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-turf-600 hover:bg-turf-700 text-white min-w-20">Search</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
