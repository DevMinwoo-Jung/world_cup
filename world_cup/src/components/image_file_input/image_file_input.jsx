import React, { memo, useRef } from 'react';
import styles from './image_file_input.module.css'

const ImageFileInput = memo(({imageUploader, name, onFileChange}) => {
  const DEFAULT_IMAGE ='/images/default_logo.png'


  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const inputRef5 = useRef();
  const inputRef6 = useRef();
  const inputRef7 = useRef();
  const inputRef8 = useRef();
  const inputRef9 = useRef();
  const inputRef10 = useRef();
  const inputRef11 = useRef();
  const inputRef12 = useRef();
  const inputRef13 = useRef();
  const inputRef14 = useRef();
  const inputRef15 = useRef();
  const inputRef16 = useRef();

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef1.current.click();
    inputRef2.current.click();
    inputRef3.current.click();
    inputRef4.current.click();
    inputRef5.current.click();
    inputRef6.current.click();
    inputRef7.current.click();
    inputRef8.current.click();
    inputRef9.current.click();
    inputRef10.current.click(); 
    inputRef11.current.click();
    inputRef12.current.click();
    inputRef13.current.click();
    inputRef14.current.click();
    inputRef15.current.click();
    inputRef16.current.click();
  }

  const onChange = async event => {
    const uploaded = await imageUploader.upload(event.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };


  return(
  <div className={styles.container}>
    <div className={styles.versus}>
      <div className={styles.versus_box}>  
        <div className={styles.img_div}>
          <input ref={inputRef1} className={styles.input} type="file" accept="image/*" name="file" onChange={onChange}/>
        </div>
        <div className={styles.img_div}>
          <input ref={inputRef2} className={styles.input} type="file" accept="image/*" name="file" onChange={onChange}/>
        </div>
        <div className={styles.img_div}>
          <input ref={inputRef3} className={styles.input} type="file" accept="image/*" name="file" onChange={onChange}/>
        </div>
      </div>  
    </div>
  </div>
  
  )
}); 
export default ImageFileInput;