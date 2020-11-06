import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  
  state = {
    isLoading: true,
    movies: [],
  }
  
  getMovies = async () => {
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    //console.log(movies.data.data.movies);
    this.setState({movies, isLoading: false}); // 키: 키값의 이름이 동일하면 하나로 씀
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({isLoading: false});
    // },6000)
    this.getMovies();
  }

  render(){

    const {isLoading, movies} = this.state; //구조 분해 할당

    return(
      <div>
        {isLoading ? 'Loading...' : 
      // 값 ? a : b = 삼항 연산자. 앞의 값이 true 면 a가, false면 b가 실행.
        movies.map(movie => (<Movie
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genre={movie.genres}
          />))
      }</div>
    );
  }
}

export default App;
