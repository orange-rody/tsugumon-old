import React, {useState} from 'react';
import firebase from 'firebase';
import loadImage from 'blueimp-load-image';

// Firebaseの設定
let firebaseConfig = {
  apiKey: "AIzaSyChWknpF7Mm8WfJrcPTGdyFh-1ULNlmAFY",
  authDomain: "tsugumon.firebaseapp.com",
  projectId: "tsugumon",
  storageBucket: "tsugumon.appspot.com",
  messagingSenderId: "77466442141",
  appId: "1:77466442141:web:e7e8954ee273bdcb7b7774",
  measurementId: "G-HY60Y801TC"
};

// Firebaseの初期化
firebase.initializeApp(firebaseConfig);

export default function Preview() {

  const [preview, setPreview] = useState('/no_image_square.jpg');
  
  const handleChangeFile = (e) => {
    const {files} = e.target;
    if(files.length > 0){
      setPreview(window.URL.createObjectURL(files[0]));
    }else{
      e.preventDefault();
    }
  }

  const handlePostedFile = () => {
    const canvas = loadImage(preview);
    firebase.storage().ref().child().put(canvas);
  }

  return(
    <>
      <form>
        <label htmlFor="fileElem" id="fileSelect">画像を選択</label>
        <input type = "file" id = "fileElem" onChange = {handleChangeFile} />
        <div id = "previewWrap">
          <img src = {preview} id = "preview" alt = "画像のプレビュー"/>
        </div>
        <textarea id = "caption" placeholder = "コメントを入力してください"></textarea>
        <input type = "submit" id = "submit" value = "投稿する" onSubmit = {handlePostedFile}/>
      </form>
    </>
  )
}