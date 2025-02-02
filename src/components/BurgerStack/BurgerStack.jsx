// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
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
  
  export default BurgerStack;
  
//   BurgerStack: A <ul> that renders the elements held in stack. Each ingredient rendered in this component should contain a button for removing the ingredient from the stack.