import { App } from "vue";
import helper from "./helper";

export default (app: App<Element>): void => {
  app.use(helper);
};
