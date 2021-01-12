import React,{useState} from "react";
import './App.css';
import Header from "./components/header";
import Maincontent from "./components/maincontent";
import ImageModal from "./components/imagemodal";

function App() {

  const [selectImage, setSelectImage] = useState(null);

  return (
    <>
   <Header/>
   <Maincontent setSelectedImage = {setSelectImage} />
   {selectImage && <ImageModal selectImage = {selectImage} setSelectedImage = {setSelectImage}/>}
   </>
  );
}

export default App;
