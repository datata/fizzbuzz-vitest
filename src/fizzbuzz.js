export const fizzbuzz = (number) => {
    if(typeof number != 'number') throw new Error('Parameter provided is not a number.');
    if(Number.isNaN(number)) throw new Error('Parameter provided is not a number.');

    if(number % 3 === 0) return 'fizz';

    return number;
};