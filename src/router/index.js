import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/blogs',
		name: 'Blogs',
		component: () => import('../views/Blogs.vue'),
	},
	{
		path: '/blog/:id',
		name: 'Blog',
		component: () => import('../views/Blog.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

router.beforeEach((to, from, next) => {
	const newName = `Mohammed | ${to.name}`
	document.title = newName
	next()
})

export default router
