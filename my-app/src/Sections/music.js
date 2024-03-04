
import React, { useState } from 'react';
import "./music.css";
import SpotifyIcon from '../assets/spotifylogo.png';
import YoutubeIcon from '../assets/youtubelogo.png';
import TameImpala from "../assets/tameimpala.png";
import LilUziVert from "../assets/liluzivert.png";
import the1975 from "../assets/1975.png";
import Duster from "../assets/duster.png";
import TameImpalaAudio from '../assets/tame impala type beat.mp3';

const Experience = () => {
    const redirectToSpotifyProfile = () => {
        window.open('https://open.spotify.com/user/kintondisbawz?si=xYSjT2SXS2eBJtl2N1C29Q&nd=1&dlsi=b29bab2883ee469e', '_blank');
      };
    const redirectToYoutubeProfile = () => {
        window.open('https://youtube.com/@kintonbeats?si=GiACPRyHFDpq1wXB', '_blank');
      };
    


    const redirectToTameImpala = () => {
      window.open('https://www.youtube.com/watch?v=4Hc9MmYWnGE', '_blank');
    };
  
  

    const redirectToDuster = () => {
        window.open('https://www.youtube.com/watch?v=ghw0XxIIwwM', '_blank');
      };
    const redirectToUzi = () => {
        window.open('https://www.youtube.com/watch?v=u28WqoJ2VV0', '_blank');
      };
    const redirectTo1975 = () => {
        window.open('https://www.youtube.com/watch?v=3pGbcPlqzls', '_blank');
      };

    return (
        <div id="music" class="music-page">
            <h2 id="music-header">Music</h2>
                <h3>Some of my music!</h3>
    
        <div class = "columns">
            <div class = "allcontainers">
            <img
            src={TameImpala}
            onClick={redirectToTameImpala} 
              />
            <p className="description">*FREE* Tame Impala x Psychidelic Rock Type Beat</p>
            </div>

            <div class = "allcontainers">
            <img
             src= {LilUziVert}
             onClick={redirectToUzi}
              />
            <p className="description">*FREE* Lil Uzi Vert + Pink Tape Type Beat </p>
            </div>
        </div>
            
        <div class = "columns">
            <div class = "allcontainers">
            <img
             src= {the1975}
             onClick={redirectTo1975}
              />
            <p className="description">*FREE* 1975 x Synth Pop Type Beat </p>
            </div>

            <div class = "allcontainers"> 
            <img
             src= {Duster}
             onClick={redirectToDuster}
              />
            <p className="description">*FREE* Duster x Alt Indie Type Beat</p>
            </div>
        </div>

            <div class = "logos">
                <div class = "spotifyicon">
                    <img 
                    src={SpotifyIcon}

                    style={{
                        display: 'flex',
                        width: '12vh',
                        height: 'auto', 
                        cursor: 'pointer', 
                    }}

                    onClick={redirectToSpotifyProfile}
                     />
                </div>
                <div class = "youtubeicon">
                    <img 
                    src={YoutubeIcon}

                    style={{
                        display: 'flex',
                        width: '12vh',
                        height: 'auto', 
                        cursor: 'pointer', 
                    }}

                    onClick={redirectToYoutubeProfile}
                     />
                </div>
            </div>
    </div>

    );
};

export default Experience;