<script>
	import Nav from '../components/Nav.svelte';
	import Header from '../components/Header.svelte';

	export let segment;
</script>

<style>
	.grid_container{
		margin: 0 auto;
		width: 70%;
		display: grid;
		grid-template-columns: 220px auto;
		grid-template-rows: 40px auto 100px;
		grid-gap: 10px;
	}
	.grid_side_header{
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 1;
		grid-row-end: 3;
		position: sticky;
    top:0;
	}
	.grid_top_nav{
		grid-row-start: 1;
		grid-row-end: 2;
		grid-column-start: 2;
		grid-column-end: 3;
		position: sticky;
		top:0;
		background-color: white;
	}
	main{
		grid-column-start: 2;
  	grid-column-end: 3;
	}
</style>

<div class="grid_container">
	<div class="grid_side_header">
		<Header/>
	</div>
	<div class="grid_top_nav">
		<Nav {segment}/>
	</div>
	<main>
		<slot></slot>
	</main>
</div>



