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
        <canvas id = "cv" width = "300" height = "300" alt= "canvas" />
        <style jsx>{`
          #cv {
            display: block;
            margin: 24px auto;
          }
        `}</style>
        <input type="file" id="file" onChange={showDataURI} />
        <textarea id="caption">
        <style jsx>{`
          #caption {
            display: block;
            width: 400px;
            height: 100px;
            margin: 24px auto;
          }
        `}</style>
        </textarea>
      </form>
    </>
  );
};

export default App;