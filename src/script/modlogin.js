import{
    $,
    ajaxpromise,
} from './common.js';

let user = $('.username');
let pass = $('.password');
let submit = $('.info-submit');

submit.onclick = function(){
    alert(1);
    ajaxpromise({
        type:'post',
        url:'http://localhost/fengqu/php/login.php',
        data:{
            name: user.value,
            pass: pass.value
        }
    }).then(function(data){
        console.log(data);
    })
}