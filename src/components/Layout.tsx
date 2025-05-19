
import React from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-hotel-cream">
      <header className="bg-hotel-blue text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-serif font-bold">HotelSystem</h1>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-hotel-gold transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/system-analysis" className="hover:text-hotel-gold transition-colors">
                  Análise de Sistema
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-hotel-blue text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-serif font-bold text-xl mb-2">HotelSystem</h3>
              <p className="text-sm">Sistema de Reservas de Hotéis</p>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-2">Links Rápidos</h4>
              <ul className="text-sm">
                <li className="mb-1"><Link to="/" className="hover:text-hotel-gold transition-colors">Início</Link></li>
                <li className="mb-1"><Link to="/system-analysis" className="hover:text-hotel-gold transition-colors">Análise de Sistema</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} HotelSystem. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
