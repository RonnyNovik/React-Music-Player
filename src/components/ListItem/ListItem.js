import React from 'react';
import styles from './ListItem.module.css';
const ListItem = (props) => {
    return (
        <div style={props.style} onClick={props.click} id={props.songIndex} className={styles.ListItemContainer}>
          <img className={styles.ListItemImg} src={props.songIMG} alt='song cover'/>
          <div className={styles.TextContainer}>
          <p className={styles.ArtistName}>{props.artistName}</p>
          <h1 className={styles.SongName}>{props.songName}</h1>
          </div>
        </div>
    );
};

export default ListItem;