import './App.css';

function App() {
  let imagen = "kqXt7Sq2";
  let titulo = "Dobele Cuarto de Libra con queso";
  let calorias = "771 kcal";
  let descripcion = "Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza."

const productos = {id:1, image:imagen, title:titulo, calories:calorias, description:descripcion};

  return(
    <div className='container'>
      <div className='row'>
        <div className= "col-md-4 offset-md-2">
        <img src={productos.image} alt={productos.title} className="img-fluid"/>
        </div>
        <div className="col-md-4">
        <h1>{productos.title}</h1>
        <p>{productos.calories}</p>
        <p>{productos.description}</p>
        </div>
      </div>
    </div>
  )

}

export default App;
