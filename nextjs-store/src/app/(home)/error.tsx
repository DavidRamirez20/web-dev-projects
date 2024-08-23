"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {

   useEffect(() => {
      console.log(error)
   }, [])

   return (
      <div style={{
         padding: '10rem',
      }}>
         <h1>:c</h1>
         <p>¡An error ocurred!</p>
         <button onClick={reset}>Try again</button>
      </div>
   )
}