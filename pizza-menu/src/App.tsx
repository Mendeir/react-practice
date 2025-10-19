import "./index.css";
import { pizzaData, type Pizza } from "./data.tsx";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>MG Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}

type PizzaProps = {
  pizzaObj: Pizza;
};

function Pizza(props: PizzaProps) {
  return (
    <div className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredients}</p>
      <span>{props.pizzaObj.price}</span>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const restaurantStatus =
    hour >= openHour && hour <= closeHour
      ? "We're currently open!"
      : "Sorry, we're closed";

  return <footer className="footer">{restaurantStatus}</footer>;
}

export default App;
