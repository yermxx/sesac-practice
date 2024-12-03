import { FormEvent, MouseEvent, useRef, useState } from 'react';
import Input from './atoms/Input';
import Button from './atoms/Button';
import { TbShoppingCartOff, TbShoppingCartPlus } from 'react-icons/tb';
import { useSession, type CartItem } from '../hooks/session-context';
import { useCounter } from '../hooks/counter-hook';
import { FaTrashCan } from 'react-icons/fa6';

type Props = {
  item: CartItem;
  toggleAdding?: () => void; // add시에만 저달할 것!!
};

export default function Item({ item, toggleAdding }: Props) {
  const { id, name, price } = item;

  const { removeCartItem, addCartItem, editCartItem } = useSession();
  const { plusCount } = useCounter();

  const [isEditing, setIsEditing] = useState(!id);
  const [hasDirty, setDirty] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const toggleEditing = (
    e?: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => {
    // if (e && 'preventDefault' in e)
    e?.preventDefault();
    if (hasDirty && nameRef.current && priceRef.current) {
      nameRef.current.value = name;
      priceRef.current.value = String(price);
      // setDirty(false);
      checkDirty();
    }

    // setTimeout(() => {
    if (toggleAdding) toggleAdding();
    else setIsEditing((pre) => !pre);
    // }, 500);

    plusCount();
  };

  const removeItem = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();
    if (confirm('Are u sure?')) {
      removeCartItem(id);
    }
  };

  const saveItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const price = priceRef.current?.value;
    // console.log('🚀  name/price:', name, price);
    if (!name) {
      alert('상품명을 입력하세요!');
      return nameRef.current?.focus();
    } else if (!price) {
      alert('금액을 입력하세요!');
      return priceRef.current?.focus();
    }

    if (id === 0) addCartItem(name, +price);
    else editCartItem({ id, name, price: +price });

    nameRef.current.value = '';
    priceRef.current.value = '';
    nameRef.current.focus();

    toggleEditing();
  };

  const checkDirty = () => {
    const currName = nameRef.current?.value;
    const currPrice = Number(priceRef.current?.value);
    setDirty(name !== currName || price !== currPrice);
  };

  // useLayoutEffect(() => {
  //   sddaadsffsa

  //   return () => { }
  // }, [y]);
  // useEffect(() => {}, [x, y]);

  // data를 받는 부분은 form
  return (
    <>
      {isEditing ? (
        <form onSubmit={saveItem} className='mt-3 flex gap-3'>
          <Input
            ref={nameRef}
            type='text'
            onChange={checkDirty}
            defaultValue={name}
            placeholder='item name...'
            className='mx-2 border'
          />
          <Input
            ref={priceRef}
            type='number'
            onChange={checkDirty}
            defaultValue={price}
            placeholder='price...'
          />
          <Button type='reset' onClick={toggleEditing}>
            <TbShoppingCartOff />
          </Button>
          {hasDirty && (
            <Button type='submit' className='btn-primary'>
              <TbShoppingCartPlus />
            </Button>
          )}
        </form>
      ) : (
        <a
          href='#'
          onClick={() => toggleEditing()}
          className='group flex justify-between hover:bg-gray-200'
        >
          <span className='col-span-2 whitespace-pre font-mono'>
            * {name.padEnd(8)}: <small>{price.toLocaleString()}원</small>
          </span>
          <button onClick={(e) => removeItem(e, id)} className='btn px-1 py-0'>
            <FaTrashCan />
          </button>
        </a>
      )}
    </>
  );
}
