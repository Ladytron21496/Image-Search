import React,{useEffect, useState} from "react";


export default function Maincontent({setSelectedImage,filterTerm,mostLiked , mostCommented , setMostLiked , setMostCommented})
{

    const[data,setData] = useState([]);
    const[postText,setPostText] = useState({});
    
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json").then((res)=>res.json()).then((data)=>{
            setData(data.pics.map((item)=>{
                return {
                    ...item,
                    liked: false
                }
            }));
        })
    },[])


    useEffect(()=>{

        if(mostLiked==true)
        {

            let newData = [...data].sort((a,b)=>{
                if(a.likes>b.likes)
                {
                    return -1;
                }else
                {
                    return 1;
                }
            })
            setData(newData);
        }
        if(mostCommented)
        {
            let newData = [...data].sort((a,b)=>{
                if(a.comments.length>b.comments.length)
                {
                    return -1;
                }else
                {
                    return 1;
                }
            })
            setData(newData); 
        }

     setMostLiked(false);
     setMostCommented(false);

    },[mostLiked,mostCommented]);


    let handlePostClick = (e,id) => 
    {
        e.stopPropagation();
        let newData = data.map((item)=>{
            if(item.id==id)
            {

            return    {
                    ...item,
                    comments :  [...item.comments,postText[id]]
                }
              
            }
            else
            {
                return {...item}
            }
        });

        setData(newData);
        let obj = {...postText}
        obj[id]="";
        setPostText(obj);
    }

    let handlepostText = (e,id) => 
    {
       let carditem = id;
        let post = e.target.value;
        let obj = {
            ...postText,
        }
        obj[carditem]=post;

        setPostText(obj);

    }

    let handleLike = (e,id) => 
    {
        e.stopPropagation();
        let newData = data.map((item)=>{
            if(item.id==id)
            {
             return ({...item,
                    liked:!item.liked,
                    likes: item.liked == false ? item.likes+1 : item.likes-1
            })   
            }else
            {
                return {
                    ...item
                }
            }
        })
        setData(newData);
    }
    return (<div class="grid">

{data.filter((item)=>{
    return (item.category.toLowerCase().includes(filterTerm.toLowerCase()))
}).map((item)=>{
return ( <div key = {item.id} className="card">
<div className="img-container" onClick = {() => setSelectedImage(item.url)}>
  <img className="img" src={item.url}></img>
</div>
<div class="comment-section">
    <div className="likes-container">
    <div className="likes">{item.likes} </div>
    <div className="like" onClick={(e)=>{handleLike(e,item.id)}}><p className="like-link">{item.liked ? "Unlike" : "Like"}</p> </div>
    <div className="category">{item.category}</div>
    </div>
    <div className="search-container"> 
     <input placeholder="Type your comment here..."  
     onClick={(e)=>{e.stopPropagation()}} value={postText[item.id]} 
     onChange={(e)=>{
       e.stopPropagation();
       handlepostText(e,item.id);
    }} className="search-box"></input>  <button onClick={(e)=>{
        handlePostClick(e,item.id);
    }} className="post-button">POST</button> </div>
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