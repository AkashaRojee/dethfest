// Add event listener of given type of an array of elements and set callback function
function addEventListeners(elementsArray, eventType, eventListenerFunction) {
  elementsArray.forEach((element) => {
    element.addEventListener(eventType, eventListenerFunction);
  });
}