//utils
interface IFOpts {
  num_1: number;
  num_2: number;
  isPositive?: boolean;
}

interface IFResData<T extends object> {
  code: number;
  data: T;
}

interface IFData1 {
  list: Array<number>;
  id: number;
}

export function addFunc({ num_1, num_2, isPositive }: IFOpts): number {
  return num_1 + num_2;
}

const data_1 = {
  code: 200,
  data: {
    list: [1, 2, 3],
    id: 0,
  },
};

const data_2 = {
  code: 200,
  data: [
    {
      list: [1, 2, 3],
      id: 0,
    },
    {
      list: [0, 2, 4, 6],
      id: 1,
    },
  ],
};

const promise_1 = () =>
  new Promise<IFResData<IFData1>>(resolve => resolve(data_1));

const promise_2 = () => new Promise<any>(resolve => resolve(data_2));

export function fetchFunc() {
  //在promise返回时就定义好类型
  promise_1().then(res => {
    console.log('== promise 1 ==', res.data.list);
  });

  //promise返回时定义返回为any，在调用时定义好类型
  promise_2().then((res: IFResData<IFData1[]>) => {
    const { list, id } = res?.data?.[0] || {};
    console.log('== promise 2 ==', list, id);
  });
}

// fetchFunc();
