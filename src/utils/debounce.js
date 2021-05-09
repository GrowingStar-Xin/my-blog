export default function (fun, duration) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fun(...args)
        }, duration)
    }

}