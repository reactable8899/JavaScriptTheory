const mocha = require('mocha');
const chai = require('chai');

const expect = chai.expect;

const mathLib = require('./mathLib');
describe('Тестирование метода', function() {

    it('Степень числа ', function() {
        const c = mathLib.power(2, 3);
        expect(c).to.equal(8);
    });
});

describe('Тестирование метода', function() {

    it('Метод Reverse (обратная запись) ', function() {
        const c = mathLib.reverse([1,2,3,4,5,1]);
        expect(c).to.deep.equal([1,5,4,3,2,1]);
    });
});

describe('Тестирование метода', function() {

    it('Метод Concat (Слияние массивов) ', function() {
        const c = mathLib.concat([1,2,3],[4,5,1]);
        expect(c).to.deep.equal([1,2,3,4,5,1]);
    });
});

describe('Тестирование метода', function() {

    it('Метод sortBy (сортировка) ', function() {
        const c = mathLib.sortBy([6,5,7,8,2,44,2,3,1]);
        expect(c).to.deep.equal([1,2,2,3,5,6,7,8,44]);
    });
});

describe('Тестирование метода', function() {

    it('Метод Range (Создание массива по условию (start,end,step)) ', function() {
        const c = mathLib.range(0,20,5);
        expect(c).to.deep.equal([0,5,10,15]);
    });
});

describe('Тестирование метода', function() {

    it('Метод Rest (Возвращает все кроме первого (нескольких первых) эл-тов) ', function() {
        const c = mathLib.rest([6,5,7,8,2,44,2,3,1],5);
        expect(c).to.deep.equal([44,2,3,1]);
    });
});

describe('Тестирование метода', function() {

    it('Метод Pull (удаляет переданные эл-ты массива) ', function() {
        const c = mathLib.pull([2,2,7,8,2,44,2,3,1],2);
        expect(c).to.deep.equal([7,8,44,3,1]);
    });
});

describe('Тестирование метода', function() {

    it('Метод firstofArray (Возвращает первый или несколько первых эл=тов) ', function() {
        const c = mathLib.firstofArray([2,2,7,8,2,44,2,3,1],6);
        expect(c).to.deep.equal([2,2,7,8,2,44]);
    });
});

describe('Тестирование метода', function() {

    it('Метод compact (Убираем из массива все пустые элементы) ', function() {
        const c = mathLib.compact([2,4,null,"",undefined,0]);
        expect(c).to.deep.equal([2,4]);
    });
});

describe('Тестирование метода', function() {

    it('Метод min (Нахождение минимального элемента) ', function() {
        const c = mathLib.min([45,2,6,7,-2,1,6,8,9]);
        expect(c).to.deep.equal(-2);
    });
});

describe('Тестирование метода', function() {

    it('Метод min (Нахождение максимального элемента) ', function() {
        const c = mathLib.max([45,2,6,77,-2,1,6,8,9]);
        expect(c).to.deep.equal(77);
    });
});

describe('Тестирование метода', function() {

    it('Метод multiply array (Умножение элементов массива) ', function() {
        const c = mathLib.factorial([1,2,3,4,5]);
        expect(c).to.deep.equal(120);
    });
});

describe('Тестирование метода', function() {

    it('Метод average (Среднее арифметическое) ', function() {
        const c = mathLib.average([1,2,3,4,5,9]);
        expect(c).to.deep.equal(4);
    });
});
