const valueInput = document.getElementById('choice-value');
const celciusValue = document.getElementById('celcius-value');
const kelvinValue = document.getElementById('kelvin-value');
const fahrenheitValue = document.getElementById('fahrenheit-value');
const rangeTemp = document.getElementById('range-temp');
const selectCelcius =  document.querySelector('.select-celcius');
const selectKelvin =  document.querySelector('.select-kelvin');
const selectFahrenheit =  document.querySelector('.select-fahrenheit');
const tempValueText = document.querySelector('.choice-value-text');


const colorSelect = '#6eb7d4';

const valor = () => {
    return parseInt(valueInput.value);
};

const convertKelvin = () => {
    kelvinValue.innerHTML = valor();
    celciusValue.innerHTML = valor() - 273;
    fahrenheitValue.innerHTML = Math.floor(valor() - 273.15 * (9/5) + 32);
}

const convertCelcius = () => {
    celciusValue.innerHTML = valor();
    kelvinValue.innerHTML = valor() + 273;
    fahrenheitValue.innerHTML = Math.floor(valor() * (9/5) + 32);
}

const convertFahrenheit = () => {
    fahrenheitValue.innerHTML = valor();
    kelvinValue.innerHTML = Math.floor(valor() -32 * (5/9) + 273.15);
    celciusValue.innerHTML = Math.floor(valor() - 32 * (5/9));
}

let convertFunction = convertKelvin;

rangeTemp.addEventListener('input', () => {
    if(rangeTemp.value == 3) {
        selectCelcius.style.backgroundColor = colorSelect;
        selectKelvin.style.backgroundColor = 'white';
        selectFahrenheit.style.backgroundColor = 'white';
        convertFunction = convertCelcius;
    } else if (rangeTemp.value == 2) {
        selectKelvin.style.backgroundColor = colorSelect;
        selectFahrenheit.style.backgroundColor = 'white';
        selectCelcius.style.backgroundColor = 'white';
        convertFunction = convertKelvin;
    } else if (rangeTemp.value == 1) {
        selectFahrenheit.style.backgroundColor = colorSelect;
        selectCelcius.style.backgroundColor = 'white';
        selectKelvin.style.backgroundColor = 'white';
        convertFunction = convertFahrenheit;
    }
})

const convert = document.getElementById('convert');

convert.addEventListener('click', () => {
    convertFunction()   
});
