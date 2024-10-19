//import DailyTask from "../DialyTasks"
import NavBar from "../NavBar";
import { FaFlagCheckered } from "react-icons/fa";
import "./index.css"

const data=[
    {id:"", dcode:"D12345678", rev:"AA", flagColor:'green', name:"linkage Clutch", track:"true"},
    {id:"",dcode:"D12345678",rev:"AB",flagColor:'black',name:"linkage Clutch",track:"false"},
    {id:"",dcode:"D12345678",rev:"AC",flagColor:'red',name:"linkage Clutch",track:"true"},
    {id:"",dcode:"D12345678",rev:"AD",flagColor:'blue',name:"linkage Clutch",track:"false"},
    {id:"",dcode:"D12345678",rev:"AE",flagColor:'blue',name:"linkage Clutch",track:"true"},
    {id:"",dcode:"D12345678",rev:"AF",flagColor:'black',name:"linkage Clutch",track:"true"},
    {id:"",dcode:"D12345678",rev:"Ak",flagColor:'pink',name:"linkage Clutch", track:"true"},
    {id:"",dcode:"D12345678",rev:"AB",flagColor:'green',name:"linkage Clutch",track:"false"},
    {id:"",dcode:"D12345678",rev:"AC",flagColor:'green',name:"linkage Clutch",track:"true"},
    {id:"",dcode:"D12345678",rev:"AD",flagColor:'megenta',name:"linkage Clutch",track:"false"},
    {id:"",dcode:"D12345678",rev:"AE",flagColor:'green',name:"linkage Clutch",track:"true"},
    {id:"",dcode:"D12345678",rev:"AF",flagColor:'green',name:"linkage Clutch",track:"true"}
]

const HomePage=()=>{
    return(
        <div className="home-page">
            <NavBar/>
            <div className="task-tracker-heading"> 
            <h2>Task Tracker</h2>
            </div>
            <div className="task-container">
            {data.filter(item => item.track === "true").map((item)=>{ 
                return(
            <div>
                
                <div className="home-page-task-box">
                    <div className="home-page-task-box-line">
                        <h3>{item.dcode}</h3>
                        <h3>{item.rev}</h3>
                        <div>
                            <FaFlagCheckered color={item.flagColor}/>
                        </div>
                    </div>
                    <div>
                        <h4>{item.name}</h4>
                    </div>
                </div>
            </div>
            )})}
            </div>
        </div>
    )
}

export default HomePage