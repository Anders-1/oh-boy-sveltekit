<svelte:head>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<link rel="stylesheet" href="https://unpkg.com/chota@latest">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</svelte:head>

<script>

  import {theme} from '../stores.js';
  import { onMount } from 'svelte';

	// Brand variables
	let name = "AMS Detectives";
	let icon_light = '/images/icon-light.svg';
	let icon_dark = '/images/icon-dark.svg';
  let home = '..';
  let about = '/about';
  let cases = '/cases';
	let carousel_images = ['/images/spyads.jpeg',
	 											 '/images/spycase.jpeg',
												 '/images/spynotes.jpeg',
											   'https://st.depositphotos.com/2196544/2312/i/600/depositphotos_23120686-stock-photo-sneaking-spy.jpg']

	let isdark = false;
  let button_text = "dark";

  onMount(async () => {

    if ($theme == "null" || $theme == "undefined" || $theme == "") {
    	if (window.matchMedia &&
    			window.matchMedia('(prefers-color-scheme: dark)').matches) {
    		document.body.classList.add('dark');
        button_text = "light";
    		isdark = true;
        theme.set("dark");
      }
      else {
        document.body.classList.remove('dark');
        button_text = "dark";
        isdark = false;
        theme.set("light");
      }
    }
    else {
      if ($theme == "dark") {
        button_text = "light";
        isdark = true;
        document.body.classList.add('dark');
      }
      else if ($theme == "light") {
        button_text = "dark";
        isdark = false;
        document.body.classList.remove('dark');
      }
    }
    setTimeout(function(){
      document.body.classList.add('bodytransition');
    }, 100);

  });

	function darkMode() {
  	if (isdark == false) {
      button_text = "light";
      theme.set("dark");
      document.body.classList.add('dark');
  	}
    else if (isdark == true) {
      button_text = "dark";
      theme.set("light");
      document.body.classList.remove('dark');
    }

    isdark = !isdark;
  }

</script>


<nav class="nav">
  <div class="nav-left">
    <a class="brand" href="{home}">{name}</a>
		<a class="brand" href="{home}">
			<img class:is-hidden="{isdark}" src={icon_light} alt="Light spy icon">
      <img class:is-hidden="{!isdark}" src={icon_dark} alt="Dark spy icon">
		</a>
    <div class="tabs">
      <a href="{home}">Home</a>
      <a class="active" href="{about}">About</a>
      <a href="{cases}">Cases</a>
    </div>
  </div>
  <div class="nav-right">
    <a class="button outline" on:click={darkMode}>{button_text}</a>
  </div>
</nav>

<h1 class="text-center">This is {name}!</h1>
<h2 class="text-center">We help solve cases!</h2>

<style>
  :global(body.dark) {
    --bg-color: #000;
    --bg-secondary-color: #131316;
    --font-color: #f5f5f5;
    --color-grey: #ccc;
    --color-darkGrey: #777;
  }

  :global(body) {
    transition: --bg-color, 0.3s;
  }
</style>
