import React from 'react';
import "@fontsource-variable/fredoka";

interface CardProps {
  url: string;
  language?: string
}

const CardReactSeeAll: React.FC<CardProps> = ({
  language,
  url,
}) => {
  return (
    <div className="font-fredoka font-light h-full border border-orange-600/30 rounded-2xl p-5 hover:border-orange-600 hover:border bg-gray-900/60 transition-colors duration-300 flex items-center justify-center text-2xl">
      <a href={url}>See all {language} projects</a>
    </div>
  );
};

export default CardReactSeeAll;

// Estilos globales
const GlobalStyle = `
  .font-fredoka {
    font-family: "Fredoka Variable", sans-serif;
  }
`;

// Puedes agregar esto en tu archivo de estilos global o usar una solución de CSS-in-JS