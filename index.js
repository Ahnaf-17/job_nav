// console.log("ahnaf ahmed");
function findIndices(list,given){
    for(let i = 0;i<list.length-1;i++){ //check till the second last
        for(let j=i+1;j<list.length;j++){ // check till the last
            if(list[i]+list[j] == given){
                return[i,j]
            }
        }
    }
    return[0,0]

}

const listOfNumbers = [1,3,5,7,9];
const givenNumber = 16;
const result = findIndices(listOfNumbers,givenNumber);
if(result[0] == 0 && result[1] == 0){
    console.log('No indices found');
}else{
    console.log(result[0],result[1]);
}

