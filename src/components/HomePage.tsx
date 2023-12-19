import React, { useEffect, useState } from 'react';
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Header />
          <MainSection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomePage;