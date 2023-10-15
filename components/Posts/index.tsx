"use client"
import styles from './styles.module.scss';
import { useState } from 'react'

export default function Posts() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button className={styles.button} onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}