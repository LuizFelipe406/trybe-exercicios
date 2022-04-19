// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('verifique a chamada da callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas.', () => {
  test('verifique a chamada da callback de uma função uppercase' , (done) => {
    const expected = 'ATANES';
    const callback = (string) => {
      try {
        expect(string).toBe(expected);
        done();
      } catch (error) {
        done(error);
      }
    }
    uppercase('atanes', callback);
  })
})