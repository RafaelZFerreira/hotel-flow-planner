
import React from "react";

const ProcessFlowDiagram: React.FC = () => {
  return (
    <div>
      <h3 className="text-2xl font-serif font-bold mb-4 text-hotel-blue">
        Fluxo do Processo de Reserva
      </h3>
      
      <div className="mb-6 overflow-x-auto">
        <div className="min-w-[900px] relative py-10">
          {/* Flow line */}
          <div className="absolute h-2 bg-hotel-blue top-1/2 left-0 right-0 transform -translate-y-1/2"></div>
          
          {/* Process Steps */}
          <div className="flex justify-between relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center w-40">
              <div className="bg-hotel-blue text-white rounded-full h-16 w-16 flex items-center justify-center mb-2 z-10">
                1
              </div>
              <div className="bg-white p-3 rounded-md shadow-md text-center h-32 flex items-center">
                <p className="text-sm">
                  Usuário pesquisa e escolhe um hotel disponível
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center w-40">
              <div className="bg-hotel-blue text-white rounded-full h-16 w-16 flex items-center justify-center mb-2 z-10">
                2
              </div>
              <div className="bg-white p-3 rounded-md shadow-md text-center h-32 flex items-center">
                <p className="text-sm">
                  Usuário seleciona datas de check-in e check-out
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center w-40">
              <div className="bg-hotel-blue text-white rounded-full h-16 w-16 flex items-center justify-center mb-2 z-10">
                3
              </div>
              <div className="bg-white p-3 rounded-md shadow-md text-center h-32 flex items-center">
                <p className="text-sm">
                  Sistema mostra quartos disponíveis para as datas selecionadas
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col items-center w-40">
              <div className="bg-hotel-blue text-white rounded-full h-16 w-16 flex items-center justify-center mb-2 z-10">
                4
              </div>
              <div className="bg-white p-3 rounded-md shadow-md text-center h-32 flex items-center">
                <p className="text-sm">
                  Usuário seleciona um quarto e preenche formulário de reserva
                </p>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="flex flex-col items-center w-40">
              <div className="bg-hotel-blue text-white rounded-full h-16 w-16 flex items-center justify-center mb-2 z-10">
                5
              </div>
              <div className="bg-white p-3 rounded-md shadow-md text-center h-32 flex items-center">
                <p className="text-sm">
                  Sistema confirma a reserva e envia detalhes ao usuário
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-md">
        <p className="text-sm text-gray-600">
          Este diagrama ilustra o fluxo principal do processo de reserva de quartos
          de hotel. O processo começa com a pesquisa de hotéis pelo usuário e termina
          com a confirmação da reserva pelo sistema. Cada etapa representa uma interação
          entre o usuário e o sistema, demonstrando como o sistema responde às ações
          do usuário durante o processo de reserva.
        </p>
      </div>
    </div>
  );
};

export default ProcessFlowDiagram;
