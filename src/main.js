import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp, faPencilSquare, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from '@/router'
import { noteStore } from '@/store/note-list'

library.add(faChevronUp, faPencilSquare, faTrash, faCheck);

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router, noteStore)
    .mount('#app')
