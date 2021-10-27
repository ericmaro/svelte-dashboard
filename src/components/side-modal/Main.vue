<template lang="jsx">
 <TransitionRoot as="template" :show="visible">
    <Dialog 
    as="div" 
    static 
    class="fixedinset-0 overflow-hidden" 
    @close="close" 
    :open="visible">
      <div class="absolute inset-0 overflow-hidden">
        <TransitionChild 
        as="template" 
        enter="ease-in-out duration-500" 
        enter-from="opacity-0" 
        enter-to="opacity-100" 
        leave="ease-in-out duration-500" 
        leave-from="opacity-100" 
        leave-to="opacity-0">
          <DialogOverlay 
          class="absolute inset-0 bg-black bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex" 
        :class="size==='sm'?'w-1/4':size==='xl'?'w-1/2':size==='lg'?'w-1/3':'w-1/3'">
          <TransitionChild 
          as="template" 
          enter="transform transition ease-in-out duration-500 sm:duration-700" 
          enter-from="translate-x-full" 
          enter-to="translate-x-0" 
          leave="transform transition ease-in-out duration-500 sm:duration-700" 
          
          leave-from="translate-x-0" leave-to="translate-x-full">
            <div class="relative w-screen max-w-full">
              <TransitionChild 
              as="template" 
              enter="ease-in-out duration-500" 
              enter-from="opacity-0" 
              enter-to="opacity-100" 
              leave="ease-in-out duration-500" 
              leave-from="opacity-100" 
              leave-to="opacity-0">
                <div class="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                  <button class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-0 focus:ring-white" 
                  @click="close">
                    <span class="sr-only">Close panel</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                <div class="px-4 sm:px-6">
                  <DialogTitle class="text-lg font-medium text-gray-900">
                    {{title?title:'Modal'}}
                  </DialogTitle>
                </div>
                <div class="mt-6 relative flex-1 px-4 sm:px-6">
                  <!-- Replace with your content -->
                 <slot></slot>
                  <!-- /End replace -->
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script>
import { defineComponent } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

export default defineComponent({
  props: {
    visible: {
      type: Boolean,
    },
    title: {
      type: String,
    },
    size: {
      //sm | lg | xl
      type: String,
    },
  },
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  setup(props, context) {
    const close = () => context.emit("onClosed");

    return {
      close,
    };
  },
});
</script>
<style lang=""></style>
