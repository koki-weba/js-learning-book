const message = (name, weather) => {
    return `${name}さん、こんにちは！今日は${weather}です。`;
};
console.log(message('Mana', 'いい天気'));
alert(message('達也', '雨'));