import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import Player from './Player';
import './PlayerPage.css';

const PlayerPage1 = () => {
    const [selectedTrack, setSelectedTrack] = useState(null);
    const navigate = useNavigate(); // Inicializar useNavigate

    // Definir as opções de versões
    const tracks = [
        {
            title: 'Contralto',
            artist: 'Artist 1 - Live',
            src: 'https://www.dropbox.com/scl/fi/6ctij718e6pj8bzk8u14d/Contralto.mp3?rlkey=x829065w1k4e10cmiwlspjwh8&st=qj5o35us&dl=1',
            cover: 'https://via.placeholder.com/400x400.png?text=Contralto',
        },
        {
            title: 'Tenor',
            artist: 'Artist 1 - Live',
            src: 'https://www.dropbox.com/scl/fi/km3aw48wtkrpyilsnjoea/Tenor_1.mp3?rlkey=o041y61du6h8hztocsun7ywwk&st=7xm78xql&dl=1',
            cover: 'https://via.placeholder.com/400x400.png?text=Tenor',
        },
        {
            title: 'Barítono',
            artist: 'Artist 1 - Acoustic',
            src: 'https://www.dropbox.com/scl/fi/rpu95sc6hx4utdd7h86je/Baritono_1.mp3?rlkey=6haleed91z2gy5bmwxu20jiav&st=gujv1rfk&dl=1',
            cover: 'https://via.placeholder.com/400x400.png?text=Barítono',
        },
        {
            title: 'Soprano',
            artist: 'Artist 1 - Remix',
            src: 'https://www.dropbox.com/scl/fi/555bsi105vuvrndj1x56i/Soprano_1.mp3?rlkey=u8gv31nhv2rgjlcvkxdzoubes&st=76of05xe&dl=1',
            cover: 'https://via.placeholder.com/400x400.png?text=Soprano',
        },
    ];

    // Efeito para definir a primeira versão como a selecionada
    useEffect(() => {
        if (tracks.length > 0) {
            setSelectedTrack(tracks[0]);
        }
    }, []);

    return (
        <div className="player-page">
            <button onClick={() => navigate('/')} className="back-button">← Voltar para músicas</button>
            <h2>Canção ao Cordeiro</h2>

            {selectedTrack && <Player track={selectedTrack} />}<br></br>
            <div className="track-options">
                {tracks.map((track, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedTrack(track)}
                        className={`track-button ${selectedTrack === track ? 'active' : ''}`}
                    >
                        {track.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PlayerPage1;
