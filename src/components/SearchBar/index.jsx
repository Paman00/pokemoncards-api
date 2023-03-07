import { CgSearch } from "react-icons/cg";
import s from "./style.module.css";

const SearchBar = ({ search, onChangeSearch, onSearch }) => {
    return (
        <div className={s.searchDiv}>
            <input
                className={s.input}
                value={search}
                onChange={(event) => onChangeSearch(event.target.value)}
                placeholder="Search"
                onKeyUp={onSearch}
            />
            <button 
                className={s.btnSearch}
                type="button" 
                onClick={onSearch}
            >
                <CgSearch />
            </button>
        </div>
    );
}

export { SearchBar };