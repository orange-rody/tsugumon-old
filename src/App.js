import React from 'react';

const App = () => {
  const fileReader = new FileReader();
  const showDataURI = () => {
    let file = document.getElementById('file');
    let input = file.files[0];
    let cv = document.getElementById('cv');
    let c = cv.getContext('2d');
    fileReader.readAsDataURL(input);
    fileReader.onload = () => {
      let img = new Image();
      img.setAttribute('src',fileReader.result);
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        if(width > cv.maxWidth){          
          height = Math.round(height * cv.maxWidth / width);
          width = cv.maxWidth;
        }
        c.drawImage(img,0,0,width,height);
      };     
    }
  };

  

  return(
    <>
      <form id="select-your-image">
        <input type="file" id="file" onChange={showDataURI} />
      </form>
      <canvas id = "cv" width = "400" height = "400" alt= "canvas" />
    </>
  );
};

export default App;