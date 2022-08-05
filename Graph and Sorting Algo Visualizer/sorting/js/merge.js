async function merge(left, mid, right) {
	for (let i = left; i <= right; i++) {
		barsArray[i].style.background = "#0072ff";
	}
	await new Promise((resolve) => setTimeout(resolve, delay));

	let leftSize = mid - left + 1;
	let rightSize = right - mid;

	let leftBarsArray = [];
	let rightBarsArray = [];

	for (let i = 0; i < leftSize; i++) {
		leftBarsArray[i] = barsArray[left + i].style.height;
	}

	for (let j = 0; j < rightSize; j++) {
		rightBarsArray[j] = barsArray[mid + 1 + j].style.height;
	}

	let leftIndex = 0;
	let rightIndex = 0;
	let curr = left;

	while (leftIndex < leftSize && rightIndex < rightSize) {
		if (
			parseInt(leftBarsArray[leftIndex]) <=
			parseInt(rightBarsArray[rightIndex])
		) {
			barsArray[curr++].style.height = leftBarsArray[leftIndex++];
			display();
		} else {
			barsArray[curr++].style.height = rightBarsArray[rightIndex++];
			display();
		}
	}
	while (leftIndex < leftSize) {
		barsArray[curr++].style.height = leftBarsArray[leftIndex++];
	}

	while (rightIndex < rightSize) {
		barsArray[curr++].style.height = rightBarsArray[rightIndex++];
	}
	display();
	await new Promise((resolve) => setTimeout(resolve, delay));
}

async function MergeSort(left, right) {
	if (left >= right) {
		return;
	}
	for (let i = left; i <= right; i++) {
		barsArray[i].style.background = "#9900ff";
	}

	await new Promise((resolve) => setTimeout(resolve, delay));

	let mid = left + Math.floor((right - left) / 2);

	for (let i = mid + 1; i <= right; i++) {
		barsArray[i].style.background = "#ffd000";
	}
	await new Promise((resolve) => setTimeout(resolve, delay));

	await MergeSort(left, mid);

	for (let i = mid + 1; i <= right; i++) {
		barsArray[i].style.background = "#9900ff";
	}
	for (let i = left; i <= mid; i++) {
		barsArray[i].style.background = "#ffd000";
	}
	await new Promise((resolve) => setTimeout(resolve, delay));

	await MergeSort(mid + 1, right);

	for (let i = left; i <= right; i++) {
		barsArray[i].style.background = "#9900ff";
	}

	await new Promise((resolve) => setTimeout(resolve, delay));

	await merge(left, mid, right);
	for (let i = left; i <= right; i++) {
		barsArray[i].style.background = "#15fa00";
	}
	await new Promise((resolve) => setTimeout(resolve, delay));
}

async function mergeSort() {
	await MergeSort(0, barsArray.length - 1);
	enable();
}
