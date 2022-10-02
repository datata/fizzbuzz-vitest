export const fizzbuzz = (number) => {
    if(typeof number != 'number') throw new Error('Parameter provided is not a number.');
    if(Number.isNaN(number)) throw new Error('Parameter provided is not a number.');

    const cases = [{number: 3, word: 'fizz'}, {number:5, word: 'buzz'}, {number: 7, word: 'wolf'}];

    let result = '';
    cases.forEach(element => {
        if(number % element.number === 0) { 
            result += element.word;
        }
    });

    return result === '' ? number : result;
};