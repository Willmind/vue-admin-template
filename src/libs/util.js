/**
 * @param {String} url
 * @description 从URL中解析参数
 */
export const getParams = url => {
    const keyValueArr = url.split('?')[1].split('&')
    let paramObj = {}
    keyValueArr.forEach(item => {
        const keyValue = item.split('=')
        paramObj[keyValue[0]] = keyValue[1]
    })
    return paramObj
}

export const toJson = str => {
    const keyValueArr = str.split('&')
    let paramObj = {}
    keyValueArr.forEach(item => {
        const keyValue = item.split('=')
        paramObj[keyValue[0]] = keyValue[1]
    })
    return paramObj
}

//深拷贝
export const deepClone = values => {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == values || 'object' != typeof values) return values;

    // Handle Date
    if (values instanceof Date) {
        copy = new Date();
        copy.setTime(values.getTime());
        return copy;
    }

    // Handle Array
    if (values instanceof Array) {
        copy = [];
        for (var i = 0, len = values.length; i < len; i++) {
            copy[i] = deepClone(values[i]);
        }
        return copy;
    }

    // Handle Object
    if (values instanceof Object) {
        copy = {};
        for (var attr in values) {
            if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
        }
        return copy;
    }

    throw new Error('Unable to copy values! Its type isn\'t supported.');
}

export const isPositiveInteger =(s)=>{//是否为正整数
    let re = /^[0-9]+$/;
    return re.test(s)
}

export const isInteger =(s)=>{//是否为整数
    let re = /^-*[0-9]+$/;
    return re.test(s)
}

export const isfloatNumber = (theObj)=>{ //兼容数字：正负、浮点数、普通数字
    let reg = /^\-?[0-9]+.?[0-9]*$/;
    if (reg.test(theObj)) {
        return true;
    }
    return false;
}

/**
 * 通过比较ascii的值判断连续字符个数是否超过限制
 *
 * @param pwd
 *          密码字符串
 * @param count
 *          最多连续字符个数
 * @returns {boolean}
 *          连续字符个数大于等于count返回true,否则返回false
 */
function checkContinuousChar(pwd,count){
    if(!pwd || !count){
        return true;
    }
    if(count < 2){
        return true;
    }
    var preChar = 0;
    var reverseNum = 1;
    var sameCharNum = 1;
    var positiveNum = 1;
    for (var i = 0; i < pwd.length; i++) {
        var s = pwd.substring(i, i + 1);
        var c = s.charCodeAt(0);
        if (i === 0) {
            preChar = c;
        }else{
            if((c > 47 && c < 58 ) || (c > 64 && c < 91) || (c > 96 && c < 123)){
                //正连续
                if (c - 1 === preChar) {
                    positiveNum++;
                    if(positiveNum >= count){
                        return true;
                    }
                }else {
                    positiveNum = 1;
                }
                //反连续
                if (c + 1 === preChar) {
                    reverseNum++;
                    if(reverseNum >= count){
                        return true;
                    }
                }else {
                    reverseNum = 1;
                }
                //相同字符
                if (c === preChar) {
                    sameCharNum++;
                    if(sameCharNum >= count){
                        return true;
                    }
                }else {
                    sameCharNum = 1;
                }
            }else{
                //相同字符
                if (c === preChar) {
                    sameCharNum++;
                    if(sameCharNum >= count){
                        return true;
                    }
                }else {
                    sameCharNum = 1;
                }
                reverseNum = 1;
                positiveNum = 1;
            }
            preChar = c;
        }
    }
    return false;
}

/**
 * 通过正则表达式验证字符串
 *
 * @param pwd
 *          密码字符串
 * @param regex
 *          正则表达式
 * @returns {boolean}
 *          验证结果
 */
function checkCharType(pwd,regex){
    if(!pwd || !regex){
        return false;
    }
    try {
        var re = new RegExp(regex);
        return re.test(pwd);
    }catch (e) {
        return false;
    }
}
/**
 * 根据验证类型验证密码
 *
 * @param pwd
 *          密码字符串
 * @param type
 *          密码类型（0-3）
 * @returns {boolean}
 *          验证结果
 */
export const checkPwdByType = (pwd,type)=> {
    if(!pwd){
        return false;
    }
    if(!type){
        return true;
    }
    var REG_TREE_TYPR_SIX_CHAR = "^(?![0-9a-z]+$)(?![0-9A-Z]+$)(?![0-9\\W]+$)(?![a-z\\W]+$)(?![a-zA-Z]+$)(?![A-Z\\W]+$)[a-zA-Z0-9\\W_]{6,}$";
    var REG_FORE_TYPR_EIGHT_CHAR = "[a-zA-Z0-9\\W]{8,}$";
    // var REG_FORE_TYPR_EIGHT_CHAR_HARD = "[a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)\_\<\>]{8,}$";
    var REG_FORE_TYPR_EIGHT_CHAR_HARD = "^(?![A-Z]+$)(?![a-z]+$)(?!\\d+$)(?![\\W_]+$)\\S{8,}$";
    var result = false;
    switch (type){
        case 1:
            if(pwd.length >= 6){
                result = true;
            }
            break;
        case 2:
            if(!checkContinuousChar(pwd,3)){
                result = checkCharType(pwd,REG_TREE_TYPR_SIX_CHAR);
            }
            break;
        case 3:
            if(!checkContinuousChar(pwd,3)){
                result = checkCharType(pwd,REG_FORE_TYPR_EIGHT_CHAR);
            }
            break;
        case 4:
            result = checkCharType(pwd,REG_FORE_TYPR_EIGHT_CHAR_HARD);
            break;
    }
    return result;
}

//精度的加减乘除
//加
export function floatAdd(arg1,arg2){
    var r1,r2,m;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2));
    return (arg1*m+arg2*m)/m;
}

//减
export function floatSub(arg1,arg2){
    var r1,r2,m,n;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2));
    //动态控制精度长度
    n=(r1>=r2)?r1:r2;
    return ((arg1*m-arg2*m)/m).toFixed(n);
}

//乘
export function floatMul(arg1,arg2)   {
    var m=0,s1=arg1.toString(),s2=arg2.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
}


//除
export function floatDiv(arg1,arg2){
    var t1=0,t2=0,r1,r2;
    try{t1=arg1.toString().split(".")[1].length}catch(e){}
    try{t2=arg2.toString().split(".")[1].length}catch(e){}

    r1=Number(arg1.toString().replace(".",""));

    r2=Number(arg2.toString().replace(".",""));
    return (r1/r2)*Math.pow(10,t2-t1);
}


//判断链接是否存在
export function validateImage(pathImg) {
    var ImgObj = new Image();
    ImgObj.src = pathImg;
    if(ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {
        return true;
    } else {
        return false;
    }
}

//生成uuid
export function generateUUID() {
    var d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}
