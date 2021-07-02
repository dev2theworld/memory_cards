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