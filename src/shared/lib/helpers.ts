export const debounce = <T>(fn: T, wait: number):(event: Event) => void => {
    let timer: ReturnType<typeof setTimeout>;
    return (event: Event) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        if (typeof fn === "function") {
          fn(event);
        }
      }, wait);
    };
  }

 export const combineWithAttributesOn = function (
    payload: Record<string, any>,
    attributeKey: string
  ): any {
    // eslint-disable-next-line no-prototype-builtins
    if (payload.hasOwnProperty(attributeKey)) {
      if (payload[attributeKey]) {
        Object.keys(payload[attributeKey]).forEach((itemKey: string) => {
          if (typeof payload[attributeKey][itemKey] !== "object") {
            payload[`_${itemKey}`] = payload[attributeKey][itemKey];
          }
        });
      }
  
      return payload;
    }
  };