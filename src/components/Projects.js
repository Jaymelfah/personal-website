import React from 'react';
import Project from './Project';
import tracker from '../images/Trackerbudget.png';
import recipe from '../images/Recipe.png';
import space from '../images/SpaceTravelers.png';
import catalog from '../images/Catalog.png';
import crypto from '../images/Crypto.png';
import math from '../images/Math-magic.png';
import quiz from '../images/Quizzical.png';
import poke from '../images/Pokedex.png';

const Projects = () => {
  const projectData = [
    {
      name: 'Budget App',
      image: tracker,
      description: 'Tracker Budget is a mobile web application where you can manage your budget',
      source: 'https://github.com/Jaymelfah/tracker-budget.git',
      live: 'https://budget-application-39ba.onrender.com/',
    },
    {
      name: 'Recipe App',
      image: recipe,
      description: 'Recipe App keeps track of all your recipes and ingredients. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.',
      source: 'https://github.com/Jaymelfah/recipe-app.git',
      live: 'https://github.com/Jaymelfah/recipe-app.git',
    },
    {
      name: 'CryptoMarket',
      image: crypto,
      description: 'This application displays a list of ranking cryptocurrencies and allows you to search in the home page any of your favorite crypto coins.',
      source: 'https://github.com/Jaymelfah/crypto-market.git',
      live: 'https://effervescent-stroopwafel-cbea62.netlify.app/',
    },
    {
      name: 'SpaceTravelers Hub',
      image: space,
      description: 'Space-Travelers Hub is a website that displays information using the real live data from the SpaceX API TV shows. It also allows you to reserve Rockets and Messions.',
      source: 'https://github.com/Jaymelfah/space-travelers-hub.git',
      live: 'https://sthub.netlify.app/',
    },
    {
      name: 'Pokedex',
      image: poke,
      description: 'This project displays a Pokedex of about 50 rare pokemons. Details of specific pokemon are also displayed in a modal window where comments can be added. Users are also allowed to give likes to their favorite pokemon',
      source: 'https://github.com/Jaymelfah/Pokedex.git',
      live: 'https://kaizipaul.github.io/module-2-capstone/',
    },
    {
      name: 'Quizzical',
      image: quiz,
      description: 'In this project I built a quiz game with React on Geography. This app grades answers and highlights correctly selected answers.',
      source: 'https://github.com/Jaymelfah/Quizzical.git',
      live: 'https://elaborate-empanada-0e9a43.netlify.app/',
    },
    {
      name: 'Catalog of Things',
      image: catalog,
      description: 'Catalog of My Things is an app that helps you to keep a record of different types of things you own: books, music albums, movies, and games.',
      source: 'https://github.com/Jaymelfah/Catalog-of-things.git',
      live: 'https://github.com/Jaymelfah/Catalog-of-things.git',
    },
    {
      name: 'Math Magicians',
      image: math,
      description: 'I built a calculator app called Math magicians with React components, React State and React props.',
      source: 'https://github.com/Jaymelfah/Math-Magician.git',
      live: 'https://chic-blini-714a0e.netlify.app/',
    },
  ];

  return (
    <div className="projects mt-16 flex flex-col items-center">
      <h1 className="text-red-400 text-2xl mt-12">Projects</h1>
      {projectData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
