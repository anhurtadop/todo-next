"use client"
import React from 'react';

export default function Home() {
  console.log("Home");

  const dismiss = (event: any) => {
    console.log(event);
  }

  return (
    <section>
      <h1>Home</h1>
      <button className="bg-blue-500" onClick={() => dismiss}>Click2</button>
    </section>
  )
}
