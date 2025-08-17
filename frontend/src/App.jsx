
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home';

function App() {

  const movieNumber = 3;
  return (
    <> 
      <Home/>
    </>
     
  )
}

function Text({text}){
  return(
    <div>
      <p>{text}</p>
    </div>
      
  )
}
export default App
