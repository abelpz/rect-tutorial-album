/* eslint-disable react/prop-types */

const iconosBanderas = {
  Colombia: "https://cdn-icons-png.flaticon.com/512/330/330508.png",
  Venezuela: "https://cdn-icons-png.flaticon.com/512/330/330546.png",
}

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


export function BarajitaFutbol({ linkImagen, nombre, seleccion }) {
  
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