import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountrySelection from './CountrySelection';
import Category from './Category';

const NewsApp = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: selectedCountry,
            category: selectedCategory,
          },
          headers: {
            'X-Api-Key': '6faea103765940a49028d5d5a59f88aa', // API key
          },
        });
        setNewsArticles(response.data.articles);
      } catch (error) {
        
      }
    };

    if (selectedCountry || selectedCategory) {
      fetchNews();
    }
  }, [selectedCountry, selectedCategory]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/sources');
        const uniqueCountries = [...new Set(response.data.sources.map(source => source.country))];
        setCountries(uniqueCountries);
      } catch (error) {
        
      }
    };

    fetchCountries();
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <CountrySelection
        selectedCountry={selectedCountry}
        onCountryChange={handleCountryChange}
        countries={countries}
      />
      <Category
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <div className="news-container mt-3 mb-3" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {newsArticles.map((article, index) => (
          <div key={index} className="card mb-4" style={{ width: '800px' }}>
            <div className="image-container">
              <img src={article.urlToImage} className="card-img-top" alt={article.title} style={{ maxHeight: '200px', objectFit: 'cover' }} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsApp;
