import { createApp } from 'vue'

import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import router from './router'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(fas, far, fab)

const app = createApp(App)


createApp(App).use(router).mount('#app')

app.component('font-awesome-icon', FontAwesomeIcon)

