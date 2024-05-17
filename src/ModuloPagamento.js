import React from 'react';
import { Button } from './Button';
import {Modal} from './Modal'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
function ModuloPagamento(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <>
        <Button onClick={handleOpen} text="open Modal"/>
        <Modal 
            open = {open}
            onClose = {handleClose}
            style={style}
        />



<h3>Le tue informazioni</h3>
    <div>
        <label></label>
        <input></input>
        <label></label>
        <input></input>
        <label></label>
        <input></input>
    </div>
    <h3>I tuoi dati di pagamento</h3>
    <div>
        <label></label>
        <input></input>
        <label></label>
        <input></input>
        <label></label>
        <input></input>
    </div>    
    <h3>conferma tier e acquisto</h3>
        <label></label>
        <input></input>
        <select></select>
        <button></button>
    
        </>
    )
}
export default ModuloPagamento;