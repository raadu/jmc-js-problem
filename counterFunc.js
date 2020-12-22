function counterFunc(arr, r) {
    let numTriplets = 0;
    let key1 = 0;
    let key2 = 0;

    let dict1 = {};
    let dict2 = {};

    arr.forEach((i) => {
        if(i in dict2) {
            numTriplets = numTriplets + dict2[i];
        }

        if(i in dict1) {
            key2 = i*r;

            if(key2 in dict2) {
                dict2[key2] = dict2[key2] + dict1[i];
            }
            else {
                dict2[key2] = dict1[i];
            }
        }

        key1 = i*r;

        if(key1 in dict1) {
            dict1[key1]++;
        }
        else {
            dict1[key1] = 1;
        }
    });

    return numTriplets;
  }
  
  let a = [1,5,5,25,125];
  
  let result = counterFunc(a, 5);
  
  console.log(result);
  