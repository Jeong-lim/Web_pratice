const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1"); //document는 html의 요소와 관련된 작업
 
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds
    }`;//백틱 기호 //mini_if //줄바꿈 되지 않게 조심하기

}

function init() {
    getTime();
    setInterval(getTime, 1000); //시간에 따라서 변하는 millisecond기준 1초 = 1000 1초마다 getTime 함수실행
}

init();