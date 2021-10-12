var wrapper=document.body.querySelector(".wrapper");
var FireAttack = 3;
var IceAttack = 1;
var PoisonAttack=4;
var num = FireAttack+IceAttack+PoisonAttack;
var Dragon = ["dragon damage: " +num];
function dragonDamage(damage, attack) {
    var DragonDamage = document.createElement("div");
    DragonDamage.innerHTML = damage; DragonDamage.innerHTML=attack;
    wrapper.appendChild(DragonDamage);
}
document.body.querySelector(".fire").addEventListener("click",function (){
    dragonDamage(FireAttack);
});
document.body.querySelector(".ice").addEventListener("click",function (){
    dragonDamage(IceAttack);
});
document.body.querySelector(".poison").addEventListener("click",function (){
    dragonDamage(PoisonAttack);
});
dragonDamage(Dragon);
if (num>10){
wrapper.innerHTML="You Win!"}
else{ wrapper.innerHTML="You Lose!"}