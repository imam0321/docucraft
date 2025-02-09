import { ContentDisplay } from "@/components/ContentDisplay/ContentDisplay";
import { getDocuments } from "@/lib/Doc";
import { getDocumentByAuthor } from "@/utils/doc-util";

export default function AuthorPage({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocuments = getDocumentByAuthor(docs, name);
  
  return <ContentDisplay id={matchedDocuments[0]?.id} />;
}
