/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2023-06-08 21:00:42
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2023-06-12 11:09:23
 * @FilePath: \workplace\React\nextjs-blog\pages\index.js
 * @Description: 
 */
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.)
        </p>
        
      </section>
    </Layout>
  )
}
