# vue-lazyload 的增强版本
## 变更如下
> 删除了lazy-component组件统一同自定义指令实现延迟触发  

> 将原来的listener.js变成了父类并增加了customListener.js,lazyListener.js,scrollListener.js 分别对应用户自定义触发需求，图片延迟加载需求，区块延迟触发需求  

> 添加listenerFactory.js用来生成对应监听类

## <img v-lazy="tt"></img>
> 

## <div v-lazy:scroll="scroll">...</div>

## <div v-lazy:custom="custom">...</div>