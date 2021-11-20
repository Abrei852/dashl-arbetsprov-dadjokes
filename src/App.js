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
			FetchJokes(setJokes, search);
		}, 500);
		return () => clearTimeout(timer);
	}, [search]);

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
