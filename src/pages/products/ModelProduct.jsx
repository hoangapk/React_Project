import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Autocomplete, TextField } from '@mui/material';
import { MdCloudUpload } from "react-icons/md";
import { styled } from '@mui/material/styles';
import { CategoryContext } from '../../contexts/CategoryProvider';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function ModelProduct({ open, handleChangeInput, handleClose, handleAdd, error, product, isEdit, handleImg }) {
  const { categories } = React.useContext(CategoryContext);
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <DialogTitle id="alert-dialog-title">{product.id ? "Modal Edit Product" : "Modal Add Product"}</DialogTitle>
        <DialogContent>
          <TextField
            value={product.name}
            error={!!error.name}
            helperText={error.name}
            onChange={handleChangeInput} name='name' fullWidth sx={{ mt: 2 }} id="outlined-basic" label="Name" variant="outlined" />
          <TextField
            type="number"
            value={product.price}
            error={!!error.price}
            helperText={error.price}
            onChange={handleChangeInput} name="price" fullWidth sx={{ mt: 2 }} id="outlined-basic" multiline rows={2} label="Price" variant="outlined" />
          <Autocomplete
            fullWidth
            disablePortal
            options={categories}
            getOptionLabel={(option) => option.name}
            sx={{ mt: 2 }}
            onChange={(event, newValue) => {
              // Cập nhật giá trị khi người dùng chọn
              handleChangeInput({
                target: { name: "categoryId", value: newValue ? newValue.id : "" },
              });
            }}
            renderInput={(params) => <TextField {...params} label="Category " />}
          />

          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            sx={{ mt: 2 }}
            startIcon={<MdCloudUpload />}
          >
            Upload files
            <VisuallyHiddenInput
              type="file"
              onChange={handleImg}
              multiple
            />
          </Button>
          <img src={product.imgUrl} alt="" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
          <Button onClick={handleAdd}>{product.id ? "Update" : "Add"}</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
