
import { useEffect, useState } from 'react';
import { PlayerState, useYoutube } from 'react-youtube-music-player';
import {
  IoPause,
  IoPlay,
  IoPlaySkipBack,
  IoPlaySkipForward,
  IoStop,
  IoVolumeHigh,
  IoVolumeMedium,
  IoVolumeLow,
  IoVolumeMute,
  IoReload,
  IoRepeatSharp
} from 'react-icons/io5';
import './MusicPlayer.scss';

interface MusicPlayerProps {
  url: string;
  onStop: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const getVideoIdFromUrl = (url: string): string | null => {
  const urlObj = new URL(url);
  return urlObj.searchParams.get('v');
};

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};

const MusicPlayer: React.FC<MusicPlayerProps> = ({ url, onStop, onNext, onPrevious }) => {
  const videoId = getVideoIdFromUrl(url);
  const { playerDetails, actions } = useYoutube({
    id: videoId ?? '',
    type: 'video',
    options: {
      autoplay: true,
    },
  });

  const renderVolumeIcon = () => {
    if (playerDetails.volume === 0) {
      return <IoVolumeMute />;
    }
    if (playerDetails.volume <= 30) {
      return <IoVolumeLow />;
    }
    if (playerDetails.volume <= 60) {
      return <IoVolumeMedium />;
    }
    return <IoVolumeHigh />;
  };

  const handleStopMusic = () => {
    actions.stopVideo();
    onStop();
  };
  // Afficher la durée
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLooping, setIsLooping] = useState<boolean>(false); // lecture en boucle

  // changements dans playerDetails
  useEffect(() => {
    setCurrentTime(playerDetails.currentTime);
    setIsPlaying(playerDetails.state === PlayerState.PLAYING);
  }, [playerDetails]); //

   // Actualisation currentTime
  useEffect(() => {
    let interval: number | undefined = undefined;
 
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 1); 
      }, 1000); 
    } else {
      clearInterval(interval); 
    }

    // Nettoyage de l'effet
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying]);
// pour lecture en boucle
const toggleLoop = () => {
  setIsLooping(!isLooping);
}
useEffect(() => {
  if (isLooping && playerDetails.state === 0) {
    onNext();
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [playerDetails.state]);





  return (
    <div className="music-player">
      <div className="audio-title">{playerDetails.title}</div>
      <div className="player-controls">
        <button onClick={toggleLoop}>
          {isLooping ? <IoRepeatSharp /> : <IoReload />}
        </button>
        <button onClick={onPrevious}>
          <IoPlaySkipBack />
        </button>
        {playerDetails.state === PlayerState.PLAYING ? (
          <button className="emphasised" onClick={actions.pauseVideo}>
            <IoPause />
          </button>
        ) : (
          <button className="emphasised" onClick={actions.playVideo}>
            <IoPlay />
          </button>
        )}
        <button onClick={handleStopMusic}>
          <IoStop />
        </button>
        <button onClick={onNext}>
          <IoPlaySkipForward />
        </button>
        <div className="volume-control">
          {renderVolumeIcon()}
          <input
            type="range"
            value={playerDetails.volume ?? 0}
            min={0}
            max={100}
            onChange={(event) => actions.setVolume(event.target.valueAsNumber)}
          />
        </div>
      </div>
      <div className="player-time">
        <span>{formatTime(currentTime)}</span>
        /
        <span>{formatTime(playerDetails.duration)}</span>
      </div>
    </div>
  );
};

export default MusicPlayer;
