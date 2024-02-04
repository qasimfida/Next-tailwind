import { footerLinks, footerSubLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterLinkSection = ({ links }) => (
	<div key={links.id}>
		<h2 className="text-lg font-semibold mb-4">{links.name}</h2>
		{links.links.map((link) => (
			<div key={link.id} className="text-slate-600 pb-3">
				<Link href={link.url} passHref>
					{link.name}
				</Link>
			</div>
		))}
	</div>
);

export const Footer = () => {
	return (
		<div className="bg-gray-100">
			<div className="container mx-auto px-2">
				<div className="border-b border-slate-200 pt-8 pb-6 mb-10">
					<h2 className="text-lg font-semibold">Follow us</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 border-b border-slate-200 pb-8">
					{footerLinks.map((links) => (
						<FooterLinkSection links={links} key={links.id} />
					))}
				</div>
				<div className="py-4 flex justify-between items-center flex-wrap gap-4">
					<Link href="/" passHref>
						<Image src="/logo.png" alt="logo" width={140} height={48} layout="fixed" />
					</Link>
					<div className="flex gap-4 flex-wrap">
						{footerSubLinks.map((link) => (
							<Link className="text-slate-600 text-sm" key={link.id} href={link.url} passHref>
								{link.name}
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
