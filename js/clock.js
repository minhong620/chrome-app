const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  // padStart()를 문자에 쓸 수 있으므로 형변환함
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 1초의 갭을 매우기 위해
setInterval(getClock, 1000); // 매초 Date객체를 만드는 것
