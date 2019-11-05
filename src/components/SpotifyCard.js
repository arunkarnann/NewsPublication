import React from 'react'
import { Item , Label, } from 'semantic-ui-react'
import { SpotifyApiContext, Album } from 'react-spotify-api';
import ReactPlayer from 'react-player';
import AudioSpectrum from "react-audio-spectrum";
class SpotifyCard extends React.Component{

  state = { isread: [] };

  onArticleClick(event){
    // console.log("clicked");
    this.setState(   { isread:  this.state.isread.push( event.target.getAttribute("data-key"))  } );
    console.log(this.state);
  }

  contains(arr, element) {
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] === element) {
              return true;
          }
      }
      return false;
  }

  audioEle = new Audio('http://ice4.somafm.com/groovesalad-128-mp3'); 

  doParentToggleFromChild(event){	
    console.log("called");
    this.props.parentToggle(event.target.getAttribute("data-key"));
  }

  render(){
    return(
<div>
<audio id="audio-element"
  src="http://ice4.somafm.com/groovesalad-128-mp3.mp3"
  autoPlay
>
</audio>
<AudioSpectrum
  id="audio-canvas"
  height={500}
  width={300}
  audioId={'audio-element'}
  capColor={'red'}
  capHeight={2}
  meterWidth={2}
  meterCount={512}
  meterColor={[
    {stop: 0, color: '#f00'},
    {stop: 0.5, color: '#0CD7FD'},
    {stop: 1, color: 'red'}
  ]}
  gap={4}
/>
</div>

    );
  }
}

export default SpotifyCard;