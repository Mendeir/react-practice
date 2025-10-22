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
      {pizzaData && pizzaData.length > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later :) </p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }: { pizzaObj: Pizza }) {
  return (
    <div className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.price}</span>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({
  openHour,
  closeHour,
}: {
  openHour: number;
  closeHour: number;
}) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online!
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default App;
