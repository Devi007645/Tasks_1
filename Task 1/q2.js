//Second largest element in an Array

var arr_elem=[6 , 3 ,12 , 54, 66, 0];

arr_elem.sort((a,b)=>a-b);
var num=arr_elem.length;

console.log(arr_elem[num-2]);



//Third Smallest element in an Array 

arr_elem.sort((a,b)=>b-a);//Largest to Smallest
var num=arr_elem.length;

console.log(arr_elem[num-3]);

