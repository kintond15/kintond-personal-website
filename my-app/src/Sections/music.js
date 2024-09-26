import React, { useState, useEffect, useRef } from 'react';
import "./music.css";
import SpotifyIcon from '../assets/spotifylogo.png';
import YoutubeIcon from '../assets/youtubelogo.png';
import TameImpala from "../assets/tameimpala.png";
import LilUziVert from "../assets/liluzivert.png";
import the1975 from "../assets/1975.png";
import Duster from "../assets/duster.png";

const Music = () => {
    const [isVisible, setIsVisible] = useState(false);
    const musicRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                const entry = entries[0];
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        observer.observe(musicRef.current);

        return () => observer.disconnect();
    }, []);

    const redirectToSpotifyProfile = () => {
        window.open('https://open.spotify.com/user/kintondisbawz?si=xYSjT2SXS2eBJtl2N1C29Q&nd=1&dlsi=b29bab2883ee469e', '_blank');
    };

    const redirectToYoutubeProfile = () => {
        window.open('https://youtube.com/@kintonbeats?si=GiACPRyHFDpq1wXB', '_blank');
    };

    const redirectToTameImpala = () => {
        window.open('https://www.youtube.com/watch?v=4Hc9MmYWnGE', '_blank');
    };

    const redirectToUzi = () => {
        window.open('https://www.youtube.com/watch?v=u28WqoJ2VV0', '_blank');
    };

    const redirectTo1975 = () => {
        window.open('https://www.youtube.com/watch?v=3pGbcPlqzls', '_blank');
    };

    const redirectToDuster = () => {
        window.open('https://www.youtube.com/watch?v=ghw0XxIIwwM', '_blank');
    };

    return (
        <div ref={musicRef} id="music" className="music-page">
            <h2>Music</h2>
            <h3 className={isVisible ? 'visible' : ''}>
                I've been producing music since I was 15. During my free time, I enjoy making beats on FL Studio, including rap, indie, R&B, and other genres. Feel free to check out any of my beats on YouTube!
            </h3>
            <div className="columns">
                <div className={`allcontainers ${isVisible ? 'visible' : ''}`}>
                    <img src={TameImpala} onClick={redirectToTameImpala} alt="Tame Impala" />
                    <p className="description">*FREE* Tame Impala x Rock Type Beat</p>
                </div>
                <div className={`allcontainers ${isVisible ? 'visible' : ''}`}>
                    <img src={LilUziVert} onClick={redirectToUzi} alt="Lil Uzi Vert" />
                    <p className="description">*FREE* Lil Uzi Vert + Pink Tape Type Beat</p>
                </div>
            </div>
            <div className="columns">
                <div className={`allcontainers ${isVisible ? 'visible' : ''}`}>
                    <img src={the1975} onClick={redirectTo1975} alt="The 1975" />
                    <p className="description">*FREE* 1975 x Synth Pop Type Beat</p>
                </div>
                <div className={`allcontainers ${isVisible ? 'visible' : ''}`}>
                    <img src={Duster} onClick={redirectToDuster} alt="Duster" />
                    <p className="description">*FREE* Duster x Alt Indie Type Beat</p>
                </div>
            </div>
            <div className="logos">
                <div className="spotifyicon">
                    <img src={SpotifyIcon} onClick={redirectToSpotifyProfile} alt="Spotify Logo" style={{ width: '12vh', cursor: 'pointer' }} />
                </div>
                <div className="youtubeicon">
                    <img src={YoutubeIcon} onClick={redirectToYoutubeProfile} alt="YouTube Logo" style={{ width: '12vh', cursor: 'pointer' }} />
                </div>
            </div>
        </div>
    );
};

export default Music;
