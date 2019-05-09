  import React, { Component } from 'react';
  import styles from './Player.module.css';
  import Title from '../../components/Title/Title';
  import Button from '../../components/Button/Button';
  import ImageTile from '../../components/ImageTile/ImageTile';
  import ArtistName from '../../components/ArtistName/ArtistName';
  import DurationBar from '../../components/DurationBar/DurationBar';
  import {CSSTransition} from 'react-transition-group';
  import Axios from 'axios';
  import SongList from '../SongList/SongList';
  class Player extends Component { 
    //Initialize variables and state 
    constructor(props){
      super(props)
      this.state = {
        songArray: null,
        currentSong: {},
        currentSongIndex: 0,
        shuffleIsToggled: false,
        repeatIsToggled: false,
        muteIsToggled: false,
        playIsToggled: false,
        listIsToggled: false
      }
      this.audioComponent = React.createRef();
      this.currentTimeElement = document.getElementsByClassName('current-time');
      this.songLength = document.getElementsByClassName('total-time');
    }
    //Calculate the minutes and seconds using song duration, output a formatted duration into the .total-time element
    initializeSongLengthFunction = () => {
      if(this.state.currentSong.songURL){
        let duration = this.audioComponent.audio.duration;
        const seconds = Math.floor( duration % 60 );
        const minutes = Math.floor( duration / 60 % 60 );
        return this.songLength[0].innerHTML = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
      } 
    } 
    
    //Initialize song length rendering and fetch songs information from firebase
    componentDidMount() {
      Axios.get('https://react-music-player-6bb10.firebaseio.com/Songs.json')
      .then(response => {
        const songs = response.data
        //Assign the data that was fetched from the server and initialize the first song
        this.setState({songArray: songs, currentSong: songs[this.state.currentSongIndex]}); 
        //Prevent audio from playing after load
        this.audioComponent.audio.pause()
      })
      .catch(function (error) {
        console.log(error);
      });
      //Calculate the length of the first song and display on load
      this.initializeSongLengthFunction();
    }
    //Toggle the playing state on click and play/pause the audio
    togglePlayModeHandler = () => {
      this.setState({playIsToggled: !this.state.playIsToggled});
      this.state.playIsToggled ? this.audioComponent.audio.pause() : this.audioComponent.audio.play(); 
    }
    //Toggling audio mute according to muteIsToggled state
    toggleMuteHandler = () => {
      return this.state.muteIsToggled ? this.audioComponent.audio.muted = false : this.audioComponent.audio.muted = true;
    }
    //Switch the song back
    backwardSongHandler = () => {
      //Checks if this is not the first song on the list
      if(this.state.currentSongIndex > 0){
        let currentIndex = this.state.currentSongIndex;
        //If shuffle is toggled, Randomize a song
        if(this.state.shuffleIsToggled){
          currentIndex = Math.floor(Math.random() * this.state.songArray.length)
        }else{ 
          currentIndex--
        }
        this.switchSongHandler(currentIndex);
      }   
    }
    //Switch the song forward
    forwardSongHandler = () => { 
      //Checks if the current song is not the last song on the list
      if(this.state.currentSongIndex <= this.state.songArray.length - 1) {
        let currentIndex = this.state.currentSongIndex;
        //Checks if shuffle is toggled and if so, randomizes a song index
        if(this.state.shuffleIsToggled){
          currentIndex = Math.floor(Math.random() * this.state.songArray.length)
        } //If this is the last song on the list and repeat is on, reset the current index
        else if(this.state.currentSongIndex === this.state.songArray.length -1  && this.state.repeatIsToggled){
          currentIndex = 0;
          //If it's not the last song, add one to the current index
        }else if(this.state.currentSongIndex < this.state.songArray.length - 1){
          currentIndex++
        }
        this.switchSongHandler(currentIndex);
      }  
    }
    //Universal function to switch the song via state and reassign the current song index
    switchSongHandler = (index) => {
      this.setState({currentSongIndex: index, currentSong: this.state.songArray[index]});
    }
    //Upon a click on each of the list items, close the list and switch to the chosen song
    switchSongFromList = (event) => {
      this.setState({listIsToggled: false});
      this.switchSongHandler(event.currentTarget.id);
    }
    //Randomize song and switch, used to trigger shuffle on songs endings
    randomizeSong = () => {
      let currentIndex = Math.floor(Math.random() * this.state.songArray.length) ;
      this.switchSongHandler(currentIndex)
    }
    
    //Accepts the mode of the clicked button, toggles it and invoking the necessary functions related to the mode
    togglePlayerOptions = (modeToggled) => {
      switch(modeToggled) {
        case 'shuffle':
        return this.setState({shuffleIsToggled: !this.state.shuffleIsToggled});
        case 'mute':
        this.setState({muteIsToggled: !this.state.muteIsToggled});
        return this.toggleMuteHandler() 
        case 'list':
        return this.setState({listIsToggled: !this.state.listIsToggled, playIsToggled: false});
        case 'repeat':
        return this.setState({repeatIsToggled: !this.state.repeatIsToggled});
        default:
        return
      }
    }
    render() { 
          
      let togglePlayIcon = this.state.playIsToggled ? 'fas fa-pause fa-2x' : 'fas fa-play fa-2x';
      let playerTitle = this.state.listIsToggled ? 'Choose A Song' : 'Now Playing'
      if(this.state.currentSong.songURL){
        return <div style={{'width': '100%'}}>
        <CSSTransition in={true} appear={true} timeout={300} classNames='fadeTopBar'>
         <div className={styles.TopBar}>
          {this.state.listIsToggled ? null : <Button isToggled={this.state.muteIsToggled} toggledType='mute' click={(modeToggled) => this.togglePlayerOptions(modeToggled)} type='ui-icon' icon='fas fa-volume-mute fa-2x' />}
          <CSSTransition in={this.state.listIsToggled} timeout={300} classNames='textMove'>
          <Title>{playerTitle}</Title>
          </CSSTransition>
         <Button isToggled={this.state.listIsToggled} toggledType='list' click={(modeToggled) => this.togglePlayerOptions(modeToggled)} type='ui-icon' icon='fas fa-list-ul fa-2x' />
       </div>
       </CSSTransition>
       <>
       {this.state.listIsToggled ? <SongList click={(event) => this.switchSongFromList(event)} songArray={this.state.songArray} isOpen={this.state.listIsToggled}/> :
       
       <>
       <CSSTransition in={true} appear={true} timeout={300} classNames='fade'>
        <ImageTile src={this.state.currentSong.songIMG} alt='Song Cover' />
       </CSSTransition>
       
     <CSSTransition in={true} appear={true} timeout={300} classNames='fadeTopBar'>
        <div style={{'transitionDelay': '400ms'}}>
         <div className={styles.SongInfo}>
          <div> 
           <Title>{this.state.currentSong.songName}</Title>
           <ArtistName>{this.state.currentSong.artistName}</ArtistName>
         </div>
        </div> 
        
      {/*The duration bar holds inside the H5AudioComponent that is being used as the audio managing component.
         This component is responsible for the audio playing, calculating and displaying durations and applying the seeking function according to the indicator*/}
       <DurationBar isShuffleOn={this.state.shuffleIsToggled} randomizeSong={this.randomizeSong} onEnd={this.forwardSongHandler} onDragIndicator={this.togglePlayModeHandler} audioComponent={this.audioComponent} initializeTime={this.initializeSongLengthFunction} audioRef={el => (this.audioComponent = el)} songURL={this.state.currentSong.songURL} playing={this.state.playIsToggled}/>

       <div className={styles.PlayerControls}>
        <Button isToggled={this.state.shuffleIsToggled} toggledType='shuffle' click={(modeToggled) => this.togglePlayerOptions(modeToggled)} type='player-flow-control' icon='fas fa-random' />
        <Button click={this.backwardSongHandler} type='player-switch-control' icon='fas fa-step-backward' />
        <Button click={this.togglePlayModeHandler} type='player-play-control' icon={togglePlayIcon} />
        <Button click={this.forwardSongHandler} type='player-switch-control' icon='fas fa-step-forward' />
        <Button isToggled={this.state.repeatIsToggled} toggledType='repeat' click={(modeToggled) => this.togglePlayerOptions(modeToggled)} type='player-flow-control' icon='fas fa-redo' />
       </div>
      </div>
     </CSSTransition>
      </>
       }
       </>
     </div>   
      }else{
       return <div className="loader">Loading...</div>;
      };
    }
  }
  
  
  export default Player;