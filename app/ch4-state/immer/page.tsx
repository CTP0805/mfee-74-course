'use client';

import { useState, useEffect, Profiler } from 'react';

export default function ImmerPage() {
  const [user, setUser] = useState({
    name: '張三',
    profile: {
      phone: '0911123456',
      address: {
        city: '台北市',
      },
    },
  });

  return (
    <>
      <h1>immer使用範例</h1>
      <hr />
      <p>{JSON.stringify(user)}</p>
      {/* 手動更動 */}
      <button
        onClick={() => {
          const nextUser = { ...user, name: '李四' };
          setUser(nextUser);
        }}
      >
        name=李四
      </button>
      <button
        onClick={() => {
          // 1. 從目前的狀態拷貝出一個複本(必要時深拷貝)
          const nextUser = JSON.parse(JSON.stringify(user));
          // 2. 在複本上作更動
          nextUser.profile.phone = '0988123456';
          // 3. 呼叫set方法設定到狀態
          setUser(nextUser);
        }}
      >
        phone=0988123456
      </button>
      <button
        onClick={() => {
          // 1. 從目前的狀態拷貝出一個複本(必要時深拷貝)
          const nextUser = JSON.parse(JSON.stringify(user));
          // 2. 在複本上作更動
          nextUser.profile.address.city = '新北市';
          // 3. 呼叫set方法設定到狀態
          setUser(nextUser);
        }}
      >
        city=新北市
      </button>

      {/* 使用immer */}
    </>
  );
}
