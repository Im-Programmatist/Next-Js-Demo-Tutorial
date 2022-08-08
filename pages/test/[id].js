
import Header from '../../component/header';
import Layout from '../component/layout';
import Head from 'next/head';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }

const TestId = () => {
    return(
        <div>      
            <Layout>
                {postData.title}
                <br />
                {postData.id}
                <br />
                {postData.date}
            </Layout>      
            <Layout>
                <Header />
                <p>This is the test id page.</p>
                <Head>
                    <title>Style and id page</title>
                </Head>
                <h1>First Post</h1>
                <h2>
                    <Link href="/">
                    <a>Back to home</a>
                    </Link>
                </h2>
            </Layout>
        </div>
    );
}
export default TestId;