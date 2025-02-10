import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../js/pizzas.js";

function Home() {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center gap-5 w-100 mt-3 flex-wrap">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            img={pizza.img}
            name={pizza.name}
            desc={pizza.desc}
            price={pizza.price}
            ingredients={pizza.ingredients}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
