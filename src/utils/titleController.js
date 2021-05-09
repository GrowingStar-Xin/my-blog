var routeTitle = "",
    webTitle = "";
function setTitle() {
    if (!routeTitle && !webTitle) {
        document.title = "loading..."
    } else if (!routeTitle && webTitle) {
        document.title = webTitle
    } else if (routeTitle && !webTitle) {
        document.title = routeTitle
    } else {
        document.title = `${routeTitle}-${webTitle}`
    }
}
export default {

    //设置路由标题
    setRouteTitle(title) {
        routeTitle = title;
        setTitle();
    },
    //设置网站标题
    setWebTitle(title) {
        webTitle = title;
        setTitle();
    }

}