import{
    $,
    ajaxpromise,
    cookie,
} from './common.js';

import{
    indexjs
} from './modindex.js';

import{
    detailjs
} from './moddetails.js'

import{
    listjs
} from './modlist.js';

import{
    loginjs
} from './modlogin.js';
import{
    regijs 
} from './modregistry.js';

import{
    shoppingCarjs
} from './modshoppingcar.js'
let page = $('#currentpage').getAttribute('index');
if(page=='index'){
    indexjs();
}else if(page=='details'){
    detailjs();
}else if(page== 'list'){
    listjs();
}else if(page=='login'){
    loginjs();
}else if(page=='registry'){
    regijs();
}else if(page=='shoppingcar'){
    shoppingCarjs();
}