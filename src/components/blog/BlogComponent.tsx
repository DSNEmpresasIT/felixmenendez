import React from 'react'
import { BlogContextProvider } from 'src/context/blog-context'
import { BlogRouter } from './BlogRouter'
import type { Keys } from 'src/util/types'
import { BlogAsideSection } from './BlogAsideSection'

export const BlogComponent = ({ keys }: { keys: Keys }) => {
  return (
    <BlogContextProvider>
      <div className="row justify-content-center flex-row pt-4">
        <BlogRouter keys={keys} />
        <BlogAsideSection keys={keys} />
      </div>
    </BlogContextProvider>
  )
}
