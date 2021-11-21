async function FetchJokes(search) {
	return await fetch(
		`https://icanhazdadjoke.com/search?term=${search}`,
		{
			method: "GET",
			headers: {
				Accept: "application/json",
			},
		}
	)
		.then((response) => response.json())
		.catch((error) => console.log(error));
}

export default FetchJokes;
