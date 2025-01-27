function greet(name) {
    return `Salut, ${name}!`;
  }
  
  module.exports = {
    greet
  };
  
  console.log('Librăria a fost definită cu succes!');
  console.log('Exemplu de utilizare:');
  console.log(greet('John'));