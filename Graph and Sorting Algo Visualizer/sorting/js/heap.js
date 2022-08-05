async function Heapify(n, i) {
	var maxNode = i,
		l = 2 * i + 1,
		r = 2 * i + 2;
	if (
		l < n &&
		parseInt(barsArray[l].style.height) >
			parseInt(barsArray[maxNode].style.height)
	)
		maxNode = l;

	if (
		r < n &&
		parseInt(barsArray[r].style.height) >
			parseInt(barsArray[maxNode].style.height)
	)
		maxNode = r;

	if (maxNode != i) {
		swap(i, maxNode);
		barsArray[i].style.background = "yellow";
		barsArray[maxNode].style.background = "yellow";
		display();
		await new Promise((resolve) => setTimeout(resolve, delay));
		barsArray[i].style.background = "red";
		barsArray[maxNode].style.background = "red";
		await Heapify(n, maxNode);
	}
}

async function heapSort() {
	let n = barsArray.length;
	for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
		await Heapify(n, i);
	}

	for (let i = n - 1; i > 0; i--) {
		swap(i, 0);
		barsArray[0].style.background = "blue";
		barsArray[i].style.background = "blue";
		await new Promise((resolve) => setTimeout(resolve, delay));
		display();
		barsArray[i].style.background = "#15fa00";
		await Heapify(i, 0);
	}

	barsArray[0].style.background = "#15fa00";
}
