import axios from 'axios';

const API_URL =
	'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=9';

export const fetchImages = async () => {
	try {
		const { data } = await axios.get(API_URL);
		return data.entries;
	} catch (error) {
		throw error;
	}
};
