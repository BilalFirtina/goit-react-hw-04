import style from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <header>
      <div className={style.headerDiv}>
        <div className={style.searchDiv}>
          <FaSearch className={style.searchIcon} />
          <input
            type="text"
            placeholder="Search Images..."
            className={style.searchInput}
          />
        </div>
      </div>
    </header>
  );
};

export default SearchBar;
