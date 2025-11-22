import './App.css'
import logo from './assets/logo-sw.jpg'
import rogel from './assets/rogel.jpg'
import pavlova from './assets/pavlova.jpg'
import nuez from './assets/nuez.jpg'
import lemon from './assets/lemon.jpg'
import rogelitos from './assets/rogelitos.jpg'
import pavlovitas from './assets/pavlovitas.jpg'

function App() {

  const Tortas = [
    {
      img: rogel,
      nombre: "Rogel",
      descricion: "Finas capas de masa crocante con dulce de leche decorado con merengue",
      precio: { Chico: 34000, Mediano: 40000, Grande: 50000 }
    },
    {
      img: pavlova,
      nombre: "Pavlova",
      descricion: "Merengue horneado con dulce de leche, crema chantully y frutillas",
      precio: { Chica: 30000, Mediana: 36000, Grande: 46000 }
    },
    {
      img: nuez,
      nombre: "Torta de nuez",
      descricion: "Base húmeda sin gluten con dulce de leche y crema chantilly",
      precio: { Chica: 36000, Mediana: 45000, Grande: 46000 }
    },
    {
      img: "",
      nombre: "Cheesecake",
      descricion: "Cheesecake NY con mermelada y frutos rojos",
      precio: 48000
    },
    {
      img: lemon,
      nombre: "Lemon pie",
      descricion: "Tarta de limón con masa sablé, curd de limón y merengue",
      precio: { Chico: 28000, Mediano: 34000, Grande: 42000 }
    }
  ]

  const MiniTortas = [
    { img: rogelitos, Nombre: "Rogelitos", Docena: 22000 },
    { img: pavlovitas, Nombre: "Pavlovitas", Docena: 20000 },
    { img: rogelitos, Nombre: "Brownies", Docena: 22000 }
  ]

  const enviarWpp = (producto) => {
    const mensaje = `Hola! Quisiera consultar por: ${producto}`
    const url = `https://wa.me/5492314529095?text=${encodeURIComponent(mensaje)}`
    window.open(url, "_blank")
  }

  return (
    <>
      <nav>
        <img src={logo} alt="logo" />
      </nav>

      <div className="section">
        <h1>Tortas</h1>

        <div className="cards-container">
          {Tortas.map((torta, i) => (
            <div className="card" key={i}>
              {torta.img && <img src={torta.img} alt={torta.nombre} />}

              <h3>{torta.nombre}</h3>
              <p className='descripcion'>{torta.descricion}</p>

              {typeof torta.precio === "object" ? (
                <ul>
                  {Object.entries(torta.precio).map(([tam, precio]) => (
                    <li key={tam} className="precio">{tam}: ${precio}</li>
                  ))}
                </ul>
              ) : (
                <p className="precio">Precio: ${torta.precio}</p>
              )}

              <button onClick={() => enviarWpp(torta.nombre)}>
                Consultar por WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h1>Mini tortas</h1>

        <div className="cards-container">
          {MiniTortas.map((mini, i) => (
            <div className="card" key={i}>
              <img src={mini.img} alt={mini.Nombre} />
              <h3>{mini.Nombre}</h3>
              <p className="precio">Docena: ${mini.Docena}</p>

              <button onClick={() => enviarWpp(mini.Nombre)}>
                Consultar por WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>
     <div className="info-section">
        <h3>Información</h3>
        <p>Pedidos con 48 hs de anticipación</p>
        <p>Take away y entregas a domicilio</p>
      </div>
        <footer>
          <p>Sweet rogel by anita</p>
        </footer>
    </>
  )
}

export default App
