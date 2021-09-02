import React, { memo } from 'react';
import Button from '../button/button';
import styels from './cups.module.css'

const Cups = memo(({cup, deleteCups}) => {
  const DEFAULT_IMAGE ='/images/default_logo.png'
  const {title, fileURL} = cup;
  const url = fileURL || DEFAULT_IMAGE;

  const onSubmit = (event) => {
    event.preventDefault();
    deleteCups(cup);
  };

  return (
  <form>
    <li className={`${styels.cups}`}>
      <img className={styels.avatar} src={url} alt="profile" />
      <div className={styels.info}>
        <p className={styels.title}>{title}</p>
      </div>
    </li>
    <Button name='Delete' onClick={onSubmit}/>
  </form>  
  );
});

export default Cups;