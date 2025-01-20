import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";

const Home = () => {
  const latestBooks = sampleBooks.slice(0, 4) as Book[];
  return (
    <>
      <BookOverview {...latestBooks[0]} />

      <BookList
        title="Latest Books"
        books={latestBooks}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
