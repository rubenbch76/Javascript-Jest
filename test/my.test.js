/* const isAdult = require('./src/index.js');
const examGrade = require('./src/index.js'); */

import { isAdult, examGrade } from '../src/index'

/* test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
}); */

test('Mayor de edad igual o mayor a 18', () => {
    expect(isAdult(18)).toBe("Mayor de edad");
});

test('Menor de edad menor a 18', () => {
    expect(isAdult(15)).toBe("Menor de edad");
});

test('Menor de 3 - Muy deficiente', () => {
    expect(examGrade(2)).toBe("Nota: 2 - La calificación es MUY DEFICIENTE");
});

test('Menor de 5 - INSUFICIENTE', () => {
    expect(examGrade(4)).toBe("Nota: 4 - La calificación es INSUFICIENTE");
});

test('Menor de 6 - SUFICIENTE', () => {
    expect(examGrade(5.5)).toBe("Nota: 5.5 - La calificación es SUFICIENTE");
});

test('Menor de 7 - BIEN', () => {
    expect(examGrade(6)).toBe("Nota: 6 - La calificación es BIEN");
});

test('Menor de 9 - NOTABLE', () => {
    expect(examGrade(8)).toBe("Nota: 8 - La calificación es NOTABLE");
});

test('Menor de 10 - SOBRESALIENTE', () => {
    expect(examGrade(9)).toBe("Nota: 9 - La calificación es SOBRESALIENTE");
});

