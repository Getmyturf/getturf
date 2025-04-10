
import TurfCard from "./TurfCard";
import { ChevronRight } from "lucide-react";

const FEATURED_TURFS = [
  {
    id: "1",
    name: "Urban Kicks Turf",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1000",
    location: "Koramangala, Bangalore",
    rating: 4.8,
    reviewCount: 124,
    price: 1200,
    sportTypes: ["Football", "Cricket"],
    featured: true,
  },
  {
    id: "2",
    name: "Green Valley Arena",
    image: "https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?q=80&w=1000",
    location: "HSR Layout, Bangalore",
    rating: 4.6,
    reviewCount: 98,
    price: 1000,
    sportTypes: ["Football", "Tennis"],
    featured: true,
  },
  {
    id: "3",
    name: "Sports City Complex",
    image: "https://plus.unsplash.com/premium_photo-1663013729768-8fcfe4cda554?q=80&w=1000",
    location: "Whitefield, Bangalore",
    rating: 4.5,
    reviewCount: 87,
    price: 1500,
    sportTypes: ["Cricket", "Football", "Basketball"],
    featured: true,
  },
  {
    id: "4",
    name: "Galaxy Sports Arena",
    image: "https://images.unsplash.com/photo-1464220424798-10e1a51ebd49?q=80&w=1000",
    location: "Indiranagar, Bangalore",
    rating: 4.7,
    reviewCount: 112,
    price: 1300,
    sportTypes: ["Football", "Futsal"],
    featured: false,
  },
];

const FeaturedTurfs = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Turfs</h2>
          <a href="#" className="text-turf-600 font-medium flex items-center hover:text-turf-700">
            View all <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_TURFS.map((turf) => (
            <TurfCard
              key={turf.id}
              id={turf.id}
              name={turf.name}
              image={turf.image}
              location={turf.location}
              rating={turf.rating}
              reviewCount={turf.reviewCount}
              price={turf.price}
              sportTypes={turf.sportTypes}
              featured={turf.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTurfs;
