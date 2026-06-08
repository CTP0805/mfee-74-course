'use client';

import { useState } from 'react';
import { useUser } from '@/context/user';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 使用context
  const { isLoggedIn, login, logout } = useUser();

  return (
    <>
      <h1>會員登入</h1>
      <hr />
      <div>
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        密碼
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            login(email, password);
          }}
        >
          登入
        </button>
      </div>
    </>
  );
}
