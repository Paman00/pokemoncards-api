import { useState, useEffect, useMemo, useCallback } from "react";
import { Header } from "./components/Header/Header";
import { Logo } from "./components/Logo/Logo";
import { Search } from "./components/Search/Search";
import { CardDetails } from "./components/CardDetails/CardDetails";
import { CardPreview } from "./components/CardPreview/CardPreview";
import { Footer } from "./components/Footer/Footer";
import { fetchCards, fetchSearch, fetchSingleCard } from "./api";
import s from "./style.module.css";

function App() {
	const [pokemonData, setPokemonData] = useState([]);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState("");
	const [searched, setSearched] = useState("");
	const [totalCards, setTotalCards] = useState(0);
	const [focusCard, setFocusCard] = useState();
	const [currentPokemonCard, setCurrentPokemonCard] = useState();

	useEffect(() => {
		const fetchData = async () => {
			if (searched) {
				const { data, totalCount } = await fetchSearch(searched, page);
				console.log(data);
				setTotalCards(totalCount);
				page === 1
					? setPokemonData(data)
					: setPokemonData((prevState) => [...prevState, ...data]);
			} else {
				const { data, totalCount } = await fetchCards(page);
				console.log(data);
				setTotalCards(totalCount);
				setPokemonData((prevState) => [...prevState, ...data]);
			}
		};
		fetchData();
	}, [page, searched]);
	useEffect(() => {
		const fetchCard = async () => {
			if (focusCard) {
				const data = await fetchSingleCard(focusCard);
				console.log(data);
				setCurrentPokemonCard(data);
			}
		};
		fetchCard();
	}, [focusCard]);

	const onChangeSearch = useCallback((value) => {
		setSearch(value);
	}, []);
	const onSearch = (event) => {
		if(((event.type === "keyup" && event.code === "Enter") || event.type === "click") && !!search.trim()){
			setPage(1);
			const sentence = search
				.toLowerCase()
				.replace(/\s+/g, "+")
				.replace(/&/g, "%26");
			setSearched(`"${sentence}"`);
			setSearch("");
			onUnFocusCard();
		}
	};
	
	const canShowMoreCards = useMemo(() => {
		return 20 * page < totalCards;
	}, [page, totalCards]);
	const onNextPage = useCallback(() => {
		setPage((prevState) => prevState + 1);
	}, []);

	const onFocusCard = (id) => {
		setFocusCard(id);
	};
	const onUnFocusCard = () => {
		setCurrentPokemonCard();
		setFocusCard();
	};

	return (
		<div className={s.app}>
			<Header>
				<Logo />
				<Search
					search={search}
					onChangeSearch={onChangeSearch}
					onSearch={onSearch}
				/>
			</Header>

			{currentPokemonCard &&
				<div className={s.modal}>
					<CardDetails
						card={currentPokemonCard}
						onUnFocusCard={onUnFocusCard}
					/>
				</div>
			}
			<section className={s.mainSection}>
				{searched && <p className={s.searchedTitle}>Searched: {searched}</p>}
				<div className={s.cardGrid}>
					{pokemonData.map((pokemon) => (
						<CardPreview
							key={pokemon.id}
							id={pokemon.id}
							src={pokemon.images.small}
							alt={pokemon.name}
							onFocusCard={onFocusCard}
						/>
					))}
				</div>
				<div className={s.btnContainer}>
					<button 
						className={s.nextBtn}
						onClick={onNextPage} 
						disabled={!canShowMoreCards}
					>
						Show More
					</button>
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default App;
