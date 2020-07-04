import React from 'react'
import Link, { useRouter } from 'next'

export const config = {
  api: {
    bodyParser: false
  }
}

export default function () {
  return (
    <>
      <div><span>hello word for next apollo-boost ap</span></div>
    </>
  )
}

// next启动没有问题
