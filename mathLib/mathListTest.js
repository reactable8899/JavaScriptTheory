const mocha = require('mocha');
const chai = require('chai');

const expect = chai.expect;

const mathLib = require('./mathLib');
describe('Тестирование метода', function() {

    it('Степень числа ', function() {
        const c = mathLib.power(2, 3);
        expect(c).to.equal(8);
    });
    it('Степень числа ', function() {
        const c = mathLib.power(2, 10);
        expect(c).to.equal(1024);
    });
    it('Степень числа ', function() {
        const c = mathLib.power(4, 4);
        expect(c).to.equal(256);
    });
});


describe('Тестирование метода', function() {

    it('Метод Reverse (обратная запись) ', function() {
        const c = mathLib.reverse([1,2,3,4,5,1]);
        expect(c).to.deep.equal([1,5,4,3,2,1]);
    });
    it('Метод Reverse (обратная запись) ', function() {
        const c = mathLib.reverse([11,22,2,1,33,4,44,5,55]);
        expect(c).to.deep.equal([55,5,44,4,33,1,2,22,11]);
    });
    it('Метод Reverse (обратная запись) ', function() {
        const c = mathLib.reverse([11,-1,-4,-5,6,0,99,55]);
        expect(c).to.deep.equal([55,99,0,6,-5,-4,-1,11]);
    });
});

describe('Тестирование метода', function() {

    it('Метод Concat (Слияние массивов) ', function() {
        const c = mathLib.concat([1,2,3],[4,5,1]);
        expect(c).to.deep.equal([1,2,3,4,5,1]);
    });
    it('Метод Concat (Слияние массивов) ', function() {
        const c = mathLib.concat([-3,-2,-1],[0,1,2]);
        expect(c).to.deep.equal([-3,-2,-1,0,1,2]);
    });
    it('Метод Concat (Слияние массивов) ', function() {
        const c = mathLib.concat([88,99],[10,10]);
        expect(c).to.deep.equal([88,99,10,10]);
    });
});

describe('Тестирование метода', function() {

    it('Метод sortBy (сортировка) ', function() {
        const c = mathLib.sortBy([6,5,7,8,2,44,2,3,1]);
        expect(c).to.deep.equal([1,2,2,3,5,6,7,8,44]);
    });
    it('Метод sortBy (сортировка) ', function() {
        const c = mathLib.sortBy([-6,-7,22,4,6,71,2,63,-1,0]);
        expect(c).to.deep.equal([-7,-6,-1,0,2,4,6,22,63,71]);
    });
    it('Метод sortBy (сортировка) ', function() {
        const c = mathLib.sortBy([-10,10,0,-111,111]);
        expect(c).to.deep.equal([-111,-10,0,10,111]);
    });
});

describe('Тестирование метода', function() {

    it('Метод Range (Создание массива по условию (start,end,step)) ', function() {
        const c = mathLib.range(0,20,5);
        expect(c).to.deep.equal([0,5,10,15]);
    });
    it('Метод Range (Создание массива по условию (start,end,step)) ', function() {
        const c = mathLib.range(5,24,2);
        expect(c).to.deep.equal([5,7,9,11,13,15,17,19,21,23]);
    });
    it('Метод Range (Создание массива по условию (start,end,step)) ', function() {
        const c = mathLib.range(1,4,1/2);
        expect(c).to.deep.equal([1,3/2,2,5/2,3,7/2]);
    });
});

describe('Тестирование метода', function() {

    it('Метод Rest (Возвращает все кроме первого (нескольких первых) эл-тов) ', function() {
        const c = mathLib.rest([6,5,7,8,2,44,2,3,1],5);
        expect(c).to.deep.equal([44,2,3,1]);
    });
    it('Метод Rest (Возвращает все кроме первого (нескольких первых) эл-тов) ', function() {
        const c = mathLib.rest([6,5,7,8,2,44,2,3,1],0);
        expect(c).to.deep.equal([6,5,7,8,2,44,2,3,1]);
    });
    it('Метод Rest (Возвращает все кроме первого (нескольких первых) эл-тов) ', function() {
        const c = mathLib.rest([6,5,7,8,2,44,2,3,1],8);
        expect(c).to.deep.equal([1]);
    });
});

