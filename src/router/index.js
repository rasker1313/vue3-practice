import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/HomePage'
import UpVote from '@/components/UpVote'
import Calendar from '@/components/calendar/CalendarContainer'

const routes = [
    {path: '/', name: Home, component: Home},
    {path: '/upvote', name: UpVote, component: UpVote},
    {path: '/calendar', name: Calendar, component: Calendar}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router