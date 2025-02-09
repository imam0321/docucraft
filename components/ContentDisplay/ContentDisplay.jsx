import { getDocumentContent } from '@/lib/Doc';
import Link from 'next/link';

export const ContentDisplay = async ({ id }) => {
  const documentContent = await getDocumentContent(id);
  
  return (
    <>
      <article className="prose dark:prose-invert">
        <h2>{documentContent.title}</h2>
        <div>
          <span>Published on : {documentContent.date}</span> by {" "} <Link href={`/authors/${documentContent.author}`}>{documentContent.author}</Link> {" "} under the {" "} <Link href={`/categories/${documentContent.category}`}>{documentContent.category}</Link> category.
        </div>
        <div>
          {
            documentContent.tags && documentContent.tags.map(tag => (
              <Link key={tag} href={`/tags/${tag}`} className='bg-gray-200 p-1 rounded-md mr-2 text-xs'>{tag}</Link>
            ))
          }
        </div>
        <div
          className="lead"
          dangerouslySetInnerHTML={{ __html: documentContent.contentHtml }}
        />
      </article>

    </>
  )
}
