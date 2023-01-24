/*PALINDROME CODE STARTS HERE

*/
// let form = document.getElementById('Form');

// form.addEventListener('submit', function(event){

//     event.preventDefault()

//     Word = document.getElementById('word').value;
//     palindrome(Word);
// })


document.getElementById("btn").addEventListener("click",function(event){
    event.preventDefault();
    
    let Word = document.getElementById("word").value;
    palindrome(Word);
});

function palindrome(Word){
    let Word_new = Word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let len = Word_new.length;
    let halfLen = Math.floor( len/2 );
    let result =document.getElementById("result");
    let i;

    for( i = 0; i < halfLen; i++){
        if( Word_new[i] !== Word_new[len-1-i]){
            result.textContent = "Nope! Not a palindrome";
            return;
        }
        result.textContent = "Yes! It's a palindrome"
    }
}