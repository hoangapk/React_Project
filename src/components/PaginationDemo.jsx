import { TablePagination } from '@mui/material';

export default function PaginationDemo({ page, handleChangePage, rowsPerPage, handleChangeRowsPerPage,count }) {
    return (

        <TablePagination
            component="div"
            count={count}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    );
}
