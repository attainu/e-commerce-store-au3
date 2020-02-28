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

  return (
    <>
      <div className="form-inline">
        <input
          className="form-control rounded-0 border-0"
          type="text"
          placeholder="Search"
          onChange={e => setSearchKeyword(e.target.value)}
        />
        <button className="btn bg-light rounded-0">
          {searchResults ? <IoIosCloseCircle /> : <FaSearch />}
        </button>
      </div>
      <div
        className="dropdown-menu alert alert-secondary rounded p-0 mt-2"
        style={{ width: "450px" }}
        ref={searchDropdown}
      >
        {searchResults && searchResults.length === 0 ? (
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
        )}
      </div>
    </>
  );
};

export default Search;
