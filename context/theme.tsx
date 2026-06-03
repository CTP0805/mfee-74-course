// 1. 建立與導出它
'use client';

import { createContext } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// 使用 null 作為預設值，這是 React Context 的常見做法
const ThemeContext = createContext<ThemeContextType | null>(null);
// 設定context的名稱，這是會在react devtools(瀏覽器擴充)上面會看到，方便除錯用(可選的)
ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;
