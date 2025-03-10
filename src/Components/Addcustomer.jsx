import { useState } from "react";
import React from "react";
import Button  from "@material-ui/core/Button";
import TextField  from "@material-ui/core/TextField";
import  Dialog  from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";


export default function Addcustomer(props){

    const[open, setOpen] = useState(false);
    
    const[customers, setCustomers] = useState({
        firstname: '',
        lastname:'',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: ''
    });

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


    const handleInputChange = (e) => {
        setCustomers({...customers, [e.target.name]: e.target.value})
    }    

    const addCustomer = () => {
        props.saveCustomer(customers);
        handleClose();
    }



    return(
        <div>
        
            <Button style={{margin: 10}} variant="outlined" color="primary" onClick={handleClickOpen}>
                Add Customer
            </Button>
        
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

            <DialogTitle id="form-dialog-title">
                New Customer
            </DialogTitle>

                    <DialogContent>

                        <TextField
                            autoFocus
                            margin="dense"
                            name="firstname"
                            value={customers.firstname}
                            onChange={e => handleInputChange(e)}
                            label="Name"
                            fullWidth
                        />

                        <TextField
                            margin="dense"
                            name="lastname"
                            value={customers.lastname}
                            onChange={e => handleInputChange(e)}
                            label="Surname"
                            fullWidth
                        />

                        <TextField
                            margin="dense"
                            name="streetaddress"
                            value={customers.streetaddress}
                            onChange={e => handleInputChange(e)}
                            label="Address"
                            fullWidth
                        />

                        <TextField
                            margin="dense"
                            name="postcode"
                            value={customers.postcode}
                            onChange={e => handleInputChange(e)}
                            label="Postal code"
                            fullWidth
                        />

                        <TextField
                            margin="dense"
                            name="city"
                            value={customers.city}
                            onChange={e => handleInputChange(e)}
                            label="City"
                            fullWidth
                        />

                        <TextField
                            margin="dense"
                            name="email"
                            value={customers.email}
                            onChange={e => handleInputChange(e)}
                            label="Email"
                            fullWidth
                        />

                        <TextField
                            margin="dense"
                            name="phone"
                            value={customers.phone}
                            onChange={e => handleInputChange(e)}
                            label="Phone"
                            fullWidth
                        />

                    </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>

                <Button onClick={addCustomer} color="primary">
                    Save
                </Button>

            </DialogActions>
            </Dialog>
        
        </div>
        );
        

    }



   