function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}


function roundCents(val){
	val *= 100;
	val = Math.round(val);
	val /= 100;
	return val;

}


$(document).ready(function(){
	$("#btn").on("click", function(){
		var propertyId = randomNumber(1, 9999);
		var totalSquareFt = randomNumber(1000, 9999);
		var costPerSquareFt = randomNumber(1, 99);
		var totalCost = totalSquareFt * costPerSquareFt;
		var monthlyCost = totalCost / 12;
		var roundedMonthly = roundCents(monthlyCost);

				var toBeAppended = "<div class='row' id="+propertyId+"><div class='cell'>Property ID: " + propertyId + "</div><div class='cell'>" + totalSquareFt + " Sq.Ft.</div><div class='cell'>$" + costPerSquareFt + "/Sq.Ft.</div><div class='cell'>Total Cost: $" + totalCost + "</div><div class='cell'>Monthly Cost: $" + roundedMonthly + "</div><button class='removeButton'>Remove</button></div>";
		
		//Slide down has a hard time with tables and how to handle children, so you need to throw a div around it

		var table = $("#propertyTable");
		if ($("#propertyTable").contents().length == 0 ){	
			table.prepend(toBeAppended);
		}else {
			table.append(toBeAppended);
		}
		
		var added = $("#" + propertyId);
		console.log(added);
		added.hide().slideToggle("slow");


		//console.log(propertyId, totalSquareFt, costPerSquareFt, totalCost, monthlyCost);
	});

	$("#propertyTable").on("click", ".row button", function(){
			$(this).parent().slideToggle("slow", function(){
				$(this).remove();
			});
	});
});