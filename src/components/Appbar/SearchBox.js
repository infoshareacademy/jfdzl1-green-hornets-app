import React, { Component } from 'react';
import './index.css';


class SearchBox extends Component {
    render() {
        return (
            <div className="search">
                <input type='text' placeholder='Search for Bears'/>
                <input type='submit'/>
            </div>
        );
    }
}

export default SearchBox;
//
// import React, {Component} from 'react';
//
// class Serch extends Component {
//     constructor(props){
//         super(props);
//         this.hadleSubmit = this.hadleFormSubmit.bind(this);
//     }
//     hadleFormSubmit(event){
//         console.log('Wartość serch:' + this.ksiezniczka.value);
//         event.preventDefault();
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.hadleSubmit}>
//                     <label>Serch:</label>
//                     <input type='text' ref={field=>this.ksiezniczka=field}/>
//                     <textarea type='text'/>
//                     <input type='submit' value='Wyślij mnie'/>
//                 </form>
//             </div>
//         );
//
//     }
// }
// export default Serch;