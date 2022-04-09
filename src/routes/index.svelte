<svelte:head>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<link rel="stylesheet" href="https://unpkg.com/chota@latest">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</svelte:head>

<script>

  // TODO: Use template for pages and cases.

  import {theme} from '../stores.js';
  import { onMount } from 'svelte';

	// Brand variables
	let name = "AMS Detectives";
	let icon_light = '/images/icon-light.svg';
	let icon_dark = '/images/icon-dark.svg';
  let home = './';
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
      <a class="active" href="{home}">Home</a>
      <a href="{about}">About</a>
      <a href="{cases}">Cases</a>
    </div>
  </div>
  <div class="nav-right">
    <a class="button outline" on:click={darkMode}>{button_text}</a>
  </div>
</nav>
<h1 class="text-center">{name}</h1>
<h3 class="text-center">Have a case that needs to be solved?</h3>
<h3 class="text-center">We here at {name} have great detective skills and can solve any case you need!</h3>
<div class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="3000">
			<img src={carousel_images[0]} alt="{name} ads">
    </div>
    <div class="carousel-item" data-bs-interval="3000">
			<img src={carousel_images[1]} alt="{name} case files">
    </div>
    <div class="carousel-item" data-bs-interval="3000">
			<img src={carousel_images[2]} alt="{name} ads notes">
    </div>
		<div class="carousel-item black-border" data-bs-interval="3000">
			<img src={carousel_images[3]} alt="spy clipart">
		</div>
  </div>
</div>


<style>
	/* :root {
		--bg-color: pink !important;
	}
	:global(body.dark) {
		--bg-color: lightblue;
	} */
	:global(body.dark) {
		--bg-color: #000;
		--bg-secondary-color: #131316;
		--font-color: #f5f5f5;
		--color-grey: #ccc;
		--color-darkGrey: #777;
	}

	.carousel-item img {
		border-radius: 10px;
		display: block;
	  margin-left: auto;
	  margin-right: auto;
	  width: 50%;
		width: 500px;
	}

	.black-border img {
		border: 3px solid black;
	}

  :global(.bodytransition) {
    transition: --bg-color, 0.3s;
  }

</style>
