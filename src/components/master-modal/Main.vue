<template lang="jsx">
    <vue-final-modal
    v-slot="{ params, close }"
    v-bind="$attrs"
     classes="flex justify-center items-center"
    content-class="relative  flex flex-col max-h-full w-screen items-center mx-4 dark:bg-gray-900"
  >
  <div class="modal-dialog xl:1/6  2xl:1/6 lg:w-1/4 md:w-1/4 sm:1/2">
         <div class="modal-content">
             <!-- BEGIN: Modal Header -->
             <div class="modal-header">
                 <h2 class="font-medium text-base mr-auto"> <slot name="title"></slot></h2> 
             </div> <!-- END: Modal Header -->
             <!-- BEGIN: Modal Body -->
             <div class="modal-body">
                  <slot name="description"></slot>
             </div> <!-- END: Modal Body -->
             <!-- BEGIN: Modal Footer -->
             <div class="modal-footer text-right"> 
               <button type="button" @click="$emit('cancel', close)" data-dismiss="modal" class="btn btn-outline-secondary w-20 mr-1">Cancel</button> 
               <button type="button" @click="$emit('confirm', close)" class="btn btn-primary w-20">Confirm</button> 
              </div> <!-- END: Modal Footer -->
         </div>
     </div>
  </vue-final-modal>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MasterModal",
  inheritAttrs: false,
  emits: ["cancel", "confirm"],
});
</script>
