import { H1 } from '../../components/styledComps/Typography'
import { User } from '../../hooks/useUser'


const Home = () => {

  const { userData, isLoggedIn } = User()


  return (
    <div>
      <H1>
        { isLoggedIn ? 'Hi, youre in now' : 'Youre logged out' }
      </H1>
    </div>
  )
}

export default Home
