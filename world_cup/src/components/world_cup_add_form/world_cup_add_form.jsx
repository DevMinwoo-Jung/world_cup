import React, { useRef, useState } from 'react';
import styles from './world_cup_add_form.module.css'
import Button from '../button/button';

const WorldCupAddForm = ({FileInput, onAdd, cups}) => {
  const formRef = useRef();
  const titleRef = useRef();
  const [file, setFile] = useState({fileName: null, fileURL: null});


  const onFileChange = file => {
    setFile({
          fileName: file.name,
          fileURL: file.url,
    });
};

  const onSubmit = event => {
    event.preventDefault();
    const cups = {
          id: Date.now(),
          title: titleRef.current.value || '',
          fileName: file.fileName || '',
          fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null, });
    onAdd(cups);
};

  return (
    <form ref={formRef} className={styles.addForm}>
        <input ref={titleRef} type="text" name="title" placeholder="월드컵 타이틀을 적어주세요!"/>
        <FileInput name={file.fileName} onFileChange={onFileChange} cups={cups}/>
        <Button name='Add' onClick={onSubmit}/>
    </form>
  );
};

export default WorldCupAddForm;