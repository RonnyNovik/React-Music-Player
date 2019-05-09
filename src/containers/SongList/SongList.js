import React from 'react';
import ListItem from '../../components/ListItem/ListItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
const SongList = (props) => {

    return (
       
        <div style={{'marginTop': '2vh'}}>
        <TransitionGroup appear={true}>
          {props.songArray.map( (song, index) => {
             return (
                <CSSTransition
                in={props.isOpen}
                appear={true}
                timeout={600}
                classNames='fade'>
                 <ListItem key={index}
                  style={{'transitionDelay': `${ index * .05 }s` }}
                  click={props.click} 
                  songName={song.songName} 
                  songIndex={index}  
                  artistName={song.artistName} 
                  songIMG={song.songIMG}/>
                </CSSTransition>
              )   
          })}
          </TransitionGroup>
        </div>
        
    );
};

export default SongList;