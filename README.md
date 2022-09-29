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
可以搭配现有的React组件库，以对象的形式快速创建表单项。
```ts
import React from 'react';
import { useMyForm, useField } from '@ljkburn/myform';
import { Input } from './component';

const schemas = [
  {
    name: "input",
    title: 输入框,
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

[API文档](https://github.com/LjKBurN/myform/blob/main/doc/api.md)

[使用示例](https://github.com/LjKBurN/myform/blob/main/doc/example.md)