import axios from "axios";

const pokemon = axios.create({
	baseURL: "https://api.pokemontcg.io/v2",
});
pokemon.defaults.headers.common["X-Api-Key"] =
	"38ee7edd-b96f-4644-b16d-addb77df4833";

const fetchCards = async (page) => {
	try {
		const { data } = await pokemon.get(`/cards?page=${page}&pageSize=20&select=id,name,images`);

		return data;
	} catch (e) {
		console.error(e);
	}
};
const fetchSearch = async (sentence, page) => {
	try {
		const { data } = await pokemon.get(`/cards?q=name:${sentence}&page=${page}&pageSize=20&select=id,name,images`);

		return data;
	} catch (e) {
		console.error(e);
	}
};
const fetchSingleCard = async (id) => {
	try {
		const { data: { data } } = await pokemon.get(`/cards/${id}`);

		return data;
	}
	catch (e) {
		console.error(e);
	}
}

export { fetchCards, fetchSearch, fetchSingleCard };
