
$(document).ready(function(){ 
var totalItems=0;
var total=0;
var i=0;
$('.add-to-cart').on("click",function(){
var qty=$(this).siblings('input').val();
var name1=$(this).siblings('h2').html();
var price=$(this).siblings('p').attr('value');
var cost=price*qty;
total=total+cost;
$("#modal-content").append("<div id='cart-items-"+i+"'><h4 id='item-name'>"+name1+"</h4><p id='cost' value="+cost+">Rs."+cost+"</p><br><p id='item-price'>Rs."+price+"</p>&nbsp;<span id='item-qty'>Qty:"+qty+"</span>&nbsp;<button class='item-remove' id='btn-remove' type='button'>X</button><hr/></div>");
document.getElementById("total-input").innerHTML="Total:Rs."+total;
$(this).siblings('input').val(1);
totalItems+=$(".modal").length;
document.getElementById("total-items").innerHTML=totalItems;
if(totalItems>=0){
$("#total-items").show();
}
i++;
});
$('.ibtn').on("click",function(){
var value1=$(this).siblings('input').val();
value1++;
$(this).siblings('input').val(value1);
});

$('.dbtn').on("click",function(){
var value1=$(this).siblings('input').val();
if(value1>1){
value1--;}else{value1=1;}
$(this).siblings('input').val(value1);
});

$('#wbtn').on("click",function(){
$(".modal").show();
});
$('.close').on("click",function(){
$(".modal").hide();
});
$('#close').on("click",function(){
$(".modal").hide();
});

$(document).on("click","#btn-remove",function(){
var cost=$(this).siblings('#cost').attr('value');
total=total-cost;
document.getElementById("total-input").innerHTML="Total:Rs."+total;
$(this).closest('div').remove();
totalItems-=$(".modal").length;
document.getElementById("total-items").innerHTML=totalItems;
if(totalItems==0){
$("#total-items").hide();
}
});

$("#checkout").on("click",function(){
$(".modal1").show();
$(".modal").hide();
});
$("#close-btn").on("click",function(){
$(".modal1").hide();
});
var itemName=[];
var itemQty=[];
var itemPrice=[];
var itemCost=[];
var totalOrder=[];
var totalCost;
var customerName;
var customerAddress;
var customerNumber;
var recepient=[];
$("#btn-submit").on("click",function(){
var x=document.getElementById("customer-name").value.length;
var y=document.getElementById("customer-address").value.length;
var z=document.getElementById("customer-number").value.length;
console.log(x,y,z);
if(x && y && z !=0 && z==10){

for(var k=0;k<totalItems;k++){
var arr=$("#cart-items-"+k+" #item-name").html();
itemName.push(arr);
}
for(var j=0;j<totalItems;j++){
var arr=$("#cart-items-"+j+" #cost").html();
itemCost.push(arr);
}
for(var j=0;j<totalItems;j++){
var arr=$("#cart-items-"+j+" #item-price").html();
itemPrice.push(arr);
}
for(var j=0;j<totalItems;j++){
var arr=$("#cart-items-"+j+" #item-qty").html();
itemQty.push(arr);
}
totalCost=$("#total-input").html();
customerName=$("#customer-name").val();
customerAddress=$("#customer-address").val();
customerNumber=$("#customer-number").val();
for(var i=0;i<totalItems;i++){
totalOrder.push(itemName[i],itemQty[i]);
}
recepient.push(customerName);
recepient.push(customerAddress);
recepient.push(customerNumber);
window.location="https://wa.me/+919583589883/?text="+totalOrder.join("%0D%0A")+"%0D%0A%0D%0A"+"Recipient Details -%0D%0A"+recepient.join("%0D%0A");
totalOrder.splice(0,totalOrder.length);
itemName.splice(0,itemName.length);
itemCost.splice(0,itemCost.length);
itemPrice.splice(0,itemPrice.length);
itemQty.splice(0,itemQty.length);
recepient.splice(0,recepient.length);
$("#customer-details").reset();
}
else{
if(z==10){$("#customer-number").css("border","2px solid green");}else{$("#customer-number").css("border","2px solid red");}
if(x!=0){$("#customer-name").css("border","2px solid green");}else{$("#customer-name").css("border","2px solid red");}
if(y!=0){$("#customer-address").css("border","2px solid green");}else{$("#customer-address").css("border","2px solid red");}
}
});
});
