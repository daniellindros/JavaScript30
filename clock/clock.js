const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

let ClockHelper = function setTime() {
  function getTime() {
    return new Date();
  }

  function updateSecondHand() {
    const seconds = getTime().getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  }

  function updateMinuteHand() {
    const minutes = getTime().getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  }

  function updateHourHand() {
    const hours = getTime().getHours();
    const hoursDegrees = (hours / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }

  // Public
  return {
    update: function update() {
      updateSecondHand();
      updateMinuteHand();
      updateHourHand();
    }
  };
};

clock = ClockHelper();
setInterval(clock.update, 1000);
