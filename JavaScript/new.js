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
function distance(a){ 
  var d=[] 
  for (let i=0; i < a.length;i++){
    d.push(a[i][3])
  }
  var Dict = new Array(a.length)
  for ( let j = 0; j < a.length; j++) {
       Dict[j]=new Array()
      for (z=0; z<a.length; z++){
        Dict[j][z]=0
      }
  }
  for (let k=0; k < Dict.length;k++){
    for (let t=0; t < Dict.length;t++){
      var r=d[t]
      var b=d[k]
      lj=(b[0]-r[0])*111.1
      let xz=(b[1]-r[1])*111.1
      let u=Math.sqrt(xz**2+lj**2)
      if (k!=t){
        Dict[k][t]=Math.round(u*1000)
        Dict[t][k]=Math.round(u*1000)
      }else{
        Dict[k][t]=0
      }
    }
  }
  return Dict 
}
function alerted(){
	var checked = [];
	$('input:checkbox:checked').each(function() {
	checked.push($(this).val());
	});
	console.log(checked)
	var fs=[]
	for(let i=0;i<checked.length;i++){
		let t = checked[i]-1
		fs.push(ltry[t])
	}
	fs.unshift(['','','',[55.82626315161884,37.63755969721379]])
	var a=distance(fs)
	let s = a.length
	let A = 1
	let B = 1.4
	let ji = 0.64 
	var d = []
	let Ages = 150
	let q = 8
	let ant=25
	let mnTrass = 1000000000000
	var bestT = []
	var lktr= []
	var mas = new Array(s);
	for (var i = 0; i < mas.length; i++) {
		mas[i] = new Array();
		for (j=0; j<s; j++){
			mas[i][j]=0.2;
		}
	}
	var TmeOut=[]
	var TmeWork=[]
	var TmeNov=[]
	let Time_Right=0
	for (let i=0;i<fs.length;i++){
  let Time_Now=['Сб','10:20']
  let gt=fs[i]
  Time_Right=TimeOclock(Time_Now,gt)
  if (Time_Right<0){
    TmeOut.push(fs[i][1])
  } else if (Time_Right==false){
    TmeNov.push(fs[i][1])
  }else{
  TmeWork.push(fs[i][1])
  TmeWork.push(Time_Right)
}
}
if ((TmeOut.length==0) && (TmeNov.length==0)){
  for (let fg=0; fg<Ages;fg++){
		var td = new Array(ant)
		for (var i = 0; i < ant; i++) {
			td[i]=new Array();
			for (j=0; j<s; j++){
				td[i][j]=0;
			}
		}
		for (let o=0; o<ant;o++){
			var kf = []
			var antROUTE=[]
			let from_city=0
			antROUTE.push(from_city)
			var Zero = new Array(s)
			for (var i = 0; i < s; i++) {
				Zero[i]=new Array()
				for (j=0; j<s; j++){
					Zero[i][j]=0;
				}
			}
			for (let k=0; k<s;k++){
				let Sum = 0 
				
				for (let lfg=0; lfg<a[from_city].length;lfg++){
					if (antROUTE.indexOf(lfg)==-1){
						Sum=Sum+((10000-a[from_city][lfg])**B*(mas[from_city][lfg])**A)
					}
				}
				kf.push(Sum)
				for (let j=0; j<a[from_city].length;j++){
					if (antROUTE.indexOf(j)==-1){
						let lk=(10000-a[from_city][j])**B*(mas[from_city][j])**A
						if (kf[k]!=0){
							Zero[from_city][j]=lk/kf[k]
						}else{
							Zero[from_city][j]=1
						}
					}
				}
				if (antROUTE.length!=s){
					let isNotChosen = true
                                        while (isNotChosen){
						var rand = Math.random()
						for (p=0;p<Zero[from_city].length;p++){
							if (Zero[from_city][p] >= rand){
								let indexi=0
								for (i=0;i<Zero[from_city].length;i++){
									if (Zero[from_city][p]==Zero[from_city][i]){
										indexi=i
									}
								}
								td[o][k+1]=indexi
								from_city=indexi
								antROUTE.push(from_city)
								isNotChosen = false
								break
							}
						}
					}
				}
			}
		}
		for (ih=0;ih<mas.length;ih++){
			for (jh=0;jh<mas[ih].length;jh++){
				mas[ih][jh]=mas[ih][jh]*ji
			}
		}
		for (i=0;i<(td.length-1);i++){
			let dsd=0
                        var Trass=[]
                        var TimeWR=[]
                        let TimeW=0
                        for (j=0;j<(td[i].length-1);j++){
				Trass.push(td[i][j])
                                if (td[i][j+1]==td[i][s-1]){
					Trass.push(td[i][j+1])
				}
				fr=td[i][j]
				fr1=td[i][j+1]
                                dsd=dsd+a[fr][fr1]
			}
                        let tic=dsd/50*60
                        TimeW=tic
                        TimeWR.push(TimeW)
                        let Sumr=0
                        for (yt=0; yt<TimeWR.lenght; yt++){
				Sumr=Sumr+TimeWR[yt]
			}
                        if  (dsd<mnTrass){
				mnTrass=dsd
				bestT=Trass             
			}
                        let L=q/dsd
                        for (klo=0;klo<(td[i].length);klo++){
				//if (Sumr<=TimeOclock(TimeAll,Time)){
				mas[fr][fr1]=mas[fr][fr1]+L
                                mas[fr1][fr]=mas[fr1][fr]+L
			//}
			}
		}
	}
	console.log(mnTrass, bestT,TimeWR)
	for (let okl=0;okl<s;okl++){
		lktr.push(fs[bestT[okl]][3])
	
        }
	console.log(lktr) 
    // Создание экземпляра маршрута.
	ymaps.ready(function () {
    // Построение маршрута на общественном транспорте.
    let mymap = new ymaps.Map('map', {
        center: [55.751574, 37.573856],
        zoom: 18,
        controls: ['largeMapDefaultSet']
    });
    let multiRoute = new ymaps.multiRouter.MultiRoute({
        referencePoints: lktr,
        params: {
            // Тип маршрута: на общественном транспорте.
            routingMode: "masstransit"  
        }
    }, {
        // Автоматически устанавливать границы карты так,
        // чтобы маршрут был виден целиком.
        boundsAutoApply: true
    });

    // Добавление маршрута на карту.
    mymap.geoObjects.add(multiRoute);
		})

}
if (TmeOut.length!=0){
 if (confirm('Данные точки уже закрыты:'+ TmeOut + 'Всё-ровно построить маршрут?')){
   for (let fg=0; fg<Ages;fg++){
		var td = new Array(ant)
		for (var i = 0; i < ant; i++) {
			td[i]=new Array();
			for (j=0; j<s; j++){
				td[i][j]=0;
			}
		}
		for (let o=0; o<ant;o++){
			var kf = []
			var antROUTE=[]
			let from_city=0
			antROUTE.push(from_city)
			var Zero = new Array(s)
			for (var i = 0; i < s; i++) {
				Zero[i]=new Array()
				for (j=0; j<s; j++){
					Zero[i][j]=0;
				}
			}
			for (let k=0; k<s;k++){
				let Sum = 0 
				
				for (let lfg=0; lfg<a[from_city].length;lfg++){
					if (antROUTE.indexOf(lfg)==-1){
						Sum=Sum+((10000-a[from_city][lfg])**B*(mas[from_city][lfg])**A)
					}
				}
				kf.push(Sum)
				for (let j=0; j<a[from_city].length;j++){
					if (antROUTE.indexOf(j)==-1){
						let lk=(10000-a[from_city][j])**B*(mas[from_city][j])**A
						if (kf[k]!=0){
							Zero[from_city][j]=lk/kf[k]
						}else{
							Zero[from_city][j]=1
						}
					}
				}
				if (antROUTE.length!=s){
					let isNotChosen = true
                                        while (isNotChosen){
						var rand = Math.random()
						for (p=0;p<Zero[from_city].length;p++){
							if (Zero[from_city][p] >= rand){
								let indexi=0
								for (i=0;i<Zero[from_city].length;i++){
									if (Zero[from_city][p]==Zero[from_city][i]){
										indexi=i
									}
								}
								td[o][k+1]=indexi
								from_city=indexi
								antROUTE.push(from_city)
								isNotChosen = false
								break
							}
						}
					}
				}
			}
		}
		for (ih=0;ih<mas.length;ih++){
			for (jh=0;jh<mas[ih].length;jh++){
				mas[ih][jh]=mas[ih][jh]*ji
			}
		}
		for (i=0;i<(td.length-1);i++){
			let dsd=0
                        var Trass=[]
                        var TimeWR=[]
                        let TimeW=0
                        for (j=0;j<(td[i].length-1);j++){
				Trass.push(td[i][j])
                                if (td[i][j+1]==td[i][s-1]){
					Trass.push(td[i][j+1])
				}
				fr=td[i][j]
				fr1=td[i][j+1]
                                dsd=dsd+a[fr][fr1]
			}
                        let tic=dsd/50*60
                        TimeW=tic
                        TimeWR.push(TimeW)
                        let Sumr=0
                        for (yt=0; yt<TimeWR.lenght; yt++){
				Sumr=Sumr+TimeWR[yt]
			}
                        if  (dsd<mnTrass){
				mnTrass=dsd
				bestT=Trass             
			}
                        let L=q/dsd
                        for (klo=0;klo<(td[i].length);klo++){
				//if (Sumr<=TimeOclock(TimeAll,Time)){
				mas[fr][fr1]=mas[fr][fr1]+L
                                mas[fr1][fr]=mas[fr1][fr]+L
			//}
			}
		}
	}
	console.log(mnTrass, bestT,TimeWR)
	for (let okl=0;okl<s;okl++){
		lktr.push(fs[bestT[okl]][3])
	
        }
	console.log(lktr) 
    // Создание экземпляра маршрута.
	ymaps.ready(function () {
    // Построение маршрута на общественном транспорте.
    let mymap = new ymaps.Map('map', {
        center: [55.751574, 37.573856],
        zoom: 18,
        controls: ['largeMapDefaultSet']
    });
    let multiRoute = new ymaps.multiRouter.MultiRoute({
        referencePoints: lktr,
        params: {
            // Тип маршрута: на общественном транспорте.
            routingMode: "masstransit"  
        }
    }, {
        // Автоматически устанавливать границы карты так,
        // чтобы маршрут был виден целиком.
        boundsAutoApply: true
    });

    // Добавление маршрута на карту.
    mymap.geoObjects.add(multiRoute);
		})
 }else{
    $('button').click(function() {
  $('input:checked').prop('checked', false);
});
 }
}
  //Если человек выбирает да, маршрут строится несмотря на время данных точек, лишь на время ещё открытых
  //Если человек выбирает нет, то маршрут не строится, а значение чекбоксов обнуляется

if (TmeNov.length!=0){
  if (confirm('Данные точки ещё не открыты:'+ TmeNov +'Всё-ровно построить маршрут?')){
    for (let fg=0; fg<Ages;fg++){
		var td = new Array(ant)
		for (var i = 0; i < ant; i++) {
			td[i]=new Array();
			for (j=0; j<s; j++){
				td[i][j]=0;
			}
		}
		for (let o=0; o<ant;o++){
			var kf = []
			var antROUTE=[]
			let from_city=0
			antROUTE.push(from_city)
			var Zero = new Array(s)
			for (var i = 0; i < s; i++) {
				Zero[i]=new Array()
				for (j=0; j<s; j++){
					Zero[i][j]=0;
				}
			}
			for (let k=0; k<s;k++){
				let Sum = 0 
				
				for (let lfg=0; lfg<a[from_city].length;lfg++){
					if (antROUTE.indexOf(lfg)==-1){
						Sum=Sum+((10000-a[from_city][lfg])**B*(mas[from_city][lfg])**A)
					}
				}
				kf.push(Sum)
				for (let j=0; j<a[from_city].length;j++){
					if (antROUTE.indexOf(j)==-1){
						let lk=(10000-a[from_city][j])**B*(mas[from_city][j])**A
						if (kf[k]!=0){
							Zero[from_city][j]=lk/kf[k]
						}else{
							Zero[from_city][j]=1
						}
					}
				}
				if (antROUTE.length!=s){
					let isNotChosen = true
                                        while (isNotChosen){
						var rand = Math.random()
						for (p=0;p<Zero[from_city].length;p++){
							if (Zero[from_city][p] >= rand){
								let indexi=0
								for (i=0;i<Zero[from_city].length;i++){
									if (Zero[from_city][p]==Zero[from_city][i]){
										indexi=i
									}
								}
								td[o][k+1]=indexi
								from_city=indexi
								antROUTE.push(from_city)
								isNotChosen = false
								break
							}
						}
					}
				}
			}
		}
		for (ih=0;ih<mas.length;ih++){
			for (jh=0;jh<mas[ih].length;jh++){
				mas[ih][jh]=mas[ih][jh]*ji
			}
		}
		for (i=0;i<(td.length-1);i++){
			let dsd=0
                        var Trass=[]
                        var TimeWR=[]
                        let TimeW=0
                        for (j=0;j<(td[i].length-1);j++){
				Trass.push(td[i][j])
                                if (td[i][j+1]==td[i][s-1]){
					Trass.push(td[i][j+1])
				}
				fr=td[i][j]
				fr1=td[i][j+1]
                                dsd=dsd+a[fr][fr1]
			}
                        let tic=dsd/50*60
                        TimeW=tic
                        TimeWR.push(TimeW)
                        let Sumr=0
                        for (yt=0; yt<TimeWR.lenght; yt++){
				Sumr=Sumr+TimeWR[yt]
			}
                        if  (dsd<mnTrass){
				mnTrass=dsd
				bestT=Trass             
			}
                        let L=q/dsd
                        for (klo=0;klo<(td[i].length);klo++){
				//if (Sumr<=TimeOclock(TimeAll,Time)){
				mas[fr][fr1]=mas[fr][fr1]+L
                                mas[fr1][fr]=mas[fr1][fr]+L
			//}
			}
		}
	}
	console.log(mnTrass, bestT,TimeWR)
	for (let okl=0;okl<s;okl++){
		lktr.push(fs[bestT[okl]][3])
	
        }
	console.log(lktr) 
    // Создание экземпляра маршрута.
	ymaps.ready(function () {
    // Построение маршрута на общественном транспорте.
    let mymap = new ymaps.Map('map', {
        center: [55.751574, 37.573856],
        zoom: 18,
        controls: ['largeMapDefaultSet']
    });
    let multiRoute = new ymaps.multiRouter.MultiRoute({
        referencePoints: lktr,
        params: {
            // Тип маршрута: на общественном транспорте.
            routingMode: "masstransit"  
        }
    }, {
        // Автоматически устанавливать границы карты так,
        // чтобы маршрут был виден целиком.
        boundsAutoApply: true
    });

    // Добавление маршрута на карту.
    mymap.geoObjects.add(multiRoute);
		})
  }else{
    $('button').click(function() {
  $('input:checked').prop('checked', false);
  //Если человек выбирает да, то маршрут строится так, чтобы эти точки были в конце всего маршрута
  //Если человеквыбирает нет, то маршрут не строится, а значение чекбоксов обнуляется
});
}
}
}
	
	
