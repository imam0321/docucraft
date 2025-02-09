import Image from 'next/image'
import React from 'react'

export const Search = () => {
  return (
    <div>
      <div className="relative hidden lg:block lg:max-w-md lg:flex-auto">
        <button
          type="button"
          className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
        >
          <Image src="/icons/search.svg" width={20} height={20} alt='searchIcon' />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 focus:border-none focus:outline-none"
          />
        </button>
      </div>

    </div>
  )
}
