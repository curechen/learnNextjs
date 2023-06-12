/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2023-06-12 16:47:07
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2023-06-12 20:19:13
 * @FilePath: \workplace\React\nextjs-blog\pages\posts\[id].js
 * @Description: 
 */
import Layout from '../../components/layout';

import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  console.log(postData)
  
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}