fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    tracker(data);
  })
  .catch(function (error) {
    console.log(error);
  });

function tracker(data) {
  for (let i = 0; i < data.length; i++) {
    const container = document.querySelector(".container");
    //craete elements

    const card = document.createElement("div");
    const scheduleImg = document.createElement("div");
    const img = document.createElement("img");
    const scheduleTxt = document.createElement("div");
    const type = document.createElement("p");
    const duration = document.createElement("div");
    const hour = document.createElement("h2");
    const time = document.createElement("p");

    //append
    container.appendChild(card);
    card.appendChild(scheduleImg);
    card.appendChild(scheduleTxt);
    scheduleImg.appendChild(img);
    scheduleTxt.appendChild(type);
    scheduleTxt.appendChild(duration);
    duration.appendChild(hour);
    duration.appendChild(time);

    //set
    type.innerHTML = data[i].title;
    img.src = data[i].icon;

    //add class

    card.classList.add("panel");
    scheduleImg.classList.add("schedule-img");
    scheduleTxt.classList.add("schedule-text");
    duration.classList.add("duration");

    //functionality

    if (
      data[i].timeframes.daily.current > 1 ||
      data[i].timeframes.daily.previous > 1
    ) {
      hour.innerHTML = `${data[i].timeframes.daily.current}hrs`;
      time.innerHTML = `Yesterday - ${data[i].timeframes.daily.previous} hrs`;
    } else {
      hour.innerHTML = `${data[i].timeframes.daily.current} hr`;
      time.innerHTML = `Yesterday - ${data[i].timeframes.daily.previous} hrs`;
    }

    const day = document.getElementById("day");
    day.classList.add("active");
    day.addEventListener("click", () => {
      if (
        data[i].timeframes.daily.current.value > 1 ||
        data[i].timeframes.daily.previous > 1
      ) {
        hour.innerHTML = `${data[i].timeframes.daily.current}hrs`;;
        time.innerHTML = `Yesterday - ${data[i].timeframes.daily.previous} hrs`;
      } else {
        hour.innerHTML = `${data[i].timeframes.daily.current}hrs`;;
        time.innerHTML = `Yesterday - ${data[i].timeframes.daily.previous} hrs`;
      }
    });

    const week = document.getElementById("week");
    week.addEventListener("click", () => {
      if (
        data[i].timeframes.weekly.current > 1 ||
        data[i].timeframes.weekly.previous > 1
      ) {
        hour.innerHTML = `${data[i].timeframes.weekly.current}hrs`;
        time.innerHTML = `Last Week - ${data[i].timeframes.weekly.previous} hrs`
    
      } else {
        hour.innerHTML = `${data[i].timeframes.weekly.current}hrs`;
        time.innerHTML = `Last Week - ${data[i].timeframes.weekly.previous} hrs`
          
      }
    });

    const month = document.getElementById("month");
    month.addEventListener("click", () => {
      if (
        data[i].timeframes.monthly.current > 1 ||
        data[i].timeframes.monthly.previous > 1
      ) {
        hour.innerHTML = `${data[i].timeframes.monthly.current}hrs`;
        time.innerHTML = `Last Month - ${data[i].timeframes.monthly.previous}hrs`;
        
      } else {
        hour.innerHTML = `${data[i].timeframes.monthly.current}hrs`;
        time.innerHTML = `Last Month - ${data[i].timeframes.monthly.previous}hrs`;
          
      }
    });
    //adding active class to controls
    const controls = document.querySelectorAll(".control");
    controls.forEach((control) => {
      control.addEventListener("click", () => {
        controls.forEach((control) => {
          control.classList.remove("active");
        });
        control.classList.add("active");
      });
    });
  }
}