function check(){
    var el=document.getElementById('txtEl').value;
    luhn(el);
}

function luhn(el){
    
    var str=el.split("");
  
    var arr=str;
    var sum=0;
    for(i=str.length-2;i>=0;i-=2){
        str[i]=parseInt(str[i]);
        str[i]*=2;
        if(str[i]>9){
            var temp=str[i].toString().split("");
            console.log(temp);
            for(j=0;j<temp.length;j++){
                temp[j]=parseInt(temp[j]);

                sum+=temp[j];
                arr[i]=sum;
            }
        }
        else{
            arr[i]=str[i];
        }
        console.log(arr);
    }
     sum=0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    if(sum%10===0){
        document.getElementById('show').innerHTML="Number is correct";
    }
    else{
        document.getElementById('show').innerHTML="Number is not correct";
    }


}