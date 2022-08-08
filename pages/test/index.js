import Header from '../../component/header';
import Image from 'next/image';

const Test = () => {
    return(
        <div>
            <Header />
            <p>This is the test page.</p>
            <Image
                src="/images/profile.png" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Chetan Korde"
            />
        </div>
    );
}
export default Test;