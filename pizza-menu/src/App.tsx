function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>MG Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
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

  return <footer>{restaurantStatus}</footer>;
}

function Pizza() {
  return <h2>Pizza</h2>;
}

export default App;
