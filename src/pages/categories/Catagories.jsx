import React, { useContext, useState } from 'react';
import Search from '../../components/Search';
import ModelCategory from './ModelCategory';
import TableCategory from './TableCategory';
import axios from 'axios';
import { CategoryContext } from '../../contexts/CategoryProvider';

const inner = { name: "", description: "" }
function Catagories(props) {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(inner);
    const [error, setError] = useState(inner);
    const [search, setSearch] = useState("");
    const { handleUpdate } = useContext(CategoryContext);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleClickOpen = () => {
        setOpen(true);
        setError(inner);
        setCategory(inner);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeInput = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value })
    }

    const handleAdd = async () => {
        if (validation()) {
            return;
        }
        if (category.id) {
            await axios.put(`https://6a34ec468248ee962fa5cefb.mockapi.io/Categories/${category.id}`, category);
        } else {
            await axios.post("https://6a34ec468248ee962fa5cefb.mockapi.io/Categories", category);
        }
        handleClose();
        handleUpdate();
    }

    const handleEdit = (row) => {
        handleClickOpen();
        setCategory(row);
    }

    const validation = () => {
        const newError = {};
        newError.name = category.name ? "" : "Please enter your name";
        newError.description = category.description ? "" : "Please enter your description";
        setError(newError);
        return Object.values(newError).some(e => e !== ""); // true => co loi 
    }

    return (
        <div>
            <Search title="Categories" handleSearch={handleSearch} handleClickOpen={handleClickOpen} />
            <ModelCategory category={category} error={error} handleAdd={handleAdd} open={open} handleClose={handleClose} handleChangeInput={handleChangeInput} />
            <TableCategory search={search} handleEdit={handleEdit} />
        </div>
    );
}

export default Catagories;