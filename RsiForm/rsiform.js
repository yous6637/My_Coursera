


 const colorPicker = new iro.ColorPicker('#picker', {
        borderColor: "#ffffff",
        borderWidth: 1,
        width: Math.round(document.documentElement.clientWidth / 2),
    });
    colorPicker.on('color:change', function (color) {
        document.body.style.background = color.hexString;
    });

    Telegram.WebApp.ready();
    Telegram.WebApp.MainButton.setText('Choose Color').show().onClick(function () {
        const data = JSON.stringify({hex: colorPicker.color.hexString, rgb: colorPicker.color.rgb});
        Telegram.WebApp.sendData(data);
        Telegram.WebApp.close();
    });
   const Save = new Telegram.WebApp.PopupButton({type :"ok",text:"Save"});
   const Cancel = = new Telegram.WebApp.PopupButton({type :"ok",text:"Save"});
   const Buttons =  Telegram.WebApp.showPopup("#teleBot",{title:"Hi","message":"Hi",buttons:[Save,Cancel]})
   



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

