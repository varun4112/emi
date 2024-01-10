import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { TextField } from '@mui/material';
import "./body.css"

function Body() {
    const [amount,setAmount]=useState(0);
    const [tenure,setTenure]=useState(0);
    const [rate,setRate]=useState(0);
    const[emi,setEmi]=useState(0);

    function calc(e){
        // E = P x R x (1+r)^n/((1+r)^N – 1,
        let spc=0;
        let em=0;
        let r=0;
        let t=0;

        
        r = rate / (12 * 100); // one month interest
        t = tenure * 12; // one month period
        spc=(1+r)**t;
        em = ((amount * r * spc )/(spc - 1));
        console.log("spc",spc);

        
        console.log("r",r);
        console.log("amount",amount);
        console.log("tenu",t);
        console.log("rate",r);

        setEmi(Math.floor(em))
        console.log("emi",emi);
    }


  return (
    <>
    <Form>
    <TextField style={{margin:"5px"}} id="outlined-basic" label="Loan Amount:" variant="outlined" onChange={(e)=>setAmount(e.target.value)} />
    <br />
    <TextField style={{margin:"5px"}} id="outlined-basic" label="tenure:" variant="outlined" onChange={(e)=>setTenure(e.target.value)} />
    <br />
    <TextField style={{margin:"5px"}} id="outlined-basic" label="Intrest Rate" variant="outlined" onChange={(e)=>setRate(e.target.value)} />
    <br />
    <Button onClick={calc}>Submit</Button>
    </Form>
    <h4>Your EMI :{emi}</h4>
    </>
  )
}

export default Body