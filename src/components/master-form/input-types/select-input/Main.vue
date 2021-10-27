<template lang="jsx">
<div class="text-left mb-5">
  <label v-if="label" :for="name" class="form-label text-left">
    {{ label }}
  </label>
  <select
  :disabled="disabled"
  :id="name"
   class="form-control form-select" 
    :value="value"
    :placeholder="label"
    @change="onChange"
    aria-label="Default select">
         <option v-for="(option, index) in options" :key="index" :value="option.value" >{{option.label}}</option>
     </select>
</div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
interface Option {
  label: string;
  value: string;
}
export default defineComponent({
  props: {
    label: {
      type: String,
    },
    name: {
      type: String,
    },
    numericValue: {
      type: Boolean,
    },
    options: {
      type: Array as PropType<Option[]>,
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
        value: props.numericValue
          ? Number($evt.target.value)
          : $evt.target.value,
      });
    };
    return {
      onChange,
    };
  },
});
</script>
