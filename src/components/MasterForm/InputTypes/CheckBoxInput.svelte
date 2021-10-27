<script lang="typescript">
import { createEventDispatcher } from "svelte";


export let label:string;
export let name:string;
export let value:boolean = false;
export let disabled:boolean;
const dispatch = createEventDispatcher();

const onChange = (event)=>dispatch('change', {
        field: name,
        value: event.target.checked,
      })


</script>

<div class="text-left mb-0">
    {#if label}
    <label for={name} class="w-full form-label text-left">
      { label }
    </label>
    {/if}
<div>

</div>
    <div class="w-full">
      <input
        disabled={disabled}
        id={name}
        type='checkbox'
        class="form-control transition duration-300 checkbox"
        checked={value}
        placeholder={label}
        on:input={onChange}
      />
    </div>
  </div>