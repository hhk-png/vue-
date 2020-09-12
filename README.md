# vue-demo

> A vue Project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

vue-advanced



#### 实现KInput

- 任务1：实现自定义组件双向绑定功能

  > v-model是语法糖，实现自定义组件双绑定需要指定:value和@input

- 任务2：值发生变化能够通知FormInput组件

- 任务3：input各种特定设定，如type，placeholder等



#### 实现KFormItem

- 任务1：给Input预留插槽 - slot
- 任务2：能够展示label和校验信息
- 任务3：能够进行校验



#### 实现KForm

- 给k-form-item预留槽位
- 将数据传递给后代便于它们访问数据模型和校验规则：provide && inject



#### 数据校验：

- 思路：校验发生在FormItem，它需要知道何时检验(让Input通知它)，还需要知道怎么校验(注入检验规则)
- 任务1：Input通知校验
- 任务2：Form监听校验通知，获取规则并执行检验
- 安装async-validator：npm install --save async-validator



#### v-model和.sync

```vue
// v-model是语法糖
<Input v-model="username">
// 默认等于下面这行
<Input :value="username" @input="username=$event">
    
// 但是你也可通过设置model选项修改默认行为，Checkbox.vue
{ 
	model: {
    	prop: 'checked',
    	event: 'change'
    }    
}
    
    
// 上面这样设置会导致上级使用v-mode时行为变化，相当于
<KCheckBox :check="model.remember" @change="model.remember=$event"></KCheckBox>

    
// 场景：v-model通常用于表单控件，他又默认行为，同时属性名和时间名均可在子组件定义

<!--sync修饰符添加于v2.4，类似于v-model，他能用于修改传递到子组件的属性，如果像下面这样写-->
<Input :value.sync="model.username">
<!--等效于下面这行，那么和v-model的区别只有事件名称的变化-->
<Input :value="username" @update:value="username=$event">
<!--这里绑定属性名称修改，相应的属性名也会发生变化-->
<Input :foo="username" @update:foo="username=$event">
    
// 场景：父组件传递的属性子组件想修改
// 所以sync修饰符的控制能力都在父级，事件名称也相对固定
// 习惯上表单元素用v-model
```



#### Vuex数据管理

vuex是一个专为Vue.js应用开发的状态管理模式，集中式存储管理应用所有组件的状态。

Vuex遵循“单向数据流”理念，易于问题追踪以及提高代码可维护性。

Vuex中多个视图依赖于同一状态时，视图间传参和状态同步比较困难，Vuex能够很好解决该问题。

##### 事件：

处理简单的逻辑，可以直接commit到mutation，

处理复杂的逻辑，也可以dispatch到actions再commit到mutation，



























