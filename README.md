# vue-lazyload 的增强版本
## 变更如下
> 删除了lazy-component组件统一同自定义指令实现延迟触发  

> 将原来的listener.js变成了父类并增加了customListener.js,lazyListener.js,scrollListener.js 分别对应用户自定义触发需求，图片延迟加载需求，区块延迟触发需求  

> 添加listenerFactory.js用来生成对应监听类

## <img v-lazy="imgsrc"></img>
> 用于图片延迟加载  

> imgsrc="http://xxx.com/img.jpg"

## <div v-lazy:scroll="scroll">...</div>
> 用于区块加载，当区块出现在屏幕时触发事件  

> scroll 是触发的执行事件  

```
scroll() {
    console.log('滚动执行了')
    return false
}

## <div v-lazy:custom="custom">...</div>
> 用于用户自定义触发事件   

> custom   

```
let custom={
    trigger(el) { // 自定义触发方法，返回true表示触发
        console.log('执行自定义判断')
        return true
    },
    handler() { // 触发的执行方法
        console.log('自定义执行了');
        return true // 返回true 表示触发后不从执行列队删除，所以可以重复触发 
    }
}
