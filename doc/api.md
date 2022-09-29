# API文档

## useMyForm

useMyForm 等同于 `react-hook-form` 的 [useForm](https://react-hook-form.com/api/useform)，是用于管理表单的React自定义hook

```ts
 const {
  formState,
  watch,
  handleSubmit,
  reset,
  setError,
  clearErrors,
  setValue,
  setFocus,
  getValues,
  getFieldState,
  trigger,
  control,
} = useMyForm({
  defaultValues: {},
 })
```

<br>

### Props
---

**defaultValues** ?：`object`

表单默认初始值，只有在初始渲染和重置表单时生效



<br>

### Returns

---

**watch**: `(names?: string | string[] | (data, options) => void) => unknown`

监听指定输入项的值

<br>
<br>

其他api及使用方法可在 [react-hook-form 官方文档](https://react-hook-form.com/api/useform) 查看

...

<br>

---

<br>

## useField

使用schema来创建表单的自定义hook

```ts
const { formItems } = useField({
  control,
  schemas: [
    {
      name,
      Component,
      componentProps,
    },
  ],
});
```

<br>

### Props
---
**control** : `object`

由 `useMyform` 返回的对象`contorl`，用来注册表单

<br>

---

**schemas** : `SchemaProps<TFormValues>[]`

生成表单的schema数组，配置项查看 [SchemaProps](#SchemaProps)

<br>

### Returns
---
**formItems** : `Record<string, JSX.Element>`

键为字段名称，值为表单项的对象

<br>
<br>

---

<br>

## useFieldArray

使用schema创建动态表单的自定义hook

```ts
const {
    formArray,
    append,
    prepend,
    insert,
    swap,
    move,
    update,
    replace,
    remove,
  } = useFieldArray({
  name,
  control,
  schemas: [
    {
      name,
      Component,
      componentProps,
    },
  ],
});
```

<br>

### Props
---

**name** : `string`

数组表单的名称

<br>

---
**control** : `object`

由 `useMyform` 返回的对象`contorl`，用来注册表单

<br>

---

**schemas** : `SchemaProps<TFormValues>[]`

生成表单的schema数组，配置项查看 [SchemaProps](#SchemaProps)

<br>


### Returns
---
**formArray** : `{ key: string, formItems: Record<string, JSX.Element> }[]`

动态表单的对象数组

<br>

---

**append** : `(obj: object) => void`

追加表单项在动态表单的结尾，并赋上对象中传入的值

<br>

---

**remove** : `(index?: number) => void`

去除指定位置的表单项，不传index去除所有

<br>
<br>
<br>
<br>

其他api及使用方法可在 [react-hook-form 官方文档](https://react-hook-form.com/api/usefieldarray) 查看

...

<br>
<br>
<br>

---

<span id="SchemaProps"></> SchemaProps</span>

参数|说明|类型|默认值
-|-|-|-
name|必填，唯一的字段名称|`string`|-
title|该表单项的标题文本|`ReactNode`|-
Component|必填，支持 `value`、`onChange` 属性的输入组件|`React.FC`|-
componentProps|传给 `Component` 组件的props|`object`|-
render|`Component` 的子组件| `(() => JSX.Element)`｜`JSX.Element`|-
defaultValue|该字段的默认值|`unknow`|-
rules|校验规则|`RegisterOptions`|-
effect|联动规则|`EffectProps`|-
display|控制表单项的显示隐藏| `'visible'`｜`'none'`｜`'hidden'`| `'visible'`
direction|存在 `title` 时有效，决定 `title` 与 `Component` 的布局|`'row'`｜`'column'`|`'row'`
labelCol|`direction` 为`'row'`时有效，控制`title`的宽度，传入小于24的数字以栅格布局计算，大于24的数字或字符串直接控制宽度|`number`｜`string`|-
wrapperCol|同上，控制组件的宽度|`number`｜`string`|-
labelAlign|控制 `title` 文字的对齐方向|`'left'`｜`'right'`|`'left'`
