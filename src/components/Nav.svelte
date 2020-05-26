<script>
	export let segment;
</script>

<style>
	nav {
		font-weight: 300;
		padding: 0 1em;
		float: right;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
		color: rgb(255,62,0);
	}

	[aria-current]:after {
		position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 1px;
    background-color: rgb(255,62,0);
    display: block;
	}

	a {
		text-decoration: none;
		padding: 0.6em 0.5em;
		display: block;
		color: #232742;
		font-weight: 400;
	}
</style>

<nav>
	<ul>
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>Home</a></li>
		<li><a aria-current='{segment === "interest-graph" ? "page" : undefined}' href='interest-graph'>Interest-graph</a></li>
		<li><a aria-current='{segment === "projects" ? "page" : undefined}' href='projects'>Projects</a></li>
		<li><a aria-current='{segment === "experimental" ? "page" : undefined}' href='experimental'>Experimental</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<!--<li><a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>blog</a></li> -->
		<li><a aria-current='{segment === "contact" ? "page" : undefined}' href='contact'>Contact</a></li>
	</ul>
</nav>
