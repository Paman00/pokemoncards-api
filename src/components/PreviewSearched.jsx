import s from "./PreviewSearched.module.css";

const PreviewSearched = ({ searched }) => {
	return <p className={s.searchedTitle}>Searched: {searched}</p>;
};

export { PreviewSearched };
