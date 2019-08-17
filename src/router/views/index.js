import Layout from '@/page/index/'
export default [{
    path: '/home',
    component: Layout,
    redirect: '/home/index',
    children: [{
        path: 'index',
        name: '首页',
        component: () =>
            import ( /* webpackChunkName: "views" */ '@/page/home')
    },
    {
        path: 'accept',
        name: '受理模板',
        component: () =>
            import ( /* webpackChunkName: "views" */ '@/page/accept')
    }]
}, 
{
    path: '/info',
    component: Layout,
    redirect: '/info/index',
    children: [{
        path: 'index',
        name: '个人信息',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/views/admin/user/info'),
    }]
}]
