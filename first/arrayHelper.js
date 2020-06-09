//foreach


const colors = ['red','blud', 'green'];
//배열 순회
//0. 전통적인 for문
for(let i=0;i<colors.length;++i){
    console.log(colors[i]);
}

for(let color of colors){
    console.log(color);
}

colors.forEach((color)=>{
    console.log(color);
});

const numbers = [-20, -15, 5, 10];

numbers.forEach(number=>{
    if(number > 0){

    }
})


inputs = ['1','5','3','6'];
const numberInputs = inputs.map(input =>parseInt(int));