import Header from "./Header";
import CardPizza from './CardPizza';

function Home() {
  return (
    <>
    <Header />
    <div className="d-flex justify-content-center gap-5 w-100 mt-3">
    <CardPizza
    img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
    name='Napolitana'
    price={5950}
    ingredients={['mozzarella', 'tomates', 'albahaca', 'orégano']}
    /> 
    <CardPizza
    img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
    name='Española'
    price={6950}
    ingredients={['mozzarella', 'chorizo', 'orégano']}
    /> 
    <CardPizza
    img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
    name='Pepperoni'
    price={6950}
    ingredients={['mozzarella', 'pepperoni', 'orégano']}
    /> 

    </div>
    </>
  )
}

export default Home