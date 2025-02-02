// src/App.jsx

import { useState } from 'react';
import './App.css';
import BurgerStack from './components/BurgerStack/BurgerStack';
import IngredientList from './components/IngredientList/IngredientList';

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const [stack, setStack] = useState([])

  const addToBurget = (burger) => {
    const newStack = [...stack, burger]
    setStack(newStack)
  }

  function removeFromBurger (burger) {
    const removeBurger = availableIngredients.filter(availableIngredient => (
      availableIngredient.name !== burger.name
    ))
    setStack(removeBurger)
  }

  return (
    <>
    <BurgerStack stack={stack} />
    <IngredientList 
    Ingredients={addToBurget}
    removeFromBurger={removeFromBurger}
    />
    <main>
      <h1>Burger Stacker</h1>
      <section>
      {/* List & Stack components */}
      </section>
    </main>
    </>
  );
};

export default App;

// App: The parent component containing <BurgerStack> and <IngredientList>. It will also contain stack state, and two functions for manipulating that state.