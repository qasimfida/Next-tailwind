import React from "react";

export const Button = ({ className, children }) => {
	const varient = className === "primary" ? "bg-indigo-500 text-white" : "";
	return (
		<button
			type="submit"
			className={`${varient} text-sm leading-6 font-medium py-2 px-5 rounded-full`}>
			{children}
		</button>
	);
};
