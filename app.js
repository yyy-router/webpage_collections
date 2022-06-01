const ring = document.getElementById('ring');
const hangUpRing = document.getElementById('hangUpRing');
const answer = document.getElementById('answer');
const hangUp = document.getElementById('hangUp');
let narrow = document.querySelector('.narrow');
let bigBox = document.querySelector('.bigBox');
let answerBox = document.querySelector('#answerBox');
let hangUpBox = document.querySelector('#hangUpBox');
window.onload = function(){
    ring.play()
};
/* 接听事件 */
answer.addEventListener('click', () => {
    ring.pause();
    bigBox.style.display = "none";
    answerBox.style.display = "flex";
});
/* 挂断事件 */
hangUp.addEventListener('click', () => {
    hangUpRing.play();
    ring.pause();
    bigBox.style.display = "none";
    hangUpBox.style.display = "flex";

});
/* 左上角点击事件 */
narrow.addEventListener('click', () => {
    ring.pause();
    bigBox.style.display = "none";
    hangUpBox.style.display = "flex";
})