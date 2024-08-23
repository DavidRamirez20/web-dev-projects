"use client"
import Image from 'next/image'
import styles from 'app/sass/global-error.module.sass'

export default function GlogalError({reset}: ErrorPageProps) {
   return (
      <main className={styles.Error}>
         <h1 className={styles.Error__title}>An error ocurred</h1>
         <Image src='/images/error.jpg' width={700} height={600} alt='Error'/>
         <p className={styles.Error__message}>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
         <button onClick={reset} className={styles.Error__button}>Try again</button>
      </main>
   )
}