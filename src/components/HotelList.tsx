
import React from "react";
import { hotels } from "../data/mockData";
import HotelCard from "./HotelCard";

const HotelList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-serif font-bold text-center mb-8 text-hotel-blue">
        Hotéis Disponíveis
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
