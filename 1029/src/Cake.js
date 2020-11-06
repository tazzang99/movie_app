import React from 'react';

//Cake 클래스형 컴포넌트
// <h1>케이크 가격 : 원</h1>
// <h2>할인 가격</h2>
// 버튼 누르면 할인가격이 나오도록. 30% 할인

class Cake extends React.Component{
   state = {
      price: 10000,
      discountPrice: 0,
   };

   discount = () => {
      console.log('할인하기');
      this.setState(current => ({
         discountPrice: current.price *0.7
      })
      )
   };

   render(){
      return(
         <>
         <h1>Cake 가격 : {this.state.price}원</h1>
         <h2>할인 가격 : {this.state.discountPrice}원</h2>
         <button onClick={this.discount}>계산</button>
         </>
      )
   };
}

export default Cake;