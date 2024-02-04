import React from "react";
import Search from "@/components/SearchBar";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";

export const Header = () => {
	return (
		<>
			<div className="border-b">
				<div className="container w-full mx-auto px-2">
					<div className="flex justify-between items-center py-4 flex-wrap">
						<div className="order-first">
							<Link href="/">
								<Image src="/logo.png" alt="logo" width={100} height={200} layout="responsive" priority />
							</Link>
						</div>
						<div className="w-full md:w-4/12 order-3 md:order-2 mt-3 md:mt-0">
							<Search placeholder="Search for Movies, TV Shows, Themes & Casts" />
						</div>
						<div className="order-2 md:order-3">
							<Button className="">Log in</Button>
							<Button className="primary">Sign up</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="py-4 shadow-md hidden md:block">
				<div className="container w-full mx-auto">
					<div className="flex gap-4">
						{navLinks.map((link, index) => (
							<div className="text-sm font-semibold" key={index}>
								<Link href={link.link}>{link.name}</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
