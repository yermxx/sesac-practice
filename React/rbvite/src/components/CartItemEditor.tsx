import { FormEvent, useEffect, useRef } from 'react';
import { type CartItem } from '../App';
import Input from './atoms/Input';
import Button from './atoms/Button';
import { TbShoppingCartOff, TbShoppingCartPlus } from 'react-icons/tb';

type Props = {
  cartItem: CartItem | null;
  saveCartItem: (cartItem: CartItem) => void;
  toggleEditing: () => void;
};

export default function CartItemEditor({
  cartItem,
  saveCartItem,
  toggleEditing,
}: Props) {
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const price = priceRef.current?.value;

    if (!name) {
      alert('상품명을 입력하세요!');
      return nameRef.current?.focus();
    } else if (!price) {
      alert('상품 가격을 입력하세요!');
      return priceRef.current?.focus();
    }

    const id = Number(idRef.current?.value) || 0;
    saveCartItem({ id, name, price: +price });
    toggleEditing();

    // save한 뒤 input 초기화
    nameRef.current.value = '';
    priceRef.current.value = '';
    nameRef.current?.focus();
  };

  useEffect(() => {
    nameRef.current?.focus();

    if (!cartItem || !idRef.current || !nameRef.current || !priceRef.current) {
      return;
    }

    idRef.current.value = cartItem.id.toString();
    nameRef.current.value = cartItem.name;
    priceRef.current.value = cartItem.price.toString();
  }, [cartItem]);

  // data를 받는 부분은 form
  return (
    <>
      <form onSubmit={submitHandler} className='mt-3 flex gap-3'>
        <Input type='hidden' ref={idRef} />
        <Input
          ref={nameRef}
          type='text'
          placeholder='item name...'
          className='mx-2 border'
        />
        <Input ref={priceRef} type='number' placeholder='item price...' />
        <Button type='reset' onClick={toggleEditing}>
          <TbShoppingCartOff />
        </Button>
        <Button type='submit' className='btn-primary'>
          <TbShoppingCartPlus />
        </Button>
      </form>
    </>
  );
}
