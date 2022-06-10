import React from 'react'
import {Grid, Paper,Container,Typography,TextField,InputLabel,Input,FormHelperText,FormControl,Card,CardContent,Button } from '@mui/material' //import 

const ApplicationForm=()=>{
    return(

        <Container>
             <Grid container xs={6} sx={{mx:"auto"}}>
                <Card>
                    <CardContent>
                        <form action="" method="post">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField size="small" label="First name" placeholder="Enter first name" variant="outlined" fullWidth />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField size="small" label="Last name" placeholder="Enter last name" variant="outlined" fullWidth />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField size="small" type="email" label="Email" placeholder="Enter email" variant="outlined" fullWidth />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField size="small" type="number" label="Phone" placeholder="Enter phone number" variant="outlined" fullWidth />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField size="small"  label="Message" multiline rows={4} placeholder="Enter message..." variant="outlined" fullWidth />
                                </Grid>
                                <Grid xs={12} item>
                                    <Button type="submit" variant="contained" color="primary" fullWidth>SUBMIT</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Container>

    )
}

export default ApplicationForm