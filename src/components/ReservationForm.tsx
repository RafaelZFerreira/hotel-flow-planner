
import React, { useState } from "react";
import { Room, Guest } from "../types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { createReservation } from "../data/mockData";

interface ReservationFormProps {
  hotelId: string;
  room: Room;
  checkInDate: Date;
  checkOutDate: Date;
}

const ReservationForm: React.FC<ReservationFormProps> = ({
  hotelId,
  room,
  checkInDate,
  checkOutDate,
}) => {
  const navigate = useNavigate();
  const [guest, setGuest] = useState<Guest>({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Partial<Guest>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGuest((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when typing
    if (errors[name as keyof Guest]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Guest> = {};
    
    if (!guest.name.trim()) {
      newErrors.name = "Nome completo é obrigatório";
    }
    
    if (!guest.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(guest.email)) {
      newErrors.email = "Email inválido";
    }
    
    if (!guest.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    try {
      const reservation = createReservation(
        hotelId,
        room.id,
        checkInDate,
        checkOutDate,
        guest
      );
      
      navigate(`/confirmation/${reservation.id}`);
    } catch (error) {
      console.error("Error creating reservation:", error);
      // Handle error state
    }
  };

  const calculateTotalPrice = () => {
    const nights = Math.ceil(
      (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return room.price * nights;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-serif text-xl font-bold mb-4">Informações do Hóspede</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Nome Completo</Label>
            <Input
              id="name"
              name="name"
              value={guest.name}
              onChange={handleChange}
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={guest.email}
              onChange={handleChange}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              name="phone"
              value={guest.phone}
              onChange={handleChange}
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h4 className="font-medium mb-2">Resumo da Reserva</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Quarto:</span>
              <span className="font-medium">{room.type}</span>
            </div>
            <div className="flex justify-between">
              <span>Check-in:</span>
              <span className="font-medium">{checkInDate.toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Check-out:</span>
              <span className="font-medium">{checkOutDate.toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between border-t pt-2 mt-2">
              <span className="font-medium">Valor Total:</span>
              <span className="font-bold text-hotel-blue">R$ {calculateTotalPrice()}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <Button type="submit" className="w-full bg-hotel-blue hover:bg-blue-900">
            Confirmar Reserva
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
