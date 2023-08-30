import { useState } from "react";
import SearchIcon from "../search.svg";

const Input = ({searchMovies}) => {

    const [searchTerm, setSearchTerm] = useState('');


    return ( 
          <div className="search">
          <input
            type="text"
            placeholder="Search movie"
            value={searchTerm}
            onChange={(e) => {setSearchTerm(e.target.value)}}
          />
          <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
        </div>
     );
}
 
export default Input;