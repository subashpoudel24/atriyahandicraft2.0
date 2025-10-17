import { useState, useEffect } from 'react';
import Preloader from './Preloader';
import Spinner from './Spinner';
import Loading from './Loading';
import '../styles/loading.css';

export default function LoaderExample() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Preloader isLoading={isLoading} />
            
            {!isLoading && (
                <div style={{ padding: '20px' }}>
                    <h1>Content Loaded!</h1>
                    
                    <div style={{ margin: '20px 0' }}>
                        <h3>Spinner Component:</h3>
                        <Spinner />
                    </div>
                    
                    <div style={{ margin: '20px 0' }}>
                        <h3>Loading Component:</h3>
                        <Loading />
                    </div>
                </div>
            )}
        </div>
    );
}