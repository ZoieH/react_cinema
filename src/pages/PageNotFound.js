import { Link } from 'react-router-dom';
import { Button } from '../component/Button';

export const PageNotFound = () => {
    return (
        <main>
            <section className="flex flex-col justify-center px-2">
                <div className="flex flex-col items-center my-4">
                    <p className="text-5xl text-gray-700 my-10 dark:text-white">The signal is blown away</p>
                    <div className="max-w-lg">
                        <img />
                    </div>
                </div>
                <div className='flex justify-center my-4'>
                    <Link to="/">
                    <Button>Back to Home</Button>
                    </Link>
                    
                </div>
            </section>
        </main>
    )
}