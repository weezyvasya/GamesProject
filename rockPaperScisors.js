const btnRockPaperScisors = document.querySelector('.rockPaperScisors')


class RockPaperScisors {
    answer = null;
    gameRules = {
      камень: {
        камень: 2,
        ножницы: 1,
        бумага: 0, 
      },
      ножницы: {
        камень: 0, 
        ножницы: 2,
        бумага: 1,
      },
      бумага: {
        камень: 1,
        ножницы: 0, 
        бумага: 2,
      },
    };
    arr = ["камень", "ножницы", "бумага"];
    randomIndex = Math.floor(Math.random() * this.arr.length);
    
  
    gameStart() {
      alert("Давай сыграем в камень-ножницы-бумага");
      this.answer = prompt("Ваш вариант");
      this.check(this.randomValue(), this.answer);
    }
    randomValue() {
      return this.arr[this.randomIndex];
    }
    check(ansewrComputer, ans) {
      if (this.gameRules[ans][ansewrComputer] === 1) {
        alert(`выиграли, компьютер показал ${ansewrComputer}`)
      } else if (this.gameRules[ans][ansewrComputer] === 2){
        alert(`ничья компьютер показал ${ansewrComputer}`)
      } else if (this.gameRules[ans][ansewrComputer] === 0){
        alert(`мы проиграли компьютер показал ${ansewrComputer}`)
      } else {
        alert('Что то пошло не так!')
      }
  }
  }

  const RockPaperScisors1 = new RockPaperScisors()


btnRockPaperScisors.addEventListener('click', () => {
    RockPaperScisors1.gameStart();
    });