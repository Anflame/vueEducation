import { createApp } from 'vue';
import App from './App';
import UI from '@/UI';
import router from '@/router/router';
import directives from '@/directives';

const app = createApp(App);

UI.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(router).mount('#app');
