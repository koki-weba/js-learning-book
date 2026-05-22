const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () => {
    document.body.style.backgroundColor = color.value;

    if (color.value === '#ffffff') {
        text.textContent = `カラーコード: ${color.value} (white)`;
    }
};

color.addEventListener('input', colorBg);