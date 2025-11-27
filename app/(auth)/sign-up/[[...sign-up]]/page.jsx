import { SignUp } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <SignUp
      appearance={{
        elements: {
          optionalFieldLabel: {
            display: "none"   // Hide the "Optional" text
          }
        }
      }}
    />
  )
}

export default Page
