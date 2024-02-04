import { bookmarks, fromPDF, toPDF } from "@/constants";
import Card from "@/components/Card";
import Heading from "@/components/Heading";
import Carousel from "@/components/Carousel";

const BookmarkGrid = ({ title, bookmarks }) => (
	<>
		<Heading className="mb-5">{title}</Heading>
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-16">
			{bookmarks.map((bookmark, index) => (
				<div key={bookmark.id || index}>
					<Card bookmark={bookmark} />
				</div>
			))}
		</div>
	</>
);

export default function Home() {
	return (
		<div className="px-4 md:px-16 mt-8">
			<BookmarkGrid title="Your Bookmarks" bookmarks={bookmarks} />
			<Heading className="mb-5">Convert from PDF</Heading>
			<div className="-mb-1">
				<Carousel slides={fromPDF} />
			</div>
			<BookmarkGrid title="Convert from PDF" bookmarks={fromPDF} />
			<BookmarkGrid title="Convert to PDF" bookmarks={toPDF} />
		</div>
	);
}
