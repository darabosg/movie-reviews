import styled from 'styled-components'



const MovieCard = ({ movie }) => (
  <MovieCardWrapper>
    <Poster src = { `https://image.tmdb.org/t/p/w500${movie.poster_path}` } />
    <MovieTitle>{movie?.title}</MovieTitle>
  </MovieCardWrapper>
)

const MovieCardWrapper = styled.div`
  max-width: 40rem;
  max-height: 30vh;
  margin-right: 5rem;
  display: flex;
  flex-direction: column;
`

const Poster = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
`

const MovieTitle = styled.h3`
  max-width: available;
  font-size: 4rem;
  margin-top: 2rem;
`


export default MovieCard
