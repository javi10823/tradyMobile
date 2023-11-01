import React, {useEffect, useState} from 'react';
import {
  ControllButton,
  Icon,
  ProgressBar,
  ProgressContainer,
  Timer,
  Wrapper,
} from './styles';
import Sound from 'react-native-sound';

const sound = new Sound(require('../../assets/sound/one.mp3'), error => {
  if (error) {
    console.log('Failed to load the sound', error);
  }
});

export default function Player() {
  const [time, setTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setTime(sound.getDuration());
  }, []);

  let timer: any;
  const handleCurrentTime = () => {
    timer = setInterval(() => {
      sound.getCurrentTime((seconds, isPlaying) => {
        if (isPlaying) {
          setCurrentTime(seconds);
        }
        if (!isPlaying) {
          clearInterval(timer);
        }
      });
    }, 1000);
  };

  const pause = () => {
    sound.pause();
    setPlaying(false);
    clearInterval(timer);
    timer = 0;
  };

  const play = () => {
    handleCurrentTime();
    setPlaying(true);
    sound.play(success => {
      if (success) {
        setPlaying(false);
        setCurrentTime(0);
      }
    });
  };

  return (
    <Wrapper>
      <ControllButton onPress={playing ? pause : play}>
        <Icon
          source={
            playing
              ? require('../../assets/stop.png')
              : require('../../assets/play.png')
          }
        />
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
