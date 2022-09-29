# 场景案例

[see it on sandbox](https://codesandbox.io/s/example-vs2etn?file=/src/Basic.tsx)

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
  const { control, handleSubmit, watch } = useMyForm<FormValues>({
    defaultValues: { input: '123', select: 1 },
  });
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