$('form').on('submit',function(e){
  e.preventDefault();
  var but = $(this).find('[type="submit"]').toggleClass('sending').blur();
  
  setTimeout(function(){
     but.removeClass('sending').blur();
  },4500);
  
})
var ltry=[['','','',[55.829850009160864,37.631803808229506],'Круглосуточно','5'],['','','',[55.834386404565635,37.630000043150154], ['Пн',' Выходной', 'Вт-Вс', '10:00—20:00'],'20'],['','','', [55.83293146791207,37.61881089569506], ['Ежедневно', '10:00—21:00'],'60']]
function TimeOclock(Time,TimeAll){
  var week=['Пн','Вт','Ср','Чт','Пт','Сб','Вс']
  let t=String(Time[1])
  let Times = 0
  let times = Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5))
  console.log(times)
  if (TimeAll[4]=='Круглосуточно'){
    return 1
  }else{
  if (TimeAll[4][0]=='Ежедневно'){
    Times=TimeAll[4][1]

  }else{
  let indices = TimeAll[4].indexOf(Time[0])
  if (indices!=-1){
  let indicesTime = indices+1
  Times = TimeAll[4][indicesTime]
  
  if (Times=='выходной'){
    return ('Сегодня вы не сможете попасть в точку')
  } else{
    let time1 = Number(Times.slice(0, 2)) * 60 + Number(Times.slice(3, 5)) 
    console.log(time1)
    let time2 = Number(Times.slice(6, 8)) * 60 + Number(Times.slice(9, 11))
    console.log(time2)
    if (((time1 <= times) && (times <= time2))||((time1 <= times+30) && (times <= time2))){
      return time2 - times
    }else{
      return ('Не получится всё посетить')
    }
  }
  }else{
    var doki=[]
    console.log(TimeAll[4])
  for (let i=0;i<(TimeAll[4].length);i++){
    if (TimeAll[4][i].length==5){
      doki.push(TimeAll[4][i])
    }
  }
  for(let j=0;j<doki.length;j++){
    var today=[]
    let vax = TimeAll[4].indexOf(doki[j])
    let tryd=doki[j]
    day_one=String(tryd.slice(0, 2))
    day_two=String(tryd.slice(3, 5))
    let indices_1 = week.indexOf(day_one)
    let indices_2 = week.indexOf(day_two)
    let raz=indices_2-indices_1+1
    let indicesx=indices_1
    for (let h=0; h<raz;h++){
      today.push(week[indicesx])
      indicesx=indicesx+1
    }
    if (today.indexOf(Time[0])!=-1){
      Times=TimeAll[4][vax+1]
    }
  }
  let time1 = Number(Times.slice(0, 2)) * 60 + Number(Times.slice(3, 5)) 
    console.log(time1)
    let time2 = Number(Times.slice(6, 8)) * 60 + Number(Times.slice(9, 11))
    console.log(time2)
    if (((time1 <= times) && (times <= time2))||((time1 <= times+30) && (times <= time2))){
      return time2 - times
    }else{
      return ('Не получится всё посетить')
    }
  }
}
}
}
let tr=['Вт','14:20']
let gt=ltry[1]
console.log(gt)
console.log(TimeOclock(tr,gt))

