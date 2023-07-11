document.addEventListener('DOMContentLoaded', () => {
  // Opções de cartas
  const cards = [
    {
      name: 'fund',
      img: 'images/fund.png'
    },
    {
      name: 'fund1',
      img: 'images/fund1.png'
    },
    {
      name: '180',
      img: 'images/180.png'
    },
    {
      name: '1801',
      img: 'images/1801.png'
    },
    {
      name: 'poligono',
      img: 'images/poligono.png'
    },
    {
      name: 'poligono1',
      img: 'images/poligono1.png'
    },
    {
      name: 'retas',
      img: 'images/retas.png'
    },
    {
      name: 'retas1',
      img: 'images/retas1.png'
    },
    {
      name: 'tales',
      img: 'images/tales.png'
    },
    {
      name: 'tales1',
      img: 'images/tales1.png'
    },
    {
      name: 'semelhanca',
      img: 'images/semelhanca.png'
    },
    {
      name: 'semelhanca1',
      img: 'images/semelhanca1.png'
    },
    {
      name: 'paralela',
      img: 'images/paralela.png'
    },
    {
      name: 'paralela1',
      img: 'images/paralela1.png'
    },
    {
      name: 'planificado',
      img: 'images/planificado.png'
    },
    {
      name: 'planificado1',
      img: 'images/planificado1.png'
    },
    {
      name: 'lugarg',
      img: 'images/lugarg.png'
    },
    {
      name: 'lugarg1',
      img: 'images/lugarg1.png'
    },
  ];

  // Embaralhar todas as cartas
  cards.sort(() => 0.5 - Math.random());

  // Recuperar elementos
  const board = document.querySelector('.board');
  const resultView = document.querySelector('#result');
  let cardsChosen = []; // Cartas escolhidas
  let cardsChosenId = []; // IDs das cartas escolhidas para caso de clique na mesma imagem
  let cardsWon = []; // Cartas combinadas

  // Criar o quadro de cartas
  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/board.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      board.appendChild(card);
    }
  }

  resultView.textContent = 'Pares Encontrados: ' + cardsWon.length + '/' + cards.length / 2;

  // Checagem de combinações
  function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    // Verificar clique na mesma imagem
    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/board.png');
      cards[optionTwoId].setAttribute('src', 'images/board.png');
      alert('Você clicou na mesma imagem');
    }
    // Verificar combinação se clicou em imagens diferentes
    else if (
      cardsChosen[0] === cardsChosen[1] ||
      (cardsChosen[0] === 'fund' && cardsChosen[1] === 'fund1') ||
      (cardsChosen[0] === 'fund1' && cardsChosen[1] === 'fund') ||
      (cardsChosen[0] === 'paralela' && cardsChosen[1] === 'paralela1') ||
      (cardsChosen[0] === 'paralela1' && cardsChosen[1] === 'paralela') ||
      (cardsChosen[0] === 'planificado' && cardsChosen[1] === 'planificado1') ||
      (cardsChosen[0] === 'planificado1' && cardsChosen[1] === 'planificado') ||
      (cardsChosen[0] === 'lugarg' && cardsChosen[1] === 'lugarg1') ||
      (cardsChosen[0] === 'lugarg1' && cardsChosen[1] === 'lugarg') ||
      (cardsChosen[0] === 'tales' && cardsChosen[1] === 'tales1') ||
      (cardsChosen[0] === 'tales1' && cardsChosen[1] === 'tales') ||
      (cardsChosen[0] === 'semelhanca' && cardsChosen[1] === 'semelhanca1') ||
      (cardsChosen[0] === 'semelhanca1' && cardsChosen[1] === 'semelhanca') ||
      (cardsChosen[0] === 'retas' && cardsChosen[1] === 'retas1') ||
      (cardsChosen[0] === 'retas1' && cardsChosen[1] === 'retas') ||
      (cardsChosen[0] === 'poligono' && cardsChosen[1] === 'poligono1') ||
      (cardsChosen[0] === 'poligono1' && cardsChosen[1] === 'poligono') ||
      (cardsChosen[0] === '180' && cardsChosen[1] === '1801') ||
      (cardsChosen[0] === '1801' && cardsChosen[1] === '180')
    ) {
      cards[optionOneId].setAttribute('src', 'images/check.png');
      cards[optionTwoId].setAttribute('src', 'images/check.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/board.png');
      cards[optionTwoId].setAttribute('src', 'images/board.png');
    }
    cardsChosen = [];
    cardsChosenId = [];
    // Mostrar placar
    resultView.textContent = 'Pares Encontrados: ' + cardsWon.length ;
    if (cardsWon.length === cards.length / 2) {
      resultView.textContent = 'Parabéns! Você conseguiu encontrar todas as cartas';
    }
  }

  // Virar as cartas
  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cards[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cards[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});