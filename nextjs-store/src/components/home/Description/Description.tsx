"use client"

import Image from "next/image"
import { useState } from "react";
import classNames from "classnames/bind";
import styles from './Description.module.sass';

export const Description = () => {

   const [hasBorder, setBorder] = useState(false);

   const handleClick = () => {setBorder(!hasBorder);}

   const cx = classNames.bind(styles);

   const buttonStyles = cx('Description__button',{
      'Description__button--border': hasBorder
   })

   return(
      <section className={styles.Description}>
         <button onClick={handleClick} className={buttonStyles}>
            <div className={styles.Description__imageContainer}>
               <Image
                  src="/images/shop.jpg" 
                  alt="shop_image"  
                  fill
               />
            </div>
         </button>
         <div className={styles.Description__textContainer}>
            <h2 className={styles.Description__title}>Ecomerce</h2>
            <p className={styles.Description__text}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
         </div>
      </section>
   )
}