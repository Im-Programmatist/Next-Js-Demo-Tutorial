import Header from '../component/header';
import Head from 'next/head';

const About = () => {
    return(
        <div>
            <Head>
                <title>Tutorial-about</title>
            </Head>
            <Header />
            <p>This is the about page.</p>
            <p>If your app is a plain React.js app (without Next.js), there’s no pre-rendering, so you won’t be able to see the app if you disable JavaScript.</p>
            {/* It’s a “CSS-in-JS” library  */}
            <style jsx>{` 
            p {
                color: red;
            }
            `}</style>
        </div>
    );
}
export default About;