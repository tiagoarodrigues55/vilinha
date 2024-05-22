// src/components/WhatsappButton.js

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importa o ícone do WhatsApp
import '../WhatsappButton.css'; // Importa o arquivo CSS para estilização

const WhatsappButton = () => {
  const phoneNumber = "5511916094481"; // Substitua pelo seu número de telefone

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export {WhatsappButton}
