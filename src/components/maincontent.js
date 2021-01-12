import React,{useEffect, useState} from "react";


export default function Maincontent({setSelectedImage})
{

    const[data,setData] = useState([]);
    const[postText,setPostText] = useState({});
    
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json").then((res)=>res.json()).then((data)=>{
            setData(data.pics);
        })
    })

    let handlepostText = (e,id) => 
    {
       let carditem = id;
        let post = e.target.value;
        let obj = {
            ...postText,
            [carditem]:post
        }

        setPostText(obj);

    }

    return (<div class="grid">

{data.map((item)=>{


return ( <div className="card">
<div className="img-container" onClick = {() => setSelectedImage(item.url)}>
  <img className="img" src={item.url}></img>
</div>
<div class="comment-section">
    <div className="likes-container">
    <div className="likes">{item.likes} </div>
    <div className="like"><a href="#">Like</a> </div>
    <div className="category">{item.category}</div>
    </div>
    <div className="search-container">  <input placeholder="Type your comment here..." value={postText[item.id]} onChange={(e)=>{
        handlepostText(e,item.id);
    }} className="search-box"></input>  <button className="post-button">POST</button> </div>
</div>
<div className="comments-container">

{item.comments.map((item)=>{
    return(<div className="comment">{item}</div>)
})}

</div>
</div>);


})}
   

    </div>);

}