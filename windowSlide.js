/*Given an array of integers, find the maximum value in a window.
Given a large array of integers and a window of size ww, find the current maximum value in the window as the window slides through the entire array.

Let’s try to find all maximums for a window size equal to 33 in the array given below:
-4  2   -5  3   6
Step 1: For the first 3 elements in the window, max is 2.

Step 2: Slide window one position to the right and max for window becomes 3.

Step 3: In the last window, max is 6

*/


let findMaxSlidingWindow = function(arr, window_size) {
    var result = [];
    if(window_size<arr){
        return result;
    }

    let window = [];
    for (let index = 0; index <= arr.length - window_size; index++) {
        for (let windowIndex = 0; windowIndex < window_size; windowIndex++) {
            window[windowIndex] = arr[index + windowIndex];    
        }
        
        window.sort();
        result.push(window[window_size - 1]);
    }

	console.log("result ", result);
	
}

findMaxSlidingWindow([-4, 2 , -5, 3, 6], 3)
findMaxSlidingWindow([3, 0 , 5, 7, 6], 2)

