import s from "./style.module.css";

const PreviewSearched = ({ searched }) => {
	return <p className={s.searchedTitle}>Searched: {searched}</p>;
};

export { PreviewSearched };
