import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>

    <Outlet />
    <Link to="page1" >Page1</Link> <br />
    <Link to="page2" >Page2</Link>
    </>
  )
}

export default App
