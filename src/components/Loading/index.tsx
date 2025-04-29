import React from 'react';
import styles from '@/components/Loading/Loading.module.css'; // Optional for custom styling

const Loading: React.FC = () => {
    return (
        <div id="loading" className={styles.loaderWrapper}>
            <div className={styles.spinner}></div>
            <p><span>Loading...</span></p>
            <p><span>Thank you for checking out my portfolio Website.</span></p>
        </div>
    );
};

export default Loading;
