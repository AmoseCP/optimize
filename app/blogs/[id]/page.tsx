'use client'

import React, {useEffect} from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function Blog(){
  const router = useRouter()
  console.log(router)
  const pathname = usePathname()
  console.log(pathname)
  const searchParams = useSearchParams()
  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    console.log("url", url)
  }, [pathname, searchParams])
  return (
    <div>
      <h1>Blog</h1>
    </div>
  )
}