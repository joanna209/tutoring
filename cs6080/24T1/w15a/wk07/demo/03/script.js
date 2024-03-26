console.log('hi');

const listItems = document.querySelectorAll('li');
const descHeading = document.querySelector('.animal-description h2');
const descPara = document.querySelector('.animal-description p');

const handleSelection = (e) => {
  const heading = e.target.textContent;
  const description = e.target.getAttribute('data-description');
  descHeading.textContent = heading;
  descPara.textContent = description;
}

listItems.forEach((item) => {
  item.addEventListener('mouseup', handleSelection);
  item.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      handleSelection(event);
    }
  }) 
})
