import React from 'react';
import styles from './ImageTile.module.css';

const ImageTile = (props) => {
  return (
    <div className={styles.ImageTile}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default ImageTile;
