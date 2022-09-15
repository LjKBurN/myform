# MYFORM 

## 介绍
<br />

基于react-hook-form，用来管理和生产表单的工具

<br />

---

<br />

## 快速开始

<br />

```
$ npm install --save @ljkburn/myform
```

<br />

### 具体用例

```ts
import React from 'react';
import { useMyForm, useField } from '@ljkburn/myform';

const Input = React.forwardRef((props) => (
  <input {...props} />
));

const schemas = [
  {
    name: "input",
    title: <span>输入框</span>,
    Component: Input,
    componentProps: {
      style: { width: "100%" }
    }
  }
];

export default function App() {
  const { handleSubmit, control } = useMyForm();
  const { formItems } = useField({ schemas, control });
  const onSubmit = data => console.log(data);
  return (
    <div className="App">
      <div>{formItems.input}</div>
      <button onClick={handleSubmit(onSubmit)}>提交</button>
    </div>
  );
}
```