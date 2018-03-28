import ScrollListener from './scrollListener'
import LazyListener from './lazyListener'
import CustomListener from './customListener'

export default class ListenerFactory {
    constructor(type, options) {
        switch (type) {
            case 'lazy':
                return new LazyListener(options);
                break;
            case 'scroll':
                return new ScrollListener(options);
                break;
            case 'custom':
                return new CustomListener(options);
                break;
            default:
                console.warn('没有对应的类');
        }
    }
}
