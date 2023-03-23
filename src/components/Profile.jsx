export default function Profile({nombre, imagen}) {
  return (
    <div className="profile">
      <img
        src={imagen}
        alt={nombre}
        className="imagen"
      />
      <h4>{nombre}</h4>
    </div>
  )
}
