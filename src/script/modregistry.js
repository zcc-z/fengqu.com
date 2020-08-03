
import{
    $,
    ajaxpromise,
} from './common.js'


let username = $('.username');
let password = $('.password');
let phone = $('.phone'); 
let email = $('.email'); 
let submit = $('.info-submit');
let user = username.nextSibling;

username.onblur = function(){
    ajaxpromise({
        url:'http://localhost/fengqu/php/registry.php',
        type:'post',
        data:{
            name: username.value,
        }
    }).then(function(data){
        if(data){
            user.innerHTML = '用户名已被占用';
            user.style.color = 'red';
        }else{
            user.innerHTML = '用户名可以使用';
            user.style.color = 'green';
        }
    })
}
submit.onclick= function(){
    ajaxpromise({
        url:'http://localhost/fengqu/php/registry.php',
        type:'post',
        data:{
            name: username.value,
            pass: password.value,
            phone: phone.value,
            email: email.value,
            submit:true
        }
    });
}
