async function partition(left, right) {
	var pivot = left;
	barsArray[pivot].style.background = "blue";

	var i = left + 1;
	for (let i = left + 1; i <= right; i++) {
		barsArray[i].style.background = "#9900ff";
	}

	for (var j = left + 1; j <= right; ++j) {
		if (
			parseInt(barsArray[j].style.height) <
			parseInt(barsArray[pivot].style.height)
		) {
			barsArray[j].style.background = "yellow";
			barsArray[i].style.background = "yellow";
			await new Promise((resolve) => setTimeout(resolve, delay));

			swap(i, j);

			await new Promise((resolve) => setTimeout(resolve, delay));
			barsArray[j].style.background = "#9900ff";
			barsArray[i].style.background = "#9900ff";

			display();
			++i;
		}
	}
	barsArray[i - 1].style.background = "blue";
	await new Promise((resolve) => setTimeout(resolve, delay));

	swap(left, i - 1);
	barsArray[i - 1].style.background = "#15fa00";
	await new Promise((resolve) => setTimeout(resolve, delay));

	barsArray[pivot].style.background = "#9900ff";

	display();
	return i - 1;
}

async function QuickSort(left, right) {
	if (left < right) {
		let pivot = await partition(left, right);
		await QuickSort(left, pivot - 1);
		await QuickSort(pivot + 1, right);
	}
}

async function quickSort() {
	await QuickSort(0, barsArray.length - 1);
	for (let i = 0; i < barsArray.length; i++) {
		barsArray[i].style.background = "#15fa00";
	}
}
