import React from "react";

export const Heading = ({ children, className }) => {
	return <h1 className={`text-3xl font-semibold ${className}`}>{children}</h1>;
};
