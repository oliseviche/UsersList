define(function() {
	function mergeSort(arr, comparer) {
		if (arr.length < 2) {
			return arr;
		}

    	let mid = Math.floor(arr.length * 0.5);
    	let subLeft = mergeSort(arr.slice(0,mid), comparer);
    	let subRight = mergeSort(arr.slice(mid), comparer);
    
    	return merge(subLeft, subRight, comparer);
	}

	function merge (a, b, comparer) {
    	var result = [];

    	while (a.length > 0 && b.length > 0 ) {
        	result.push(comparer(a[0], b[0]) < 0 ? a.shift() : b.shift());
		}

    	return result.concat(a.length ? a : b);
	}

	return {
		mergeSort: mergeSort
	};
})