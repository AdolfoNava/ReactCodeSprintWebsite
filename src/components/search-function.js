// This will be where the user will type in a key part of a
// word inputted and be able to queue the search here.
import React from "react";
import termArchive from "./term-archive";

const SearchBox = (props)=>{
  return(
    <input type="search"
    className="search"
    placeholder={props.placeholder}
    onChange={props.handleChange}
    />
  )
}

export default SearchBox;

// class searchBar extends React.Component {

//   constructor(){
//     super();
//     this.state = {
//       search: ''
//     };
//   }

//   updateSearch(event){
//     this.setState({search: event.target.value.substr(20)});
//   }
//   render(){
//     let filteredTerms = this.props.term.filter(
//       (term)=>{
//         return termArchive.name.indexOf(this.state.search)!==-1;

//       }
//     );
//     return(
//         <div>
//           <ul>
//             {termArchive.map((termArchive)=>{
//               return<term term={termArchive.term} key={termArchive.term.id}/>
//             })}
//           </ul>
//           <input type="text" value={this.state.search} onChnage={this.updateSearch.bind(this)}/>
//         </div>
//     );
//   }
// }


// export default searchBar;
