'use client';

import MyInput from './_components/my-input';
import MyTextarea from './_components/my-textarea';
import MySelect from './_components/my-select';

export default function ControlledPage() {
  return (
    <>
      <h1>可控表單元件範例(controlled)</h1>
      <hr />
      <MySelect />
      <MyTextarea />
      {/* <MyInput /> */}
    </>
  );
}
