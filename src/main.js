import { createApp } from 'vue';
import App from './App';
import UI from '@/UI/index';
import router from './router/router';

const app = createApp(App);

UI.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).mount('#app');
