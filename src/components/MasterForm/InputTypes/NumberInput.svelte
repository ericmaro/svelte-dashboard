<script lang="typescript">
import { createEventDispatcher } from "svelte";


export let label:string;
export let name:string;
export let value:string;
export let disabled:boolean;
const dispatch = createEventDispatcher();

const onChange = (event)=>dispatch('change', {
        field: name,
        value: Number(event.target.value),
      })


</script>

<div class="text-left mb-0">
    {#if label}
    <label for={name} class="w-full form-label text-left">
      { label }
    </label>
    {/if}
    <input
      disabled={disabled}
      id={name}
      type='number'
      class="w-full form-control px-4 py-2 transition duration-300 input input-bordered"
      value={value}
      placeholder={label}
      on:input={onChange}
    />
  </div>