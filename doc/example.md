# 场景案例

在 [sandbox](https://codesandbox.io/s/example-vs2etn?file=/src/Basic.tsx) 中查看在线示例

## 基础使用

```ts
import { useMemo } from "react";
import { useMyForm, SchemaProps, useField, FormLayout } from "@ljkburn/myform";
import { Input, Select, Button } from "antd";

type FormValues = {
  input: string;
  select: number;
};

export default function Basic() {
  // 使用 useMyForm 返回的对象来管理整个表单
  // 可传入defaultValues表示表单默认值
  const { control, handleSubmit, watch } = useMyForm<FormValues>({
    defaultValues: { input: '123', select: 1 },
  });

  // 用来描述表单项的schemas
  const schemas: SchemaProps<FormValues>[] = useMemo(() => {
    return [
      {
        name: "input",
        title: "输入框",
        Component: Input,
        componentProps: {
          style: { width: "100%" }
        }
      },
      {
        name: "select",
        title: "选择框",
        Component: Select,
        componentProps: {
          style: { width: "100%" }
        },
        render: (
          <>
            <Select.Option value={1}>1</Select.Option>
            <Select.Option value={2}>2</Select.Option>
          </>
        )
      }
    ];
  }, []);

  // 使用 useField 获取又schema创建的表单项映射formItems
  const { formItems } = useField<FormValues>({ schemas, control });

  const onSubmit = (data: FormValues) => console.log(data);
  return (
    <div className="App">
      <h2>basic</h2>
      <FormLayout labelCol="100px" labelAlign="left" wrapperCol="100%">
        <div>
          <div>{formItems.input}</div>
          <div>{formItems.select}</div>
        </div>
      </FormLayout>
      <div>watch input: {watch('input')}</div>
      <Button onClick={handleSubmit(onSubmit)}>提交</Button>
    </div>
  );
}

```