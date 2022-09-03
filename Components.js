let ChartOptions = [{option:"1m",value:"60",selected:false},
{option:"15m",value:"300",selected:false},
{option:"60m",value:"900",selected:false},     {option:"30m",value:"1800",selected:false},
{option:"1h",value:"3600",selected:false},{option:"2h",value:"7200",selected:false},{option:"4h (default)",value:"14400",selected:true},{option:"1d",value:"86400",selected:false},]
export ChartOptions;


export function Signal()=>{
  
  const setIndicatorSignalType =(op)=>{
 let nop = ""
  op=='buy'? nop='sell':nop='buy'
  $('#configIndicatorSignal'+op).css('display','block');
  $('#configIndicatorSignal'+nop).css('display','none');
  }
return(
<div class="col-sm-3 col-xs-3" style="padding-top:5px;">
<a href="#" onclick="setIndicatorSignalType('sell');" id="configIndicatorSignalbuy"><span class="label label-success" style="font-size:18px">buy</span></a>
<a href="#" onclick="setIndicatorSignalType('buy');" id="configIndicatorSignalsell" style="display:none;"><span class="label label-danger" style="font-size:18px;">sell</span></a>
</div>

)}
