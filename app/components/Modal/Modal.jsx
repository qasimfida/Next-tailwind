"use client";
import { CloseIcon } from "../Icons";

export const Modal = ({ isOpen, onClose, children, icon }) => {
	return (
		<div
			className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 transform ${
				isOpen ? "translate-x-0" : "-translate-x-full"
			} transition-transform duration-300 ease-in-out`}
			onClick={onClose}>
			<div
				className="bg-white h-full min-w-[250px] max-w-full p-5"
				onClick={(e) => e.stopPropagation()}>
				<button className="absolute top-4 right-0 p-4 z-40 " onClick={onClose}>
					{icon || <CloseIcon />}
				</button>
				{children}
			</div>
		</div>
	);
};
