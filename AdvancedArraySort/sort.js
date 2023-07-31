function sort(arr){
    if (Array.isArray(arr)){
        if(arr.length < 2){
            return arr
        }else{
            let lows_arr = []; let highs_arr = [];
            let selected_item = arr.pop();
            for(let i=0; i < arr.length; i++){
                if(arr[i] < selected_item){
                    lows_arr.push(arr[i])
                }else if(arr[i] > selected_item){
                    highs_arr.push(arr[i])
                }
            }
            return sort(lows_arr).concat([selected_item].concat(sort(highs_arr)))
        }
    }else{
        console.log('You Shoud Give Me A array Not A ' + typeof arr)
        return null
    }
}
//making a random arr
var myArr = []
for(let i=0; i <=10; i++){
    let randInt = Math.floor(Math.random()*100);
    myArr.push(randInt);
}
console.log("Random Arr: " + myArr);
console.log("Sorted Version: " + sort(myArr));
