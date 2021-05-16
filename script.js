function todaysDate() {

    const todayDate = new Date();
    const hours = todayDate.getHours();
    const minutes = todayDate.getMinutes();
    const date = todayDate.getDate();
    const year = todayDate.getFullYear();
    let weekDay = '';

    const allMonths = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Ноябрь',
        'Декабрь',
    ];

    let months = allMonths[todayDate.getMonth()];


    switch (todayDate.getDay()) {
        case 0:
            {
                weekDay = 'Воскресенье';
                break;
            }
        case 1:
            {
                weekDay = 'Понедельник';
                break;
            }
        case 2:
            {
                weekDay = 'Вторник';
                break;
            }
        case 3:
            {
                weekDay = 'Среда';
                break;
            }
        case 4:
            {
                weekDay = 'Четверг';
                break;
            }
        case 5:
            {
                weekDay = 'Пятница';
                break;
            }
        case 6:
            {
                weekDay = 'Суббота';
                break;
            }
        default:
            {
                throw new Error('Ошибка с днями недели');
            }
    }

    console.log(todayDate, hours, minutes, months, date, year, weekDay)

    const hoursId = document.querySelector('#hours');
    const dateId = document.querySelector('#date');
    const weekDayId = document.querySelector('#weekDay');

    hoursId.textContent = `${hours}:${minutes}`;
    dateId.textContent = `${date} ${months} ${year}.г`
    weekDayId.textContent = weekDay;

}

todaysDate();

setInterval(todaysDate, 1000);