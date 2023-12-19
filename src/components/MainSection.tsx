import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BeerCard from './BeerCard';
import { Beer } from './types';
import { BeerTopic, LR } from './images';
import './MainSection.css';

interface SurpriseBeer extends Beer {
  random: boolean;
}

const MainSection: React.FC = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [randomBeerId, setRandomBeerId] = useState<number | null>(null);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await fetch('https://api.punkapi.com/v2/beers');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Beer[] = await response.json();

        const limitedBeers = data.slice(0, 23);

        const surpriseBeer: SurpriseBeer = {
          id: Math.floor(Math.random() * 23) + 1,
          name: 'Surprise Beer',
          image_url: LR,
          abv: 100,
          tagline: 'Something special!',
          first_brewed: '01/2023',
          description: 'A mysterious beer',
          ibu: 30,
          random: true,
        };

        const allBeers: Beer[] = [...limitedBeers, surpriseBeer];
        const sortedBeers = allBeers.sort((a, b) => a.abv - b.abv);

        setBeers(sortedBeers);

        const randomBeer = sortedBeers.find((beer) => beer.random === true);
        if (randomBeer) {
          setRandomBeerId(randomBeer.id);
        }
      } catch (error) {
        console.error('Error fetching beers:', error);
      }
    };

    fetchBeers();
  }, []);
  
  return (
    <div className="main-section" id="topofpage">
      <div className='topic'>
        <div className="left-section">
          <h2>Modern Ukrainian brewery</h2>
          <p>
          We are sure that you will find something close to you, no matter what you like - a classic blanche or a mango milkshake, a strong stout or a light berliner. Even if you like sports, we have something for you.
          </p>
        </div>
        <div className="right-section">
          <img className="imgright" src={BeerTopic} alt="Beer" />
        </div>
      </div>
      <h2 className='Ourproducts'>OUR PRODUCTS</h2>
      <div className="beer-gallery" id="products">
  {beers.map((beer, index) => (
    <Link key={beer.id} to={`/beer/${beer.id}`} className={`beer-link-${index + 1}`}>
      <BeerCard beer={beer} />
    </Link>
  ))}
</div>
    </div>
  );
};

export default MainSection;