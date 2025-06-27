'use strict';
let currentScore=0
activePlayer=0
score=[0,0]

const score0El=document.querySelector('.score--0')
const score1El=document.querySelector('.score--1')
const diceEl=document.querySelector('.dice')
const btnNew=document.querySelector('.btn--new')
const btnRoll=document.querySelector('.btn--roll')
const btnHold=document.querySelector('.btn--hold')
current0El=document.querySelector('current--0')
current1El=document.querySelector('current--1')


score0El.textContent=0
score1El.textContent=0
diceEl.classList.add('hidden')

btnRoll.addEventListener('click',function(){
    const dice=Math.trunc(Math.random()*6)+1

    diceEl.classList.remov('hidden')
    diceEl.src=`dice--${dice}`

    if(dice!==1){

    }


})
