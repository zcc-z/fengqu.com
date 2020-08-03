import{
    ajaxpromise,
    $
} from './common.js';

let list = $('.goods-list');
let price = $('.the-price');
ajaxpromise({
    url:'http://localhost/fengqu/php/list.php'
}).then(function(data){
    let arr = JSON.parse(data);
    let str = ``;
    let obj= {};
    let arrprice = [];
    let sidarr =[];
    let count =0;
    for(let value of arr){
        str +=`
            <li class="float_l">
                <a href="http://localhost/fengqu/src/details.html?sid=${value.sid}" target="_blank">
                    <div class="img-show">
                        <img src="${value.url}" alt="">
                    </div>
                    <p>${value.title}</p>
                    <span>￥${value.price}</span><del>￥${value.oldprice}</del><span>加入购物车</span>
                </a>
            </li>
        `;
        
        // 价格排序
    //     obj[value.sid]=value.price;
    //     price.onclick = ()=>{
    //         list.innerHTML=``;
    //         str =``;
    //        for(let j of sidarr){
    //            for(let value of arr){
    //                 if(j==value.sid){
    //                     str +=`
    //                     <li class="float_l">
    //                         <a href="http://localhost/fengqu/src/details.html?sid=${value.sid}" target="_blank">
    //                             <div class="img-show">
    //                                 <img src="${value.url}" alt="">
    //                             </div>
    //                             <p>${value.title}</p>
    //                             <span>￥${value.price}</span><del>￥${value.oldprice}</del><span>加入购物车</span>
    //                         </a>
    //                     </li>
    //                 `;
                    
    //                 }
    //             }
    //        }
    //        list.innerHTML=str;
    //     }

        
    // }
    // list.innerHTML=str;
    
    // for(let i=0;i<arr.length;i++){
    //     arrprice.push(arr[i].price);
    // }
    // arrprice.sort(function(a,b){
    //     return a-b;
    // });
    // for(let v of arrprice){
    //    for(let i in obj){
    //        if(v==obj[i]){
    //             if(sidarr.indexOf(i)==-1){
    //                 sidarr.push(i);
    //             }
    //        }       
    //    }    
    // }
    // 升序结束

    list.innerHTML=str;
    for(let i=0;i<arr.length;i++){
        arrprice.push(arr[i].price);
    }
        
   
    obj[value.sid]=value.price;
    price.onclick = ()=>{
        sidarr = [];
        count++;
        console.log(count);
        if(count%2!=0){
            arrprice.sort(function(a,b){
                return a-b;
            });
            price.style.background = '#aaa';
        }else{
            arrprice.sort(function(a,b){
                return b-a;
            });
            price.style.background = '#cac';
        }
            
        for(let v of arrprice){
                for(let i in obj){
                    if(v==obj[i]){
                        if(sidarr.indexOf(i)==-1){
                            sidarr.push(i);
                        }
                }       
            }  
        }  
        list.innerHTML=``;
        str =``;
        for(let j of sidarr){
            for(let value of arr){
                if(j==value.sid){
                    str +=`
                    <li class="float_l">
                        <a href="http://localhost/fengqu/src/details.html?sid=${value.sid}" target="_blank">
                            <div class="img-show">
                                <img src="${value.url}" alt="">
                            </div>
                            <p>${value.title}</p>
                            <span>￥${value.price}</span><del>￥${value.oldprice}</del><span>加入购物车</span>
                        </a>
                    </li>
                `;
                
                }
            }
        }
        
        list.innerHTML=str;
    }


        
}
    
});

