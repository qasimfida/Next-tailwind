"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { SearchIcon } from "../Icons";

export const SearchBar = ({ placeholder }) => {
	const [query, setQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [isFocused, setIsFocused] = useState(false);

	const data = ["List Item 1", "List Item 2", "List Item 3", "List Item 4", "List Item 5"];

	useEffect(() => {
		const fetchSuggestions = () => {
			const filteredSuggestions = data.filter((suggestion) =>
				suggestion.toLowerCase().includes(query.toLowerCase())
			);
			setSuggestions(filteredSuggestions);
		};
		const timeoutId = setTimeout(fetchSuggestions, 300);
		return () => clearTimeout(timeoutId);
	}, [query]);

	return (
		<form className="group relative w-full">
			<SearchIcon />
			<input
				className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-full py-3 pl-5 pr-12 ring-1 ring-slate-200 shadow-sm"
				type="text"
				aria-label="Filter projects"
				placeholder={placeholder}
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
			{isFocused && <div className="backdrop-blur-md mt-3 fixed left-0 right-0 h-full z-20"></div>}
			{isFocused && (
				<div className="absolute z-30 mt-3 px-8 py-6 w-full bg-white border border-gray-300 rounded-md shadow-lg">
					<h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase">
						{query ? "Keywords" : "Trends"}
					</h3>
					{suggestions.map((suggestion, index) => (
						<Link
							href={`/search?q=${encodeURIComponent(suggestion)}`}
							key={index}
							className=" text-sm font-semibold mb-2 flex items-center">
							<span className="mr-6 text-2xl">#</span> {suggestion}
						</Link>
					))}
					<Link href="/" className=" text-sm font-semibold mt-4 flex">
						<div className="mr-3 bg-pink-500 w-6 h-6 rounded-full text-white flex items-center justify-center">
							#
						</div>{" "}
						Show all media
					</Link>
				</div>
			)}
		</form>
	);
};
