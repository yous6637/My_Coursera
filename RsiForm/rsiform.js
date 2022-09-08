
 const TelApp = Telegram.WebApp ;

 TelApp.ready();

 TelApp.colorScheme="var(--tg-theme-bg-color)";

 console.log(TelApp.colorScheme);

  
  $("body").addClass(TelApp.colorSheme);

 TelApp.MainButton.setText('Choose Color').show().onClick(function () {
 const data = JSON.stringify({"chart periode": $("#ChartPeriode").val(),"s1" :$("#ohlc").val(),"periode" :$("#periode").val(),"condition" :$("#condition").val(),"s2" :$("#sourc2").val(),"val" :$("#val").val()});
 TelApp.sendData(data);
 TelApp.close();
    });

const setIndicatorSignalType =()=>{ $('#buy').toggle(); $('#sell').toggle();};


$("#source2").change(function() { var str = "";$("#source2 option:selected").each(function() {str += $(this).text()=="Value"? "Value":"Periode" + " ";});
      $("#condition2").text(str);}).change();

const showHideIndicatorDescription = ()=>{$("#editIndicatorDescription").toggle("slow");}
