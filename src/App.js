import FetchJokes from "./Api";
import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import SuggestionBox from "./SuggestionBox";
import "./App.css";

function App() {
	const [jokes, setJokes] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		const timer = setTimeout(() => {
			getAllJokes(search);
		}, 500);
		return () => clearTimeout(timer);
	}, [search]);

	//makes an API call and sets the jokes state
	const getAllJokes = async (search) => {
		if (search.trim().length > 0) {
			const data = await FetchJokes(search);
			if (data) {
				setJokes(data.results);
			}
		}
	};

	//sets the search state to the parameter text
	//if the input is empty it resets the jokes state
	const onSearchChange = (text) => {
		if (text.trim() === "") {
			setJokes([]);
		}
		setSearch(text);
	};

	return (
		<div className="App">
			<SearchForm onSearchChange={onSearchChange} />
			<SuggestionBox jokes={jokes} />
		</div>
	);
}

export default App;
