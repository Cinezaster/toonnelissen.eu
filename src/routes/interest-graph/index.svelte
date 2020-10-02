<script>
	export let interests;
</script>

<svelte:head>
	<title>Interest graph</title>
</svelte:head>

<h1>Interest graph</h1>

<ul>
	{#each interests as interest}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='blog/{interest.slug}'>{interest.title}</a></li>
	{/each}
</ul>