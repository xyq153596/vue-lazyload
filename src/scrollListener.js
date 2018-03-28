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
        this.getRect()
        return (this.rect.top < window.innerHeight * this.options.preLoad && this.rect.bottom > this.options.preLoadTop) &&
            (this.rect.left < window.innerWidth * this.options.preLoad && this.rect.right > 0)
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
