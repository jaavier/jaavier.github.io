import React from 'react';
import "@fontsource-variable/fredoka";
import classNames from 'classnames';

interface CardProps {
  url: string;
  path: string;
  description: string;
  title: string;
  lang?: string;
  showIcon?: boolean;
}

const CardReact: React.FC<CardProps> = ({
  lang = "en",
  description,
  path,
  title,
  showIcon = true,
  url
}) => {
  const sanitizedDescription = description.replace(/<br \/>/g, "");

  return (
    <div className="border border-orange-600/30 rounded-ee-xl rounded-ss-xl p-5 hover:border-orange-600 hover:border bg-gray-900/60 transition-colors duration-300">
      <div className="flex flex-col space-y-2">
        <div className="font-bold text-xl flex gap-2 items-center">
          <div
            className={classNames('h-8 w-8 rounded-md', { 'hidden': !showIcon })}
            style={{ background: `url(/assets/${path}.svg)` }}
          />
          <div className="py-2 font-fredoka font-normal">
            {title}
          </div>
        </div>
        <div className="font-fredoka h-28">
          {sanitizedDescription}
        </div>
        <a href={url} className="text-right text-orange-600 flex justify-end">
          View on GitHub &nbsp;
          <span className="-rotate-45">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

export default CardReact;

// Estilos globales