// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
    return (
      <ul>
        {props.ingredients.map(burger => (
          <li key={burger.name}>
            <p>Name: {burger.name}</p>
            <p>Color: {burger.color}</p>
            <button onClick={() => props.addToBurger(burger)}>+</button>
            <button onClick={() => props.removeFromBurger(burger)}>-</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default IngredientList;
  
    // map through props.ingredients
  
//   IngredientList: A <ul that renders the elements held in availableIngredients. Each ingredient rendered in this component should contain a button for adding the ingredient to the stack.