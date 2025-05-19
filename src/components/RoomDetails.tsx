
import React from "react";
import { Room } from "../types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RoomDetailsProps {
  room: Room;
  onSelectRoom: (roomId: string) => void;
  checkInDate?: Date;
  checkOutDate?: Date;
}

const RoomDetails: React.FC<RoomDetailsProps> = ({
  room,
  onSelectRoom,
  checkInDate,
  checkOutDate,
}) => {
  const getTotalNights = () => {
    if (!checkInDate || !checkOutDate) return 1;
    
    const diffTime = checkOutDate.getTime() - checkInDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const calculateTotalPrice = () => {
    const nights = getTotalNights();
    return room.price * nights;
  };

  return (
    <Card className="mb-6 overflow-hidden border-l-4 border-hotel-gold">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            src={room.image}
            alt={room.type}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="w-full md:w-2/3 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-serif font-bold">{room.type}</h3>
              <p className="text-sm text-gray-600">
                Capacidade: {room.capacity} {room.capacity > 1 ? "pessoas" : "pessoa"}
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-hotel-blue">
                R$ {room.price}
              </p>
              <p className="text-sm text-gray-600">por noite</p>
            </div>
          </div>

          <p className="text-gray-700 mb-4">{room.description}</p>

          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Comodidades:</h4>
            <div className="flex flex-wrap gap-2">
              {room.amenities.map((amenity, index) => (
                <Badge key={index} variant="outline" className="bg-gray-100">
                  {amenity}
                </Badge>
              ))}
            </div>
          </div>

          {checkInDate && checkOutDate && (
            <div className="mb-4 p-3 bg-gray-50 rounded-md">
              <h4 className="text-sm font-medium mb-1">Resumo da Estadia:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Check-in:</div>
                <div className="font-medium">{checkInDate.toLocaleDateString()}</div>
                <div>Check-out:</div>
                <div className="font-medium">{checkOutDate.toLocaleDateString()}</div>
                <div>Total de noites:</div>
                <div className="font-medium">{getTotalNights()}</div>
                <div>Valor total:</div>
                <div className="font-medium">R$ {calculateTotalPrice()}</div>
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <Button
              onClick={() => onSelectRoom(room.id)}
              className="bg-hotel-blue hover:bg-blue-900 text-white"
            >
              {room.available ? "Selecionar" : "Indisponível"}
              {room.available ? "" : " "}
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default RoomDetails;
