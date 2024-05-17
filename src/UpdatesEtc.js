import { useState } from "react";

const sections = {
    firstSection: { title: 'Info', text: <><h3>Informazioni generali</h3>
    <p>
    Grazie al desiderio di innovazione e miglioramento il nostro Team è sempre al lavoro per trovare la combinazione perfetta, e perché no, offrire nuovi gusti
    </p>
    <h3>Ingredienti</h3>
    <p> 
    Non possiamo svelarvi tutti gli ingredienti, tuttavia vi anticipiamo i principali:
    <ul>
    <li> Carbonated water </li>
    <li>Sugar</li>
    <li> Caffeine </li>
    <li> Phosphoric acid </li>
    <li> Caramel color </li>
    <li> Potassium benzoate </li>
    <li> Natural flavorings </li>
    </ul>
    </p>
    <h3>Gusto</h3>
    <p>
    Il gusto unico di Nuka Cola è il risultato della combinazione di diciassette frutti, bilanciati per migliorare il gusto classico della cola. Questi bilanciamenti sono così precisi che un solo piccolo cambio può distruggere totalmente il sapore, per questo il nostro Team, oltre ad essere fortemente dedito alla creazione, è estremamente preciso. Inoltre seguiamo i trend per aggiungere sempre ingredienti nuovi, freschi e salutari.
    Per far sì che questi gusti siano sempre perfetti l’imbottigliamento avviene esclusivamente in bottiglie di vetro, o in lattine, entrambe di materiali riciclati.
    </p> </>
    },
    secondSection: {title: 'Design', text: <><h3>L'Estetica del Nostro Prodotto</h3>
    <p>Il design del nostro prodotto è stato curato nei minimi dettagli per offrire non solo funzionalità, ma anche un'estetica che cattura l'occhio e si distingue. Abbiamo scelto materiali di alta qualità e un design ergonomico che garantisce comfort e stile in ogni utilizzo.
    </p>
    <h3>
    Ispirazione e Concept
    </h3>
    <p>
    L'ispirazione dietro il nostro design proviene da un'idea distopica trasposta in chiave satirica. Volevamo creare qualcosa che non fosse solo un oggetto di uso quotidiano, ma anche un pezzo di design che potesse essere esposto con orgoglio.
    <h3>
    Materiali e Dettagli
    </h3>
    
    Utilizziamo solo materiali di alta qualità per garantire durata e sostenibilità. Il nostro prodotto è realizzato con vetro riciclato, che non solo è resistente, ma anche rispettoso dell'ambiente.
    
    </p>
   <h3>
    Processo di Design
    </h3> 
    <p>

    Il nostro processo di design ha attraversato diverse fasi, dalla concezione iniziale alla prototipazione e test. Ogni fase è stata fondamentale per affinare e perfezionare il prodotto.
    <h5>
    Fase 1: Concept e Schizzi
    </h5>
    
    Abbiamo iniziato con schizzi a mano libera e bozzetti digitali per esplorare diverse idee e forme. L'obiettivo era trovare un equilibrio perfetto tra estetica e funzionalità.
    <h5>
    Fase 2: Prototipazione
    </h5>
    
    Abbiamo realizzato prototipi utilizzando la stampa 3D e altri metodi di produzione rapida per testare le nostre idee in un contesto reale. Questo ci ha permesso di apportare modifiche e miglioramenti continui.
    <h5>
    Fase 3: Test e Feedback
    </h5>
    
    I prototipi sono stati sottoposti a rigorosi test di usabilità e abbiamo raccolto feedback da un gruppo selezionato di beta tester. Questo ci ha permesso di identificare e risolvere eventuali problemi prima della produzione finale.
    <h3>
    Il Team di Design
    </h3>
    
    Il nostro team di design è composto da professionisti con anni di esperienza nel settore. Ogni membro ha portato la propria competenza unica, contribuendo a creare un prodotto che è veramente innovativo e ben progettato.
    
    Insieme a voi, noi siamo Il Futuro del Design
    
    </p>
    Crediamo fermamente che il design non sia mai statico. Con il vostro supporto, possiamo continuare a innovare e migliorare, portando avanti nuove idee e progetti che rendano il nostro prodotto sempre migliore.
    
    Unitevi a noi in questo viaggio di innovazione e design. Sostenete la nostra campagna e diventate parte della nostra storia!' </>
    



},

    
    thirdSection: {title: 'Updates', text:
     <div>
        <h3>Aggiornamento #1: Benvenuti alla Nostra Campagna!</h3>
    
           
       <p> Ciao a tutti,  <br/>
        
        Siamo entusiasti di darvi il benvenuto alla nostra campagna Kickstarter! Siamo grati per il vostro supporto e non vediamo l'ora di condividere questo viaggio con voi. Restate sintonizzati per ulteriori aggiornamenti e novità sul nostro progetto.
        
       <br/> Grazie di cuore, <br/>
        NUKA COLA
        </p>
        <h3> Aggiornamento #2: Obiettivo Iniziale Raggiunto! </h3>
        <p>
        Grazie mille, sostenitori!
        
        Abbiamo raggiunto il nostro obiettivo iniziale in soli 15 giorni! Non avremmo potuto farcela senza il vostro incredibile supporto. Siamo emozionati e pieni di gratitudine. Ora, puntiamo ai nostri obiettivi successivi per rendere il nostro prodotto ancora migliore. </p>
       <h3> Aggiornamento #3: Nuove Ricompense Sbloccate! </h3>
        
        <p>
        
        Ciao a tutti, <br/>
        
        Siamo felici di annunciare che abbiamo sbloccato nuove ricompense per ringraziarvi del vostro supporto! Ecco cosa è disponibile ora:
        <ul>
         <li>   Ricompensa Aggiuntiva #1: Sezione Info </li>
        <li>    Ricompensa Aggiuntiva #2: Testing del Prodotto </li>
        </ul>
        </p>
        <h3>Aggiornamento #4: Dietro le Quinte del Design</h3>
        <p>
        
        Cari sostenitori, <br/>
        
        Vogliamo condividere con voi un piccolo dietro le quinte del processo di design del nostro prodotto e dei preview di nuove ricompense su cui stiamo lavorando.
        Potete trovare tutto nella sezione Design!
        
        Abbiamo lavorato sodo per assicurarci che ogni dettaglio fosse perfetto e speriamo che vi piaccia tanto quanto piace a noi! </p>
       <h3> Aggiornamento #5: FAQ </h3>
        <p>
        
        Ciao sostenitori,  <br/>
        
        Abbiamo ricevuto molte domande e commenti da parte vostra e vogliamo prenderci un momento per rispondere alle più comuni, pertanto abbiamo creato la sezione FAQ!
    
        
        
        Continuate a inviare le vostre domande. Siamo qui per voi!
        
    <br/>
        NUKA COLA </p>
     </div>
    
    },
    
    TBASection: { title: 'TBA', text: 'Questa sezione non è ancora stata sbloccata.' }
}
function UpdatesEtc(){
     
    const [content, setContent] = useState({ title: '', text: '' });

    const handleButtonClick = (sectionKey) =>{
        setContent(sections[sectionKey])
    }
    
    return(
        <div className=" d-flex p-2 align-items-center flex-row justify-content-around py-5">
            <div className='flex-row d-flex justify-content-around align-items-center w-100 wrap py-5 my-5' id="prototype">
                <div className='bg-dark-blue d-flex flex-column col-md-2 col-12 p-1 mb-md-0 mb-3'>
                    <ul className="list-none d-flex flex-md-column flex-row align-items-center p-0 h-100 justify-content-around">
                        
                        <li className="bg-dark-blue pt-2" onClick={() => handleButtonClick('firstSection')} style={{cursor: "pointer"}} value="info">Info</li>
                        <hr className="d-md-flex d-none"/>
                        <li className="bg-dark-blue" onClick={() => handleButtonClick('secondSection')} style={{cursor: "pointer"}} value="design">Design</li>
                        <hr className="d-md-flex d-none"/>
                        <li className="bg-dark-blue" onClick={() => handleButtonClick('thirdSection')} style={{cursor: "pointer"}} value="updates">Updates</li>
                        <hr className="d-md-flex d-none"/>
                        <li className="bg-dark-blue" onClick={() => handleButtonClick('TBASection')} style={{cursor: "pointer"}} value="updates">TBA</li>
                        <hr className="d-md-flex d-none"/>
                        <li className="bg-dark-blue" onClick={() => handleButtonClick('TBASection')} style={{cursor: "pointer"}} value="">TBA</li>
                        <hr className="d-md-flex d-none"/>
                        <li className="bg-dark-blue" onClick={() => handleButtonClick('TBASection')} style={{cursor: "pointer"}} value="">TBA</li>
                        <hr className="d-md-flex d-none"/>
                        <li className="bg-dark-blue" onClick={() => handleButtonClick('TBASection')} style={{cursor: "pointer"}} value="">TBA</li>
                        <hr className="d-md-flex d-none"/>
                        <li className="bg-dark-blue" onClick={() => handleButtonClick('TBASection')} style={{cursor: "pointer"}} value="">TBA</li>
                    </ul>
                </div>
                <div className="p-3 bg-green col-7 w-80 h-100 w-lg-100 mb-md-0 mb-3 " style={{ minHeight: "50rem"}} >
                    <div className="p-3">
                        <h3>{content.title}</h3>
                        <hr/>
                        <div className="p-3">
                            <p>{content.text}</p>
                        </div>
                    </div>
                </div>
                
                <div className=' phone-row flex-col col-md-2 col-12 d-flex justify-content-around wrap mb-md-0 mb-3'>
                    <div className='flex-col bg-dark-blue p-1 d-flex wrap align-items-center pt-2 justify-content-around'>
                        <div className="d-flex justify-content-around align-items-top pt-2">
                            <div ><img src="../images/user-icon.png" alt="user icon" style={{width:"80%" }} /></div>
                            <div className="margin-bottom-1 margin-top-1">NUKA COLA</div>
                        </div>
                        <div className="d-flex wrap ">
                            
                            <div className="comment-body margin-bottom-1 px-2">Ti ringraziamo per il supporto! </div>
                        </div>
                        <div className="flex-row d-flex ">
                            <img src="../images/facebook-icon.png" alt="facebook icon"/>
                            <img src="../images/instagram-icon.png" alt="instagram icon"/>
                            <img src="../images/linkedin-icon.png" alt="linkedin icon"/>
                            <img src="../images/twitter-icon.png" alt="twitter icon"/>
                        </div>
                       
                    </div>
                    
                    <div className='flex-col bg-dark-blue p-1 d-flex wrap d-flex align-items-center pb-3 px-2'>     
                    <hr/>
                        <div className="margin-bottom-1 margin-top-1 size-1 ">FUND</div>
                        <input type="text" className="w-100"></input>
                        <button>submit</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpdatesEtc;