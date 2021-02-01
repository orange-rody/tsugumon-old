import React, {useState} from 'react';

export default function Preview() {

  const [preview, setPreview] = useState();
  
  const handleChangeFile = (e) => {
    const {files} = e.target;
    setPreview(window.URL.createObjectURL(files[0]));
  }

  return(
    <>
      <label htmlFor="fileElem" id="fileSelect">画像を選択</label>
      <style jsx>{`
        #fileSelect{
          display: block;
          width: 150px;
          height: 40px;
          border-radius: 20px;
          margin-top: 20px;
          text-align: center;
          line-height: 40px;
          color: hsl(15, 70%, 54%);
          background-color: hsl(42, 82%, 83%);
        }
      `}</style>
      <input type = "file" id = "fileElem" onChange = {handleChangeFile} />
      <style jsx>{`
          #fileElem {
            display: none;
          }
      `}</style>
      <div id="imageWrap">
      {/* <style jsx> {`
        #imageWrap {
          width: 100%;
          background-image: url("../public/no_image_square.jpg");
          background-size: cover;
        }
      `}</style> */}
        <img src = {preview} id = "preview" alt = "画像のプレビュー"/>
        {/* <style jsx>{`
          #preview {
            width: 100%;
            padding-top: 10%;
          }
        `}</style> */}
      </div>
    </>
  )
}