import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import FundingForm from "./FundingForm";
import { useState } from "react";


function FundNowOr(){
    const [isTrue, setTrue] = useState(false);
    function callForm(){
        if (isTrue) {
            setTrue(false)
        }
        FundingForm(isTrue);
        return(
            
            <FundingForm
            isTrue= {isTrue}
            />
        )
    }
    return( 
        <div>

        <div className='bg-blue  py-5 '>
            <div className="py-5 align-items-center justify-content-center d-flex  p-2">

            <button className='button-fund col-lg-6 col-8'> <Link to="/funding" className='row-element link'> Fund Now</Link> </button>
            <p className="mx-5">OR</p>
            <button className='button-fund col-lg-6 col-8' href="#prototype"><Link to="/About" className='row-element link'>Learn More</Link></button>
        </div>
    </div>
    <div id="appendForm">

    </div>
        </div>
    )
}

export default FundNowOr;