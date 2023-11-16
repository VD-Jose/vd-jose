// function chunkArray (array, chunkSize) {
//     const result = [];

//     for (let i=0; i< array.length; i+= chunkSize) {
//         const chunk = array.slice(i, i + chunkSize);
//         result.push(chunk);
//     }
//     return result;
// }

// const myArray = [1,2,3,4,5,6,7,8,9]
// const chunkSize = 3;

// const chunkedArray = chunkArray(myArray, chunkSize);

// console.log(chunkedArray)

function sortedArray(arr1, arr2) {
    const mergeArray = [];
    let i=0;
    let j=0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            mergeArray.push(arr1[i]);
            i++;
            } else {
                mergeArray.push(arr2[j]);
                j++
                };
                };
                while(i < arr1.length){
                    mergeArray.push(arr1[i]);
                    i++;
                    };
                    while(j < arr2.length){
                        mergeArray.push(arr2[j]);
                        j++;
                        };
                        return mergeArray;
                        }
                        const sortedArray1 = [1,2,3,4];
                        const sortedArray2 = [5,6,7,8];
                        const mergedSortedArray = sortedArray(sortedArray1, sortedArray2);
                        console.log(mergedSortedArray);