import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect, useState, useMemo, useContext } from 'react';
import { ImBin } from 'react-icons/im';
import { FaPencilAlt } from 'react-icons/fa';
import ModalDelete from '../../components/ModelDelete';
import PaginationDemo from '../../components/PaginationDemo';
import Catagories from '../categories/Catagories';
import { ProductContext } from '../../contexts/ProductProvider';
import { CategoryContext } from '../../contexts/CategoryProvider';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

export default function TableProduct({ handleEdit, search }) {
    const [open, setOpen] = useState(false);
    const [deleteID, setDeleteID] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const { products, handleUpdate } = useContext(ProductContext);
    const { categories } = useContext(CategoryContext);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleDelete = (id) => {
        handleClickOpen();
        setDeleteID(id);
    };
    const confirmDelete = async () => {
        await axios.delete(`https://6a34ec468248ee962fa5cefb.mockapi.io/Products/${deleteID}`);
        handleClose();
        handleUpdate();
    }
    const dataSearch = useMemo(() => {
        return products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    }, [search, products])
    const dataPagination = useMemo(() => {
        return dataSearch.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }, [page, dataSearch, rowsPerPage]);
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">imgUrl</TableCell>
                            <TableCell align="center">Categories Id</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">ACTION</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataPagination.map((t, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {page * rowsPerPage + index + 1}
                                </TableCell>
                                <TableCell align="center">{t.name}</TableCell>
                                <TableCell align="center">
                                    <img src={t.imgUrl} className='h-10 w-20' alt="" />
                                </TableCell>
                                {categories.find(e => e.id == t.categoryId).name}
                                <TableCell align="center">{t.price}</TableCell>
                                <TableCell align="center">
                                    <button onClick={() => handleEdit(t)} className='mr-2 px-4 py-1.5 bg-blue-600 text-white rounded-xl'>
                                        <FaPencilAlt />
                                    </button>
                                    <button onClick={() => handleDelete(t.id)} className='bg-red-600 text-white px-4 py-1.5 rounded-xl'>
                                        <ImBin />
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <PaginationDemo
                    page={page}
                    count={dataSearch.length}
                    handleChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </TableContainer>
            <ModalDelete handleClose={handleClose} open={open} confirmDelete={confirmDelete} />
        </div >
    );
}
