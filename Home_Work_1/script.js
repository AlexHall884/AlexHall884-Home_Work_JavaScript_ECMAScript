function writeTitle(num) {
    console.log('===================');
    console.log(`Task ${num}`);
    console.log(' ');
}


// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
writeTitle(1);

const arrTask1 = [1, 5, 7, 9];
console.log(`Дан массив: ${arrTask1}`);
const minDigit = Math.min(...arrTask1);
console.log(`минимальное число в массиве : ${minDigit}`);

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
writeTitle(2);

function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        getCount() {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());


// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
writeTitle(3);

function findElementByClass(rootElement, className) {

    if (rootElement.classList && rootElement.classList.contains(className)) {
        return rootElement;
    }


    const children = rootElement.children;
    for (let i = 0; i < children.length; i++) {
        const foundElement = findElementByClass(children[i], className);
        if (foundElement) {
            return foundElement;
        }
    }

    return null;
}

const rootElement = document.querySelector('p');
const className = 'text';
const foundElement = findElementByClass(rootElement, className);

if (foundElement) {
    console.log('Найден элемент:', foundElement);
} else {
    console.log('Элемент с указанным классом не найден.');
}

