import React from "react";
import "./style.css";

function SuggestionBox({ jokes }) {
	if (jokes.length < 1) {
		return (jokes = null);
	}
	return (
		<div className="container">
			<ul>
				{jokes.map((item, id) => (
					<li key={id}>{item.joke}</li>
				))}
			</ul>
		</div>
	);
}

export default SuggestionBox;
