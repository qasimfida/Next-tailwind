import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Bookmark } from "@/components/Icons";

export const Card = ({ bookmark }) => {
	const { title, para, icon, link } = bookmark;
	return (
		<Link href={link} passHref>
			<div className="block relative border border-gray-200 rounded-lg px-6 py-10 hover:shadow-lg transition-all duration-300 min-h-60 group">
				<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
					<Bookmark stroke="#979797" />
				</div>
				<Image src={`/images/${icon}`} alt={title} width={50} height={50} />
				<h2 className="text-xl font-semibold mt-4 mb-2 line-clamp-1">{title}</h2>
				<p className="text-gray-400 line-clamp-2">{para}</p>
			</div>
		</Link>
	);
};
