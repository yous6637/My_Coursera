

const setIndicatorSignalType =(op)=>{
 let nop = ""
  op=='buy'? nop='sell':nop='buy'
  $('#configIndicatorSignal'+op).css('display','block');
  $('#configIndicatorSignal'+nop).css('display','none');
  
}

$( "#source2" )
  .change(function() {
    var str = "";
    $( "#source2 option:selected" ).each(function() {
      str += $( this ).text()=="Value"? "Value":"Periode" + " ";
    });
    $( "#condition2" ).text( str );
  })
  .trigger( "change" );

const showHideIndicatorDescription =
  ()=>{
   $("#editIndicatorDescription").toggle("slow");
 }

