function Comments(){
    return(

    <div id="comments" className=' d-flex align-items-center main-comment-section flex-col justify-content-around pt-3'>

        <div className='flex-row mt-3 wrap d-flex justify-content-around align-items-center w-100'>
            <div className="single-comment  mb-2"  style={{width: "20rem", height: "18rem"}}>
                <div className="d-flex justify-content-around align-items-center ">
                    <div className="margin-top-1 d-flex justify-content-center"><img src="../images/user-icon.png" alt="user icon" style={{width: "70%"}}/></div>
                    <div className=" margin-top-1">Luca M. (tester)</div>
                </div>
                <div className="d-flex justify-content-center p-3 overflow-auto">
                    <div >"Questa nuova bibita gassata è diventata subito la mia preferita. Ha un gusto unico che non avevo mai trovato in altre bibite. Consiglio vivamente di provarla!"</div>
                </div>
            </div>
            <div className="single-comment  mb-2" style={{width: "20rem", height: "18rem"}}>
                <div className="d-flex justify-content-around align-items-center">
                    <div className="margin-top-1 d-flex justify-content-center"><img src="../images/user-icon.png" alt="user icon" style={{width: "70%"}}/></div>
                    <div className="margin-top-1 ">Elena V. (tester)</div>
                </div>
                <div className="d-flex justify-content-center p-3 overflow-auto">
                    <div >"Questa nuova versione della Nuka Cola è fantastica! Ha un gusto unico e distintivo che ti fa tornare indietro nel tempo. La combinazione di sapori è perfetta, né troppo dolce né troppo amara. Per ma è un must!"</div>
                </div>
            </div>
            <div className="single-comment  mb-2" style={{width: "20rem", height: "18rem"}}>
            <div className="d-flex justify-content-around align-items-center">
                    <div className="margin-top-1 d-flex justify-content-center"><img src="../images/user-icon.png" alt="user icon" style={{width: "70%"}}/></div>
                    <div className="margin-top-1 ">Sofia L. (tester)</div>
                </div>
                <div className="d-flex justify-content-center p-3 overflow-auto">
                    <div >"La nuova Nuka Cola è assolutamente incredibile. Ha un gusto ricco e complesso che ti conquista al primo sorso. Inoltre, mi piace molto il design della bottiglia, che rende ogni sorso un'esperienza unica. La ricomprerò sicuramente!"</div>
                </div>
            </div>
            <div className="single-comment   mb-2" style={{width: "20rem", height: "18rem"}}>
            <div className="d-flex justify-content-around align-items-center">
                    <div className="margin-top-1 d-flex justify-content-center"><img src="../images/user-icon.png" alt="user icon" style={{width: "70%"}}/></div>
                    <div className=" margin-top-1">Jhon (tester)</div>
                </div>
                <div className="d-flex justify-content-center p-3 overflow-auto h-auto">
                    <div >"Ho provato la nuova bibita gassata oggi e sono rimasta piacevolmente sorpresa! Il sapore è incredibilmente rinfrescante e non troppo dolce. È perfetta per una giornata calda!"</div>
                </div>
            </div>
        </div>
        <hr/>
        <div id="leave-comment" className="d-flex justify-content-center w-100 mb-5">
            <h3>Sei un tester? Lascia un commento</h3>
        </div>
        <div className="d-flex justify-content-around w-100 mb-5">
            <form className="d-flex w-100 justify-content-around">
                <div className="d-flex flex-column">
                    <div className="flex-row d-flex mb-3">
                        <label htmlFor="nameComment" className="m-1">Nome:</label>
                        <input type="text" id="nameComment" className="mb-3"></input>
                    </div>
                    <div className="flex-row d-flex">
                        <label htmlFor="mailComment" className="m-2">Email:</label>
                        <input type="mail" id="mailComment"></input>
                    </div>
                </div>
                    <textarea type="text" id="textComment" className="w-25 form-control"></textarea>
                <div className="d-flex flex-column">
                    <div>
                        <input type="checkbox" id="checkComment"></input>
                        <label htmlFor="checkComment" className="m-3">i want to be anonymous</label>
                    </div>
                    <button>send</button>
                </div>    
            </form>
        </div>
    </div>
    )
}
export default Comments;