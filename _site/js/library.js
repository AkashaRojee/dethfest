/* eslint-disable no-unused-vars */

// Add event listener of given type of an array of elements and set callback function
function addEventListeners(elementsArray, eventType, eventListenerFunction) {
  elementsArray.forEach((element) => {
    element.addEventListener(eventType, eventListenerFunction);
  });
}

// Create HTML element of given type and add classes, attributes and textContent (where applicable)
function createElement(elementType, classNames = '', attributes = {}, innerHTML = '') {
  const elementObject = document.createElement(elementType);
  if (classNames) elementObject.classList.add(...(classNames.split(' ')));
  Object.keys(attributes).forEach((attribute) => {
    elementObject.setAttribute(attribute, attributes[attribute]);
  });
  elementObject.innerHTML = innerHTML;
  return elementObject;
}