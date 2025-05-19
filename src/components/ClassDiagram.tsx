
import React from "react";
import { classDiagrams } from "../data/mockData";

const ClassDiagram: React.FC = () => {
  return (
    <div>
      <h3 className="text-2xl font-serif font-bold mb-4 text-hotel-blue">
        Diagrama de Classes
      </h3>
      
      <div className="overflow-x-auto">
        <div className="min-w-[900px] grid grid-cols-2 lg:grid-cols-4 gap-4">
          {classDiagrams.map((classInfo, index) => (
            <div
              key={index}
              className="border rounded-md overflow-hidden bg-white"
            >
              <div className="bg-hotel-blue text-white p-3 text-center font-serif font-bold">
                {classInfo.name}
              </div>
              
              <div className="p-3 border-b">
                <h4 className="font-medium mb-1 text-sm">Atributos</h4>
                <ul className="text-sm pl-4">
                  {classInfo.attributes.map((attr, idx) => (
                    <li key={idx} className="list-disc text-gray-700 mb-1">
                      {attr}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-3">
                <h4 className="font-medium mb-1 text-sm">Métodos</h4>
                <ul className="text-sm pl-4">
                  {classInfo.methods.map((method, idx) => (
                    <li key={idx} className="list-disc text-gray-700 mb-1">
                      {method}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-md">
        <p className="text-sm text-gray-600">
          Este diagrama de classes mostra as principais entidades do sistema de reservas 
          de hotéis e suas relações. A classe <strong>Hotel</strong> contém informações
          sobre os hotéis disponíveis. A classe <strong>Room</strong> armazena detalhes
          dos quartos de cada hotel. A classe <strong>Guest</strong> representa os
          hóspedes e suas informações de contato. A classe <strong>Reservation</strong>
          gerencia as reservas feitas pelos usuários.
        </p>
      </div>
    </div>
  );
};

export default ClassDiagram;
