import { writable } from 'svelte/store';

const user = writable({token: null, user: null});

export default user;

