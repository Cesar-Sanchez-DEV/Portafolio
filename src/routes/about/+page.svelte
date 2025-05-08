<script>
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";

	let userDiscord = {}

	// Fetch user data from the server
	onMount(async () => {
		const resUser = await fetch("https://discord.com/api/guilds/1365547553994833991/widget.json");
		userDiscord = await resUser.json();
		console.log(userDiscord);
	});
</script>
<div class="box-contain" in:fade={{duration: 200}}>
	<div class="box-contain" in:fly={{y: 20, duration: 500}}>
		<div class="container">
			<h1>Esto es About</h1>
			<iframe
				style="border-radius: .4rem;"
				title="Discord"
				src="https://discord.com/widget?id=1365547553994833991&theme=dark"
				width="350" height="500"
				allowtransparency={true}
				frameborder="0"
				sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
			</iframe>
			<iframe
				src="https://discord.com/widget?id=855499310930067476&theme=dark"
				title="DevCode"
				width="350"
				height="500"
				allowtransparency={true}
				frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
			</iframe>
		</div>
	</div>
</div>