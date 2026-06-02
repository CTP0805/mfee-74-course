'use client';

import Parent from './_components/parent';
import Child from './_components/child';

export default function ChildrenPage() {
  return (
    <>
      <h1>props.children範例</h1>
      <hr />
      <Parent></Parent>
      <Parent>Hello</Parent>
      <Parent>
        <Child />
        <Child />
      </Parent>
    </>
  );
}
