import { ContentDisplay } from '@/components/ContentDisplay/ContentDisplay'
import React from 'react'

export default function page({params: {contentId}}) {
  return (
    <>
    <ContentDisplay id={contentId}/>
    </>
  )
}

