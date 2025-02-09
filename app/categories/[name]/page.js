import { ContentDisplay } from "@/components/ContentDisplay/ContentDisplay";
import { getDocuments } from "@/lib/Doc";
import { getDocumentByCategory } from "@/utils/doc-util";

export default function CategoriesPage({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocuments = getDocumentByCategory(docs, name);

  return <ContentDisplay id={matchedDocuments.id} />;
}
