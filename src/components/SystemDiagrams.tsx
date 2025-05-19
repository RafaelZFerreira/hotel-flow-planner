
import React from "react";

const SystemDiagrams: React.FC = () => {
  return (
    <div>
      <h3 className="text-2xl font-serif font-bold mb-6 text-hotel-blue">
        Diagramas de Análise do Sistema
      </h3>
      
      <div className="space-y-8">
        {/* Context Diagram */}
        <div>
          <h4 className="text-xl font-serif font-semibold mb-3">
            Diagrama de Contexto
          </h4>
          <div className="bg-white p-6 rounded-md border">
            <div className="max-w-3xl mx-auto">
              <svg viewBox="0 0 800 400" className="w-full">
                {/* External Entities */}
                <rect x="50" y="150" width="120" height="60" rx="5" fill="#f9f7f0" stroke="#1a365d" strokeWidth="2" />
                <text x="110" y="185" textAnchor="middle" fontSize="14">Hóspede</text>
                
                <rect x="630" y="50" width="120" height="60" rx="5" fill="#f9f7f0" stroke="#1a365d" strokeWidth="2" />
                <text x="690" y="85" textAnchor="middle" fontSize="14">Hotel</text>
                
                <rect x="630" y="250" width="120" height="60" rx="5" fill="#f9f7f0" stroke="#1a365d" strokeWidth="2" />
                <text x="690" y="285" textAnchor="middle" fontSize="14">Administração</text>
                
                {/* System */}
                <circle cx="400" cy="180" r="100" fill="#1a365d" />
                <text x="400" y="170" textAnchor="middle" fontSize="16" fill="white">Sistema de</text>
                <text x="400" y="195" textAnchor="middle" fontSize="16" fill="white">Reservas de</text>
                <text x="400" y="220" textAnchor="middle" fontSize="16" fill="white">Hotéis</text>
                
                {/* Connections */}
                <line x1="170" y1="180" x2="300" y2="180" stroke="#4a5568" strokeWidth="2" />
                <polygon points="295,175 305,180 295,185" fill="#4a5568" />
                <text x="235" y="170" textAnchor="middle" fontSize="12">Solicita reserva</text>
                
                <line x1="300" y1="200" x2="170" y2="200" stroke="#4a5568" strokeWidth="2" />
                <polygon points="175,195 165,200 175,205" fill="#4a5568" />
                <text x="235" y="220" textAnchor="middle" fontSize="12">Confirmação</text>
                
                <line x1="500" y1="140" x2="630" y2="80" stroke="#4a5568" strokeWidth="2" />
                <polygon points="625,85 635,75 620,75" fill="#4a5568" />
                <text x="560" y="95" textAnchor="middle" fontSize="12">Verifica disponibilidade</text>
                
                <line x1="630" y1="100" x2="500" y2="160" stroke="#4a5568" strokeWidth="2" />
                <polygon points="505,155 495,165 510,165" fill="#4a5568" />
                <text x="560" y="145" textAnchor="middle" fontSize="12">Informações dos quartos</text>
                
                <line x1="500" y1="220" x2="630" y2="270" stroke="#4a5568" strokeWidth="2" />
                <polygon points="625,265 635,275 620,275" fill="#4a5568" />
                <text x="560" y="255" textAnchor="middle" fontSize="12">Relatórios</text>
                
                <line x1="630" y1="250" x2="500" y2="200" stroke="#4a5568" strokeWidth="2" />
                <polygon points="505,205 495,195 510,195" fill="#4a5568" />
                <text x="560" y="210" textAnchor="middle" fontSize="12">Gerenciamento</text>
              </svg>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Este diagrama de contexto mostra as interações entre o Sistema de Reservas de Hotéis e as entidades externas:
              Hóspedes, Hotéis e Administração. As setas indicam o fluxo de informações entre o sistema e cada entidade.
            </p>
          </div>
        </div>
        
        {/* Use Case Diagram */}
        <div>
          <h4 className="text-xl font-serif font-semibold mb-3">
            Diagrama de Casos de Uso
          </h4>
          <div className="bg-white p-6 rounded-md border">
            <div className="max-w-3xl mx-auto">
              <svg viewBox="0 0 800 500" className="w-full">
                {/* Actor - Guest */}
                <circle cx="100" cy="150" r="20" fill="#f9f7f0" stroke="#1a365d" strokeWidth="2" />
                <line x1="100" y1="170" x2="100" y2="220" stroke="#1a365d" strokeWidth="2" />
                <line x1="70" y1="190" x2="130" y2="190" stroke="#1a365d" strokeWidth="2" />
                <line x1="100" y1="220" x2="70" y2="260" stroke="#1a365d" strokeWidth="2" />
                <line x1="100" y1="220" x2="130" y2="260" stroke="#1a365d" strokeWidth="2" />
                <text x="100" y="290" textAnchor="middle" fontSize="14">Hóspede</text>
                
                {/* Actor - Admin */}
                <circle cx="100" cy="400" r="20" fill="#f9f7f0" stroke="#1a365d" strokeWidth="2" />
                <line x1="100" y1="420" x2="100" y2="470" stroke="#1a365d" strokeWidth="2" />
                <line x1="70" y1="440" x2="130" y2="440" stroke="#1a365d" strokeWidth="2" />
                <line x1="100" y1="470" x2="70" y2="510" stroke="#1a365d" strokeWidth="2" />
                <line x1="100" y1="470" x2="130" y2="510" stroke="#1a365d" strokeWidth="2" />
                <text x="100" y="540" textAnchor="middle" fontSize="14">Admin</text>
                
                {/* System boundary */}
                <rect x="200" y="50" width="500" height="450" rx="10" fill="none" stroke="#4a5568" strokeWidth="2" strokeDasharray="5,5" />
                <text x="320" y="80" fontSize="16" fontWeight="bold">Sistema de Reservas de Hotéis</text>
                
                {/* Use Cases - Guest */}
                <ellipse cx="350" cy="130" rx="100" ry="30" fill="#1a365d" stroke="#1a365d" strokeWidth="2" />
                <text x="350" y="135" textAnchor="middle" fill="white" fontSize="12">Pesquisar Hotéis</text>
                
                <ellipse cx="350" cy="200" rx="100" ry="30" fill="#1a365d" stroke="#1a365d" strokeWidth="2" />
                <text x="350" y="205" textAnchor="middle" fill="white" fontSize="12">Ver Disponibilidade</text>
                
                <ellipse cx="350" cy="270" rx="100" ry="30" fill="#1a365d" stroke="#1a365d" strokeWidth="2" />
                <text x="350" y="275" textAnchor="middle" fill="white" fontSize="12">Fazer Reserva</text>
                
                <ellipse cx="350" cy="340" rx="100" ry="30" fill="#1a365d" stroke="#1a365d" strokeWidth="2" />
                <text x="350" y="345" textAnchor="middle" fill="white" fontSize="12">Gerenciar Reserva</text>
                
                {/* Use Cases - Admin */}
                <ellipse cx="550" cy="410" rx="100" ry="30" fill="#1a365d" stroke="#1a365d" strokeWidth="2" />
                <text x="550" y="415" textAnchor="middle" fill="white" fontSize="12">Gerenciar Quartos</text>
                
                <ellipse cx="550" cy="340" rx="100" ry="30" fill="#1a365d" stroke="#1a365d" strokeWidth="2" />
                <text x="550" y="345" textAnchor="middle" fill="white" fontSize="12">Ver Relatórios</text>
                
                {/* Connections */}
                <line x1="120" y1="150" x2="250" y2="130" stroke="#4a5568" strokeWidth="1" />
                <line x1="120" y1="170" x2="250" y2="200" stroke="#4a5568" strokeWidth="1" />
                <line x1="120" y1="200" x2="250" y2="270" stroke="#4a5568" strokeWidth="1" />
                <line x1="120" y1="220" x2="250" y2="340" stroke="#4a5568" strokeWidth="1" />
                
                <line x1="120" y1="400" x2="450" y2="410" stroke="#4a5568" strokeWidth="1" />
                <line x1="120" y1="390" x2="450" y2="340" stroke="#4a5568" strokeWidth="1" />
              </svg>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Este diagrama de casos de uso ilustra as diferentes funcionalidades
              que o sistema oferece aos seus usuários. Os hóspedes podem pesquisar hotéis,
              verificar disponibilidade, fazer e gerenciar reservas. Os administradores
              podem gerenciar quartos e visualizar relatórios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemDiagrams;
