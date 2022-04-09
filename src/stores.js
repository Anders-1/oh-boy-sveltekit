import { writable } from "svelte/store";

const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null

export const theme = writable(storedTheme);

let tocall;

theme.subscribe(value => {

    if (value === 'dark') {
      tocall = 'dark';
    }
    else if (value === 'light') {
      tocall = 'light';
    }
    else {
      tocall = 'null';
    }
    typeof window !== 'undefined' ? localStorage.setItem('theme', tocall) : null
});
