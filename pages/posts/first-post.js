/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2023-06-08 21:45:42
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2023-06-09 13:52:36
 * @FilePath: \workplace\React\nextjs-blog\pages\posts\first-post.js
 * @Description: 
 */
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>惟有饮者留其名</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          Back to home
        </Link>
      </h2>
    </Layout>
  )
}