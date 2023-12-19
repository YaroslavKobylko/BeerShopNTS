import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Beer } from './types';
import './BeerPage.css';
import Header from './Header';

const BeerPage: React.FC<{ random?: boolean }> = ({ random }) => {
  const { id } = useParams<{ id: string }>();
  const [beer, setBeer] = useState<Beer | null>(null);

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        let endpoint = `https://api.punkapi.com/v2/beers/${id}`;
        if (random) {
          endpoint = 'https://api.punkapi.com/v2/beers/random';
        }

        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Beer[] = await response.json();

        console.log('Data:', data);

        const selectedBeer = data[0];
        setBeer(selectedBeer);
      } catch (error) {
        console.error('Error fetching beer:', error);
      }
    };

    fetchBeer();
  }, [id, random]);

  if (!beer) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="beer-details-page">
        <div className="beer-details-container">
          <div className="beer-image-container">
            <img className="beer-image-page" src={beer.image_url} alt={beer.name} />
          </div>
          <div className="beer-text-container">
            <h1 className="beer-name-page">{beer.name}</h1>
            <p className="beer-description-page">Description: {beer.description}</p>
            <p className="beer-info-page">First Brewed: {beer.first_brewed}</p>
            <p className="beer-info-page">ABV: {beer.abv}</p>
            <p className="beer-info-page">IBU: {beer.ibu}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerPage;