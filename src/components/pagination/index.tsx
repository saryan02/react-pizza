import React from 'react'
import ReactPaginate from "react-paginate";
import styles from './Pagination.module.scss'

type PaginationProps = {
    onChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({onChange}) => {


    return(
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="< "
            onPageChange={(e) => onChange(e.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}

            renderOnZeroPageCount={null}
        />
    )

}

export default Pagination