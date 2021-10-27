/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Tippy from "./tippy/Main.vue";
import TippyContent from "./tippy-content/Main.vue";
import FullCalendar from "./calendar/Main.vue";
import FullCalendarDraggable from "./calendar/Draggable.vue";
import CKEditor from "./ckeditor/Main.vue";
import Highlight from "./highlight/Main.vue";
import TinySlider from "./tiny-slider/Main.vue";
import Dropzone from "./dropzone/Main.vue";
import * as featherIcons from "@zhuowenli/vue-feather-icons";
import { App } from "vue";

export default (app: App<Element>) => {
  app.component("Tippy", Tippy);
  app.component("TippyContent", TippyContent);
  app.component("FullCalendar", FullCalendar);
  app.component("FullCalendarDraggable", FullCalendarDraggable);
  app.component("CKEditor", CKEditor);
  app.component("Highlight", Highlight);
  app.component("TinySlider", TinySlider);
  app.component("Dropzone", Dropzone);

  for (const [key, icon] of Object.entries(featherIcons)) {
    icon.props.size.default = "24";
    app.component(key, icon);
  }
};
