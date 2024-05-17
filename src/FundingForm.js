import { useState } from "react";
import { Link } from "react-router-dom";

function FundingForm({onSubmit}){
    const [dispName, setDispName] = useState('');
    const [amountFunded, setAmountFunded] = useState('');
    const takeData = event =>{
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get("checkAnon") ? ("Anonymous") : formData.get("displayName")
        const amount = formData.get("amount");
        <Link to="/funding"></Link>
        onSubmit(name, amount);
        setDisplayNameValue("");
        setAmountValue("")
    } 
    const [ nameValue, setNameValue ] = useState();
    const [ mailValue, setMailValue] = useState();
    const [ displayNameValue, setDisplayNameValue ] = useState();
    const [ cardNumberValue, setCardNumberValue ] = useState();
    const [ cardExpireValue, setCardExpireValue ] = useState();
    const [ isAnon, setIsAnon ] = useState();
    const [ cardCVVValue, setCardCVVValue ] = useState();
    const [ amountValue, setAmountValue ] = useState();
    const handleNameChange = (event) => {
        const value = event.target.value;
        const regex = /[^a-zA-Z]/g;
        const sanitizedValue = value.replace(regex, "");

        setNameValue(sanitizedValue);
    }
    const handleEmailChange = (event) => {
        const value = event.target.value;
        const regexCorrect = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        const regex = /[^a-zA-Z0-9._%+-@]/g;
        const sanitizedValue = value.replace(regex, "");
        setMailValue(sanitizedValue);
    }
    const handleDisplayName = (event) => {
        const value = event.target.value;
        const regex = /[^a-zA-Z0-9_]/g;
        const sanitizedValue = value.replace(regex, "");
        setDisplayNameValue(sanitizedValue);
        setDispName(event.target.value);
    }
    const handleCardNumber = (event) => {
        const value = event.target.value;
        const regex = /[^0-9]/;
        const sanitizedValue = value.replace(regex, '');
        setCardNumberValue(sanitizedValue);
    }
    const handleCardExpire = (event) => {
        const value = event.target.value;
        const regex = /[^0-9\/]/g;
        const sanitizedValue = value.replace(regex, "");
        setCardExpireValue(sanitizedValue);
    }
    const handleAnonymous = (event) => {
        const value = event.target.value;
    }
    const handleCardCVV = (event) => {
        const value = event.target.value;
        const regex = /[^0-9]/g;
        const sanitizedValue = value.replace(regex, "");
        setCardCVVValue(sanitizedValue);
    }
    const handleAmount = (event) => {
        const value = event.target.value;
        const regex = /[^0-9\/]/g;
        const sanitizedValue = value.replace(regex, "");
        setAmountValue(sanitizedValue);
        setAmountFunded(event.target.value); 
    }
    return(
        <div className="">
            <div className="pt-5 d-flex justify-content-center">
                <div className="justify-content-center d-flex" > 
                    <div > 
                        <div > 
                            <div > 
                                <div class="text-right"> 
                                    <i class="fa fa-close close" data-dismiss="modal"></i> 
                                </div> 
                                <div class="tabs mt-3"> 
                                    
                                    <div class="tab-content" id="myTabContent"> 
                                            <form class="mt-4 mx-4" onSubmit={takeData}>
                                                <div class="text-center"> 
                                                    <h5>Credit card</h5>
                                                </div>
                                                <div class="form mt-3">
                                                    <div class="inputbox m-3"> 
                                                        <span className="ps-2">Nome Completo</span> 
                                                        <input 
                                                            onChange={handleNameChange} 
                                                            value = {nameValue}
                                                        type="text" name="fullName" className="form-control" required="required"/> 
                                                    </div> 
                                                    <div class="inputbox m-3"> 
                                                        <span className="ps-2">Nome da Mostrare</span> 
                                                        <input 
                                                        onChange={handleDisplayName}
                                                        value = {displayNameValue}
                                                        type="text" name="displayName" className="form-control" required="required"/> 
                                                        <div className="ps-2">
                                                            <input 
                                                                onChange={handleAnonymous}
                                                                
                                                            type="checkbox" name="checkAnon"/> <span>mantienimi anonimo</span>
                                                        </div>
                                                    </div>
                                                    <div class="inputbox m-3"> 
                                                        <span className="ps-2">Email</span> 
                                                        <input 
                                                            onChange={handleEmailChange} 
                                                            value = {mailValue}
                                                        type="text" name="Email" className="form-control" required="required"/> 
                                                    </div> 
                                                    <div class="inputbox m-3">
                                                        <span className="ps-2">Numero Carta</span> 
                                                        <input 
                                                            onChange={handleCardNumber}
                                                            value = {cardNumberValue}
                                                        type="text" name="cardNumber" min="1" max="999" className="form-control" required="required"/>
                                                        <i class="fa fa-eye"></i>
                                                    </div>
                                                    <div class="d-flex flex-row">
                                                        <div class="inputbox m-3">
                                                            <span className="ps-2">Data di Scadenza</span>
                                                            <input 
                                                                onChange={handleCardExpire}
                                                                value = {cardExpireValue}
                                                            type="text" name="expiringDate" min="1" max="999" className="form-control" required="required"/>
                                                        </div> 
                                                        <div class="inputbox m-3">
                                                            <span className="ps-2">CVV</span>
                                                            <input 
                                                            onChange={handleCardCVV}
                                                            value = {cardCVVValue}
                                                            type="text" name="CVV" min="1" max="999" className="form-control" required="required"/>
                                                        </div> 
                                                    </div> 
                                                    <hr/>
                                                    <div class="inputbox m-3"> 
                                                        <span className="ps-2">Quanto vuoi donare?</span> 
                                                        <input 
                                                        onChange={handleAmount}
                                                        value = {amountValue}
                                                        
                                                        type="text" name="amount" className="form-control" required="required"/> 
                                                    </div> 
                                                    <div class="px-5 d-flex py-3 justify-content-center">
                                                        <button type="submit">Add card</button>
                                                    </div>
                                                </div>
                                            </form>
                                                  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FundingForm;