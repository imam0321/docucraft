import Link from 'next/link';
import React from 'react'

export const Sidebar = ({ docs }) => {
  const roots = docs.filter(doc => !doc.parent);
  // console.log(roots);
  // object grouping data 
  const nonRoots = docs
    .filter(doc => doc.parent)
    .reduce((acc, doc) => {
      if (!acc[doc.parent]) acc[doc.parent] = [];
      acc[doc.parent].push(doc);
      return acc;
    }, {});

  return (
    <>
      <nav className="hidden lg:mt-10 lg:block">
        <ul role="list" className="border-l border-transparent">

          {
            roots.map(rootNote => (
              <li key={rootNote.id} className="relative">
                <Link
                  className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                  href={`/docs/${rootNote.id}`}
                ><span className="truncate">{rootNote.title}</span>
                </Link>
                {
                  nonRoots[rootNote.id] && (
                    <ul role="list" style={{ opacity: 1 }}>
                      {
                        nonRoots[rootNote.id].map(subRoot => (
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
