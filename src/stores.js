import { writable } from "svelte/store";

const storedTheme = localStorage.getItem("theme");
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
    localStorage.setItem("theme", tocall);
});
