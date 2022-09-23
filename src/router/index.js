import {createRouter,createWebHashHistory} from 'vue-router'
import BasicCourse from "../components/basicCourse.vue"
import Exam from "../components/exam.vue"

const routes = [
  { path: '/basic-course', component:  BasicCourse},
  { path: '/exam', component: Exam},
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})