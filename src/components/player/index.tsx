import React, {useEffect, useState} from 'react';
import {
  ControllButton,
  ProgressBar,
  ProgressContainer,
  Timer,
  Wrapper,
} from './styles';
//@ts-ignore
import Play from '../../assets/play.svg';
//@ts-ignore
import Stop from '../../assets/stop.svg';

// Import the react-native-sound module
import Sound from 'react-native-sound';

// Enable playback in silence mode (important to set before playing the sound)
Sound.setCategory('Playback');

// Loading the sound
const sound = new Sound(require('../../assets/sound/one.mp3'), (error: any) => {
  if (error) {
    console.log('Failed to load the sound', error);
    return;
  }
});

export default function Player() {
  const [time, setTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playing, setPlaying] = useState(false);

  let timer: any;
  const handleCurrentTime = () => {
    timer = setInterval(() => {
      sound.getCurrentTime(
        (seconds: React.SetStateAction<number>, isPlaying: boolean) => {
          if (isPlaying) {
            setCurrentTime(seconds);
          }
          if (!isPlaying) {
            clearInterval(timer);
          }
        },
      );
    }, 1000);
  };

  useEffect(() => {
    setTime(sound.getDuration());

    return () => {
      clearInterval(timer);
    };
  }, [timer]);

  const pause = () => {
    sound.pause();
    setPlaying(false);
    clearInterval(timer);
    timer = 0;
  };

  const play = () => {
    handleCurrentTime();
    setPlaying(true);
    sound.play((success: any) => {
      if (success) {
        setPlaying(false);
        setCurrentTime(0);
      }
    });
  };

  return (
    <Wrapper>
      <ControllButton onPress={playing ? pause : play}>
        {playing ? <Stop /> : <Play />}
      </ControllButton>
      <ProgressContainer>
        <ProgressBar
          style={{
            width: `${(currentTime / time) * 100}%`,
          }}
        />
      </ProgressContainer>
      <Timer>{(time / 60).toPrecision(3)}</Timer>
    </Wrapper>
  );
}
