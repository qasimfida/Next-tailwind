"use client";
import React from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "@/components/Icons";
import Card from "@/components/Card";

const NextArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div className={`${className} z-1`} onClick={onClick}>
			<ArrowRight
				stroke="#333"
				className="border border-slate-900 rounded-full w-8 h-8 p-1 bg-white"
			/>
		</div>
	);
};

export const PrevArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div className={`${className} z-10`} onClick={onClick}>
			<ArrowLeft
				stroke="#333"
				className="border border-slate-900 rounded-full w-8 h-8 p-1 bg-white"
			/>
		</div>
	);
};

export const Carousel = ({ slides }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1279,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<Slider {...settings}>
			{slides.map((slide, index) => (
				<div key={index} className="px-2 pb-16">
					<Card bookmark={slide} />
				</div>
			))}
		</Slider>
	);
};
