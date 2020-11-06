import React, { Component } from 'react';
import './Detail.css'

export default class Detail extends Component {

   componentDidMount(){
      const {location, history} = this.props;
      if(location.state === undefined){
         history.push('/');
      }
   } //리다이렉트

   render() {
      
      const {location} = this.props;
      if(location.state){
      return (
         <div className="detail">
            <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
            <div className="detail__data">
               <h3 className="detail__title" style={{backgroundColor: '#eee'}}>{location.state.title}</h3>
               <h4 className="detail__year">{location.state.year}</h4>
               <ul className="detail__genres">
               {location.state.genres.map((genre,index) => {
                  return (
                     <li key={index} className="detail__genre">{genre}</li>
                  );
               })}
               </ul>
               <p className="detail__summary">{location.state.summary.slice(0,180)} ...</p>
            </div>
         </div>
      )
      }else{
         return null;
      }
   }
}
