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




for (let i=0;i<ltry.length;i++){
  let tr=['Ср','12:20']
  let gt=ltry[i]
  kt=TimeOclock(tr,gt)
  var TmeOut=[]
  var TmeWork=[]
  if (kt==false){
    TimeOut.push(ltry[i][0])
  }else{
  TmeWork.push(ltry[i][0])
  TmeWork.push(kt)
}
}
console.log('Work',TmeWork)
console.log('Out',TmeOut)


for (let i=0; i<ltry.length;i++){
  let tr=['Вт','14:20']
  let gt=ltry[i]
  console.log(gt)
  console.log(TimeOclock(tr,gt))
}











var ltry=[['GHB','','',[55.829850009160864,37.631803808229506],'Круглосуточно','5'],['HTY','','',[55.834386404565635,37.630000043150154], ['Пн','Выходной', 'Вт-Вс', '10:00—20:00'],'20'],['RTY','','', [55.83293146791207,37.61881089569506], ['Ежедневно','10:00—21:00'],'60']]
function TimeOclock(Time,TimeAll){
  var week=['Пн','Вт','Ср','Чт','Пт','Сб','Вс']
  let t=String(Time[1])
  let Times = 0
  let times = Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5))
  if (TimeAll[4]=='Круглосуточно'){
    return 10
  }else{
  if (TimeAll[4][0]=='Ежедневно'){
    Times=TimeAll[4][1]
    let time1 = Number(Times.slice(0, 2)) * 60 + Number(Times.slice(3, 5)) 
    let time2 = Number(Times.slice(6, 8)) * 60 + Number(Times.slice(9, 11))
    if (((time1 <= times) && (times <= time2))||((time1 <= times+30) && (times <= time2))){
      return time2 - times
    }else{
      return false
    }
  }else{
  let indices = TimeAll[4].indexOf(Time[0])
  if (indices!=-1){
  let indicesTime = indices+1
  Times = TimeAll[4][indicesTime]
  if (Times=='Выходной'){
    return false
  } else{
    let time1 = Number(Times.slice(0, 2)) * 60 + Number(Times.slice(3, 5)) 
    let time2 = Number(Times.slice(6, 8)) * 60 + Number(Times.slice(9, 11))
    if (((time1 <= times) && (times <= time2))||((time1 <= times+30) && (times <= time2))){
      return time2 - times
    }else{
      return false
    }
  }
  }else{
    var doki=[]
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
    let time2 = Number(Times.slice(6, 8)) * 60 + Number(Times.slice(9, 11))
    if (((time1 <= times) && (times <= time2))||((time1 <= times+30) && (times <= time2))){
      return time2 - times
    }else{
      return false
    }
  }
}
}
}
var TmeOut=[]
var TmeWork=[]
for (let i=0;i<ltry.length;i++){
  let tr=['Пн','12:20']
  let gt=ltry[i]
  kt=TmeOclock(tr,gt)
  if (kt==false){
    TmeOut.push(ltry[i][0])
  }else{
  TmeWork.push(ltry[i][0])
  TmeWork.push(kt)
}
}
console.log('Work',TmeWork)
console.log('Out',TmeOut)






var ltry=[['GHB','','',[55.829850009160864,37.631803808229506],'Круглосуточно','5'],['HTY','','',[55.834386404565635,37.630000043150154], ['Пн','Выходной', 'Вт-Вс', '10:00—20:00'],'20'],['RTY','','', [55.83293146791207,37.61881089569506], ['Ежедневно','10:00—21:00'],'60']]
function TimeOclock(Time,TimeAll){
  var week=['Пн','Вт','Ср','Чт','Пт','Сб','Вс']
  let t=String(Time[1])
  let Times = 0
  let times = Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5))
  if (TimeAll[4]=='Круглосуточно'){
    return 10000
  }else{
  if (TimeAll[4][0]=='Ежедневно'){
    Times=TimeAll[4][1]
    let time1 = Number(Times.slice(0, 2)) * 60 + Number(Times.slice(3, 5)) 
    let time2 = Number(Times.slice(6, 8)) * 60 + Number(Times.slice(9, 11))
    console.log(time1, time2, times,times+60)
    if (((time1 <= times) && (times <= time2))||((time1 <= times+60) && (times <= time2))){
      return time2 - times
    }else{
      return false
    }
  }else{
  let indices = TimeAll[4].indexOf(Time[0])
  if (indices!=-1){
  let indicesTime = indices+1
  Times = TimeAll[4][indicesTime]
  if (Times=='Выходной'){
    return false
  } else{
    let time1 = Number(Times.slice(0, 2)) * 60 + Number(Times.slice(3, 5)) 
    let time2 = Number(Times.slice(6, 8)) * 60 + Number(Times.slice(9, 11))
    if (((time1 <= times) && (times <= time2))||((time1 <= times+60) && (times <= time2))){
      return time2 - times
    }else{
      return false
    }
  }
  }else{
    var doki=[]
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
    let time2 = Number(Times.slice(6, 8)) * 60 + Number(Times.slice(9, 11))
    if (((time1 <= times) && (times <= time2))||((time1 <= times+60) && (times <= time2))){
      return time2 - times
    }else{
      return false
    }
  }
}
}
}
var TmeOut=[]
var TmeWork=[]
for (let i=0;i<ltry.length;i++){
  let tr=['Сб','20:20']
  let gt=ltry[i]
  kt=TimeOclock(tr,gt)
  if (kt==false){
    TmeOut.push(ltry[i][0])
  }else{
  TmeWork.push(ltry[i][0])
  TmeWork.push(kt)
}
}
console.log('Work',TmeWork)
console.log('Out',TmeOut)
if (TmeOut.length!=0){
  console.log('Данные точки уже закрыты:',TmeOut, 'Всё-ровно построить маршрут?')
}





















