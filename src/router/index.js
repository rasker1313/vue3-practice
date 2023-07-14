import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/HomePage'
import UpVote from '@/components/UpVote'
import Calendar from '@/views/CalendarContainer'
import NoteListVuex from '@/views/NoteListVuex'

const routes = [
    {path: '/', name: Home, component: Home},
    {path: '/upvote', name: UpVote, component: UpVote},
    {path: '/calendar', name: Calendar, component: Calendar},
    {path: '/note-list', name: NoteListVuex, component: NoteListVuex}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router