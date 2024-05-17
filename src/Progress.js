import React, { useEffect, useState } from "react";
import FundingForm from "./FundingForm";
let barPercentage = 0;
let total = 12000;
function Progress(){

    const [showForm, setShowForm] = useState(false);
    const [formValues, setFormValues] = useState([]);
     useEffect(() => { 

        const initialFormValues = [];
        
        initialFormValues[0]={ nome: "anonimo", amount: 100 };
        initialFormValues[1]={ nome: "anonimo", amount: 100 };
        initialFormValues[2]={ nome: "anonimo", amount: 100 };
        initialFormValues[3]={ nome: "anonimo", amount: 100 };
        setFormValues(initialFormValues);
     }, []) 
    /* const { barStyle, setBarStyle } = useContext(BarContext); */
        /* const barStyle = useContext(BarContext); */
        /* console.log(barStyle); */
        function toggleShowForm(){
        setShowForm(!showForm);
    }
    let dispName; let dispAmount; 
    function takeChildValue(name, amount){
         dispName =   name;
         dispAmount = amount;
        console.log(dispName + ":) +" +dispAmount);
        setFormValues((prevValues) =>[ ...prevValues, {name: dispName, amount: dispAmount}]);
        /* faiCose(dispName, dispAmount); */
       /*  console.log(formValues[formValues.length-1].name); */
        updateBar(dispAmount);
    }
    useEffect(() => {
        console.log(formValues);
    }, [formValues]); // Esegui questa funzione ogni volta che formValues cambia
    /* let barPercentage = 40 + "%"; */
   
    const [barStyle, setBarStyle] = useState("3%");
    function updateBar(dispAmount){
        console.log("quanto "+dispAmount)
       barPercentage += (dispAmount * 100)/total;
       if(barPercentage>100) barPercentage = 100;
        console.log(barPercentage);
        setBarStyle(barPercentage +"%")
    }
   
    return(
        <>
        <div className = "d-flex justify-content-center">

          
        </div>
        <div id="fund-progr"  className='row justify-content-center align-items-center p-2 px-1 mb-5 px-xl-5'>
            
            <div className="d-flex justify-content-xl-between justify-content-center col-xl-2 col-12 flex-xl-column">
                <div className='card d-flex bg-orange rounded py-2 px-5 justify-content-center text-center' style={{maxHeight: "10rem"}}>
                    <div className="comment-title ">TIER 1</div>
                    <div >by pledging</div>
                    <div className='my-3'>
                        <span className="bg-white mb-5 p-2 rounded">
                        $50
                        </span>
                    </div>
              
                </div>
                <div className='card flex-col d-flex bg-orange rounded py-2 px-5  justify-content-center text-center' style={{maxHeight: "10rem"}}>
                    <div className="comment-title">TIER 1</div>
                    <div >by pledging</div>
                    <div className='my-3'>
                        <span className="bg-white mb-5 p-2 rounded">
                        $100
                        </span>
                    </div>
              
                </div>
                <div className='card flex-col d-flex bg-orange rounded py-2 px-5  justify-content-center text-center' style={{maxHeight: "10rem"}}>
                    <div className="comment-title ">TIER 1</div>
                    <div >by pledging</div>
                    <div className='my-3'>
                        <span className="bg-white mb-5 p-2 rounded">
                        $500
                        </span>
                    </div>
              
                </div>
                <div className='card flex-col d-flex bg-orange rounded py-2 px-5  justify-content-center text-center' style={{maxHeight: "10rem"}}>
                    <div className="comment-title d-flex justify-content-center">TIER 1</div>
                    <div className="d-flex justify-content-center">by pledging</div>
                    <div className='my-3'>
                        <span className="bg-white mb-5 p-2 rounded">
                        $1000
                        </span>
                    </div>
              
                </div>
            </div>
            <div className='flex-column col-xl-8 col-11 d-flex bg-blue rounded p-5 my-3' style={{minHeight: "50rem"}}>
                <div>
                    <h3>Donazioni</h3>
                    <hr/>
                    <div className="p-3">
                        <p><p>

Con il tuo aiuto, possiamo portare la NukaCola nel cuore di ogni casa, offrendo a milioni di persone un'esperienza unica e sorprendente. Ogni contributo, grande o piccolo, ci avvicina sempre di più al nostro obiettivo di condividere il gusto del futuro con il mondo intero. <br/>

Ecco cosa puoi ottenere con la tua donazione: <br/><br/>

  <strong>  Livello d'Entrata - $10 </strong> : Riceverai un ringraziamento speciale sui nostri canali social media e una foto esclusiva della squadra dietro la NukaCola. <br/>
  <br/>
      <strong>  Livello Intermedio - $25  </strong>  : Oltre al ringraziamento sui social media, riceverai anche un adesivo esclusivo della Nuova NukaCola per mostrare il tuo sostegno ovunque tu vada e un poster tra tre a scelta. <br/>
      <br/>
     <strong>   Livello Avanzato - $50  </strong>  : Riceverai un set di adesivi esclusivi della Nuova NukaCola, così potrai decorare il tuo laptop, telefono o qualsiasi altra cosa con stile. Inoltre potrai scegliere due tra i tre poster diponibili <br/>
     <br/>
     <strong>   Livello Premium - $100  </strong>  : Oltre agli adesivi e tutti i poster, riceverai una bottiglia autografata della NukaCola e un biglietto VIP per il nostro evento di lancio esclusivo. <br/>
     <br/>
     <strong>   Livello da Collezionista - $250  </strong>  : Riceverai una collezione completa delle edizioni speciali della Nuova NukaCola, inclusi gusti unici e rari. <br/>
     <br/>
     <strong>   Livello da Sostenitore Eccellente - $500+  </strong>  : Oltre a tutti i premi precedenti, sarai invitato a partecipare a una visita guidata esclusiva alla nostra fabbrica di produzione, dove potrai vedere come nasce la magia della Nuova NukaCola e dove ti verranno dati in omaggio le edizioni limitate delle figures delel nostre simpatiche mascotte!  <br/>
     <br/>
Con il tuo supporto, possiamo portare la Nuova NukaCola al livello successivo e creare un futuro più gustoso per tutti. Grazie per essere parte di questa incredibile avventura! <br/>
<br/>
Grazie ancora per il tuo sostegno, <br/>
<br/>
Il Team NukaCola </p>
</p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-xl-between justify-content-center col-xl-2 col-12 flex-xl-column">
                
                <div className='card flex-col d-flex bg-orange rounded py-2 px-5  justify-content-center' style={{maxWidth: "15rem"}}>
                    <div className="d-flex justify-content-center">
                        <img className="h-75 mt-2" src="../images/user-icon.png" alt="user-icon"/></div>
                    <div className="comment-title d-flex justify-content-center  ">{formValues.length >= 5 ? formValues[formValues.length-1].name : "anonymous"  }</div>
                   
                    <div className="mb-2 d-flex justify-content-center">{formValues.length >= 5 ? "$"+formValues[formValues.length-1].amount : "$100"  }</div>       
                </div>
                <div className='card flex-col d-flex bg-orange rounded py-2 px-5  justify-content-center' style={{maxWidth: "15rem"}}>
                    <div className="d-flex justify-content-center">
                        <img className="h-75 mt-2" src="../images/user-icon.png" alt="user-icon"/></div>
                        <div className="comment-title d-flex justify-content-center  "> {formValues.length >= 6 ? formValues[formValues.length-2].name : "anonymous"  } </div>
                    
                        <div className="mb-2 d-flex justify-content-center">{formValues.length >= 5 ? "$"+formValues[formValues.length-2].amount : "$100"  }</div>
                </div>
                <div className='card flex-col d-flex bg-orange rounded py-2 px-5  justify-content-center' style={{maxWidth: "15rem"}}>
                <div className="d-flex justify-content-center">
                    <img className="h-75 mt-2" src="../images/user-icon.png" alt="user-icon"/></div>
                    <div className="comment-title d-flex justify-content-center  "> {formValues.length >= 7 ? formValues[formValues.length-3].name : "anonymous"  } </div>
                  
                    <div className="mb-2 d-flex justify-content-center">{formValues.length >= 5 ? "$"+formValues[formValues.length-3].amount : "$100"  }</div>
                </div>
                <div className='card flex-col d-flex bg-orange rounded py-2 px-5  justify-content-center' style={{maxWidth: "15rem"}}>
                <div className="d-flex justify-content-center">
                    <img className="h-75 mt-2" src="../images/user-icon.png" alt="user-icon"/></div>
                    <div className="comment-title d-flex justify-content-center  "> {formValues.length >= 8 ? formValues[formValues.length-4].name : "anonymous"  } </div>
                  
                    <div className="mb-2 d-flex justify-content-center">{formValues.length >= 5 ? "$"+formValues[formValues.length-4].amount : "$100"  }</div>
                </div>
               
            </div>
        </div>
        <div className='flex-col align-items-center d-flex bg-blue p-2'>

            <button className='button-fund' onClick={toggleShowForm}>{showForm ? "Close Fund" : "Fund"}</button>
            {showForm && (<FundingForm onSubmit={takeChildValue}/>)}
            
        </div>
    </>
    )
}
export default Progress;