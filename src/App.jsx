import { useState, useEffect, useMemo, useCallback } from 'react';
import { Header } from './components/Header';
import { Logo } from './components/Logo';
import { SearchBar } from './components/SearchBar';
import { ModalCard } from './components/ModalCard';
import { FullviewCard } from './components/FullviewCard';
import { MainSection } from './components/MainSection';
import { PreviewSearched } from './components/PreviewSearched';
import { PreviewCard } from './components/PreviewCard';
import { Footer } from './components/Footer';
import { fetchCards, fetchSearch, fetchSingleCard } from './services/pokemon';

function App () {
  const [pokemonData, setPokemonData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [searched, setSearched] = useState('');
  const [totalCards, setTotalCards] = useState(0);
  const [focusCard, setFocusCard] = useState();
  const [currentPokemonCard, setCurrentPokemonCard] = useState();

  useEffect(() => {
    const fetchData = async () => {
      if (searched) {
        const { data, totalCount } = await fetchSearch(searched, page);
        setTotalCards(totalCount);
        page === 1
          ? setPokemonData(data)
          : setPokemonData((prevState) => [...prevState, ...data]);
      } else {
        const { data, totalCount } = await fetchCards(page);
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
        setCurrentPokemonCard(data);
      }
    };
    fetchCard();
  }, [focusCard]);

  const onChangeSearch = useCallback((value) => {
    setSearch(value);
  }, []);
  const onSearch = (event) => {
    const isEnterKey = event.type === 'keyup' && event.code === 'Enter';
    if ((isEnterKey || event.type === 'click') && !!search.trim()) {
      setPage(1);
      const sentence = search
        .toLowerCase()
        .replace(/\s+/g, '+')
        .replace(/&/g, '%26');
      setSearched(`"${sentence}"`);
      setSearch('');
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
    <div className='m-auto max-w-screen-xl text-center'>
      <Header>
        <Logo />
        <SearchBar
          search={search}
          onChangeSearch={onChangeSearch}
          onSearch={onSearch}
        />
      </Header>

      {currentPokemonCard && (
        <ModalCard>
          <FullviewCard
            card={currentPokemonCard}
            onUnFocusCard={onUnFocusCard}
          />
        </ModalCard>
      )}

      <MainSection onNextPage={onNextPage} canShowMoreCards={canShowMoreCards}>
        {searched && <PreviewSearched searched={searched} />}

        <div className='grid auto-rows-auto grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] justify-items-center gap-8'>
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
        <div className='p-6'>
          <button
            className='cursor-pointer rounded border-2 border-solid border-orange-500 bg-orange-500 px-4 py-3 font-semibold text-white transition-all duration-200 hover:scale-95 hover:bg-white hover:text-orange-500 disabled:cursor-default disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:scale-100'
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
