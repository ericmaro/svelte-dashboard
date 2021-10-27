/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { tns } from "tiny-slider/src/tiny-slider";

const init = (el: any, props: any) => {
  el.tns = tns({
    container: el,
    slideBy: "page",
    mouseDrag: true,
    autoplay: true,
    controls: false,
    nav: false,
    speed: 500,
    ...props.options,
  });
};

const reInit = (el: any) => {
  el.tns.destroy();
  el.tns.rebuild();
};

export { init, reInit };
