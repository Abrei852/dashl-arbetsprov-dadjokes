import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function SearchForm({ onSearchChange }) {
	return (
		<form>
			<input
				type="text"
				placeholder="Enter search term..."
				onChange={(e) => onSearchChange(e.target.value)}
			/>
			<div className="icon-container">
				<FontAwesomeIcon icon={faSearch} id="icon" />
			</div>
		</form>
	);
}

export default SearchForm;
