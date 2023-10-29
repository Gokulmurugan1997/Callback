var count = document.getElementById('counter')

for( let i=1; i<=10; i++){
        setTimeout(()=>{
            console.log(i)
            count.innerText=i;
            if(i>=10){
            count.innerText="Murugananthan oru loosu"
            }
        },1000*i)
    }