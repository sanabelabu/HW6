let arr =[[1,2,3],[3,4,5]];
function avrage(arr)
{
    let count=0;
    let avr=0,row,col;
for(col=0;col<arr.length ;col++)
{
    for(row=0;row<arr.length;row++)
    {
        count=count+arr[col][row];
    }

}
avr=count/(row*col);
   console.log(avr);
}
console.log("Q1")
avrage(arr);

//********************** 2 ********************************* */
function sort(arr)
{
    let temp=0;
    for(col=0;col<arr.length ;col++)
    {
        for(row=1;row<arr.length;row++)
        {
            if (arr[row-1]>arr[row])
            {
             temp=arr[row-1];
             arr[row-1]=arr[row];
             arr[row]=temp;
            }
            
        }
    
    }
    return arr;


}
 array=[9,8,3,7,1,-9,5];
 console.log("Q2")
console.log(sort(array));

//********************** 3 ***************************** */
function inarray(arr1, arr2)
{

    let arr=[];
    let count=0;
    let i,j;
   
    for(i=0;i<arr1.length;i++)
    {
        for(j=0;j<arr2.length;j++)
        {
            if (arr2[j]==arr1[i])
        {
            arr[count]=arr2[j];
            count++;
            j=arr2.length;
        }
           
        }
    
    }
    return arr;
}

let a=[2,1,3,5,6,7];
let b=[3,1,2,9];
console.log("Q3");
console.log(inarray(a,b));
//********************** 4 ********************************* */
let Prime=(num)=>
{
  let flag=true;
 for(i=2;i<num;i++)
 {
      if(num%i==0)
      {
      flag=0;
      }
}
return flag;
}

function PrimeinMatrix(arr)
{
    let count=0;
    let flag,x;
    let avr=0,row,col;
for(col=0;col<arr.length;col++)
{
    for(row=0;row<arr.length;row++)
    {
        x=arr[col][row];
        flag=Prime(x);
        if(flag==1)
        {
            count++;
        }
    }

}
 return count;

}
let matrix=[[2,3,6,5],[5,8,9,3]];
console.log("Q4");
console.log(PrimeinMatrix(matrix));

//********************** 5 ********************************* */
function BigLettel(array)
{
    let count=0,x;
   for(i=0;i<array.length;i++)
   {
       x=array[i].toString();
       if(x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90)
          
                 {
                     count++;
                 }  
   }
   return count;
}
console.log(" Q5"+"BIG Letter");
var rere=['A','B','e'];
console.log(BigLettel(rere));
//********************** 6 ********************************* */

function checkRowsCols(matrix)
{
    let count=0;
    for(col=0;col<arr.length;col++)
    {
        for(row=0;row<arr.length;row++)
        { 
            if(row==0 && col==0)
            {
                if(matrix[row+1][col]==0 && (matrix[row][col+1]==0)) {
                    count++;
                }
                
            }
            if(row==0 && col==matrix.length){
            if(matrix[row][col-1]==0 &&matrix[row+1][col]==0)
            {
                count++;
            }
             }
             if(row==matrix.length && col==0)
             {
                if(matrix[row-1][col]==0 &&matrix[row][col+1]==0)
                {
                    count++;
                }
             }

             if(row==matrix.length && col==matrix.length)
             {
                if(matrix[row-1][col]==0 &&matrix[row][col-1]==0)
                {
                    count++;
                }


             }
             if(col>0 && col<matrix.length && row==0)
             {
                 if(matrix[row][col-1]==0 &&matrix[row][col+1]==0&&matrix[row+1][col]==0)
                 {
                    count++;
                 }

             }
             if(col>0 && col<matrix.length && row==matrix.length) 
             {

                if(matrix[row][col-1]==0 && matrix[row][col+1]==0&& matrix[row-1][col]==0)
                {
                    count++;
                 

                }
                if(row==0 && row<matrix.length && col==matrix.length)
                {
                    if(matrix[row][col-1]==0&& matrix[row-1][col]==0&&  matrix[row+1][col+1]==0)
                    {
                        count++;
                    }

                }
                else{
                    
                    if(matrix[row][col-1]==0 && matrix[row+1][col]==0  && matrix[row][col+1]==0  && matrix[row-1][col]==0 )
                    {
                        count++;
                    }


                }


             }            
             
             {

             }
   

        }
    }
    return count;

}
var arr0=[[0,0,0,0],[0,1,1,1],[0,0,0,0][0,1,1,0]];
console.log("Q6");
console.log(checkRowsCols(arr0));
//********************** 7********************************* */
function marix9(matrix)
{
    let arrnumbers=[1,2,3,4,5,6,7,8,9];
    let index=0;
    let newarr=[],sum=0,count;
    for(col=0;col<matrix.length;col++)
    {
        for(row=0;row<matrix.length;row++)
        {   
           newarr[index]=matrix[col][row];
           index++;
        }
        sum+=help(newarr)
        newarr=arrnumbers;
    }

    if (sum==0)
    {
        console.log("its good matrix");
    }
    else{
        console.log("its Not good matrix");
    }

   
}

function help(array)
{

    let arrnumbers=[1,2,3,4,5,6,7,8,9];
    let copyarr=arrnumbers;
    let sum=0,arr=[] ,k=0;
    for(i=0;i<array.length;i++)
        {
             for(j=0;j<arrnumbers.length;j++)
             {
               if (arrnumbers[j]==array[i])
               {
                arrnumbers[j]=0;
               }

            }
        }
            while(k<arrnumbers.length)
            {
                sum+=arrnumbers[k];
                 k++;
            }
            
        return sum;

}

matrix99=[[2,3,4,5,6,7,8,9,1],
        [9,8,7,6,5,4,3,2,1],
        [9,8,7,6,5,4,3,2,1],
        [9,8,7,6,5,4,3,2,1],
        [9,8,7,6,5,4,3,2,1],
        [9,8,7,6,5,4,3,2,1],
        [9,8,7,6,5,4,3,2,1],
        [9,8,7,6,5,4,3,2,1],
        [9,8,7,6,5,4,3,2,1]]

        console.log("Q7");       
console.log(marix9(matrix99));