var ltry=[['GHB','','',[55.829850009160864,37.631803808229506],'Круглосуточно','5'],['HTY','','',[55.834386404565635,37.630000043150154], ['Пн','Выходной', 'Вт-Вс', '10:00—20:00'],'20'],['RTY','','', [55.83293146791207,37.61881089569506], ['Ежедневно','10:00—21:00'],'60']]
function TimeOclock(Time,TimeAll){
  var week=['Пн','Вт','Ср','Чт','Пт','Сб','Вс']
  let t=String(Time[1])
  let Times = 0
  let times = Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5))
  if (TimeAll[4]=='Круглосуточно'){
    return 10000
  }else{
  if (TimeAll[4][0]=='Ежедневно'){
    Times=TimeAll[4][1]
    let time1 = Number(Times.slice(0, 2)) * 60 + Number(Times.slice(3, 5)) 
    let time2 = Number(Times.slice(6, 8)) * 60 + Number(Times.slice(9, 11))
    console.log(time1, time2, times,times+60)
    if (((time1 <= times) && (times <= time2))||((time1 <= times+60) && (times <= time2))){
      return time2 - times
    }else{
      if(time2 - times<0){
      return time2 - times
    }else{
      return false
    }
    }
  }else{
  let indices = TimeAll[4].indexOf(Time[0])
  if (indices!=-1){
  let indicesTime = indices+1
  Times = TimeAll[4][indicesTime]
  if (Times=='Выходной'){
    return false
  } else{
    let time1 = Number(Times.slice(0, 2)) * 60 + Number(Times.slice(3, 5)) 
    let time2 = Number(Times.slice(6, 8)) * 60 + Number(Times.slice(9, 11))
    if (((time1 <= times) && (times <= time2))||((time1 <= times+60) && (times <= time2))){
      return time2 - times
    }else{
      if(time2 - times<0){
      return time2 - times
    }else{
      return false
    }
    }
  }
  }else{
    var doki=[]
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
    let time2 = Number(Times.slice(6, 8)) * 60 + Number(Times.slice(9, 11))
    if (((time1 <= times) && (times <= time2))||((time1 <= times+60) && (times <= time2))){
      return time2 - times
    }else{
      if(time2 - times<0){
      return time2 - times
    }else{
      return false
    }
    }
  }
}
}
}
var TmeOut=[]
var TmeWork=[]
var TmeNov=[]
for (let i=0;i<ltry.length;i++){
  let tr=['Сб','06:20']
  let gt=ltry[i]
  kt=TimeOclock(tr,gt)
  if (kt<0){
    TmeOut.push(ltry[i][0])
  } else if (kt==false){
    TmeNov.push(ltry[i][0])
  }else{
  TmeWork.push(ltry[i][0])
  TmeWork.push(kt)
}
}
console.log('Work',TmeWork)
console.log('Out',TmeOut)
if (TmeOut.length!=0){
  console.log('Данные точки уже закрыты:',TmeOut, 'Всё-ровно построить маршрут?')
  //Если человек выбирает да, маршрут строится несмотря на время данных точек, лишь на время ещё открытых
  //Если человек выбирает нет, то маршрут не строится, а значение чекбоксов обнуляется
}
if (TmeNov.length!=0){
  console.log('Данные точки ещё не открыты:',TmeNov, 'Всё-ровно построить маршрут?')
  //Если человек выбирает да, то маршрут строится так, чтобы эти точки были в конце всего маршрута
  //Если человек выбирает нет, то маршрут не строится, а значение чекбоксов обнуляется
}
//Как вводить в код? Сначала алгоритм зависит от расстояния и времени, если алгоритм не нашёл путь работающий с временем, то ищет точку без которой получается построить маршрут и пишет: Вы можете построить маршрут без данной точке, желаете построить маршрут?
width: 1845px;
height: 800px;
