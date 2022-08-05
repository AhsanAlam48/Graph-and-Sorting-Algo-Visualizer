async function bubbleSort() {
	// total number of bars
	let n = barsArray.length;

	for (let i = 1; i < n; i++) {
		for (let j = 0; j < n - i; j++) {
			// change color to blue which are going to be swapped
			barsArray[j].style.background = "#0072ff";
			barsArray[j + 1].style.background = "#0072ff";
			await new Promise((resolve) => setTimeout(resolve, delay));

			if (
				parseInt(barsArray[j].style.height) >
				parseInt(barsArray[j + 1].style.height)
			) {
				await swap(j, j + 1);
				display(arr);
			}
			// change color back to normal
			barsArray[j].style.background = "#ffd000";
			barsArray[j + 1].style.background = "#ffd000";
			await new Promise((resolve) => setTimeout(resolve, delay));
		}

		// ith bar is sorted, change its color to green
		barsArray[n - i].style.background = "#15fa00";
		await new Promise((resolve) => setTimeout(resolve, delay));
	}
	barsArray[0].style.background = "#15fa00";
	enable();
}
