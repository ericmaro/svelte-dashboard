<script lang="typescript">
	export let type: 'vertical' | 'horizontal' = "vertical";
</script>


	{#if type === 'vertical'}
    <div class="w-full my-4 bg-white border rounded-lg shadow-xl">
		<div class="p-6">
			<div class="mb-8">
				<slot name="header" />
			</div>
			<div class="mb-3 text-base leading-relaxed text-blueGray-500">
				<slot name="content" />
			</div>
			<div>
				<slot name="footer" />
			</div>
		</div>
    </div>
	{:else}
    <div class="p-3 bg-white border rounded-lg shadow-xl">
		<div class="flex flex-col justify-center items-center p-2 rounded-lg lg:flex-row">
				<slot  class="flex items-center justify-center w-full lg:justify-start" name="left">
                </slot>
			<div class="flex flex-col w-full text-blueGray-500 lg:ml-4">
                <slot  name="title"></slot>
                <slot  class="mb-3" name="description"></slot>
				
			</div>
            <slot  class="flex items-center justify-center w-full lg:justify-start" name="right">
            </slot>
		</div>
    </div>
	{/if}

