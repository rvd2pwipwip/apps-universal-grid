const CARD_QTY = 30;
const grid = document.querySelector('.grid-container');

const createCards = (qty) => {
  for (let i = 0; i < qty; i++) {
    const card = document.createElement('div');
    card.classList.add('card');

    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail');
    thumbnail.style.backgroundImage = `url("https://source.unsplash.com/featured/300x300/?cat&${i}")`;

    const labelOne = document.createElement('p');
    labelOne.classList.add('label-1');
    labelOne.textContent = 'Song Title';

    const labelTwo = document.createElement('p');
    labelTwo.classList.add('label-2');
    labelTwo.textContent = 'Artist Name';

    card.appendChild(thumbnail);
    card.appendChild(labelOne);
    card.appendChild(labelTwo);

    grid.appendChild(card);
  }
};

createCards(CARD_QTY);