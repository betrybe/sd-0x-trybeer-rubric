const currencyFormat = (num) => num
  .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

export default currencyFormat;
