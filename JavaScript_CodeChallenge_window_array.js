/*Given an array of integers, find the maximum value in a window.
Given a large array of integers and a window of size ww, find the current maximum value in the window as the window slides through the entire array.

Let’s try to find all maximums for a window size equal to 33 in the array given below:
-4  2   -5  3   6
Step 1: For the first 3 elements in the window, max is 2.

Step 2: Slide window one position to the right and max for window becomes 33.

Step 3: In the last window, max is 6

*/




let findMaxSlidingWindow = function(arr, window_size) {
    console.log("init");
    var result = [];

    if(arr.length==0){
        return result;
    }

    if(window_size>arr.length){
        return result;
    }

    //stores the array indexes that compose the window
    let window = [];


    //for 1st window find out max

    //stored value to put in the result array
    var storedValue =  arr[0];

    for (let i = 0; i<window_size ; i++){
        window.push(i);

        //evaluate the biggest value
        if(i>=1){
            console.log("here");
            if(arr[i]>arr[i-1]){
                storedValue = arr[i];
            }
        }
    }

    //console.log(storedValue);
        
}

   
       /*  if(arr[i]>currentElement){
            currentElement = arr[i];
 */
       

     /* for(let k = 0; k<arr.lenght; k++ ){

        var currentElement = arr[k];

        

            if(i=window_size-1){
                result.push(currentElement);
            }

        }
    }

    return result;
  };

arrayToSlide = [-4,2,5,3,6];
var winSize = 3;

var output = findMaxSlidingWindow(arrayToSlide,winSize);
document.getElementsById("window_challenge") = output.toString();


 */

console.log(findMaxSlidingWindow([-4,2,-5,3,6],3));