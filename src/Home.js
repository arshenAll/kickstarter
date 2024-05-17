import FundNowOr from "./FundNowOr";
import FundedBy from "./FundedBySection";
import VideoDiv from "./VideoDiv";

function Home(){
    return(
        <>
        <div className="d-flex flex-column">
            <div className="p-3 mb-5 ">
                <VideoDiv/>
            </div>
            <div className=" bg-orange align-items-center flex-row justify-content-around d-flex p-2 py-5 ">
                <div  className='row justify-content-around'>
                    <div className='d-flex container-description text-center align-items-center border-small border-brown very-rounded bg-sand order-2 order-md-0 col-12 col-md-6'>
                        <p>
                        In un mondo che avanza a passi da gigante, la Nuova NukaCola è la risposta alla crescente domanda di soddisfazione e vitalità. Con la nostra formula segreta e avanzata, abbiamo creato una bevanda che non solo delizia il palato, ma anche rinvigorisce il corpo e lo spirito. 
                        </p>
                    </div>
                    <img src="../images/nukabottle.jpg" alt="immagine nuka cola" className=' col-10 col-md-6 my-5' style={{minWidth: "10%", maxWidth: "15%" }} ></img>
                </div>
            </div>
        </div>
        <FundedBy/>
        <FundNowOr/>
        </>
    )
}
export default Home;