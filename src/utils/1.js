function add (str1, str2) {
    if(str1=='null'||str2=='null'){
        return "NaN"
    }
    str1=str1.split("");
    str2=str2.split("");
    let result="";//结果
    let flag=0;
    while(str1.length||str2.length||flag){
        flag+=~~str1.pop()+~~str2.pop();
        result=flag%10+result;
        flag=flag>9;
    }
    return result.replace(/^0+/, '');
};
console.log(add("null","123"));
