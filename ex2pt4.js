const ages = [25, 31, 42, 77];

let partD = ages.map((item)=>{
    if(item < 70){ // this multiplys aech number by 2 if the numbere is below 70
        return item *2;
    }else {
        return item;
    }
    
});
console.log(partD);
