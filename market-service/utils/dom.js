export const makeDOMwithProperties = (domType, propertyMap) => {
  // domType : div, a, li, img 등등
  // propertyMap : { "className" : "product-card", ... }
  // Object.keys(propertyMap) -> ["className", "alt"]
  const dom = document.createElement(domType);
  Object.keys(propertyMap).forEach((key) => {
    dom[key] = propertyMap[key];
  });

  return dom;
};

export const appendChildrenList = (target, childrenList) => {
  if (!Array.isArray(childrenList)) return; // early return

  childrenList.forEach((children) => {
    target.appendChild(children);
  });
};
