
import React from "react";
import Layout from "../components/Layout";
import SystemDiagrams from "../components/SystemDiagrams";
import ClassDiagram from "../components/ClassDiagram";
import ProcessFlowDiagram from "../components/ProcessFlowDiagram";

const SystemAnalysis: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-serif font-bold mb-8 text-hotel-blue text-center">
          Análise de Sistemas - Sistema de Reservas de Hotéis
        </h1>
        
        <div className="mb-12 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-serif font-bold mb-4 text-hotel-blue">
            Visão Geral do Sistema
          </h2>
          <p className="mb-4">
            O Sistema de Reservas de Hotéis é uma aplicação web projetada para facilitar 
            o processo de reserva de quartos de hotel. O sistema permite que os usuários 
            pesquisem hotéis disponíveis, visualizem informações detalhadas sobre os quartos, 
            selecionem datas de check-in e check-out, e façam reservas.
          </p>
          <p>
            A análise de sistemas realizada para este projeto incluiu a criação de diagramas 
            que representam o funcionamento do sistema, seus componentes principais e os fluxos 
            de processos. Estes diagramas são ferramentas visuais que ajudam a entender como 
            o sistema opera e interage com seus usuários e outras entidades.
          </p>
        </div>
        
        <div className="mb-12 p-6 bg-white rounded-lg shadow-md">
          <SystemDiagrams />
        </div>
        
        <div className="mb-12 p-6 bg-white rounded-lg shadow-md">
          <ClassDiagram />
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-md">
          <ProcessFlowDiagram />
        </div>
      </div>
    </Layout>
  );
};

export default SystemAnalysis;
