
export interface Hotel {
  id: string;
  name: string;
  description: string;
  location: string;
  image: string;
  stars: number;
  amenities: string[];
}

export interface Room {
  id: string;
  hotelId: string;
  type: string;
  price: number;
  capacity: number;
  description: string;
  available: boolean;
  image: string;
  amenities: string[];
}

export interface Guest {
  name: string;
  email: string;
  phone: string;
}

export interface Reservation {
  id: string;
  hotelId: string;
  roomId: string;
  checkInDate: Date;
  checkOutDate: Date;
  guest: Guest;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}

export interface ClassDiagram {
  name: string;
  attributes: string[];
  methods: string[];
}
