(function (window, document) {
  'use strict';

  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */
  var $visor = document.querySelector('[data-js="visor"]');
  var buttonNumbers = document.querySelectorAll('[data-js="buttonNumbers"]');
  var btnOperations = document.querySelectorAll('[data-js="buttonOperations"]');
  var btnResult = document.querySelector('[data-js="buttonEqual"]');
  var btnCE = document.querySelector('[data-js="buttonCE"]');

  Array.prototype.forEach.call(buttonNumbers, function (button) {
    button.addEventListener('click', handleClickNumber, false);
  })
  Array.prototype.forEach.call(btnOperations, function (button) {
    button.addEventListener('click', handleClickOperations, false);
  })
  btnCE.addEventListener('click', handleClickCE, false);
  btnResult.addEventListener('click', handleClickEquals, false);

  function handleClickNumber() {
    $visor.value += this.value;
  }
  function handleClickOperations() {
    $visor.value = removeLastItemIfItisAnOperator($visor.value);
    $visor.value += this.value;
  }
  function removeLastItemIfItisAnOperator(number) {
    if (isLastItemOperation(number)) {
      return number.slice(0, -1);
    }
    return number
  }
  function handleClickCE() {
    $visor.value = 0;
  }
  function isLastItemOperation(number) {
    var operations = ['+', '-', 'x', '÷'];
    var lastItem = number.split('').pop();
    return operations.some(function (operator) {
      return operator === lastItem;
    });

  }
  function handleClickEquals() {
    $visor.value = removeLastItemIfItisAnOperator($visor.value);
    var allValues = $visor.value.match(/\d+[+x÷-]?/g);
    $visor.value = allValues.reduce(function (accumulated, actual) {
      var firstValue = accumulated.slice(0, -1);
      var operator = accumulated.split('').pop();
      var lastValue = removeLastItemIfItisAnOperator(actual);
      var lastOperator = isLastItemOperation(actual) ? actual.split('').pop() : '';
      switch (operator) {
        case '+':
          return (Number(firstValue) + Number(lastValue)) + lastOperator;
        case '-':
          return (Number(firstValue) - Number(lastValue)) + lastOperator;
        case 'x':
          return (Number(firstValue) * Number(lastValue)) + lastOperator;
        case '÷':
          return (Number(firstValue) / Number(lastValue)) + lastOperator;

      }
    })

  }


})(window, document);
