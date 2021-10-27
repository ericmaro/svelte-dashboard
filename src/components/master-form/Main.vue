<template lang="jsx">
<div class="text-left">
  <form  @submit.prevent="onSubmit()">
    <div v-for="(group, i) in form.groups" :key="i">
      <div v-if="!group.hidden">
        <div class="text-left mb-5 text-2xl font-light" v-if="group.title">{{group.title}}</div>
        <div class="grid grid-cols-12 gap-4">
          <div :class="`col-span-${field.span}`" v-for="(field, j) in group.fields" :key="j" >
            <text-input :disabled="loading" v-if="field.type ==='password'" :masked="true" @change="onFieldChange" :value="data[field.name]" :name="field.name" :label="field.label"/>
            <select-input :disabled="loading" :numericValue="field.numericValue" v-else-if="field.type ==='select'" :options="field.options" @change="onFieldChange" :value="data[field.name]" :name="field.name" :label="field.label"/>
            <number-input :disabled="loading" v-else-if="field.type ==='number'" @change="onFieldChange" :value="data[field.name]" :name="field.name" :label="field.label"/>
            <textarea-input :disabled="loading" v-else-if="field.type ==='textArea'" @change="onFieldChange" :value="data[field.name]" :name="field.name" :label="field.label"/>
            <text-input :disabled="loading" v-else="field.type ==='text'" @change="onFieldChange" :value="data[field.name]" :name="field.name" :label="field.label"/>
            <span v-if="v$[field.name].$error">
              {{v$[field.name].$error}}
                  {{ v$[field.name].$errors[0].$message }}
                </span>
          </div>
          
        </div>
       
      </div>
    </div>
     <button v-if="form.submitButtonText" class="btn btn-primary mr-1 mb-2">{{loading?'Loading..':form.submitButtonText}}</button>
  </form>
</div>
</template>
<script lang="ts">
import {
  defineComponent,
  PropType,
  onMounted,
  ref,
  computed,
  inject,
} from "vue";
import { Form } from "./types/form";
import TextInput from "./input-types/text-input/Main.vue";
import TextareaInput from "./input-types/textarea-input/Main.vue";
import NumberInput from "./input-types/number-input/Main.vue";
import SelectInput from "./input-types/select-input/Main.vue";
import { Field } from "./types/field";
import { FieldGroup } from "./types/field.group";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import MasterModal from "@/components/master-modal/Main.vue";
interface Data {
  [key: string]: any;
}
export default defineComponent({
  components: {
    TextInput,
    NumberInput,
    SelectInput,
    TextareaInput,
  },
  props: {
    form: {
      type: Object as PropType<Form>,
      required: true,
    },
    loading: {
      type: Boolean,
    },
    showConfirm: {
      type: Boolean,
    },
  },
  setup(props, context) {
    let data = ref({} as Data);
    const modal: any = inject("$vfm");
    onMounted(() => {
      props.form.groups.forEach((group: FieldGroup) => {
        data.value = Object.fromEntries(
          group.fields.map((field: Field) => {
            return [field.name, field.value];
          })
        );
      });
    });
    const rules = computed(() => {
      let _rules = {};
      props.form.groups.forEach((group: FieldGroup) => {
        _rules = Object.fromEntries(
          group.fields.map((field: Field) => {
            return [field.name, [required, field.isRequired]];
          })
        );
      });
      return _rules;
    });
    const v$ = useVuelidate(rules, data.value);

    const onFieldChange = (d: any) => {
      data.value[d.field] = d.value;
    };

    const onSubmit = async () => {
      // const isFormCorrect = await v$.value.$validate();
      // if (!isFormCorrect) return;
      props.showConfirm
        ? modal.show({
            component: MasterModal,
            slots: {
              title: "Confirm",
              description: "Are you sure you want to perform this action?",
            },
            on: {
              // event by v-modal
              confirm(close: () => void) {
                context.emit("onSubmit", data.value);
                close();
              },
              cancel(close: () => void) {
                console.log("cancel");
                close();
              },
            },
          })
        : context.emit("onSubmit", data.value);
    };
    return {
      onSubmit,
      data,
      onFieldChange,
      v$,
    };
  },
});
</script>
<style lang="ts"></style>
