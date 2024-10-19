import './index.css'

const NewTaskCreation=()=>{
    return(
        <div className="newTask-main-container">
            <h1 className='newTask-heading'>New Task Creation</h1>
            <form className='newTask-form-continer '>
                 <div className='newTask-label-container'>
                    <label className='label'>D-CODE</label>
                    <input type="text"/>
                 </div>
                 <div className='newTask-label-container'>
                    <label>Name</label>
                    <input type="text"/>
                 </div>
                 <div className='newTask-label-container'>
                    <label>Description</label>
                    <input type="text"/>
                 </div>
                 <div className='newTask-check-box-container'>
                 <div>
                 <label>3D</label>
                 <input type="checkbox"/>
                 </div>
                 <div>
                 <label>2D</label>
                 <input type="checkbox"/>
                 </div>
                 </div>
                 <div className='newTask-select-container'>
                 <label for="options">Type Of Part:</label>
    <select id="options" name="options">
    <option value="option4">REF</option>
        <option value="option1">BOP</option>
        <option value="option2">Phantom</option>
    </select>
                 </div>
                 <div className='newTask-check-box-container'>
                    <label>DR/DRR</label>
                    <input type="checkbox"/>
                 </div>
                 
                 
                 
                 
                 
                 
                 
                 <div className='newTask-select-container'>
                 <label for="options">Processs Type:</label>
    <select id="options" name="options">
    <option value="option4">WORKFLOW</option>
        <option value="option1">ECO</option>
        <option value="option2">DR</option>
        <option value="option3">DRR</option>
    </select>
                 </div>
                 <div className='newTask-label-container'>
                    <label>ECO</label>
                    <input type='text'/>
                 </div>
                 <div className='newTask-label-container'>
                    <label>Status</label>
                    <input type='text'/>
                 </div>
                 <div className='newTask-submitButton'>
                    <submit>Save</submit>
                 </div>
            </form>
        </div>
    )
    
}

export default NewTaskCreation

