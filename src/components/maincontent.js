import React,{useEffect, useState} from "react";


export default function Maincontent()
{

    const[data,setData] = useState([]);
    
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json").then((res)=>res.json()).then((data)=>{
            setData(data.pics);
        })
    })


    return (<div class="grid">

{data.map((item)=>{


return ( <div className="card">
<div className="img-container">
  <img className="img" src={item.url}></img>
</div>
<div class="comment-section">

</div>

</div>);


})}
   

    </div>);

}