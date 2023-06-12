/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2023-06-09 13:52:06
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2023-06-12 20:18:37
 * @FilePath: \workplace\React\nextjs-blog\components\layout.js
 * @Description: 
 */
import styles from './layout.module.css'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Chen Zhiyu'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <span className={utilStyles.colorInherit}>{name}</span>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            ← Back to home
          </Link>
        </div>
      )}
    </div>
  )
}