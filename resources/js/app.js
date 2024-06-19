import '../css/app.css';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { createPinia } from 'pinia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClipboardList, faUserCheck, faWallet, faFileAlt, faArrowRight, faShieldAlt, faDollarSign, faRocket, faUserFriends, faGlobe, faEnvelope, faBell, faMoneyCheckAlt, faMagnifyingGlass, faCloudUpload, faUserPlus, faPlus, faImage, faFileImage, faSmile, faThumbsUp, faMicrophone, faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
library.add(faClipboardList, faUserCheck, faWallet, faFileAlt, faArrowRight, faShieldAlt, faDollarSign, faRocket, faUserFriends, faGlobe, faEnvelope, faBell, faMoneyCheckAlt, faMagnifyingGlass, faCloudUpload, faUserPlus, faPlus, faImage, faFileImage, faSmile, faThumbsUp, faMicrophone, faPaperclip, faPaperPlane);
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const pinia = createPinia();
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .component('font-awesome-icon', FontAwesomeIcon)
            .use(plugin)
            .use(pinia)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
