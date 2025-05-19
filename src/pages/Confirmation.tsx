
import React from "react";
import Layout from "../components/Layout";
import ConfirmationComponent from "../components/Confirmation";
import { useParams } from "react-router-dom";
import { reservations } from "../data/mockData";

const Confirmation: React.FC = () => {
  const { reservationId } = useParams<{ reservationId: string }>();
  const reservation = reservations.find((res) => res.id === reservationId);

  if (!reservation) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Reserva não encontrada</h2>
            <p className="mb-4">
              A reserva solicitada não foi encontrada no sistema.
            </p>
            <a
              href="/"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Voltar à página inicial
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <ConfirmationComponent reservation={reservation} />
      </div>
    </Layout>
  );
};

export default Confirmation;
