import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
	title: "Page title",
	description: "Page description",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				<div className="container w-full mx-auto pt-8">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
