import evenBus from '@/eventBus'
import { debounce } from '../utils'
import defaultGif from '@/assets/default.gif'
let imgs = [];
function setImage(item) {
    //console.log("函数执行了", img)
    const img = item.dom;
    const src = item.val;
    img.src = defaultGif;
    //矩形集合即包含元素的最小矩形
    const rec = img.getBoundingClientRect()
    //视口的高度
    const clientHeight = document.documentElement.clientHeight;
    if (rec.top <= clientHeight) {
        img.src = src;
        imgs = imgs.filter((i) => {
            //console.log(i === item)
            return i !== item
        })
        //console.log("imgs:", imgs, img);
    }

}
function setImages() {
    //console.log("setImages函数执行了")
    for (const item of imgs) {
        //console.log(img);
        setImage(item)
    }
}


function handleScroll() {
    setImages();
}
evenBus.$on('mainScroll', debounce(handleScroll, 100))
export default {
    inserted(el, binding) {
        const img = {
            dom: el,
            val: binding.value
        }
        imgs.push(img);
        setImage(img);
    },
    unbind(el) {
        imgs = imgs.filter((item) => item.dom !== el);
    }
}