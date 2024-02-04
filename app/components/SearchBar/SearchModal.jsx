"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import useDebounce from "@/hooks";

export const SearchModal = ({ placeholder, Fixed = true }) => {
	const [query, setQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);

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

	const dropdownCls = `${Fixed ? "absolute" : "relative"} z-30 mt-1 p-4 w-full bg-white rounded-md`;
	const linkCls = `bg-[#f2f2f2] border border-[#f2f2f2] rounded text-xs font-medium leading-none min-h-8 px-3 whitespace-nowrap flex items-center justify-center hover:bg-[#dedede]`;
	return (
		<div className="relative w-full">
			<form className="group">
				<div className="relative max-w-[85%]">
					<input
						className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 py-3 px-6 ring-1 ring-slate-200 shadow-sm"
						type="text"
						aria-label="Search"
						placeholder={placeholder}
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
				</div>
			</form>
			{suggestions.length > 0 && (
				<div className={dropdownCls}>
					<div className="flex gap-3 flex-wrap my-4">
						<Link href="#" className={linkCls}>
							cast away
						</Link>
						<Link href="#" className={linkCls}>
							War against machines
						</Link>
						<Link href="#" className={linkCls}>
							prophecy
						</Link>
						<Link href="#" className={linkCls}>
							native american
						</Link>
					</div>
					<h4 className="inline-block text-xs font-bold tracking-wide mt-1.5 mb-1.5 text-left uppercase">
						Trends
					</h4>
					<ul>
						{suggestions.map((suggestion, index) => (
							<li key={index} className="text-sm font-semibold mb-2">
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
