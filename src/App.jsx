/* eslint-disable react/prop-types */
import './App.css'

const iconosBanderas = {
  Colombia: "https://cdn-icons-png.flaticon.com/512/330/330508.png",
  Venezuela: "https://cdn-icons-png.flaticon.com/512/330/330546.png",
}

function BarajitaFutbol({ linkImagen, nombre, seleccion }) {
  const estiloBarajita = {
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '10px',
    color: '#000',
    margin: '10px'
  }

  const contenedorFoto = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '200px',
    maxHeight: '190px',
    overflow: 'hidden',
    borderRadius: '10px'
  }

  const contenedorCentrado = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
  }

  return (
    <div className="barajita" style={estiloBarajita}>
      <div className="encabezado">
        <div className="foto" style={contenedorFoto}>
          <img src={linkImagen} alt="" style={{ width: '100%' }} />
        </div>
      </div>
      <div className="info">
          <h3>{nombre}</h3>
        <div style={contenedorCentrado}>
          <span style={contenedorCentrado}>
            <img src={iconosBanderas[seleccion]} alt={seleccion} style={{ width: '20px', height: '20px' }} />
          </span>
          <span>{seleccion}</span>
        </div>
        </div>
    </div>
  )
}

function App() {

  const barajitasEstilo = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
  
  return (
    <div style={barajitasEstilo}>
      <BarajitaFutbol 
        linkImagen="https://imagenes.elpais.com/resizer/v2/IYNMG4AC2PTB3NOJE5E3G66EFE.jpg?auth=50715ddf555312d0baff791344ae59da07b347a97109896221f8010245be2268&width=980&height=980&smart=true" 
        nombre="James Rodríguez" 
        seleccion="Colombia" 
      />
      <BarajitaFutbol 
        linkImagen="https://cloudfront-us-east-1.images.arcpublishing.com/semana/ZD6RT6BIFZFX5LUKFPDDYW2MIY.jpg" 
        nombre="Juan Cuadrado" 
        seleccion="Colombia" 
      />
      <BarajitaFutbol 
        linkImagen="https://strikers.futbol/__export/1612470969982/sites/strikers/img/2021/01/30/soteldo-santos.jpg_1720385577.jpg" 
        nombre="Yeferson Soteldo" 
        seleccion="Venezuela" 
      />
    </div>
  )
}

export default App
