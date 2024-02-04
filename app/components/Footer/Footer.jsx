import { footerLinks, footerSubLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
	return (
		<div className=" bg-gray-100">
			<div className="container w-full mx-auto px-2">
				<div className="grid grid-cols-1 border-b border-slate-200 pt-8 pb-6 mb-10">
					<h2 className="text-lg font-semibold">Follow us</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 border-b border-slate-200 pb-8">
					{footerLinks.map((links) => (
						<div className="" key={links.id}>
							<h2 className="text-lg font-semibold mb-4">{links.name}</h2>
							{links.links.map((link) => (
								<div key={link.id} className="text-slate-600 pb-3">
									<Link href={link.url}>{link.name}</Link>
								</div>
							))}
						</div>
					))}
				</div>
				<div className="grid grid-cols-1 py-4">
					<div className="md:flex items-center">
						<Link href="/" className="mr-10">
							<Image src="/logo.png" alt="logo" width={100} height={200} layout="responsive" />
						</Link>
						<div className="flex gap-4 flex-wrap">
							{footerSubLinks.map((link) => (
								<div key={link.id} className="text-slate-600 text-sm">
									<Link href={link.url}>{link.name}</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
