const playRound = require('./app')
const selections = require('./options')
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

jest
    .dontMock('fs');

describe('Testing file locations of selection images', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
});
    test('Rock Image', () => {
        expect(selections[0].image).toBe("images/rock.png");
      });  
    test('Paper Image', () => {
        expect(selections[1].image).toBe("images/paper.png");
    });  
    test('Scissors Image', () => {
        expect(selections[2].image).toBe("images/scissors.png");
    });

});

describe('Testing options where player chooses rock', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
});
    test('Player: rock, Computer: paper', () => {
        expect(playRound('rock',selections[1])).toBe("Computer wins this round");
      });
    
    test('Player: rock, Computer: scissors', () => {
        expect(playRound('rock',selections[2])).toBe("Player wins this round");
      });
    
    test('Player: rock, Computer: rock', () => {
        expect(playRound('rock',selections[0])).toBe("Tie");
      });
});

describe('Testing options where player chooses paper', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
});
    test('Player: paper, Computer: paper', () => {
        expect(playRound('paper',selections[1])).toBe("Tie");
      });
    
    test('Player: paper, Computer: scissors', () => {
        expect(playRound('paper',selections[2])).toBe("Computer wins this round");
      });
    
    test('Player: paper, Computer: rock', () => {
        expect(playRound('paper',selections[0])).toBe("Player wins this round");
      });
});

describe('Testing options where player chooses scissors', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
});
    test('Player: scissors, Computer: paper', () => {
        expect(playRound('scissors',selections[1])).toBe("Player wins this round");
      });
    
    test('Player: scissors, Computer: scissors', () => {
        expect(playRound('scissors',selections[2])).toBe("Tie");
      });
    
    test('Player: scissors, Computer: rock', () => {
        expect(playRound('scissors',selections[0])).toBe("Computer wins this round");
      });
});

