import App from './App.svelte';

const app = new App({
	target: document.getElementById('App'),
	props: {
		name: 'world',
		symbol: '。'
	}
});

export default app;