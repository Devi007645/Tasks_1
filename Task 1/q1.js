 const array_elements = [213 ,543 ,121, 222, 767];

 palli(array_elements);
 arm_strong(array_elements);
 perfect_Num(array_elements);

function palli(array_elements){
    for(let i =0 ; i < array_elements.length; i++ ){
     number=array_elements[i];
     let string_form=number.toString();
   
     let splitting_each=string_form.split("");
     let rev=splitting_each.reverse();
     let together=rev.join("");

      if(together==string_form)
    {   
      
     console.log(together)
    }
  }
}

function arm_strong(array_elements)
{
     for(let i=0;i<array_elements.length;i++)
  {  
    let sum=0;
     num=array_elements[i];
     let stri=num.toString();
    let str_size=stri.length;
     let temp=parseInt(stri)
    
    while(temp>0)
    {
        let remainder=temp%10;
        sum+=remainder**str_size;
        temp=parseInt(temp/10);
    }
    if(sum==array_elements)
    console.log(sum);

}
}

function perfect_Num(array_elements){
    for(let i=0;i<array_elements.length;i++)
    {
    let sum=0;
    num=array_elements[i];
    for(var j=1;j<=(num/2);j++)
    {
        if(num%j==0)
        {
            sum+=j;
        }
        if(sum===num && sum!=0)
        {
        console.log(array_elements[i]);
        }
    }
    }
}