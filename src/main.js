import { createApp } from 'vue';
import App from './App';
import UI from '@/UI/index';
import router from './router/router';
import VIntersection from './directives/VIntersection';

const app = createApp(App);

UI.forEach((component) => {
  app.component(component.name, component);
});

app.directive('intersection', VIntersection);

app.use(router).mount('#app');
