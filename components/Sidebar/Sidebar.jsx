"use client"
import { getDocumentByAuthor, getDocumentByCategory, getDocumentByTag } from '@/utils/doc-util';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';


export const Sidebar = ({ docs }) => {
  const pathName = usePathname();
  const [rootNodes, setRootNodes] = useState([]);
  const [nonRootNodesGrouped, setNonRootNodesGrouped] = useState({});

  useEffect(() => {
    let matchedDocs = docs;

    if (pathName.includes("/tags")) {
      const tag = pathName.split('/')[2];
      matchedDocs = getDocumentByTag(docs, tag)
    }
    else if (pathName.includes("/authors")) {
      const author = pathName.split('/')[2];
      matchedDocs = getDocumentByAuthor(docs, author)
    }
    else if (pathName.includes("/categories")) {
      const category = pathName.split('/')[2];
      matchedDocs = getDocumentByCategory(docs, category)
    }

    const roots = matchedDocs.filter(doc => !doc.parent);
    const nonRoots = matchedDocs
      .filter(doc => doc.parent)
      .reduce((acc, doc) => {
        if (!acc[doc.parent]) acc[doc.parent] = [];
        acc[doc.parent].push(doc);
        return acc;
      }, {});

    setRootNodes([...roots]);
    setNonRootNodesGrouped({...nonRoots });

  }, [pathName, docs])



  return (
    <>
      <nav className="hidden lg:mt-10 lg:block">
        <ul role="list" className="border-l border-transparent">

          {
            rootNodes.map(rootNote => (
              <li key={rootNote.id} className="relative">
                <Link
                  className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                  href={`/docs/${rootNote.id}`}
                ><span className="truncate">{rootNote.title}</span>
                </Link>
                {
                  nonRootNodesGrouped[rootNote.id] && (
                    <ul role="list" style={{ opacity: 1 }}>
                      {
                        nonRootNodesGrouped[rootNote.id].map(subRoot => (
                          <li key={subRoot.id}>
                            <Link
                              className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                              href={`/docs/${rootNote.id}/${subRoot.id}`}
                            ><span className="truncate">{subRoot.title}</span>
                            </Link>
                          </li>
                        ))
                      }
                    </ul>
                  )
                }
              </li>
            ))
          }
        </ul>
      </nav>
    </>
  )
}
