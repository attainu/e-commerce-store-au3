import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaSearch, FaTshirt } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { animationShow, animationHide } from "../logic/navAnimationLogic";
const Search = props => {
  const searchDropdown = useRef(null);
  const [searchResults, setSearchResults] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState(null);
  const categories = useSelector(state => state.categories);
  const searchArr = categories.map(cat => {
    if (cat.category_id < 6) {
      return { name: "men " + cat.category_name, id: cat.category_id };
    } else {
      return { name: "women " + cat.category_name, id: cat.category_id };
    }
  });

  const emptySearch = () => {
    setSearchResults(null);
  };

  useEffect(() => {
    setSearchResults(null);
    animationHide(searchDropdown.current);
    if (searchKeyword) {
      let results = [];
      searchArr.map(p => {
        if (p.name.includes(searchKeyword)) results.push(p);
      });
      setSearchResults(results);
      animationShow(searchDropdown.current);
    }
  }, [searchKeyword]);

return(

<div>
  <div className="form-row align-items-center">
    <div className="col-12 my-1">
      <div className="input-group">
        <input
          className="form-control rounded-0 header-search-form"
          type="text"
          placeholder="Search"
          onChange={e => setSearchKeyword(e.target.value)}
        />
        <div className="input-group-prepend">
          <button className="btn bg-white rounded-0 header-search-button" onClick={emptySearch}>
            {searchResults ? <IoIosCloseCircle /> : <FaSearch />}
          </button>        
        </div>
      </div>
    </div>
  </div>
  <div
        className="dropdown-menu alert alert-dark rounded p-0 mt-2"
        // style={{ width: "450px" }}
        ref={searchDropdown}
      >
        {searchResults ? (
          searchResults && searchResults.length === 0 ? (
            <h6 className="p-3">No Results</h6>
          ) : (
            searchResults &&
            searchResults.map(r => {
              return (
                <div
                  key={r.id + 74847}
                  className="alert alert-dark rounded-0 border-0 dropdown-item m-0"
                >
                  <span className="px-2">
                    <FaTshirt />
                  </span>
                  <Link
                    to={`/shop/${r.id < 6 ? "men" : "women"}/${r.id}`}
                    className="text-muted m-0 p-0"
                    onClick={e => setSearchResults(null)}
                  >
                    {r.name.toUpperCase()}
                  </Link>
                </div>
              );
            })
          )
        ) : null}
      </div>  
</div>


)  



};

export default Search;