describe('Тестирование метода', function() {

    it('Метод Pull (удаляет переданные эл-ты массива) ', function() {
        const c = mathLib.pull([2,2,7,8,2,44,2,3,1],2);
        expect(c).to.deep.equal([7,8,44,3,1]);
    });
    it('Метод Pull (удаляет переданные эл-ты массива) ', function() {
        const c = mathLib.pull([1,1,1,1,0,1,1,1,1],1);
        expect(c).to.deep.equal([0]);
    });
    it('Метод Pull (удаляет переданные эл-ты массива) ', function() {
        const c = mathLib.pull([1,2,1,2,1,3,1,3,1,3,1],1);
        expect(c).to.deep.equal([2,2,3,3,3]);
    });
});

describe('Тестирование метода', function() {

    it('Метод firstofArray (Возвращает первый или несколько первых эл=тов) ', function() {
        const c = mathLib.firstofArray([2,2,7,8,2,44,2,3,1],6);
        expect(c).to.deep.equal([2,2,7,8,2,44]);
    });
    it('Метод firstofArray (Возвращает первый или несколько первых эл=тов) ', function() {
        const c = mathLib.firstofArray([2,2,7,8,2,44,2,3,1],8);
        expect(c).to.deep.equal([2,2,7,8,2,44,2,3]);
    });
    it('Метод firstofArray (Возвращает первый или несколько первых эл=тов) ', function() {
        const c = mathLib.firstofArray([2,2,7,8,2,44,2,3,1],0);
        expect(c).to.deep.equal([]);
    });
});

describe('Тестирование метода', function() {

    it('Метод compact (Убираем из массива все пустые элементы) ', function() {
        const c = mathLib.compact([2,4,null,"",undefined,0]);
        expect(c).to.deep.equal([2,4]);
    });
    it('Метод compact (Убираем из массива все пустые элементы) ', function() {
        const c = mathLib.compact([1,undefined,0,2,null,undefined,3,0,undefined,4]);
        expect(c).to.deep.equal([1,2,3,4]);
    });
    it('Метод compact (Убираем из массива все пустые элементы) ', function() {
        const c = mathLib.compact([undefined,null,0,""]);
        expect(c).to.deep.equal([]);
    });
});

describe('Тестирование метода', function() {

    it('Метод min (Нахождение минимального элемента) ', function() {
        const c = mathLib.min([45,2,6,7,-2,1,6,8,9]);
        expect(c).to.deep.equal(-2);
    });
    it('Метод min (Нахождение минимального элемента) ', function() {
        const c = mathLib.min([45,0,6,-7,-2,1,-100,8,9]);
        expect(c).to.deep.equal(-100);
    });
    it('Метод min (Нахождение минимального элемента) ', function() {
        const c = mathLib.min([45,2,6,7,-2,1,-99,8,9]);
        expect(c).to.deep.equal(-99);
    });
});

describe('Тестирование метода', function() {

    it('Метод min (Нахождение максимального элемента) ', function() {
        const c = mathLib.max([45,2,6,77,-2,1,6,8,9]);
        expect(c).to.deep.equal(77);
    });
    it('Метод min (Нахождение максимального элемента) ', function() {
        const c = mathLib.max([6,5,-2,1,66,8,9]);
        expect(c).to.deep.equal(66);
    });
    it('Метод min (Нахождение максимального элемента) ', function() {
        const c = mathLib.max([2,6,77,-2,111,6,8,9]);
        expect(c).to.deep.equal(111);
    });
});

describe('Тестирование метода', function() {

    it('Метод multiply array (Умножение элементов массива) ', function() {
        const c = mathLib.factorial([1,2,3,4,5]);
        expect(c).to.deep.equal(120);
    });
    it('Метод multiply array (Умножение элементов массива) ', function() {
        const c = mathLib.factorial([2,3,1,5,2,2,10]);
        expect(c).to.deep.equal(1200);
    });
    it('Метод multiply array (Умножение элементов массива) ', function() {
        const c = mathLib.factorial([5,10,2,2,5,10]);
        expect(c).to.deep.equal(10000);
    });
});

describe('Тестирование метода', function() {

    it('Метод average (Среднее арифметическое) ', function() {
        const c = mathLib.average([1,2,3,4,5,9]);
        expect(c).to.deep.equal(4);
    });
    it('Метод average (Среднее арифметическое) ', function() {
        const c = mathLib.average([-5,-4,-0,10,4]);
        expect(c).to.deep.equal(1);
    });
    it('Метод average (Среднее арифметическое) ', function() {
        const c = mathLib.average([10,20,30,40,50]);
        expect(c).to.deep.equal(30);
    });
});
