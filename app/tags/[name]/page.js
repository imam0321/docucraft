import { ContentDisplay } from "@/components/ContentDisplay/ContentDisplay";
import { getDocuments } from "@/lib/Doc";
import { getDocumentByTag } from "@/utils/doc-util";

export default function TagsPage({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocuments = getDocumentByTag(docs, name);

  return <ContentDisplay id={matchedDocuments[0].id} />;
}
