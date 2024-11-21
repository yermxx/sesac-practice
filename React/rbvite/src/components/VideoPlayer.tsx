import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from 'react';

type Props = {
  url: string;
};

export type VideoPlayerHandler = {
  stop: () => void;
  pause: () => void;
  start: () => void;
  mute: () => void;
  volumeUp: (flag: number) => void;
};

function Player({ url }: Props, ref: ForwardedRef<VideoPlayerHandler>) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handler: VideoPlayerHandler = {
    stop() {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // 영상 시작 지점으로 이동
      }
    },
    pause() {
      videoRef.current?.pause();
    },
    start() {
      videoRef.current?.play();
    },
    mute() {
      if (videoRef.current?.volume !== undefined) {
        videoRef.current.volume = 0;
      }
    },
    volumeUp(delta: number) {
      if (videoRef.current?.volume !== undefined) {
        videoRef.current.volume = Math.min(1, videoRef.current.volume + delta);
      }
    },
  };
  useImperativeHandle(ref, () => handler);

  return (
    <div className='mb-4'>
      <video ref={videoRef} width='100%' height='240' controls>
        <source src={url} type='video/mp4' />
      </video>
    </div>
  );
}

const VideoPlayer = forwardRef(Player);
export default VideoPlayer;
