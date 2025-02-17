import Header from "../components/Header.jsx";
import CardPizza from "../components/CardPizza.jsx";
import { usePizza } from "../context/PizzaContext.jsx";
import { useCart } from "../context/CartContext.jsx";

const Home = () => {
  const { pizzas } = usePizza();
  const { addToCart } = useCart();
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center gap-5 w-100 mt-3 flex-wrap">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            img={pizza.img}
            name={pizza.name}
            desc={pizza.desc}
            price={pizza.price}
            ingredients={pizza.ingredients}
            onAddToCart={() => addToCart(pizza)}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
