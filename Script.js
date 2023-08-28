// №1 //

const input = prompt('Введите стоимость тарифа');
const [A, B, C, D] = input.split(' ').map(Number);
let cost;
if (D <= B) {
  cost = A;
} else {
  cost = A + (D - B) * C;
}
alert(`Суммарные расходы Кости на интернет: ${cost} руб.`);


//№2//
function minNumberOfCuts(N) {
	if (N === 1) {
	  return 0;
	} else if (N % 2 === 0) {
	  return N / 2;
	} else {
	  return Math.floor((N - 1) / 2) + 1;
	}
 }
 
 const N = parseInt(prompt('Введите количество людей на кофе-брейке:'));
 const minCuts = minNumberOfCuts(N);
 console.log(`Минимальное количество разрезов: ${minCuts}`);

 
 //№3//
 // Входные данные
const n = 5;
const t = 5;
const floors = [1, 4, 9, 16, 25];
const exitIndex = 2;

// Находим ближайший верхний этаж сотрудника, уходящего через t минут
const upperExitFloor = floors[exitIndex - 1];

// Находим ближайший нижний этаж сотрудника, уходящего через t минут
const lowerExitFloor = floors[exitIndex - 1];

// Вычисляем минимальное количество лестничных пролетов
const minClimbs = Math.min(2 * (n - 1) + t, Math.abs(upperExitFloor - lowerExitFloor) + t);

// Вывод результата
console.log(minClimbs);