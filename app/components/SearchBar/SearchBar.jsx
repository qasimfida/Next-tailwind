"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { SearchIcon } from "../Icons";
import useDebounce from "@/hooks";

export const SearchBar = ({ placeholder, Fixed = true }) => {
	const [query, setQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [isFocused, setIsFocused] = useState(false);

	const data = ["List Item 1", "List Item 2", "List Item 3", "List Item 4", "List Item 5"];

	const debouncedQuery = useDebounce(query, 300);

	useEffect(() => {
		const fetchSuggestions = () => {
			const filteredSuggestions = data.filter((suggestion) =>
				suggestion.toLowerCase().includes(debouncedQuery.toLowerCase())
			);
			setSuggestions(filteredSuggestions);
		};

		fetchSuggestions();
	}, [debouncedQuery]);

	const dropdownCls = `${
		Fixed ? "absolute" : "relative"
	} z-30 mt-6 p-4 w-full bg-white border border-gray-300 rounded-md shadow-lg`;
	return (
		<div className="relative w-full">
			<form className="group">
				<div className="relative">
					<div className="absolute right-3 transform border-l h-[80%] top-[10%] flex items-center justify-center max-w-[72px] px-3 bg-white">
						<SearchIcon className="relative" />
					</div>
					<input
						className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-full py-3 pl-10 pr-12 ring-1 ring-slate-200 shadow-sm"
						type="text"
						aria-label="Search"
						placeholder={placeholder}
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
					/>
				</div>
			</form>
			{isFocused && suggestions.length > 0 && (
				<div className={dropdownCls}>
					<h4 className="inline-block text-xs font-bold tracking-wide mt-1.5 mb-1.5 text-left uppercase">
						Trends
					</h4>
					<ul>
						{suggestions.map((suggestion, index) => (
							<li key={index} className=" font-semibold mb-2 px-5 py-2 rounded hover:bg-[#dedede] ">
								<Link
									href={`/search?q=${encodeURIComponent(suggestion)}`}
									className="flex items-center">
									<span className="mr-6 text-2xl">#</span> {suggestion}
								</Link>
							</li>
						))}
						<li>
							<Link href="/search" className="text-sm font-semibold mt-4 flex items-center">
								<div className="mr-3 bg-pink-500 w-6 h-6 rounded-full text-white flex items-center justify-center">
									#
								</div>
								Show all media
							</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};
