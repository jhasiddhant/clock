setInterval(() => {

    clock = new Date();

    hrs = clock.getHours();
    mins = clock.getMinutes();
    secs = clock.getSeconds();

    hour_rotate = 30*hrs + mins/2;
    min_rotate = 6*mins;
    sec_rotate = 6*secs;

    hour.style.transform = `rotate(${hour_rotate}deg)`;
    min.style.transform = `rotate(${min_rotate}deg)`;
    sec.style.transform = `rotate(${sec_rotate}deg)`;

}, 1000);