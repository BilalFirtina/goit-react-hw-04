import { toast, Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa"; // Mercek ikonu
import style from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const notify = () =>
    toast.error("Please enter a word!", {
      duration: 750,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim();
    if (value === "") {
      notify();
      return;
    }
    onSubmit(value);
  };

  return (
    <header>
      <form className={style.formElem} onSubmit={handleSubmit}>
        <div className={style.inputWrapper}>
          <button type="submit" className={style.iconButton}>
            <FaSearch className={style.searchIcon} />
          </button>
          <input
            name="query"
            type="text"
            className={style.searchInput}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </div>
        <button type="submit" className={style.submitButton}>
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
