import { useState } from 'react'
import Movies from '../Movies/Movies'

const Dashboard = () => {

  const [ show, setShow ] = useState('Top rated movies')


  return (
    <div className="dashboard">
      <div className="nav">
        <button type="button" onClick={ () => setShow('Top rated movies') }>Top Rated Movies</button>
        <button type="button" onClick={ () => setShow('Newest movies') }>Newest Movies</button>  
        <button type="button" onClick={ () => setShow('Reviews') }>Reviews</button>  

      </div>
    
      <Movies whatWeShow = { show } />
 
    </div>
  )
}

export default Dashboard
