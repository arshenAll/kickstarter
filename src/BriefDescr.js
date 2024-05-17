/* import './BriefDescr.css' */

function BriefDescr(){
    return(
        <div id="summary">
       
        <div className="bg-orange vh100 align-items-center flex-row justify-content-around d-flex p-2">
            <div  className='flex-row justify-content-around d-flex wrap gap-1'>
                <div className=' align-items-center border-small border-brown bg-sand col-md-6 col-10 order-2 order-md-0'>
                    <p>
                    In un mondo che avanza a passi da gigante, la Nuova NukaCola è la risposta alla crescente domanda di soddisfazione e vitalità. Con la nostra formula segreta e avanzata, abbiamo creato una bevanda che non solo delizia il palato, ma anche rinvigorisce il corpo e lo spirito. 
                    </p>
                </div>
                <img src="../images/nukabottle.jpg" alt="immagine nuka cola" className='image-small col-10 order-1'></img>
            </div>
        </div>
    </div>
    )
}
export default BriefDescr;
