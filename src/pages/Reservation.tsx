
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import RoomDetails from "../components/RoomDetails";
import ReservationForm from "../components/ReservationForm";
import { getHotelById, getRoomsByHotelId, getRoomById } from "../data/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Reservation: React.FC = () => {
  const { hotelId } = useParams<{ hotelId: string }>();
  const hotel = getHotelById(hotelId || "");
  const rooms = hotelId ? getRoomsByHotelId(hotelId) : [];
  
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  
  const selectedRoom = selectedRoomId ? getRoomById(selectedRoomId) : null;
  
  const handleRoomSelect = (roomId: string) => {
    setSelectedRoomId(roomId);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  if (!hotel) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Hotel não encontrado</h2>
          <p>O hotel solicitado não está disponível.</p>
          <Button onClick={() => window.location.href="/"} className="mt-4">
            Voltar para lista de hotéis
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold mb-2">{hotel.name}</h1>
          <p className="text-gray-600 mb-4">{hotel.location}</p>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="h-64 relative">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <p className="mb-4">{hotel.description}</p>
              
              <div className="mb-4">
                <h3 className="font-medium mb-2">Comodidades:</h3>
                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 text-sm py-1 px-3 rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-serif font-bold mb-4">Selecione as Datas</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Check-in</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkInDate ? (
                          format(checkInDate, "PPP", { locale: ptBR })
                        ) : (
                          <span>Selecione a data</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={checkInDate}
                        onSelect={setCheckInDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Check-out</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOutDate ? (
                          format(checkOutDate, "PPP", { locale: ptBR })
                        ) : (
                          <span>Selecione a data</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={checkOutDate}
                        onSelect={setCheckOutDate}
                        initialFocus
                        disabled={(date) =>
                          date < new Date() ||
                          (checkInDate ? date <= checkInDate : false)
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-2xl font-serif font-bold mb-6">Quartos Disponíveis</h2>
        
        <div className="space-y-6 mb-12">
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <RoomDetails
                key={room.id}
                room={room}
                onSelectRoom={handleRoomSelect}
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
              />
            ))
          ) : (
            <p>Não há quartos disponíveis para este hotel.</p>
          )}
        </div>
        
        {selectedRoom && checkInDate && checkOutDate && (
          <div className="mb-12 animate-fade-in">
            <h2 className="text-2xl font-serif font-bold mb-6">Complete sua Reserva</h2>
            <ReservationForm
              hotelId={hotel.id}
              room={selectedRoom}
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Reservation;
