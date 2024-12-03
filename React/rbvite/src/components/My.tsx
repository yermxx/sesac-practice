import Profile from './Profile';
import Login from './Login';
import Button from './atoms/Button';
import { FaPlus } from 'react-icons/fa6';
import { useEffect, useRef } from 'react';
import { RiEmotionSadLine } from 'react-icons/ri';
import VideoPlayer, { VideoPlayerHandler } from './VideoPlayer';
import {
  TiMediaPauseOutline,
  TiMediaPlayOutline,
  TiMediaStop,
  TiVolumeDown,
  TiVolumeMute,
  TiVolumeUp,
} from 'react-icons/ti';
import { useSession } from '../hooks/session-context';
import { useToggle } from '../hooks/useToggle';
import { useTimeout } from '../hooks/timer-hooks';
import Item from './Item';

export default function My() {
  const { session, toggleReloadSession } = useSession();

  const logoutButtonRef = useRef<HTMLButtonElement>(null);
  const videoPlayerRef = useRef<VideoPlayerHandler>(null); // useImperativeHandle를 사용할 때는 ref의 타입을 주입해야 한다 !!

  const [isAdding, toggleAdding] = useToggle(true);

  // const primitive = 123;

  // useEffect(() => {
  //   console.log('*******11', primitive, isAdding);

  //   return () => console.log('unmount11!!');
  // }, [primitive, isAdding]);

  let xxx = 0;
  // useEffect(() => {
  //   console.log('*******22');
  //   // alert('login plz...');

  //   return () => console.log('unmount22!!');
  // }, []);

  useTimeout(() => {
    xxx++;
  }, 1000);

  useEffect(() => {
    // const abortController = new AbortController();
    // const { signal } = abortController;
    // (async function () {
    //   try {
    //     const data = await fetch('/data/sample.json', { signal }).then((res) =>
    //       res.json()
    //     );
    //     console.log('My.data>>', data);
    //   } catch (error) {
    //     console.error('Error>>', error);
    //   }
    // })();
    // fetch('/data/sample.json', { signal })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log('data>>', data);
    //   })
    //   .catch((error) => console.error('Error>>', error));
    // return () => abortController.abort('Clean-up in My!');
  }, []);

  return (
    <>
      {session.loginUser?.id ? (
        <div className='flex'>
          <Profile ref={logoutButtonRef} xxx={xxx} />
          <Button
            onClick={() => logoutButtonRef.current?.focus()}
            className='mb-4'
          >
            MySignOut
          </Button>
        </div>
      ) : (
        <Login />
      )}
      <ul className='my-3 mb-6 w-auto space-y-3 border p-4'>
        {session.cart?.length ? (
          session.cart.map((item) => (
            <li key={item.id}>
              <Item item={item} />
            </li>
          ))
        ) : (
          <li className='text-slate-500'>
            <div className='flex items-center justify-center'>
              There is no items..
              <RiEmotionSadLine />
            </div>
          </li>
        )}
        <li className='mt-3 text-center'>
          {isAdding ? (
            <Item
              item={{ id: 0, name: '', price: 0 }}
              toggleAdding={() => toggleAdding()}
            />
          ) : (
            // onClick={() => setIsEditing(true)}을 변수로 더 깔끔하게 처리
            <Button onClick={toggleAdding} className='mx-auto'>
              <FaPlus /> Add Item
            </Button>
          )}
        </li>
      </ul>
      <Button onClick={toggleReloadSession} className='mb-6'>
        Reload Session
      </Button>

      <div className='mx-auto mb-6 w-96 border p-5'>
        <VideoPlayer
          url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
          ref={videoPlayerRef}
        />

        <div className='flex w-full justify-center'>
          <div className='mx-8 flex gap-3'>
            <Button onClick={() => videoPlayerRef.current?.start()}>
              <TiMediaPlayOutline />
            </Button>
            <Button onClick={() => videoPlayerRef.current?.pause()}>
              <TiMediaPauseOutline />
            </Button>
            <Button onClick={() => videoPlayerRef.current?.stop()}>
              <TiMediaStop />
            </Button>
          </div>
          <div className='mx-8 flex gap-2'>
            <Button onClick={() => videoPlayerRef.current?.mute()}>
              <TiVolumeMute />
            </Button>
            <Button onClick={() => videoPlayerRef.current?.volumeUp(-0.1)}>
              <TiVolumeDown />
            </Button>
            <Button onClick={() => videoPlayerRef.current?.volumeUp(0.1)}>
              <TiVolumeUp />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
