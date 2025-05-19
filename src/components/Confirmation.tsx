
import React from "react";
import { Reservation } from "../types";
import { getHotelById, getRoomById } from "../data/mockData";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface ConfirmationProps {
  reservation: Reservation;
}

const Confirmation: React.FC<ConfirmationProps> = ({ reservation }) => {
  const hotel = getHotelById(reservation.hotelId);
  const room = getRoomById(reservation.roomId);

  if (!hotel || !room) {
    return <div>Dados da reserva não encontrados.</div>;
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="bg-green-50 flex flex-col items-center py-6">
        <CheckCircle className="h-16 w-16 text-green-500 mb-2" />
        <h2 className="text-2xl font-serif font-bold text-center">Reserva Confirmada!</h2>
        <p className="text-gray-500">
          Código da Reserva: <span className="font-bold">{reservation.id}</span>
        </p>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="mb-6">
          <h3 className="font-serif text-xl font-bold mb-2">Detalhes da Reserva</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500 text-sm">Hotel</p>
              <p className="font-medium">{hotel.name}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Quarto</p>
              <p className="font-medium">{room.type}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Check-in</p>
              <p className="font-medium">
                {reservation.checkInDate.toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Check-out</p>
              <p className="font-medium">
                {reservation.checkOutDate.toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-serif text-xl font-bold mb-2">Informações do Hóspede</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500 text-sm">Nome</p>
              <p className="font-medium">{reservation.guest.name}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p className="font-medium">{reservation.guest.email}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Telefone</p>
              <p className="font-medium">{reservation.guest.phone}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <div className="flex justify-between items-center">
            <span className="font-medium">Valor Total:</span>
            <span className="font-bold text-xl text-hotel-blue">
              R$ {reservation.totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
        
        <div className="text-center">
          <Button onClick={() => window.print()} variant="outline" className="mr-2">
            Imprimir Reserva
          </Button>
          <Button onClick={() => window.location.href="/"} className="bg-hotel-blue hover:bg-blue-900">
            Voltar ao Início
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Confirmation;
