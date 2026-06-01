'use client';

import { ReactNode } from 'react';

interface Data {
  x?: number;
  y?: number;
}

// props
interface ChildProps {
  title?: string;
  price?: number;
  isConnected?: boolean;
  aa?: number[];
  oa?: Data;
  sum?: (a: number, b: number) => number;
  jsx?: ReactNode;
}

export default function Child(props: ChildProps) {
  return (
    <>
      <div>Child(子女元件)</div>
    </>
  );
}
