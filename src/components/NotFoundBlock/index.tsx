import styles from './NotFound.module.scss';
import React from "react";

const NotFoundBlock: React.FC = () => {
    console.log(styles)

    return(
        <div className={styles.root}>
            <h1 >Ничего не найдено</h1>
        </div>
    )
}


export default NotFoundBlock