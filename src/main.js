import { createApp } from 'vue';
import App from './App';
import UI from '@/UI/index';

const app = createApp(App);

UI.forEach(component => {
  app.component(component.name, component)
});

app.mount('#app');
