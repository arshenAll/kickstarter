function FundedBy(){
    return(
        <div className='gx-0 row p-2 py-5 d-flex bg-green align-items-center justify-content-around mt-5 w-100'>
            <div className="col-md-5 col-8 text-center">
                <img src="../images/mrHandyFunded.png" style={{width: "50%"}} alt="mr Handy - Funded by"/>
            </div>
            <div className="col-md-7 col-12">
                <div className="margin-bottom-2">
                    <div >
                        <hr className="w-100"/>
                    </div>
                </div>
                <div className='row justify-content-around'>
                    <div className="d-flex flex-col align-items-center col-3">
                        <div className="margin-top-1"><img src="../images/nike.png" alt="user icon" style={{width: "6rem"}}/></div>
                        <div className="comment-title margin-bottom-1 margin-top-1">NIKE</div>
                        <div className="comment-body margin-bottom-1 ">sportswear brand</div>
                    </div>
                    <div className="d-flex flex-col align-items-center justify-content-around col-3">
                    <div className="margin-top-1"><img src="../images/drake.jpg" alt="user icon" style={{width: "6rem"}}/></div>
                        <div className="comment-title margin-bottom-1 margin-top-1">DRAKE</div>
                        <div className="comment-body margin-bottom-1 ">rapper and singer</div>
                    </div> 
                    <div className="d-flex flex-col align-items-center justify-content-around col-3">
                    <div className="margin-top-1"><img src="../images/bethesda.png" alt="user icon" style={{width: "10rem"}}/></div>
                        <div className="comment-title margin-bottom-1 margin-top-1">BETHESDA</div>
                        <div className="comment-body margin-bottom-1 ">videogames company</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FundedBy;