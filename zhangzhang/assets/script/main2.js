
    // 设置目标日期为春节的日期（2023年2月1日）
    var targetDate = new Date(2024, 1, 10); // 月份从0开始，所以1代表2月

    // 更新倒计时每秒一次
    function updateCountdown() {
      var now = new Date();
      var distance = targetDate - now;
     

      // 计算时间差
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // 更新倒计时显示
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
      document.getElementById("now").innerHTML = now;
      document.getElementById("distance").innerHTML =distance;
      document.getElementById("targetDate").innerHTML =targetDate;
    }

    // 每秒更新倒计时
    setInterval(updateCountdown, 1000);
