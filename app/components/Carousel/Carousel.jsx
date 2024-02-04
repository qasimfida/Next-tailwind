"use client"
import React from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "@/components/Icons";
import Card from "@/components/Card";

const Arrow = ({ className, onClick, Left }) => {
	const cls = "border border-slate-900 rounded-full w-8 h-8 p-1 bg-white stroke-[#333] ";
	return (
		<div className={`${className} z-10 cursor-pointer`} onClick={onClick}>
			{Left ? <ArrowLeft  className={cls} /> : <ArrowRight  className={cls} />}
		</div>
	);
};

const sliderSettings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 1,
	nextArrow: <Arrow Left={false} />,
	prevArrow: <Arrow Left={true} />,
	responsive: [
		{
			breakpoint: 1280,
			settings: { slidesToShow: 4 },
		},
		{
			breakpoint: 1024,
			settings: { slidesToShow: 2 },
		},
		{
			breakpoint: 600,
			settings: { slidesToShow: 1 },
		},
	],
};

export const Carousel = ({ slides }) => (
	<Slider {...sliderSettings}>
		{slides.map((slide, index) => (
			<div key={index} className="px-2 pb-16">
				<Card bookmark={slide} />
			</div>
		))}
	</Slider>
);
