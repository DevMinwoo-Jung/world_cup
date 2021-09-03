import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './world_cup_edit_form.module.css'

const WorldCupEditForm = ({FileInput, cups, updateCups, deleteCups}) => {
  const DEFAULT_IMAGE ='/images/default_logo.png'
  const titleRef = useRef();
  const {title, fileURL, fileName} = cups;
  const url = fileURL || DEFAULT_IMAGE;

  console.log(fileURL);
  
  const onFileChange = file => {
        updateCups({
              ...cups,
              fileName: file.name,
              fileURL: file.url,
        });
  };

  const onChange = (event) => {
        if(event.currentTarget == null) {
              return;
        }
        event.preventDefault();
        updateCups({
              ...cups,
              [event.currentTarget.name]: event.currentTarget.value,
        });
  };
  const onSubmit = (event) => {
        event.preventDefault();
        deleteCups(cups);
  };
  return (
    <form className={styles.form}>
    <input ref={titleRef}className={styles.input} type="text" name="title" value={title} onChange={onChange}/>
    <div className={styles.imgs}>
      <img className={styles.show_img} src={url} alt="profile" />
      <img className={styles.show_img} src={url} alt="profile" />
      <img className={styles.show_img} src={url} alt="profile" />
    </div>  
    <div className={styles.input}>
    <FileInput name={fileName} onFileChange={onFileChange}/>
    </div>
    <Button name='Delete' onClick={onSubmit}/>
</form>
  );
};

export default WorldCupEditForm;