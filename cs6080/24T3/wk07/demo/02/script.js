const button = document.getElementById('dropdownButton');
const listBox = document.getElementById('listBoxElem');
const options = listBox.querySelectorAll('[role="option"]');

// Toggle dropdown visibility and aria-expanded attribute
button.addEventListener('click', () => {
  const expanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', !expanded);
  listBox.style.display = expanded ? 'none' : 'block';
});

// Handle selection from the listbox
options.forEach(option => {
  option.addEventListener('click', () => {
    // Clear all selections
    options.forEach(opt => opt.setAttribute('aria-selected', 'false'));
    // Set the selected option
    option.setAttribute('aria-selected', 'true');
    button.textContent = `Travel destination: ${option.textContent}`;
    // Close the dropdown
    button.setAttribute('aria-expanded', 'false');
    listBox.style.display = 'none';
  });
});