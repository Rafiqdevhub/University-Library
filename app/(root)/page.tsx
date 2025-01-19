import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constants";

const page = () => {
  return (
    <>
      <BookOverview {...sampleBooks} />

      <BookList
        title="Latest Books"
        books="sampleBooks"
        containerClassName="mt-28"
      />
    </>
  );
};

export default page;
