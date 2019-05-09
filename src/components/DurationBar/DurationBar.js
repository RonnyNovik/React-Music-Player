import React from 'react';
import H5AudioPlayer from 'react-h5-audio-player';


const DurationBar = (props) => {
  return (
    <div style={{'margin': '0 auto',
                 'position': 'relative',
                 'width': '98%'}}>
                   {/* The core of this app that is responsible for playing the audio, calculating durations and calculating the indicators actions.
                       For more info : https://github.com/lhz516/react-h5-audio-player */}
             <H5AudioPlayer
                     ref={props.audioRef}
                     src={props.songURL}
                     onCanPlay={() => {
                       props.initializeTime();
                     }}
                     onDragStart={() =>{
                       return props.playing ? null : props.onDragIndicator();            
                     }}
                     onAbort={() => {
                       console.log(props.audioComponent.audio)
                       
                       return props.playing ? props.audioComponent.audio.play() : props.audioComponent.audio.pause();
                     }}
                     onEnded={() => {
                       return props.isShuffleOn ? props.randomizeSong() : props.onEnd();
                     }}
                     preload='auto'
                     />
    </div>
  );
};

export default DurationBar;