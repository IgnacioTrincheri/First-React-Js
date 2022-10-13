import './App.css';
import NavBar from './Components/NavBar';
import ItemListCont from "./Components/ItemListContainer";
import ProductosAPI from "./APIrest/Productos.js"



function App() {

    return (
        <div className='principal_cont'>
            <NavBar />
            <h2>Productos</h2>
            <div className='card-cont'>
                {ProductosAPI.map((producto, i) => (
                    <ItemListCont key={i}
                        name={producto.name}
                        image={producto.image}
                        size={producto.size}
                    />
                ))}
            </div>
        </div>


    );

}

export default App;
