import "./index.css";

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
      <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
    </main>
  );
}

type PizzaProps = {
  name: string;
  ingredient: string;
  photoName: string;
  price: number;
};

function Pizza(props: PizzaProps) {
  return (
    <div>
      <img src={props.photoName} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredient}</p>
      <span>{props.price}</span>
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
