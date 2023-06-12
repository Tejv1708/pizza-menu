import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza({ pizzaObject }) {
  return (
    <div className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <ul>
        <img src={pizzaObject.photoName} alt={pizzaObject.name} />
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients} </p>
        <span>
          {!pizzaObject.soldOut ? pizzaObject.price : <p>Sold Out</p>}
        </span>
      </ul>
    </div>
  );
}
function Header() {
  // const style = { color: "red", font: "40px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>Pizza Online Order </h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openStore = 12;
  const closeStore = 22;
  const isOpen = hour >= openStore && hour <= closeStore;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>Making the pizza good source of protein</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p> Close </p>
      )}
    </footer>
  );
}

function Menu() {
  const pizza = pizzaData;
  const pizzaNumber = pizza.length;
  return (
    <main className="menu">
      <h2> Our Menu </h2>
      {pizzaNumber > 0 ? (
        <li className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObject={pizza} key={pizza.name} />
          ))}
        </li>
      ) : (
        <p>
          Sorry for the incovient the pizza are finished . May be Later u can
          test
        </p>
      )}
    </main>
  );
}
export default App;
