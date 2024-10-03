const data = {
  "Food": {
    "Fruits": {
      "apple": {},
      "banana": {}
    }
  },

  "Drinks": {
    "Hot": {
      "coffee": {},
      "tea": {}
    },
    "Cold": {
      "juice": {},
      "soda": {}
    }
  }
};

const createTree = (container, obj) => {
  container.append(createTreeDom(obj));
}

const createTreeDom = (data) => {
  // If there are no children, return undefined,
  // and the <ul> won't be created
  if (!Object.keys(data).length) return;

  let listElement = document.createElement('ul');

  for (let itemName in data) {
    const listItem = document.createElement('li');
    listItem.textContent = itemName;

    const childList = createTreeDom(data[itemName]);
    if (childList) {
      childList.style.display = 'none';

      // toggle only the child lists of this particular parent item
      listItem.addEventListener('click', (event) => {
        event.stopPropagation(); // avoid actions propagating up to parent
        if (childList.style.display === 'none') {
          childList.style.display = 'block';
        } else {
          childList.style.display = 'none';
        }
      });
      listItem.append(childList);
    }
    listElement.append(listItem);
  }
  return listElement;
};

const container = document.getElementById('container');
createTree(container, data);
