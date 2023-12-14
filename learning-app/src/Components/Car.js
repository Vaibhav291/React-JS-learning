import React from 'react'; 

// function Garage(){
//     return<h2>Who lives my garage?</h2>
// }

// // export default class Car extends React.Component {
//     // render(){
// export default function Car(){    
//         return(<>
//         <Garage/>
//         <h2>Hi, I am a Car!</h2>
//         </>
//         );
        
// }

export default class Car extends React.Component {
    constructor(){
        super();
        this.state = { color: "red" };
    }
    render(){
        return <h2> I am a {this.state.color} Car! </h2>
    }
}