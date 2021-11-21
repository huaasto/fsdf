const countdowns = document.querySelectorAll('.countdown')
countdowns.forEach((count) => {
  const countData = {
    name: {
      style: 'white-space: nowrap;font-family: Poppins;font-size: 23px;font-weight: 500;color: #111;letter-spacing: 0;line-height: 1.1;',
      value: count.dataset.name
    },
    time: {
      day: '',
      hour: '',
      minute: '',
      secend: '',
      style: 'width: 36px;padding: 5px 0;background-color: #81252B;border-radius: 6px;color:#fff;'
    }
  }
  showCountdown(count, countData)
  setInterval(() => {
    showCountdown(count, countData)
  }, 1000)
  
})

function showCountdown(el, data) {
  if (new Date(el.dataset.time).getTime() - Date.now() >= 0) {
  data.time.day = ('00' + parseInt((new Date(el.dataset.time).getTime() - Date.now())/(24*60*60*1000))).slice(-2)
  data.time.hour = ('00' + parseInt((new Date(el.dataset.time).getTime() - Date.now())%(24*60*60*1000)/(60*60*1000))).slice(-2)
  data.time.minute = ('00' + new Date(new Date(el.dataset.time).getTime() - Date.now()).getMinutes()).slice(-2)
  data.time.secend = ('00' + new Date(new Date(el.dataset.time).getTime() - Date.now()).getSeconds()).slice(-2)
  el.innerHTML = `
  <div style="display: flex;align-items: center;flex-wrap: wrap;justify-content: center;">
      <span class="countdown-name" style="${data.name.style}">${el.dataset.name}</span>
      <span style="
      align-items: center;
      padding: 5px 10px;
      font-size: 12px;text-align: center;
    color: #878787;" class="start-in">${el.dataset.sign}</span>
  <div style="display: flex;align-items: center;flex-wrap: wrap;">
  <span style="white-space: nowrap;text-align: center;font-size: 12px;">
        <div style="${data.time.style}">${data.time.day}</div>
        <div style="height: 20px;color: #878787;line-height: 20px;">DAYS</div>
      </span>
      <span style="white-space: nowrap;text-align: center;font-size: 12px;">
        <div style="padding: 0 5px;color: #878787;">:</div>
        <div style="height: 20px;color: #878787;line-height: 20px;"></div>
      </span>
      <span style="white-space: nowrap;text-align: center;font-size: 12px;">
        <div style="${data.time.style}">${data.time.hour}</div>
        <div style="height: 20px;color: #878787;line-height: 20px;">HRS</div>
      </span>
      <span style="white-space: nowrap;text-align: center;font-size: 12px;">
        <div style="padding: 0 5px;color: #878787;">:</div>
        <div style="height: 20px;color: #878787;line-height: 20px;"></div>
      </span>
      <span style="white-space: nowrap;text-align: center;font-size: 12px;">
        <div style="${data.time.style}">${data.time.minute}</div>
        <div style="height: 20px;color: #878787;line-height: 20px;">MINS</div>
      </span>
      <span style="white-space: nowrap;text-align: center;font-size: 12px;">
        <div style="padding: 0 5px;color: #878787;">:</div>
        <div style="height: 20px;color: #878787;line-height: 20px;"></div>
      </span>
      <span style="white-space: nowrap;text-align: center;font-size: 12px;">
        <div style="${data.time.style}">${data.time.secend}</div>
        <div style="height: 20px;color: #878787;line-height: 20px;">SECS</div>
      </span>
      </div>
    </div>
  `} else {
    el.innerHTML = ''
  }
}