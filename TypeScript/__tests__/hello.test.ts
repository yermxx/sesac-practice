import { time1, time2, time3, timePromise } from '../hello';

describe('hello', () => {
  beforeEach(() => {
    console.log('BEFORE EACH!!!!!');
  });

  afterEach(() => {
    console.log('AFTER EACH!!!!!');
    jest.clearAllMocks(); // mocks들을 다 초기화해서 오류가 나지 않도록 한다.
  });

  describe('mock', () => {
    const user = {
      id: 1,
      name: 'Hong',
      getName(n: number) {
        return `${this.name}-${n}`;
      },
    };

    const spy = jest.spyOn(user, 'getName'); // spyOn 사용할때는 꼭 jest. 붙이기
    user.getName(1);

    expect(user.getName).toHaveBeenCalled();
    expect(user.getName).toHaveBeenCalledWith(1);

    // 라이브러리를 무력화 시킬 때 이렇게 사용할 수 있다
    // jest.mock('a xio', () => {
    //   default: {
    //     get: jest.fn().mockResolvedValue({id : 1}),
    //     // post
    //   }
    // });

    const pow = jest.fn((a) => a ** 2);
    expect(pow(3)).toBe(9);
    // const calc = { id: 1, pow }

    const pow2 = jest.fn((a) => 100);
    expect(pow2(3)).toBe(100);
  });
  describe('promise', () => {
    test('timePromise-1', (done) => {
      timePromise(2)
        .then((res) => {
          expect(res).toBe(3);
          // console.log('********')
          done(); // promise는 done을 해줘야 함
        })
        .catch((err) => {
          // console.error('ERR>>', err);
        });
    });

    test('timePromise-2', async () => {
      try {
        const res = await timePromise(1);
        expect(res).toBe(3);
      } catch (err) {
        // console.error('ERR>>', err);
        expect(err).toBe('OddNumber: 1');
      }
    });

    test('timePromise-3', (done) => {
      expect(timePromise(2)).resolves.toBe(3);
      expect(timePromise(1)).rejects.toBe('OddNumber: 1').finally(done);
      // expect(await timePromise(2)).toBe(3); // await 사용한다면 이렇게
    });
  });
  test('time', () => {
    const f = () => console.log('time in test!!');
    // const spy = jest.spyOn()

    expect(time1()).toContain(1);
    expect(time1()).toEqual([1, 2, 3]);
    expect(time1()).toEqual(expect.arrayContaining([1, 2])); // 배열에 해당 요소들이 있는지 체크

    expect(() => {
      time2(2);
    }).toThrow(/Error/);

    expect(() => {
      time2(4);
    }).toThrow('Time Error!');

    expect(time2(1)).toBeTruthy();
    // expect(time2()).toThrow(Error('Time Error!'));

    // expect(time3()).toBeNull();
    expect(time3(1)).toEqual({ id: 1, name: 'Hong', addr: { city: 'Seoul' } });
    expect(time3(1)).toHaveProperty('name');

    expect(time3(2)).toEqual({ id: 1, name: 'Hong' });
    expect(time3(2)).toStrictEqual({ id: 1, name: 'Hong', addr: undefined }); // undefined 써주기
    expect(time3(2)).toHaveProperty('addr');

    expect(time3(2).name).toMatch(/ong/);
    expect(time3(2)).toMatchObject({ name: 'Hong' }); // 객체에 포함되어 있는지 체크

    const timeX = jest.fn((cb) => cb());
    timeX(f);
    expect(timeX).toHaveBeenCalled();
    // expect(time).toHaveBeenCalled()
    // expect(time).toHaveBeenCalledTimes(1);
    // expect(time).toHaveBeenCalledWith(f);
  });
});
