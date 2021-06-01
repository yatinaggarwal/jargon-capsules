const navigationHistory = [];
let currentCapsule = "";

export const getPrevCapsule = () => {
  if (navigationHistory.length > 0) {
    return navigationHistory.pop();
  }
  return "";
};

export const setPrevCapsule = (capsule, backAction) => {
  if (currentCapsule !== "" && !backAction) {
    navigationHistory.push(currentCapsule);
  }
  currentCapsule = capsule;
};
