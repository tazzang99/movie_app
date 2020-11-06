import React from 'react';
import Macaron from './Macaron';
import Coffee from './Coffee';
import PropTypes from 'prop-types';

// function Food(props) { //자식컴포넌트 -- 첫번째 방법
//   return (
//     <h1>I Like {props.propsName}</h1>
//   );
// }

// function Food(props) { //-- 두번째 방법 , 구조 분해 할당
//   const {propsName} = props;
//   return (
//     <h1>I Like {propsName}</h1>
//   );
// }

// function Food({propsName}) { // -- 세번째 방법 , 구조 분해 할당 
//   return (
//     <h1>I Like {propsName}</h1>
//   );
// }


// function Food({propsname, propsrating, propsimage}) {
//   return(
//     <div>
//       <h1>I Love {propsname}</h1>
//       <h2>{propsrating}/5.0</h2>
//       <img src={propsimage} alt={propsname}/>
//     </div>
//   );
// }

function Food({propsname, propsid, propsimage}) {
  return(
    <div>
      <h1>Cake No. {propsid}</h1>
      <h2>{propsname}</h2>
      <img src={propsimage} alt={propsname} />
    </div>
  )
}


// 서버에서 가져온 데이터를 저장하는 변수
// const foodLike = [];

// const foodLike = [
//   {
//     id:1,
//     name: 'macaron1',
//     image: 'https://i.pinimg.com/236x/7b/33/57/7b33577460d10b6d79701292a533d060.jpg',
//     rating: 5
//   },
//   {
//     id:2,
//     name: 'macaron2',
//     image: 'https://i.pinimg.com/236x/dc/73/22/dc732232d7ae5680041bb0a4d23b76a9.jpg',
//     rating: 4.9
//   },
//   {
//     id:3,
//     name: 'macaron3',
//     image: 'https://i.pinimg.com/236x/e5/42/ab/e542abbd9dd5d2163c0df0745d98fe2c.jpg',
//     rating: 4.5
//   },
//   {
//     id:4,
//     name: 'macaron4',
//     image: 'https://i.pinimg.com/236x/e0/3a/eb/e03aeb2c76517a8d8fce4a3023be429a.jpg',
//     rating: 4.7
//   },
//   {
//     id:5,
//     name: 'macaron5',
//     image: 'https://i.pinimg.com/236x/82/18/a4/8218a40cf4b9a575878a4c864dbbcc68.jpg',
//     rating: 4.8
//   }
// ];

const cakes = [
  {
    id:1,
    name: 'rainbow cake',
    image: 'https://i.pinimg.com/236x/dc/e3/2e/dce32e513ce557a951cbbe7fe15f10cb.jpg',
    rating: 5
  },
  {
    id:2,
    name: 'candy cake',
    image: 'https://i.pinimg.com/236x/69/9f/6c/699f6cb625a4a749c6320d22c075bd6f.jpg',
    rating: 4.3
  },
  {
    id:3,
    name: 'white strawberry cake',
    image: 'https://i.pinimg.com/236x/b2/07/93/b20793af39a24bbc023044db12823f9e.jpg',
    rating: 4.8
  }
];

function App() { //부모컴포넌트(App)에서 자식 컴포넌트(Food)로 props 즉 데이터를 전달하면 데이터가 하나의 객체로 변환되어 자식 컴포넌트의 인자로 전달됨.
  return (
  <>
    <div>안녕하세요 !</div>
    <Macaron />
    <Coffee />
    {cakes.map(cake => (
                  <Food
                  propsid = {cake.id} 
                  propsname={cake.name} 
                  propsimage={cake.image} 
                  />))}
  </>
  );
}

// 배열이름은 복수, 배열 내 객체 이름은 단수

// map() 함수 - 배열의 모든 원소마다 특정 작업을 하는 함수를 적용하고, 그 함수가 반환한 결과를 모아서 배열로 반환.
// {/* JSX 주석 */}

// => 화살표 함수.

// class App extends React.Component{
//   render(){
//     return(
//    <>
//      <div>안녕하세요 !</div>
//      <Macaron />
//      <Coffee />
//      <Food propsName = {"coffee"} />
//      <Food propsName = "tea" />
//      <Food propsName = "latte" />
//      <Food propsName = "ice coffee" />
//      <Food propsName = "cake" />

//    </>
//     );
//   }
  
// }

Food.propTypes = {
  propsid: PropTypes.number.isRequired,
  propsname: PropTypes.string.isRequired,
  propsimage: PropTypes.string
}

export default App;
