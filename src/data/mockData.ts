
import { Hotel, Room, Reservation } from "../types";

export const hotels: Hotel[] = [
  {
    id: "hotel1",
    name: "Grand Palace Hotel",
    description: "Luxurious 5-star hotel in the heart of the city with excellent views and premium amenities.",
    location: "Centro, São Paulo",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    stars: 5,
    amenities: ["Swimming Pool", "Spa", "Restaurant", "Fitness Center", "Free Wi-Fi"]
  },
  {
    id: "hotel2",
    name: "Coastal Retreat Resort",
    description: "Beautiful beachfront resort offering tranquility and nature-inspired activities.",
    location: "Copacabana, Rio de Janeiro",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    stars: 4,
    amenities: ["Private Beach", "Pool", "Restaurant", "Bar", "Free Wi-Fi"]
  },
  {
    id: "hotel3",
    name: "Mountain View Lodge",
    description: "Peaceful retreat in the mountains with breathtaking views and hiking trails.",
    location: "Gramado, Rio Grande do Sul",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    stars: 4,
    amenities: ["Fireplace", "Restaurant", "Spa", "Hiking Trails", "Free Breakfast"]
  },
  {
    id: "hotel4",
    name: "Urban Business Hotel",
    description: "Modern hotel catering to business travelers with conference facilities and fast internet.",
    location: "Belo Horizonte, Minas Gerais",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    stars: 4,
    amenities: ["Business Center", "Meeting Rooms", "Restaurant", "Gym", "Free Wi-Fi"]
  },
];

export const rooms: Room[] = [
  {
    id: "room1",
    hotelId: "hotel1",
    type: "Deluxe Suite",
    price: 450,
    capacity: 2,
    description: "Spacious suite with king-sized bed and city views",
    available: true,
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    amenities: ["King-sized bed", "Jacuzzi", "Mini-bar", "Room service", "Air conditioning"]
  },
  {
    id: "room2",
    hotelId: "hotel1",
    type: "Standard Double",
    price: 200,
    capacity: 2,
    description: "Comfortable room with double bed and modern amenities",
    available: true,
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    amenities: ["Double bed", "TV", "Mini-fridge", "Coffee maker", "Air conditioning"]
  },
  {
    id: "room3",
    hotelId: "hotel2",
    type: "Ocean View Suite",
    price: 380,
    capacity: 3,
    description: "Luxurious suite with panoramic ocean views",
    available: true,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    amenities: ["King-sized bed", "Private balcony", "Mini-bar", "Room service", "Air conditioning"]
  },
  {
    id: "room4",
    hotelId: "hotel3",
    type: "Mountain Cabin",
    price: 320,
    capacity: 4,
    description: "Cozy cabin with mountain views and fireplace",
    available: true,
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    amenities: ["Queen bed", "Sofa bed", "Fireplace", "Kitchenette", "Heating"]
  },
];

export const reservations: Reservation[] = [];

export const classDiagrams = [
  {
    name: "Hotel",
    attributes: ["id: string", "name: string", "description: string", "location: string", "stars: number", "amenities: string[]"],
    methods: ["getAvailableRooms()", "calculateRating()"]
  },
  {
    name: "Room",
    attributes: ["id: string", "hotelId: string", "type: string", "price: number", "capacity: number", "available: boolean"],
    methods: ["checkAvailability()", "updateStatus()"]
  },
  {
    name: "Guest",
    attributes: ["name: string", "email: string", "phone: string"],
    methods: ["validateContact()"]
  },
  {
    name: "Reservation",
    attributes: ["id: string", "hotelId: string", "roomId: string", "checkInDate: Date", "checkOutDate: Date", "guest: Guest", "status: string"],
    methods: ["calculateTotalPrice()", "cancel()", "confirm()"]
  }
];

// Function to get a hotel by ID
export const getHotelById = (id: string): Hotel | undefined => {
  return hotels.find(hotel => hotel.id === id);
};

// Function to get rooms by hotel ID
export const getRoomsByHotelId = (hotelId: string): Room[] => {
  return rooms.filter(room => room.hotelId === hotelId);
};

// Function to get a room by ID
export const getRoomById = (id: string): Room | undefined => {
  return rooms.find(room => room.id === id);
};

// Function to create a new reservation
export const createReservation = (
  hotelId: string,
  roomId: string,
  checkInDate: Date,
  checkOutDate: Date,
  guest: Guest
): Reservation => {
  const room = getRoomById(roomId);
  if (!room) {
    throw new Error("Room not found");
  }
  
  const nights = Math.ceil(
    (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  
  const totalPrice = room.price * nights;
  
  const reservation: Reservation = {
    id: `res${Date.now()}`,
    hotelId,
    roomId,
    checkInDate,
    checkOutDate,
    guest,
    totalPrice,
    status: 'confirmed',
    createdAt: new Date()
  };
  
  reservations.push(reservation);
  return reservation;
};
