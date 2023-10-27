import React, { useCallback, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { YOUTUBE_SEARCH_API } from "../../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../../utils/searchSlice";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const getInputSearchSuggestions = useCallback(async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    console.log(data[1]);
    setSuggestions(data[1]);
    dispatch(
      cacheResults({
        [searchQuery]: data[1],
      })
    );
  }, [dispatch, searchQuery]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getInputSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery, getInputSearchSuggestions, searchCache]);

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          className="input-field"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowDropDown(true)}
          onBlur={() => setShowDropDown(false)}
        />
        <button type="button" className="search-btn">
          <SearchIcon fontSize="medium" className="search-icon" />
        </button>
      </div>
      {showDropDown && suggestions.length > 0 && (
        <div className="dropdown">
          <ul className="search-list">
            {suggestions.map((item) => (
              <li className="search-item" key={item}>
                <span className="dropdown-search--icon">
                  <SearchIcon />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
