import getComponentRootDomModule from "./getComponentRootDom";
import Icon from '@/components/Icon'
import styles from './showMessage.module.less'
/**
 * @param {*} options 消息弹出选择对象
 */

export default function (options = {}) {
    const content = options.content || ""; //消息弹出内容
    const type = options.type || "info";//消息弹出的类型 info 默认 error 错误 warn 警告 success 成功
    const duration = options.duration || 1000;//消息弹出持续时间
    const container = options.container || document.body; //容器对象
    const icon = getComponentRootDomModule(Icon, { type: type })
    const div = document.createElement('div');
    div.className = `${styles.message} ${styles["message-" + type]}`;
    div.innerHTML = `<span class="${styles.icon}">${icon.outerHTML}</span><div>${content}</div>`;
    if (options.container) {
        if (getComputedStyle(container).position === 'static') {
            container.style.position = 'relative';
        }
    }

    container.appendChild(div);
    //强行渲染,导致重排列
    div.clientHeight;
    //回归正常位置
    div.style.opacity = 1;
    div.style.transform = 'translate(-50%, -50%)';
    setTimeout(() => {
        div.style.opacity = 1;
        div.style.transform = 'translate(-50%, -50%) translateY(-25px)';
        div.addEventListener('transitionend', function () {
            div.remove();
        }, { once: true })
        options.callback && options.callback();
    }, duration)
}