const clock = document.querySelector(".real-time-clock");

const dday = new Date("2024-09-13");

const calculate = () => {
    const now = new Date()
    const gap = dday.getTime() - now.getTime()

    const day = Math.floor(gap / (1000 * 60 * 60 * 24))
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((gap % (1000 * 60)) / 1000)

    return [day, hours, minutes, seconds]
}

const render = () => {
    const [day, hours, minutes, seconds] = calculate();

    clock.innerHTML = `그가 집에 가기까지 ${day}일 ${hours}시간 ${minutes}분 ${seconds}초 남았습니다.`;
}

setInterval(render, 1000);