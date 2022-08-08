import Header from '../component/header';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
        return {
            props: {
            allPostsData
        }
    }
}

const HomePage = ({ allPostsData }) => {
    return(
        <>
        <div>
            <Header />
            <p>This is the home page.</p>
            <p>markdown file. - You might have noticed that each markdown file has a metadata section at the top containing title and date. This is called YAML Front Matter, which can be parsed using a library called gray-matter.</p>
            <p>First, install gray-matter which lets us parse the metadata in each markdown file.</p>
        
        </div>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
        </>
    );
}

export default HomePage;