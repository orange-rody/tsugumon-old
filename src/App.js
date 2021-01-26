import React from 'react';

const App = () => {
  const fileReader = new FileReader();
  const showDataURI = () => {
    let file = document.getElementById('file');
    let input = file.files[0];
    fileReader.readAsDataURL(input);
    fileReader.onload = () => {
      document.getElementById('viewer').src = fileReader.result;
    }
  };

  return(
    <>
      <form id="select-your-image">
        <input type="file" id="file" onChange={showDataURI}/>
      </form>
      <img id="viewer" alt="viewer"/>
    </>
  );
};

export default App;