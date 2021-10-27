<template lang="jsx">
<div class="text-left mb-5">
  <label v-if="label" :for="name" class="form-label text-left">
    {{ label }}
  </label>
  <textarea 
  class="form-control w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" 
    :disabled="disabled"
    :id="name"
    :value="value"
    :placeholder="label"
    @input="onChange"
  rows="4">
  </textarea>
</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    label: {
      type: String,
    },
    name: {
      type: String,
    },
    value: {
      type: String,
    },
    masked: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
  },
  setup(props, context) {
    const onChange = ($evt: any) => {
      context.emit("change", { field: props.name, value: $evt.target.value });
    };
    return {
      onChange,
    };
  },
});
</script>
