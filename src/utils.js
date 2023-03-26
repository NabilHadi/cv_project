const findObjectInArrayWith = (arr = [], properties = {}) => {
  return arr.find((elm) => {
    if (typeof elm === "object") {
      return Object.keys(properties).every((key) => {
        return elm[key] === properties[key];
      });
    }
    return false;
  });
};

export { findObjectInArrayWith };
