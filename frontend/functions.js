const positions = [
    { left: '45px', bottom: '45px' },     // Вперёд
    { left: '135px', bottom: '45px' },    // Житная
    { left: '225px', bottom: '45px' },    // Общественная казна
    { left: '315px', bottom: '45px' },    // Нагатинская
    { left: '405px', bottom: '45px' },    // Налог
    { left: '495px', bottom: '45px' },    // Рижская ж/д
    { left: '585px', bottom: '45px' },    // Варшавское шоссе
    { left: '675px', bottom: '45px' },    // Шанс
    { left: '765px', bottom: '45px' },    // Ул. Огарева
    { left: '855px', bottom: '45px' },    // Первая парковая
    { left: '855px', bottom: '135px' },   // Тюрьма/Посещение
    // продолжайте добавлять координаты для остальных клеток
];

let currentPosition = 0;
const token = document.getElementById('token');
const moveButton = document.getElementById('moveButton');

moveButton.addEventListener('click', () => {
    // Увеличиваем позицию и используем остаток от деления для зацикливания
    currentPosition = (currentPosition + 1) % positions.length;
    
    // Применяем новые координаты к фишке
    token.style.left = positions[currentPosition].left;
    token.style.bottom = positions[currentPosition].bottom;
});