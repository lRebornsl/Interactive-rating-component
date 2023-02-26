const items = Array.from(document.querySelectorAll('.rating li'));

items.forEach(item => {
  item.addEventListener('click', () => {

    if (item.classList.contains('selected')) {
      item.classList.remove('selected', 'no-hover')
    } else {
      items.forEach(otherItem => {
        otherItem.classList.remove('selected', 'no-hover');
      });

      item.classList.add('selected', 'no-hover');
    }
  });
});
