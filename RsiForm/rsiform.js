


 const colorPicker = new iro.ColorPicker('#picker', {borderColor: "#ffffff",borderWidth: 1,width: Math.round(document.documentElement.clientWidth / 2),});

 colorPicker.on('color:change', function (color) {document.body.style.background = color.hexString;});

 Telegram.WebApp.ready();

 Telegram.WebApp.colorScheme="var(--tg-theme-bg-color)";


 Telegram.WebApp.MainButton.setText('Choose Color').show().onClick(function () {
        const data = JSON.stringify({"chart periode": $("#ChartPeriode").val(),"s1" :$("#ohlc").val(),"periode" :$("#periode").val(),"condition" :$("#condition").val(),"s2" :$("#sourc2").val(),"val" :$("#val").val()});
        Telegram.WebApp.sendData(data);
        Telegram.WebApp.close();
    });


 

const setIndicatorSignalType =()=>{
   $('#buy').toggle();
   $('#sell').toggle();
};

$("#source2").change() =>{$("#condition2").text(($(this).text())})
// $( "#source2" )
//   .change(function() {
//     var str = "";
//     $( "#source2 option:selected" ).each(function() {
//       str += $( this ).text()=="Value"? "Value":"Periode" + " ";
//     });
//     $( "#condition2" ).text( str );
//   })
//   .trigger( "change" );

const showHideIndicatorDescription =
  ()=>{
   $("#editIndicatorDescription").toggle("slow");
 }
