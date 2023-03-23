import Profile from "./components/Profile"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />
      
      <Profile
        nombre="Ivan Martinez"
        imagen="https://unavatar.io/jesulim"
      />
      <Profile 
        nombre="Stefany Reynaga" 
        imagen="https://unavatar.io/stefany91"  
      />
      <Profile 
        nombre="Jenny Salas" 
        imagen="https://unavatar.io/jennysr"  
      />
    </>
  )
}

export default App
