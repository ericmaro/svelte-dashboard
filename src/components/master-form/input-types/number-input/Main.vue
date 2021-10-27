<template lang="jsx">
<div class="text-left mb-5">
  <label v-if="label" :for="name" class="form-label text-left">
    {{ label }}
  </label>
  <input
    :disabled="disabled"
    :id="name"
    type='number'
    class="form-control"
    :value="value"
    :placeholder="label"
    @input="onChange"
  />
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
    disabled: {
      type: Boolean,
    },
  },
  setup(props, context) {
    const onChange = ($evt: any) => {
      context.emit("change", {
        field: props.name,
        value: Number($evt.target.value),
      });
    };
    return {
      onChange,
    };
  },
});
</script>
