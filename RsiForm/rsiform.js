
 const TeleBot = Telegram.WebApp ;

 TeleBot.ready();

 TeleBot.colorScheme="var(--tg-theme-bg-color)";

 console.log(TeleBot.colorScheme);


 TeleBot.MainButton.setText('Choose Color').show().onClick(function () {
 const data = JSON.stringify({"chart periode": $("#ChartPeriode").val(),"s1" :$("#ohlc").val(),"periode" :$("#periode").val(),"condition" :$("#condition").val(),"s2" :$("#sourc2").val(),"val" :$("#val").val()});
 TeleBot.sendData(data);
 TeleBot.close();
    });

const setIndicatorSignalType =()=>{ $('#buy').toggle(); $('#sell').toggle();};

$("#source2").change(function(){const text = $("#source2 option:selected").text();console.log(text)})

// $("#source2").change(function () {$("#condition2").text($(this).text())})
// $( "#source2" )
//   .change(function() {
//     var str = "";
//     $( "#source2 option:selected" ).each(function() {
//       str += $( this ).text()=="Value"? "Value":"Periode" + " ";
//     });
//     $( "#condition2" ).text( str );
//   })
//   .trigger( "change" );

const showHideIndicatorDescription = ()=>{$("#editIndicatorDescription").toggle("slow");}
