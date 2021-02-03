import React, {useState} from 'react';

export default function Preview() {

  const [preview, setPreview] = useState();
  
  const handleChangeFile = (e) => {
    
    const {files} = e.target;
    files.length>0? setPreview(window.URL.createObjectURL(files[0])): e.preventDefault();
  }

  return(
    <>
      <form>
        <label htmlFor="fileElem" id="fileSelect">画像を選択</label>
        <input type = "file" id = "fileElem" onChange = {handleChangeFile} />
        <div id = "previewWrap">
          <img src = {preview} id = "preview" alt = "画像のプレビュー"/>
        </div>
        <textarea id="caption" placeholder = "コメントを入力してください"></textarea>
        <input type="submit" id="submit" value = "投稿する"/>
      </form>
    </>
  )
}