import React,{useState} from "react";
import './App.css';
import Header from "./components/header";
import Maincontent from "./components/maincontent";
import Searchsection from "./components/searchsection";
import ImageModal from "./components/imagemodal";

function App() {

  const [selectImage, setSelectImage] = useState(null);
  const [searchTerm , setSearchTerm] = useState("");
  const [mostLiked , setMostLiked] = useState(false);
  const [mostCommented,setMostCommented] = useState(false);

  return (
  <>
    <Header/>
    <Searchsection setMostLiked={setMostLiked} setMostCommented={setMostCommented} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    <Maincontent setMostLiked={setMostLiked} setMostCommented={setMostCommented} mostLiked={mostLiked} mostCommented={mostCommented} filterTerm={searchTerm} setSelectedImage = {setSelectImage} />
    {selectImage && <ImageModal selectImage = {selectImage} setSelectedImage = {setSelectImage}/>}
  </>
  );
}

export default App;
