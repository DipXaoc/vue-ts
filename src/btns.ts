let result: TNum = 0;
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

export const calculation = function (bool: TBollNull, value: TNum = result): TNum {
    if (value > 0) {
        return bool === null ? result : bool ? result += value : result -= value;
    } else return result = 0;
}

export const countStep = {
    1: 1,
    5: 5,
    10: 10
}

export const startTimer = function () {
    setInterval(()=> {
        audio.play();
    }, 1000)
}