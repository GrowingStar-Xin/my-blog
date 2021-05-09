export default [
    {
        //分页加载 异步组件 返回的是promise
        name: "Home",
        path: '/',
        component: /*webpackChunkName: Home*/() => import("@/view/Home"),
        meta: {
            title: "Home"
        }
    },
    {
        name: "About",
        path: '/about',
        component: /*webpackChunkName: About*/() => import("@/view/About"),
        meta: {
            title: "About"
        }
    },
    {
        name: "Blog",
        path: '/blog',
        component: /*webpackChunkName: Blog*/() => import("@/view/Blog"),
        meta: {
            title: "Blog"
        }
    },
    {
        name: "Categorylog",
        path: '/blog/cate/:categoryId',
        component: /*webpackChunkName: Blog*/() => import("@/view/Blog"),
        meta: {
            title: "Blog"
        }
    },
    {
        name: "BlogDetail",
        path: '/article/:id',
        component:/*webpackChunkName:BlogDetail */() => import("@/view/Blog/BlogDetail"),
        meta: {
            title: "BlogDetail"
        }
    },
    {
        name: "Project",
        path: '/project',
        component:/*webpackChunkName: Project */() => import('@/view/Project'),
        meta: {
            title: "Project"
        }
    },
    {
        name: "Message",
        path: '/message',
        component: /*webpackChunkName: Message */() => import('@/view/Message'),
        meta: {
            title: "Message"
        }
    }
]