import React, { use, useContext, useState } from 'react';
import axios from 'axios';
import Search from '../../components/Search';
import ModelProduct from './ModelProduct';
import TableProduct from './TableProduct';
import Catagories from '../categories/Catagories';
import LOGO from '../../assets/images/logo.png';
import { uploadImageToCloudinary } from '../../config/cloudinary';
import { useViewTransitionState } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductProvider';


const inner = { name: "", imgUrl: LOGO, categoryId: "", price: "" }
function Products(props) {
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState(inner);
    const [error, setError] = useState(inner);
    const [search, setSearch] = useState("");
    const { handleUpdate } = useContext(ProductContext);


    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const handleClickOpen = () => {
        setOpen(true);
        setError(inner);
        setProduct(inner);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeInput = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handleAdd = async () => {
        if (validation()) {
            console.log(error);

            return;
        }
        console.log(product);

        const imgUrl = await uploadImageToCloudinary(product.imgUrl, "products");
        if (product.id) {
            await axios.put(`https://6a34ec468248ee962fa5cefb.mockapi.io/Products/${product.id}`, { ...product, imgUrl: imgUrl });
        } else {
            await axios.post("https://6a34ec468248ee962fa5cefb.mockapi.io/Products", { ...product, imgUrl: imgUrl });
        }
        handleClose();
        handleUpdate();
    }
    const handleEdit = (row) => {
        handleClickOpen();
        setProduct(row);
    }
    const validation = () => {
        const newError = {};
        newError.name = product.name ? "" : "Please enter your name";
        newError.categoryId = product.categoryId ? "" : "Please enter your category ID";
        newError.price = product.price ? "" : "Please enter your price";
        setError(newError);
        return Object.values(newError).some(e => e !== "");
    }
    const handleImg = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProduct({ ...product, imgUrl: reader.result });
            };
            reader.readAsDataURL(file);
        }
    }
    return (
        <div>
            <Search title="Products" handleSearch={handleSearch} handleClickOpen={handleClickOpen} />
            <ModelProduct handleImg={handleImg} product={product} error={error} handleAdd={handleAdd} open={open} handleClose={handleClose} handleChangeInput={handleChangeInput} />
            <TableProduct search={search} handleEdit={handleEdit} />
        </div>
    );
}

export default Products;