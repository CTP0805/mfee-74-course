'use client';

import { useState } from 'react';

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  // v1 用最基本的想法來作物件陣列狀態的更新
  function handleIncreaseClick(productId: any) {
    // 1. 從現有的狀態拷貝出一個新的複本
    // 深拷貝語法(超過一層以上無法用`...`來拷貝)
    const nextProducts = JSON.parse(JSON.stringify(products));
    // 2. 在複本上作修改
    // 找它是在陣列的哪一個
    const foundIndex = nextProducts.findIndex((v: any) => v.id === productId);
    // 如果有找到
    if (foundIndex !== -1) {
      // 找到後把這個物件的count作+1的動作(理論上會找到，返回索引值)
      nextProducts[foundIndex].count++;
      // 3. 呼叫set方法設定給狀態
      setProducts(nextProducts);
    }
  }

  // v2 改用map來作更新物件陣列狀態的動作
  function handleIncrease2(productId: any) {
    // 用map方法來作1、2步
    const nextProducts = products.map((product) => {
      // 對符合條件的物件增加數量(count)
      if (product.id === productId)
        return { ...product, count: product.count + 1 };
      else return product;
    });

    // 3. 呼叫set方法設定給狀態
    setProducts(nextProducts);
  }

  // v3 改用map來作更動，更簡潔的語法
  function handleIncrease3(productId: any) {
    setProducts(
      products.map((v) =>
        v.id === productId ? { ...v, count: v.count + 1 } : v
      )
    );
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncrease3(product.id);
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
