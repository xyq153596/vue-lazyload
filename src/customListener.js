import Listener from "./listener";

export default class ScrollListener extends Listener {
    constructor({
        el,
        options,
        trigger,
        handler
    }) {
        super({
            el,
            options
        })
        this.trigger = trigger
        this.handler = handler
    }
    checkInView() {
        if (typeof this.trigger !== 'function') {
            throw new Error('自定义触发函数必须是个方法!!')
            return false;
        }
        return this.trigger()
    }
    load(lazy, index) {
        Promise.resolve(this.handler()).then(res => {
            if (!res) {
                this.afterLoad(lazy, index)
            }
        })
    }
    afterLoad(lazy, index) {
        lazy.ListenerQueue.splice(index, 1)
    }
    destroy() {
        console.log('删除')
        this.el = null
    }
}
