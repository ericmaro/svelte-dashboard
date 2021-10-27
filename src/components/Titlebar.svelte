<script lang="ts">
  export let title;
</script>

<div class="flex flex-col flex-wrap py-4 mx-auto md:items-center md:flex-row">
    <a href="/" class="lg:mr-auto focus:outline-none">
      <div class="inline-flex items-center">
        <h2 class="block text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8"> {title} </h2>
      </div>
    </a>
   
    <slot name="button"></slot>
   
  </div>