// Выполняю вариант 4: метод трапеции для функции x^2 - x + 1

const func = (x) => x * x - x + 1

function trapezoidalIntegrate(func, a, b, n) {
    const h = (b - a) / n

    let sum = (func(a) + func(b)) / 2

    for (let i = 1; i < n; i++) {
        const x_i = a + i * h
        sum += func(x_i)
    }

    return sum * h
}

const inputA = prompt("Введите начальную точку интегрирования a:", "0")
const inputB = prompt("Введите конечную точку b:", "10")
const inputN = prompt("Введите количество отрезков разбиения n:", "1000")

const a = parseFloat(inputA)
const b = parseFloat(inputB)
const n = parseInt(inputN)


if (!isNaN(a) && !isNaN(b) && !isNaN(n) && n > 0) {

    const result = trapezoidalIntegrate(func, a, b, n)

    console.log(`Результат интегрирования методом трапеций от ${a} до ${b} при n = ${n} равен: ${result}`)
    alert(`Результат вычисления: ${result.toFixed(4)}`)

} else {
    alert("Неверный ввод! Учтите, что n > 0")
}