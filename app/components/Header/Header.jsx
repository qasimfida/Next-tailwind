"use client";
import React, { useState } from "react";
import SearchBar, { SearchModal } from "@/components/SearchBar";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";
import Modal from "../Modal";
import { MenuIcon, SearchIcon } from "../Icons";

const Logo = () => (
	<Link href="/" passHref>
		<Image src="/logo.png" alt="logo" width={140} height={48} layout="fixed" priority />
	</Link>
);

const Navigation = () => (
	<div className="flex gap-4">
		{navLinks.map((link, index) => (
			<Link href={link.link} className="text-sm font-semibold text-nowrap " key={index}>
				{link.name}
			</Link>
		))}
	</div>
);

export default Modal;

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	const handleSearchOpen = () => setIsSearchOpen(true);
	const handleSearchClose = () => setIsSearchOpen(false);

	const handleMenuOpen = () => setIsMenuOpen(true);
	const handleMenuClose = () => setIsMenuOpen(false);

	const linkCls = `rounded text-sm leading-none min-h-8 p-4 whitespace-nowrap flex items-center justify-start hover:bg-[#f2f2f2]`;

	return (
		<>
			<div className="border-b">
				<div className="container mx-auto px-2">
					<div className="flex justify-between items-center py-4 flex-wrap">
						<div className="flex justify-between items-center gap-3">
							<div className="flex md:hidden cursor-pointer">
								<MenuIcon onClick={handleMenuOpen} />
							</div>
							<Logo />
						</div>
						<div
							className="flex md:hidden justify-between items-center px-4 cursor-pointer"
							onClick={handleSearchOpen}>
							<SearchIcon />
						</div>
						<div className="w-full hidden md:flex md:w-4/12 mt-3 md:mt-0  ">
							<SearchBar placeholder="Search for Movies, TV Shows, Themes & Casts" />
						</div>
						<div className="gap-2 hidden md:flex">
							<Button>Login</Button>
							<Button variant="primary">Sign up</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="py-4 shadow-md hidden md:block">
				<div className="container mx-auto">
					<Navigation />
				</div>
			</div>
			<Modal isOpen={isSearchOpen} onClose={handleSearchClose} icon="Cancel">
				<SearchModal Fixed={false} placeholder="Search" />
			</Modal>
			<Modal isOpen={isMenuOpen} onClose={handleMenuClose}>
				<div className="gap-2 flex flex-col justify-start">
					<div className="border-b border-b-[#f2f2f2]">
						<Link className={linkCls} href="#">
							Wishlist
						</Link>
						<Link className={linkCls} href="#">
							Movies
						</Link>
						<Link className={linkCls} href="#">
							TV Shows
						</Link>
						<Link className={linkCls} href="#">
							Clips
						</Link>
					</div>
					<div className="border-b border-b-[#f2f2f2]">
						<div
							className={
								"rounded text-xs font-bold leading-none min-h-8 p-3 whitespace-nowrap flex items-center justify-start"
							}
							href="#">
							SETTINGS
						</div>
						<Link className={linkCls} href="#">
							SignIn
						</Link>
						<Link className={linkCls} href="#">
							Login
						</Link>
					</div>
					<div className="border-b border-b-[#f2f2f2]">
						<div
							className={
								"rounded text-xs font-bold leading-none min-h-8 p-3 whitespace-nowrap flex items-center justify-start"
							}
							href="#">
							SUPPORT
						</div>
						<Link className={linkCls} href="#">
							Help
						</Link>
						<Link className={linkCls} href="#">
							Contact Us
						</Link>
					</div>
				</div>
			</Modal>
		</>
	);
};
