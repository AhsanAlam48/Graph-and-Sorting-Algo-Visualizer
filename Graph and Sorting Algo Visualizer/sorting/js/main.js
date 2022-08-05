var delay = 1000;
var size = document.querySelector(".array_size");
var speed = document.querySelector(".speed");
var barsArray = [];
var arr = [];

async function swap(i = 0, j = 0) {
	// Swapping Bar's Heights
	let temp = barsArray[i].style.height;

	barsArray[i].style.height = barsArray[j].style.height;
	barsArray[j].style.height = temp;

	// Swapping array values
	temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function createBars() {
	arr = [];
	document.getElementById("curr").innerHTML = "Current Size: " + size.value;
	for (let i = 0; i < size.value; i++) {
		let height = Math.floor(Math.random() * 60) + 5;
		arr.push(height);
		let bar = document.createElement("div");
		bar.setAttribute("class", "bar");
		bar.style.height = height + "vh";
		document.querySelector("#container").appendChild(bar);
	}
	display();
}

function display() {
	barsArray = document.querySelectorAll(".bar");
	for (let i = 0; i < barsArray.length; ++i) {
		arr[i] = parseInt(barsArray[i].style.height);
	}
	if (arr.length < 21) {
		document.querySelector("#array").style.display = "block";
		document.querySelector("#toSave").style.display = "none";
		document.querySelector("#array").innerText = "Array: " + arr;
	} else {
		document.querySelector("#toSave").style.display = "block";
		document.querySelector("#array").style.display = "none";
	}
}

function disable() {
	document.querySelectorAll(".btn-outline-light").forEach((ele) => {
		ele.disabled = true;
	});
	document.querySelector(".array_size").disabled = true;
}

function enable() {
	document.querySelectorAll(".btn-outline-light").forEach((ele) => {
		ele.disabled = false;
	});
	display();
	document.querySelector(".array_size").disabled = false;
}

function download(filename, text) {
	var element = document.createElement("a");
	element.setAttribute(
		"href",
		"data:text/plain;charset=utf-8," + encodeURIComponent(text)
	);
	element.setAttribute("download", filename);
	element.style.display = "none";
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}

document.querySelector("#toSave>a").addEventListener("click", function () {
	var text = arr;
	var filename = "array.txt";
	download(filename, text);
});

function removeBars() {
	document.querySelectorAll("#container>div").forEach((ele) => {
		ele.remove();
	});
}

document.querySelector(".new").addEventListener("click", () => {
	removeBars();
	createBars();
});

size.addEventListener("input", () => {
	removeBars();
	createBars();
});

speed.addEventListener("input", () => {
	delay = 3000 - speed.value + 100;
	document.querySelectorAll(".bar").forEach((bar) => {
		bar.style.transitionDuration = (delay / 1000) * 0.7 + "s";
	});
});

var sortings = [
	selectionSort,
	bubbleSort,
	insertionSort,
	mergeSort,
	quickSort,
	heapSort,
];

var btns = [".selection", ".bubble", ".insertion", ".merge", ".quick", ".heap"];

for (let i = 0; i < sortings.length; ++i) {
	document.querySelector(btns[i]).addEventListener("click", async () => {
		disable();
		barsArray = document.querySelectorAll(".bar");
		await sortings[i]();
		enable();
	});
}

createBars();
