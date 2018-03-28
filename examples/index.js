Vue.use(VueLazyload, {
    lazyComponent: true
})
const vm = new Vue({
    el: document.getElementById('app'),
    data() {
        return {
            a: 1,
            tt(com) {

                console.log('更新了');
                return false

            },
            t2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522227246400&di=bb5ea19a3d6ebab7a83b3b393dc85018&imgtype=0&src=http%3A%2F%2Fimg5.xiazaizhijia.com%2Fwalls%2F20160708%2F1440x900_2f172c09d079701.jpg",
            custom: {
                always: true,
                trigger(el) {
                    console.log('执行自定义判断')
                    return true
                },
                handler() {
                    console.log('自定义执行了');
                    return false
                }
            },
            scroll(t) {
                console.log('滚动执行了')
                return false
            }
        }
    },
    mounted() {
        // window.setTimeout(() => {
        //     this.s = false;
        // }, 20000)
    },
    methods: {
        ss() {
            console.log('设置了')
        },
        ttt() {
            console.log('自定义触发')
            return true;
        }
    }
})
