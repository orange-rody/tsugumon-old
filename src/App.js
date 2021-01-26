import React from 'react';

const App = () => {
  const fileReader = new FileReader();
  const showDataURI = () => {
    let file = document.getElementById('file');
    let viewer = document.getElementById('viewer');
    let input = file.files[0];
    fileReader.readAsDataURL(input);
    fileReader.onload = () => {
      viewer.classList.toggle('unvisible');
      viewer.src = fileReader.result;
    }
  };

  return(
    <>
      <form id="select-your-image">
        <input type="file" id="file" onChange={showDataURI} />
      </form>
      <img id="viewer" alt="viewer" class="unvisible"/>
      <style jsx>{`
        .unvisible{
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default App;