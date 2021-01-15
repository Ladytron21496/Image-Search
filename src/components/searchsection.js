import react,{useState} from "react";

export default function Searchsection({searchTerm,setSearchTerm,setMostLiked , setMostCommented})
{


    return(<div class="main-search-container">

<div className="main-sort-item">
<p onClick={()=>{setMostLiked(true)}} >Most Liked</p>
</div>
<div className="border-line"></div>
<div className="main-sort-item">
<p className="most-commented" onClick={()=>{setMostCommented(true)}}>Most Commented</p>
</div>
<div  className="main-search-input">
    <input placeholder="Search Images..." className="main-searchbox" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}></input>
</div>

    </div>)


}