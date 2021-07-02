const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentElement = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');

// 01a - Keep track of current card
let currentActiveCard = 0;

// 01b - Store DOM Cards
const cardsElement = [];

// 01c - Store Card Data
const cardsData = [
{
  question: 'What must a...',
  answer: 'A letter...'
},
{
  question: 'What;s your number?',
  answer: '232387'
},
{
  question: 'The Last question...',
  answer: 'The Last answer...'
}
];

// 1d - Create all Cards
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}

// 1e - Create sigle Card in DOM
function createCard(data, index) {
  const card = document.createElement('div');
  card.classList.add('card');

  // 1f - Add active class to 1st card
  if(index === 0) {
    card.classList.add('active');
  }

  // 1g - filling HTML
  card.innerHTML = `
  <div class="inner-card">
    <div class="inner-card-front">
      <p>${data.question}</p>
    </div>
    <div class="inner-card-back">
      <p>${data.answer}</p>
    </div>
  </div>
  `;

  // 2a - Show The Answer
  card.addEventListener('click', () => card.classList.toggle('show-answer'));

  // 1h - Add to DOM Cards Element
  cardsElement.push(card);

  cardsContainer.appendChild(card);

  // 2b - Page number display function
  updateCurrentPageNumber();
}

// 2c - Show number of cards & number of current one
function updateCurrentPageNumber() {
  currentElement.innerText = `${currentActiveCard +1}/${cardsElement.length}`;
}

createCards();

// 2d - Event Listeners for prev/next buttons
nextBtn.addEventListener('click', () => {
  cardsElement[currentActiveCard].className = 'card left'; // class left allows sliding effect for cards from left

  currentActiveCard = currentActiveCard + 1; // increasing current number when next is clicked

  // checking if we can't go further than last card
  if(currentActiveCard > cardsElement.length - 1) {
    currentActiveCard = cardsElement.length - 1;
  }

  // overwrittig earlier added classes with new ones
  cardsElement[currentActiveCard].className = 'card active';

  updateCurrentPageNumber();
});

prevBtn.addEventListener('click', () => {
  cardsElement[currentActiveCard].className = 'card right';

  currentActiveCard = currentActiveCard - 1;

  if(currentActiveCard < 0) {
    currentActiveCard = 0;
  }

  cardsElement[currentActiveCard].className = 'card active';

  updateCurrentPageNumber();
});