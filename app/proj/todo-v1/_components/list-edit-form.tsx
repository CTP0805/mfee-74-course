'use client';

import { useState } from 'react';
// 導入類型(型別)
import { Todo } from '../_types/todo';

export interface ListEditFormProps {
  todo: Todo;
}

export default function ListEditForm({ todo }: ListEditFormProps) {
  // 用目前的todo.text當初始值
  const [inputText, setInputText] = useState(todo.text);

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button>儲存</button>
    </>
  );
}
