import './index.css'

/*const NewTaskCreation=()=>{
    return(
        <div className="newTask-main-container">
            <h1 className='newTask-heading'>New Task Creation</h1>
            <form className='newTask-form-continer '>
                 <div className='newTask-label-container'>
                    <label className='label'>CODE</label>
                    <input className='newTask-input' type="text"/>
                 </div>
                 <div className='newTask-label-container'>
                    <label className='label'>Name</label>
                    <input className='newTask-input' type="text"/>
                 </div>
                 <div className='newTask-label-container'>
                    <label className='label'>Description</label>
                    <input className='newTask-input' type="text"/>
                 </div>
                 <div className='newTask-check-box-container'>
                 <div>
                 <label className='label'>3D</label>
                 <input className='newTask-check-box' type="checkbox"/>
                 </div>
                 <div className='newTask-2d'>
                 <label className='label'>2D</label>
                 <input className='newTask-check-box' type="checkbox"/>
                 </div>
                 </div>
                 <div className='newTask-select-container'>
                 <label className='label' for="options">Type Of Part:</label>
    <select className='newTask-select-field'  id="options" name="options">
    <option value="option4">REF</option>
        <option value="option1">BOP</option>
        <option value="option2">Phantom</option>
    </select>
                 </div>
                 <div className='newTask-check-box-container'>
                    <label className='label'>DR/DRR</label>
                    <input className='newTask-check-box' type="checkbox"/>
                    <span class='checkmark'></span>
                 </div>
                 
                 
                 
                 
                 
                 
                 
                 <div className='newTask-select-container'>
                 <label className='label' for="options">Processs Type:</label>
                  <select id="options" className='newTask-select-field' name="options">
                 <option value="option4">WORKFLOW</option>
                 <option value="option1">ECO</option>
                <option value="option2">DR</option>
                 <option value="option3">DRR</option>
                  </select>
                 </div>
                 <div className='newTask-label-container'>
                    <label className='label'>ECO</label>
                    <input className='newTask-input' type='text'/>
                 </div>
                 <div className='newTask-label-container'>
                    <label className='label'>Status</label>
                    <input className='newTask-input' type='text'/>
                 </div>
                 <div className='newTask-submitButton'>
                    <submit className="newTask-sButton">Save</submit>
                 </div>
            </form>
        </div>
    )
    
}

export default NewTaskCreation

/* git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ShemanthDeveloper/Escorts-Frontend.git
git push -u origin main*/


import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import NavBar from '../NavBar'
import 'reactjs-popup/dist/index.css'; 
import './index.css';

const PopupExample = ({ open, close }) => (
   <Popup open={open} onClose={close} modal>
       <div  className='newTask-error-container' >
           <h2 className='newTask-error-heading'>Error</h2>
           <p className='newTask-error-message'>Please fill Atleast Code & Name</p>
           <button className='newTask-error-button' onClick={close}>Close</button>
       </div>
   </Popup>
);

