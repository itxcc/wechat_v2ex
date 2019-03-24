function formatTime(timestamp) {
  const date = new Date(timestamp)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function timestampFormat( timestamp ) {
  function zeroize( num ) {
      return (String(num).length == 1 ? '0' : '') + num;
  }

  var curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
  var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

  var curDate = new Date( curTimestamp * 1000 ); // 当前时间日期对象
  var tmDate = new Date( timestamp * 1000 );  // 参数时间戳转换成的日期对象

  var Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate();
  var H = tmDate.getHours(), i = tmDate.getMinutes(), s = tmDate.getSeconds();

  if ( timestampDiff < 60 ) { // 一分钟以内
      return "刚刚";
  } else if( timestampDiff < 3600 ) { // 一小时前之内
      return Math.floor( timestampDiff / 60 ) + "分钟前";
  } else if ( curDate.getFullYear() == Y && curDate.getMonth()+1 == m && curDate.getDate() == d ) {
      return '今天' + zeroize(H) + ':' + zeroize(i);
  } else {
      var newDate = new Date( (curTimestamp - 86400) * 1000 ); // 参数中的时间戳加一天转换成的日期对象
      if ( newDate.getFullYear() == Y && newDate.getMonth()+1 == m && newDate.getDate() == d ) {
          return '昨天' + zeroize(H) + ':' + zeroize(i);
      } else if ( curDate.getFullYear() == Y ) {
          return  zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
      } else {
          return  Y + '年' + zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
      }
  }
}
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getDateDiff(dateTimeStamp){
  //JavaScript函数：
  var minute = 1000 * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var halfamonth = day * 15;
  var month = day * 30;
  var now = Date.parse(new Date());
      now = now / 1000;
  var diffValue = now - dateTimeStamp;
  var result='';
  if(diffValue < 0){
  //若日期不符则弹出窗口告之
  //alert("结束日期不能小于开始日期！");
  }
  var monthC =diffValue/month;
  var weekC =diffValue/(7*day);
  var dayC =diffValue/day;
  var hourC =diffValue/hour;
  var minC =diffValue/minute;
  if(monthC>=1){
  result="发表于" + parseInt(monthC) + "个月前";
  }
  else if(weekC>=1){
  result="发表于" + parseInt(weekC) + "周前";
  }
  else if(dayC>=1){
  result="发表于"+ parseInt(dayC) +"天前";
  }
  else if(hourC>=1){
  result="发表于"+ parseInt(hourC) +"个小时前";
  }
  else if(minC>=1){
  result="发表于"+ parseInt(minC) +"分钟前";
  }else
  result="刚刚发表";
  return result;
}


module.exports = {
  formatTime: formatTime,
  getDateDiff: getDateDiff,
  timestampFormat:timestampFormat
}
