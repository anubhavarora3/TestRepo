var str ="<select id = 'sele' class = 'drop'>";
var str1 = "<select id = 'sele1' class = 'drop'>";
var rates,opt1,opt2,rem,amount;
$(document).ready(function(){
	$.ajax({
		url:"http://api.fixer.io/latest",
		success: function(data){
			rates = data.rates;
			for(var i in rates){
					//console.log(rates[i]);
					str+="<option>"+i+"</option>";
					str1+="<option>"+i+"</option>";
				}
				opt1 = rates['AUD'];
				opt2 = rates['AUD'];
				rem = parseFloat(opt2)/parseFloat(opt1);
				//alert(rem);

				str+="</select>";
				str1+="</select>";

				$('#sdiv1').html(str);
				$('#sdiv2').html(str1);

				$('#sele').on('change',function(){
					opt1 = rates[$(this).val()];
					//alert(opt1);
					if($('#inp1').val()){
						amount = rates[$(this).val()];
						rem = parseFloat(opt2)/parseFloat(opt1);
						//alert(rem);
						$('#inp2').val(rem*amount);
					}	
				});

				$('#sele1').on('change',function(){
					opt2 = rates[$(this).val()];

					if($('#inp1').val()){

						amount = rates[$(this).val()];

						rem = parseFloat(opt2)/parseFloat(opt1);
						$('#inp2').val(rem*amount);
					}
				});
				
				$('#inp1').change(function(){
						amount = $(this).val();
						rem = parseFloat(opt2)/parseFloat(opt1);
						$('#inp2').val(rem*amount);
						//alert(rem*amount+"");
					
				});

			}	
		});
});