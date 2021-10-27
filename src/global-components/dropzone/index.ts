/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Dropzone from "dropzone";

const init = (el: HTMLElement, props: any) => {
  Dropzone.autoDiscover = false;
  el.dropzone = new Dropzone(el, props.options);
};

export { init };
