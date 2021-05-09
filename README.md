- 样式表里头 '~@'表示src js中'@'表示src
- vue 的vnode tree的节点树越少，越稳定=>渲染效率就会越高

- 插槽slot
- template v-slot/#名字



## 刷新跳转
- 请求html 
- 请求js
- 请求css
- 执行js
- 创建vue应用
- 渲染全部组件树
- 挂载到指定的div中

## 不刷新跳转
- 执行一段js代码，切换某个区域的组件


## 请求网络数据

请求结果:
    - code 为0 时， 会从data中获取业务数据
    - code 不为0时， 将msg提示显示到页面上


## 动态资源不能直接获取 默认为静态资源
用import 导入


## props中 默认值是数组的话要写成函数形式
-  Type of the default value for 'list' prop must be a function  vue/require-valid-default-prop


## 保证2位数
 object.toString.padStart(2,"0")


## 子父组件之间的通讯
- 可以通过在$emit（）中传入回调（把参数带给父组件， 让父组件处理）
- 监听者模式 $listeners 有种直接调用父组件的感觉
- 把父组件的函数当作变量传入，子组件调用


### vue在template中直接显示对象其会变成json格式

### v-model的本质就是 value + input事件 ->绑定表格和输入框/复选框，双向绑定


### 加数据到数组开头 arr.unshift




### 事件总线
 - 提供监听某个事件的接口
 - 提供取消事件的接口
 - 触发事件的接口
 - 触发事件后会自动通知监听者


  const rec = dom.getBoundingClientRect();


  Vuex
  
  - state 当前仓库的状态，用来配置仓库的对象   object.defineProperty
  - mutations 进行数据的变化,只能通过mutation改变数据
  - x **= n   x^n