import loadUrl from '../assets/loading.svg'
import styles from './loading.module.less'
function getDom(el) {
  return el.querySelector('img[data-role=loading]')
}
function createDom() {
  const loadImg = document.createElement('img');
  loadImg.dataset.role = 'loading';
  loadImg.src = loadUrl;
  loadImg.className = styles.loadImg;
  return loadImg;
}
export default function (el, binding) {
  let dom = getDom(el);
  if (binding.value) {
    if (!dom) {
      dom = createDom();
      el.appendChild(dom);
    }
  } else {
    if (dom) {
      dom.remove();
    }

  }
}