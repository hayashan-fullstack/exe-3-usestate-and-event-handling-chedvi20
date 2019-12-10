import React from "react";
import ReactDOM from "react-dom";
// import { Timer } from "./components/timer";


const Header=()=>{
    return(
        <div>
        <table border='1'>
            <tr>
                <th width="5%">detail</th>
                <th width="5%">deadline</th>
                <th width="5%">is important</th>
                <th width="5%">is done</th>
            </tr>
            </table>
            </div>
    )
    
}
const Line=(props)=>{
    return(
    <div>
        <table border='1'>
        <tr>
            <td width="12%">{props.line.detail}</td>
            <td width="10%">{props.line.deadline}</td>
            <td width="5%">{props.line.is_important}</td>
            <td width="5%">{props.line.done}</td>
        </tr>
    </table>
        </div>

    )
  
    
}
const Todo=(props)=>{
    return(
        props.my_details.map(line =><Line  line={line}/>)
    )
}
const App = () => {
    const my_details = [
        {
            detail: "sara",
            deadline: "1/2/2011",
            is_important: "❌",
            done: "😥"
        },
        {
            detail: "soijoi",
            deadline: "2/8/2019",
            is_important: "✔",
            done: "😍"
        },
        {
            detail: "frdu",
            deadline: "6/5/2010",
            is_important: "❌",
            done: "😥"
        },
        {
            detail: "gdchtfdik",
            deadline: "5/8/2000",
            is_important: "✔",
            done: "😍"
        }
        
    ];
    return (
        <div style={{margin:'10%'}}>
        <br/>
        <br/>
            <h1>My details</h1>
            <br/>
            <Header/>
            <Todo my_details={my_details}/>
       
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById("root"));



