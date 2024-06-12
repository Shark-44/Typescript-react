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
  IoVolumeMute
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

  return (
    <div className="music-player">
      <div className="audio-title">{playerDetails.title}</div>
      <div className="player-controls">
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
    </div>
  );
};

export default MusicPlayer
