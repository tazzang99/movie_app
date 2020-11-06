import React from 'react';
import Cake from './Cake';


class App extends React.Component {

  constructor(props){
    super(props); //부모 props
    console.log('constructor함수는 클래스형 컴포넌트가 생성될 때 호출됨')
  }

  // constructor 제일 먼저 실행. 그 다음 render.

  componentDidMount(){
    console.log('componentDidMount함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수')
  }

  componentDidUpdate(){
    console.log('componentDidUpdate함수는 화면이 새로 그려지면, 즉 업데이트되면 실행되는 함수')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount함수는 컴포넌트가 죽을 때 실행되는 함수')
  }

  state = {
    count: 0, //객체에는 키와 키값이 들어가야 함.
    sum: 0,
    avg: 0,
  };

  add = () => {
    console.log('더하기');
    this.setState(current => ({ //current는 this.state
      count: current.count +1,
      sum: current.sum +1,
      avg: current.avg +1,
    }) // current는 매개변수

      );
  }

  minus = () => {
    console.log('빼기');
    this.setState(current => ({
      count: current.count -1,
      sum: current.sum -1,
      avg: current.avg -1,
    })
      );
  }

  render(){
    return(
      <>
      <div>
      <h1>현재 숫자는 {this.state.count} 입니다.</h1>
      {/* this.state는 현재 클래스에서 선언된 state */}
      <button onClick={this.add}>더하기</button>
      <button onClick={this.minus}>빼기</button>
      </div>
      <Cake/>
      </>
    );
  }
}

export default App;
