const getSleepHours = day => {
    switch (day) {
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 7;
            break;
        case 'wednesday':
            return 6;
            break;
        case 'thursday':
            return 5;
            break;
        case 'friday':
            return 4;
            break;
        case 'saturday':
            return 3;
            break;
        case 'sunday':
            return 2;
            break;
        default:
            return 'invalid entry, please enter a day of the week';
    }
};
const getActualSleepHours = () =>
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');

const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
};



console.log(getActualSleepHours());
console.log(getIdealSleepHours());


const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours()
    console.log(actualSleepHours)
    idealSleepHours = getIdealSleepHours()
    console.log(idealSleepHours)
    if (actualSleepHours === idealSleepHours) {
        console.log('User got the perfect amount of sleep')
    } else if (actualSleepHours > idealSleepHours) {
        console.log('User got more sleep than needed')
    } else if (actualSleepHours < idealSleepHours) { //I think you mean less than here.
        console.log('User got less sleep than needed')
    } else {
        console.log('There is an error!')
    }
}


console.log(calculateSleepDebt('monday'))