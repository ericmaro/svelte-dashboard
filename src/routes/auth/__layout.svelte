<script>
	import '../../app.postcss';
	import Logo from "@/components/icons/Logo.svelte";
</script>

<div class="flex theme-light items-center min-h-screen p-4 bg-skin-inverted-muted lg:justify-center">
	<div
	  class="flex flex-col overflow-hidden bg-skin-inverted rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
	>
	  <div
		class="p-4 py-6 text-skin-inverted bg-skin-primary md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
	  >
		<div class="my-3 text-4xl font-bold tracking-wider text-center">
		  <a href="/auth"><Logo/></a>
		</div>
		<p class="mt-6 font-normal text-center text-skin--inverted-muted md:mt-0">
			For Broadcast Ad Verification for Broadcast Monitoring firms, Broadcasters, Advertising Agencies and brands.
		</p>
		<p class="flex flex-col items-center justify-center mt-10 text-center">
		  <span>Don't have an account?</span>
		  <a href="/auth/register" class="underline">Get Started!</a>
		</p>
		<p class="mt-6 text-sm text-center text-skin-inverted">
		  Read our <a href="/auth" class="underline">terms</a> and <a href="/auth" class="underline">conditions</a>
		</p>
	  </div>
	  <div class="p-5 bg-skin-inverted md:flex-1">
		<slot/>
	  </div>
	</div>
  </div>