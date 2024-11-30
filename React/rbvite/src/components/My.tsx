import Profile from './Profile';
import Login from './Login';
import Button from './atoms/Button';
import { FaPlus, FaTrashCan } from 'react-icons/fa6';
import { useEffect, useRef, useState } from 'react';
import { RiEmotionSadLine } from 'react-icons/ri';
import CartItemEditor from './CartItemEditor';
import VideoPlayer, { VideoPlayerHandler } from './VideoPlayer';
import {
  TiMediaPauseOutline,
  TiMediaPlayOutline,
  TiMediaStop,
  TiVolumeDown,
  TiVolumeMute,
  TiVolumeUp,
} from 'react-icons/ti';
import { CartItem, useSession } from '../hooks/session-context';
import { useToggle } from '../hooks/useToggle';
import { useInterval, useTimeout } from '../hooks/timer-hooks';

export default function My() {
  const { session, saveCartItem, removeCartItem } = useSession();
  const [cartItem, setCartItem] = useState<CartItem | null>(null);

  const logoutButtonRef = useRef<HTMLButtonElement>(null);
  const videoPlayerRef = useRef<VideoPlayerHandler>(null); // useImperativeHandle를 사용할 때는 ref의 타입을 주입해야 한다 !!

  const [isEditing, toggleEditing] = useToggle();

  const setItem = (item: CartItem) => {
    toggleEditing();
    setCartItem(item);
  };

  // 한 번만 실행되는지 Test
  useEffect(() => {
    const init = setInterval(() => console.log(), 1000);
    return () => clearInterval(init);
  }, []);

  // useTimer Test
  useTimeout(() => console.log('X'), 1000);
  useInterval((name) => console.log(`Hello, ${name}!!!`), 1000, ['Hong']);

  return (
    <>
      {session.loginUser?.id ? (
        <div className='flex'>
          <Profile ref={logoutButtonRef} />
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
      <ul className='mb-6 w-auto space-y-3 border p-4'>
        {session.cart?.length ? (
          session.cart.map(({ id, name, price }) => (
            <li key={id} className='grid grid-cols-3 justify-around'>
              <span className='col-span-2 whitespace-pre font-mono'>
                * {name.padEnd(8)}: <small>{price.toLocaleString()}원</small>
              </span>
              <div className='grow-1 flex'>
                <Button
                  onClick={() => setItem({ id, name, price })}
                  className='mx-5 ml-auto'
                >
                  Edit
                </Button>
                <Button
                  onClick={() => removeCartItem(id)}
                  className='mx-5 ml-auto'
                >
                  <FaTrashCan />
                </Button>
              </div>
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
          {isEditing ? (
            <CartItemEditor
              cartItem={cartItem}
              saveCartItem={saveCartItem}
              toggleEditing={toggleEditing}
            />
          ) : (
            // onClick={() => setIsEditing(true)}을 변수로 더 깔끔하게 처리
            <Button onClick={toggleEditing} className='mx-auto'>
              <FaPlus /> Add Item
            </Button>
          )}
        </li>
      </ul>

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
