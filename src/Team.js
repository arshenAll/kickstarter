function Team(){
    return(
        <>
        <div className="px-3 row">
            <div className="px-5 col-2 text-center">
                <img src="../images/nukacola_label.png" alt="nuka cola logo" style={{width: "80%"}}></img>
            </div>
            <div className="px-5 col-9">
                <h1>NUKA COLA inc</h1>
                <h3>IL NOSTRO TEAM</h3>
                <div className="row mt-5">
                <img src="../images/Creator.png" alt="creator" style={{width: "15rem"}}></img>
                <div className="col-8 d-flex align-items-center">
                <div>
                <h5 > John-Caleb Bradberton </h5>
                <p >Il nostro amato creatore, ha iniziato da solo e pian piano, con risparmi del lavoro ha potuto fare un accordo con una società di imbottigliamento, per poi ampiare ancora di più e collaborare con un team di scienziati alimentari per la ricerca della formula perfetta!</p>

                </div>
                </div>
                </div>
                <hr/>
                <div className="row mt-5">
                <img src="../images/scientist.jpeg" alt="scientist-team" style={{width: "15rem"}}></img>
                <div className="col-8 d-flex align-items-center">
                <div>
                <h5 > Il nostro team di scienziati </h5>
                <p >Determinati gran lavoratori, è solo grazie a loro che possiamo avere la nostra amatissima Cola. Con gran spirito d'iniziativa sono sempre alla ricerca della formula perfetta</p>

                </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Team;