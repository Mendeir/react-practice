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
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
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

function Pizza() {
  return <h3>Pizza</h3>;
}

export default App;
