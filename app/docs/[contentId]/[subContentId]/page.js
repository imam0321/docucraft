import { ContentDisplay } from '@/components/ContentDisplay/ContentDisplay'
import React from 'react'

export default function SubContentPage({params: {subContentId}}) {
  return (
    <>
      <ContentDisplay id={subContentId}/>
    </>
  )
}
