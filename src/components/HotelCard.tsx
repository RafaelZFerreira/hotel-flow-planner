
import React from "react";
import { Hotel } from "../types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  const navigate = useNavigate();
  
  const renderStars = (count: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${
            index < count ? "text-yellow-400" : "text-gray-300"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      ));
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-4 flex-grow">
        <div className="flex items-center mb-2">
          {renderStars(hotel.stars)}
        </div>
        <h3 className="text-xl font-serif font-bold mb-2">{hotel.name}</h3>
        <p className="text-hotel-gray mb-2 text-sm">{hotel.location}</p>
        <p className="text-gray-600 text-sm line-clamp-3">{hotel.description}</p>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-1">Comodidades:</h4>
          <div className="flex flex-wrap gap-1">
            {hotel.amenities.slice(0, 3).map((amenity, index) => (
              <span key={index} className="text-xs bg-gray-100 py-1 px-2 rounded">
                {amenity}
              </span>
            ))}
            {hotel.amenities.length > 3 && (
              <span className="text-xs bg-gray-100 py-1 px-2 rounded">
                +{hotel.amenities.length - 3}
              </span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0">
        <Button
          onClick={() => navigate(`/reservation/${hotel.id}`)}
          className="w-full bg-hotel-blue hover:bg-blue-900 text-white"
        >
          Ver Quartos e Reservar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HotelCard;
