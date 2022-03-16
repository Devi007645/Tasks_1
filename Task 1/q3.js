const my_Name='deVi@!&^09';
let string_name=my_Name.split(""); 
for(let i=0;i<my_Name.length;i++)
{   
    if(string_name[i]<="9" && string_name[i]>="0")
{
    string_name[i]=s.charCodeAt(i);
}
    else if(string_name[i]>='a' && string_name[i]<='z')
    {
       string_name[i]=string_name[i].toUpperCase();

    }
     else if(string_name[i]>='A' && string_name[i]<='Z')
    {    
        string_name[i]=string_name[i].toLowerCase();
    }

    else{
    let add='$';
       let show=add.concat(string_name[i]);
       string_name[i]=show;
       
    }
}
    let join=string_name.join("");
    
   let time=new Date().getTime();
   join=join+"_"+String(time);

console.log(join);