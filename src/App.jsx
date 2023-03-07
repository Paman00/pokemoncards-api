import { useState, useEffect, useMemo, useCallback } from "react";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";
import { SearchBar } from "./components/SearchBar";
import { ModalCard } from "./components/ModalCard";
import { FullviewCard } from "./components/FullviewCard";
import { MainSection } from "./components/MainSection";
import { PreviewSearched } from "./components/PreviewSearched";
import { PreviewCard } from "./components/PreviewCard";
import { Footer } from "./components/Footer";
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
		if (
			((event.type === "keyup" && event.code === "Enter") ||
				event.type === "click") &&
			!!search.trim()
		) {
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

	const onFocusCard = useCallback((id) => {
		setFocusCard(id);
	}, []);
	const onUnFocusCard = useCallback(() => {
		setCurrentPokemonCard(undefined);
		setFocusCard(undefined);
	}, []);

	return (
		<div className={s.app}>
			<Header>
				<Logo />
				<SearchBar
					search={search}
					onChangeSearch={onChangeSearch}
					onSearch={onSearch}
				/>
			</Header>

			{currentPokemonCard && (
				<ModalCard onUnFocusCard={onUnFocusCard}>
					<FullviewCard
						card={currentPokemonCard}
						onUnFocusCard={onUnFocusCard}
					/>
				</ModalCard>
			)}

			<MainSection onNextPage={onNextPage} canShowMoreCards={canShowMoreCards}>
				{searched && <PreviewSearched searched={searched} />}

				<div className={s.cardGrid}>
					{pokemonData.map((pokemon) => (
						<PreviewCard
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
			</MainSection>

			<Footer />
		</div>
	);
}

export default App;
