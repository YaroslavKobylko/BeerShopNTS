import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Beer } from './types';
import './BeerCard.css';

interface BeerCardProps {
  beer: Beer;
}

const BeerCard: React.FC<BeerCardProps> = ({ beer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="beer-card">
      <div className="beer-picture">
        <img src={beer.image_url} alt={beer.name} />
      </div>
      <div className="beer-details">
        <h3>{beer.name}</h3>
        <p>ABV: {beer.abv}%</p>
        <div className="tagline-section">
          <p className={isExpanded ? 'expanded' : 'collapsed'} onClick={handleToggleExpand}>
            {beer.tagline}
          </p>
        </div>
        {isExpanded && (
          <div>
            <p>Description: {beer.description}</p>
          </div>
        )}
        <Link to={`/beer/${beer.id}`} className="read-more-button">
            Read more
        </Link>
      </div>
    </div>
  );
};

export default BeerCard;