const NewTaskCreation = () => {
    const [code, setCode] = useState('');
    const [rev, setRev] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [is3D, setIs3D] = useState(false);
    const [isDR, setIsDR] = useState(false);
    const [is2D, setIs2D] = useState(false);
    const [partType, setPartType] = useState('REF');
    const [processType, setProcessType] = useState('NA');
    const [eco, setEco] = useState('');
    const [status, setStatus] = useState('');
    const [isDisable,setIsDisable]=useState(true)
    const [isDisable2,setIsDisable2]=useState(true)
    const [isDisable3,setIsDisable3]=useState(true)
    const [isDisableDR,setIsDisableDR]=useState(true)
    const [popupOpen, setPopupOpen] = useState(false);

    
    
    const handleSubmit = (e) => {
      e.preventDefault(); 
      if(code===""|| name===""){
         setPopupOpen(true); 
         console.log("error")
      }else{
         e.preventDefault(); 
         console.log({
             code,
             name,
             rev,
             description,
             is3D,
             isDR,
             is2D,
             partType,
             processType,
             eco,
             status
         });}
    };

   useEffect(()=>{
      if(partType==="BOP"){
         if(is2D&&is3D&&isDR){
            setIsDisable(false)
            setIsDisable2(true)
            setIsDisable3(false)
            setProcessType("NA")

         }else if(is2D&& is3D){
            setIsDisable2(false)
            setIsDisable3(true)
            setIsDisable(true)
            setProcessType("NA")
         }else{
            setIsDisable(true)
            setIsDisable2(true)
            setIsDisable3(true)
            setProcessType("NA")
         }
      }
      if(partType==="REF"){
         if(is2D&&is3D){
            setIsDisable3(false)
            setIsDisable(true)
            setIsDisable2(true)
            setProcessType("NA")
         }else{
            setIsDisable3(true)
            setProcessType("NA")
         }
      }

      if(partType==="PHANTOM"){
         if(is2D&is3D){
            setIsDisable2(true)
            setIsDisable3(false)
            setIsDisable(false)
            setProcessType("NA")
         }else{
            setIsDisable(true)
            setIsDisable2(true)
            setIsDisable3(true)
            setProcessType("NA")
         }
      }
      if(partType==="BOP"){
         setIsDisableDR(false)
      }else{
         setIsDisableDR(true)
      }
   },[is2D,is3D,isDR,partType])

    return (
   
      
        <div className="newTask-main-container">
         <NavBar/>
         <div className='newTask-container-bg'>
            <h1 className='newTask-heading'>New Task Creation</h1>
            <form className='newTask-form-continer' onSubmit={handleSubmit}>
                <div className='newTask-label-container'>
                    <label className='label'>CODE</label>
                    <div className='newTask-d-revision-container'>
                    <input 
                        className='newTask-input' 
                        type="text" 
                        placeholder='D/TEM Code'
                        value={code} 
                        onChange={(e) => setCode(e.target.value.toUpperCase())} 
                        
                    />
                    <input className='newTask-rev newTask-input' placeholder='Rev' type="text"
                    value={rev} 
                    onChange={(e) => setRev(e.target.value.toUpperCase())} />
                    </div>
                </div>
                <div className='newTask-label-container'>
                    <label className='label'>Name</label>
                    <input 
                        className='newTask-input' 
                        type="text" 
                        placeholder='Part Name'
                        value={name} 
                        onChange={(e) => setName(e.target.value.toUpperCase())} 
                    />
                </div>
                <div className='newTask-label-container'>
                    <label className='label'>Description</label>
                    <input 
                        className='newTask-input' 
                        type="text" 
                        value={description} 
                        placeholder='Important Changes'
                        onChange={(e) => setDescription(e.target.value.toUpperCase())} 
                    />
                </div>
                <div className='newTask-check-box-container'>
                    <div>
                        <label className='label'>3D</label>
                        <input 
                            className='newTask-check-box' 
                            type="checkbox" 
                            checked={is3D} 
                            onChange={() => setIs3D(!is3D)} 
                        />
                    </div>
                    <div className='newTask-2d'>
                        <label className='label'>2D</label>
                        <input 
                            className='newTask-check-box' 
                            type="checkbox" 
                            checked={is2D} 
                            onChange={() => setIs2D(!is2D)} 
                        />
                    </div>
                </div>
                <div className='newTask-select-container'>
                    <label className='label' htmlFor="partType">Type Of Part:</label>
                    <select 
                        className='newTask-select-field' 
                        id="partType" 
                        name="partType" 
                        value={partType} 
                        onChange={(e) => setPartType(e.target.value)}
                    >
                        <option value="REF">REF</option>
                        <option value="BOP">BOP</option>
                        <option value="PHANTOM">Phantom</option>
                    </select>
                </div>
                <div  className='newTask-check-box-container'>
                    <label className='label'>DR/DRR</label>
                    <input 
                        className='newTask-check-box' 
                        type="checkbox" 
                        checked={isDR} 
                        onChange={() => setIsDR(!isDR)} 
                        disabled={isDisableDR}
                    />
                    <span className='checkmark'></span>
                </div>
                <div className='newTask-select-container'>
                    <label className='label' htmlFor="processType">Process Type:</label>
                    <select 
                        id="processType" 
                        className='newTask-select-field' 
                        name="processType" 
                        value={processType} 
                        onChange={(e) => setProcessType(e.target.value)}
                    >
                        <option disabled={isDisable3} value="WORKFLOW">WORKFLOW</option>
                        <option disabled={isDisable} value="ECO">ECO</option>
                        <option disabled={isDisable2} value="DR">DR</option>
                        <option disabled={isDisable2} value="DRR">DRR</option>
                        <option value="NA">NA</option>
                    </select>
                </div>
                <div className='newTask-label-container'>
                    <label className='label'>ECO</label>
                    <input 
                    disabled={isDisable}
                        className='newTask-input' 
                        type='text' 
                        value={eco} 
                        placeholder='EDN/ECP/ECA'
                        onChange={(e) => setEco(e.target.value.toUpperCase())} 
                    />
                </div>
                <div className='newTask-label-container'>
                    <label className='label'>Status</label>
                    <input 
                        className='newTask-input' 
                        type='text' 
                        value={status} 
                        placeholder='Current Status'
                        onChange={(e) => setStatus(e.target.value.toUpperCase())} 
                    />
                </div>
                <div className='newTask-submitButton'>
                    <button type="submit" className="newTask-sButton">Save</button>
                </div>
            </form>
            <PopupExample open={popupOpen} close={() => setPopupOpen(false)} />
        </div>
        </div>
        
    );
};

export default NewTaskCreation;

