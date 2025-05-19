
import React from "react";
import Layout from "../components/Layout";
import HotelList from "../components/HotelList";

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="bg-hotel-cream">
        {/* Hero Section */}
        <section className="relative bg-hotel-blue text-white py-16">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 800 800"
              preserveAspectRatio="none"
            >
              <g opacity="0.3">
                <path
                  fill="#FFFFFF"
                  d="M769.318 0H0v769.318h769.318z"
                  transform="rotate(45 384.659 384.659)"
                />
              </g>
            </svg>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Sistema de Reservas de Hotéis
              </h1>
              <p className="text-xl mb-8">
                Uma solução completa para gerenciamento de reservas hoteleiras
              </p>
              <div className="flex justify-center">
                <a
                  href="#hotels"
                  className="bg-hotel-gold text-hotel-blue font-medium px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors"
                >
                  Ver Hotéis Disponíveis
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Hotels Section */}
        <section id="hotels" className="py-12">
          <HotelList />
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-center mb-12 text-hotel-blue">
              Recursos do Sistema
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-hotel-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">Pesquisa Inteligente</h3>
                <p className="text-gray-600">
                  Encontre rapidamente o hotel ideal com base em localização,
                  preço e comodidades.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-hotel-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">Reservas Simplificadas</h3>
                <p className="text-gray-600">
                  Processo de reserva em poucos passos, com seleção de datas e
                  informações do hóspede.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-hotel-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">Confirmação Imediata</h3>
                <p className="text-gray-600">
                  Receba confirmação instantânea da sua reserva com todos os
                  detalhes relevantes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
