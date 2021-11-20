async function FetchJokes(setJokes, search) {
	if (search.trim().length > 0) {
		await fetch(
			`https://icanhazdadjoke.com/search?term=${search}`,
			{
				method: "GET",
				headers: {
					Accept: "application/json",
				},
			}
		)
			.then((response) => response.json())
			.then((data) => setJokes(data.results));
	}
}

export default FetchJokes;