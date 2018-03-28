 export default class Listener {
     constructor({
         el,
         $parent,
         options
     }) {
         this.el = el;
         this.rect = el.getBoundingClientRect()
         this.performanceData = {
             init: Date.now(),
             loadStart: null,
             loadEnd: null
         }
         this.$parent = $parent
         this.options = options
         this.initState()
     }

     initState() {
         this.state = {
             error: false,
             loaded: false,
             rendered: false
         }
     }
     record(event) {
         this.performanceData[event] = Date.now()
     }
     getRect() {
         this.rect = this.el.getBoundingClientRect()
     }
     performance() {
         let state = 'loading'
         let time = 0

         if (this.state.loaded) {
             state = 'loaded'
             time = (this.performanceData.loadEnd - this.performanceData.loadStart) / 1000
         }

         if (this.state.error) state = 'error'

         return {
             src: this.src,
             state,
             time
         }
     }
     update() {
         throw new Error('update抽象方法，不能实例化')
     }
     checkInView() {
         throw new Error('checkInView抽象方法，不能实例化')
     }
     load() {
         throw new Error('load抽象方法，不能实例化')
     }
     destroy() {
         throw new Error('destroy抽象方法，不能实例化')
     }
 }
