import React from "react";
import './Payment.css'
import { TextField,Button,Container,Typography,Box,Grid,} from "@mui/material";
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2';

const PaymentPage = () => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Purchase Successful',
      text: `You have been enrolled to '${title}' plan`,
      confirmButtonText: 'Okay'
    });
  
}

  const location = useLocation()
  const  { title, price  } = location.state

  const courseName = title
  const coursePrice = price

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          align="center"
          fontWeight="bold"
          gutterBottom
        >
          Payment Details
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          color="text.secondary"
          gutterBottom
          sx={{ textAlign: "center", marginBottom: 2 }}
        >
          {courseName} - {coursePrice}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                type="email"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Card Number"
                variant="outlined"
                fullWidth
                required
                inputProps={{ maxLength: 16 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Expiry Date"
                variant="outlined"
                fullWidth
                placeholder="MM/YY"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="CVV"
                variant="outlined"
                fullWidth
                type="password"
                inputProps={{ maxLength: 3 }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Buy
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default PaymentPage;
