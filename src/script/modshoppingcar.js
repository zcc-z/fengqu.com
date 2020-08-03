import {
    $,
    ajaxpromise,
    cookie
} from './common.js';

let carcon = $('.car-con');
let sidarr = [];
let numarr = [];
// 取出cookie中的数据
if(cookie.get('cookiesid') && cookie.get('cookienum')){
    sidarr = cookie.get('cookiesid').split(',');
    numarr = cookie.get('cookienum').split(',');
    for(let i =0;i<sidarr.length;i++){
        render(sidarr[i],numarr[i]);
    }
}

function render(sid,num){
    ajaxpromise({
        url:'http://localhost/fengqu/php/details.php',
        data:{
            sid:sid
        }
    }).then(function(data){
        let obj = JSON.parse(data);
        let str = `
            <li class="one-goods active">
                <ul class="clear_fix">
                    <li class="float_l ch">
                        <input type="checkbox" class="check float_l">
                        <div class="goods-img float_l">
                            <img src="${obj.url}" alt="">
                        </div>
                    </li>
                    <li class="float_l goods-info">
                        <h6>${obj.title}</h6>
                        <p>品牌：${obj.brand}</p>
                    </li>
                    <li class="float_l goods-price">${obj.price}</li>
                    <li class="float_l goods-num">
                        <span>-</span>
                        <input type="text" value="${num}">
                        <span>+</span>
                    </li>
                    <li class="float_l price">${obj.price*num}</li>
                    <li class="float_l operation">
                        <a href="javascript:;">删除</a>
                    </li>
                </ul>
            </li>
        `;
        carcon.innerHTML += str;
    })
}
