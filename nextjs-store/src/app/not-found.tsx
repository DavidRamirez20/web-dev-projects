import Image from "next/image";
import Link from "next/link";
import styles from 'app/sass/not-found.module.sass'

export default function NotFound() {
   return (
      <main className={styles.NotFound}>
         <h1 className={styles.NotFound__title}>404</h1>
         <Image
            src="/images/404.jpg"
            alt="404"
            width={800}
            height={500}
         />
         <h2 className={styles.NotFound__subtitle}>Oops, looks like the link went into hiding!</h2>
         <p className={styles.NotFound__description}>But our shop is open 24/7</p>
         <Link className={styles.NotFound__link} href="/store">Let's go shopping!</Link>
      </main>
   );
}