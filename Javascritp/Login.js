let form=document.querySelector('form');
let loader=document.getElementById('loader');
let button= document.querySelector('button');
let redirect=document.getElementById('redirect');
let email,contra;
// 
let error=document.getElementById('error')
error.setAttribute('class','notvisible')
// 

// 
form.addEventListener('submit',(e)=>{
    // 
    e.preventDefault();
    button.setAttribute('class','notvisible');
    loader.setAttribute('class','visible');
    email=document.getElementById('inputemail').value;
    contra=document.getElementById('inputpassword').value;
    // 
    if(email.length>2 && contra=="admin"){
        
            redirect.setAttribute('href','http://www.cristalab.com');
            redirect.click();
    }
    else{
        console.log('error')
        // button.className+='visible';
        
        setTimeout(function(){
            error.setAttribute('class','btn btn-danger mt-3 ')
            loader.setAttribute('class','notvisible');

            setTimeout( function(){
                button.setAttribute('class','btn mt-3')
                error.setAttribute('class','notvisible')
            },1000 )

        },2000)
    }
    // 
})