let choice;
let w1;let w2;let w3;let w4;let w5;let w6;let w7;let w8;let w9;
let px; let po;
function start(){
	choice = Math.round(Math.random()* 1)
	let img = document.getElementById('img');

	if (choice == 0){
		img.src='img/x.png';
		geral = "url('img/x.png')";
		document.getElementById('table').style.borderColor = 'red'
		document.getElementById('txt').style.color = 'red'
		document.getElementById('txt2').style.color = 'red'
	}
	else{
		img.src='img/o.png';
		geral = "url('img/o.png')";
		document.getElementById('table').style.borderColor = 'blue'
		document.getElementById('txt').style.color = 'blue'
		document.getElementById('txt2').style.color = 'blue'
	}
	q1.disabled = false;q2.disabled = false;q3.disabled = false;q4.disabled = false;q5.disabled = false;q6.disabled = false;q7.disabled = false;q8.disabled = false;q9.disabled = false;
	document.getElementById('q1').style.backgroundImage = "url('img/t.png')";
	document.getElementById('q2').style.backgroundImage = "url('img/t.png')";
	document.getElementById('q3').style.backgroundImage = "url('img/t.png')";
	document.getElementById('q4').style.backgroundImage = "url('img/t.png')";
	document.getElementById('q5').style.backgroundImage = "url('img/t.png')";
	document.getElementById('q6').style.backgroundImage = "url('img/t.png')";
	document.getElementById('q7').style.backgroundImage = "url('img/t.png')";
	document.getElementById('q8').style.backgroundImage = "url('img/t.png')";
	document.getElementById('q9').style.backgroundImage = "url('img/t.png')";
	document.getElementById('q1').style.backgroundColor = 'white';
	document.getElementById('q2').style.backgroundColor = 'white';
	document.getElementById('q3').style.backgroundColor = 'white';
	document.getElementById('q4').style.backgroundColor = 'white';
	document.getElementById('q5').style.backgroundColor = 'white';
	document.getElementById('q6').style.backgroundColor = 'white';
	document.getElementById('q7').style.backgroundColor = 'white';
	document.getElementById('q8').style.backgroundColor = 'white';
	document.getElementById('q9').style.backgroundColor = 'white';
	w1 = 2;w2 = 2;w3 = 2;w4 = 2;w5 = 2;w6 = 2;w7 = 2;w8 = 2;w9 = 2;
}
function update(){
	let up = choice;
	let img = document.getElementById('img');
	if(up == 0){
		choice = 1;
		img.src = 'img/o.png';
		geral = "url('img/o.png')";
		document.getElementById('table').style.borderColor = 'blue'
		document.getElementById('txt').style.color = 'blue'
		document.getElementById('txt2').style.color = 'blue'

	}
	else{
		choice = 0;
		img.src = 'img/x.png';
		geral = "url('img/x.png')";
		document.getElementById('table').style.borderColor = 'red'
		document.getElementById('txt').style.color = 'red'
		document.getElementById('txt2').style.color = 'red'
	}
}
function q_1(){
	document.getElementById('q1').style.backgroundImage = geral
	q1.disabled = true;
	if (geral == "url('img/x.png')") {
		w1 = 1;
	}
	if (geral == "url('img/o.png')") {
		w1 = 0;
	}
	update();
	if (w1 == w3 && w1 == w2) {
		document.getElementById('q1').style.backgroundColor = 'green';
		document.getElementById('q2').style.backgroundColor = 'green';
		document.getElementById('q3').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w1 == 1) {
			px = document.getElementById('px').innerHTML;
			px++;
			document.getElementById('px').innerHTML = px;
		}
		if (w1 == 0) {
			po = document.getElementById('po').innerHTML;
			po++;
			document.getElementById('po').innerHTML = po;
		}
	}
	if (w1 == w4 && w1 == w7) {
		document.getElementById('q1').style.backgroundColor = 'green';
		document.getElementById('q4').style.backgroundColor = 'green';
		document.getElementById('q7').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w1 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w1 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
	if (w1 == w5 && w1 == w9) {
		document.getElementById('q1').style.backgroundColor = 'green';
		document.getElementById('q5').style.backgroundColor = 'green';
		document.getElementById('q9').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w1 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w1 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
}
function q_2(){
	document.getElementById('q2').style.backgroundImage = geral
	q2.disabled = true;
	if (geral == "url('img/x.png')") {
		w2 = 1;
	}
	if (geral == "url('img/o.png')") {
		w2 = 0;
	}
	update();
	if (w1 == w3 && w1 == w2) {
		document.getElementById('q1').style.backgroundColor = 'green';
		document.getElementById('q2').style.backgroundColor = 'green';
		document.getElementById('q3').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w1 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w1 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
	if (w2 == w5 && w2 == w8) {
		document.getElementById('q2').style.backgroundColor = 'green';
		document.getElementById('q5').style.backgroundColor = 'green';
		document.getElementById('q8').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w2 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w2 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
}
function q_3(){
	document.getElementById('q3').style.backgroundImage = geral
	q3.disabled = true;
	if (geral == "url('img/x.png')") {
		w3 = 1;
	}
	if (geral == "url('img/o.png')") {
		w3 = 0;
	}
	update();
	if (w1 == w3 && w1 == w2) {
		document.getElementById('q1').style.backgroundColor = 'green';
		document.getElementById('q2').style.backgroundColor = 'green';
		document.getElementById('q3').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w1 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w1 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
	if (w3 == w6 && w3 == w9) {
		document.getElementById('q3').style.backgroundColor = 'green';
		document.getElementById('q6').style.backgroundColor = 'green';
		document.getElementById('q9').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w3 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w3 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
	if (w3 == w5 && w3 == w7) {
		document.getElementById('q3').style.backgroundColor = 'green';
		document.getElementById('q5').style.backgroundColor = 'green';
		document.getElementById('q7').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w3 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w3 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
}
function q_4(){
	document.getElementById('q4').style.backgroundImage = geral
	q4.disabled = true;
	if (geral == "url('img/x.png')") {
		w4 = 1;
	}
	if (geral == "url('img/o.png')") {
		w4 = 0;
	}
	update();
	if (w4 == w5 && w4 == w6) {
		document.getElementById('q4').style.backgroundColor = 'green';
		document.getElementById('q5').style.backgroundColor = 'green';
		document.getElementById('q6').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w4 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w4 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
	if (w1 == w4 && w1 == w7) {
		document.getElementById('q1').style.backgroundColor = 'green';
		document.getElementById('q4').style.backgroundColor = 'green';
		document.getElementById('q7').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w1 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w1 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
}
function q_5(){
	document.getElementById('q5').style.backgroundImage = geral
	q5.disabled = true;
	if (geral == "url('img/x.png')") {
		w5 = 1;
	}
	if (geral == "url('img/o.png')") {
		w5 = 0;
	}
	update();
	if (w4 == w5 && w4 == w6) {
		document.getElementById('q4').style.backgroundColor = 'green';
		document.getElementById('q5').style.backgroundColor = 'green';
		document.getElementById('q6').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w4 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w4 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
	if (w2 == w5 && w2 == w8) {
		document.getElementById('q2').style.backgroundColor = 'green';
		document.getElementById('q5').style.backgroundColor = 'green';
		document.getElementById('q8').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w2 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w2 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
	if (w1 == w5 && w1 == w9) {
		document.getElementById('q1').style.backgroundColor = 'green';
		document.getElementById('q5').style.backgroundColor = 'green';
		document.getElementById('q9').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w1 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w1 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
	if (w3 == w5 && w3 == w7) {
		document.getElementById('q3').style.backgroundColor = 'green';
		document.getElementById('q5').style.backgroundColor = 'green';
		document.getElementById('q7').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w3 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w3 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
}
function q_6(){
	document.getElementById('q6').style.backgroundImage = geral
	q6.disabled = true;
	if (geral == "url('img/x.png')") {
		w6 = 1;
	}
	if (geral == "url('img/o.png')") {
		w6 = 0;
	}
	update();
	if (w4 == w5 && w4 == w6) {
		document.getElementById('q4').style.backgroundColor = 'green';
		document.getElementById('q5').style.backgroundColor = 'green';
		document.getElementById('q6').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w4 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w4 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
	if (w3 == w6 && w3 == w9) {
		document.getElementById('q3').style.backgroundColor = 'green';
		document.getElementById('q6').style.backgroundColor = 'green';
		document.getElementById('q9').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w3 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w3 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
}
function q_7(){
	document.getElementById('q7').style.backgroundImage = geral
	q7.disabled = true;
	if (geral == "url('img/x.png')") {
		w7 = 1;
	}
	if (geral == "url('img/o.png')") {
		w7 = 0;
	}
	update();
	if (w7 == w8 && w7 == w9) {
		document.getElementById('q7').style.backgroundColor = 'green';
		document.getElementById('q8').style.backgroundColor = 'green';
		document.getElementById('q9').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w7 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w7 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
	if (w1 == w4 && w1 == w7) {
		document.getElementById('q1').style.backgroundColor = 'green';
		document.getElementById('q4').style.backgroundColor = 'green';
		document.getElementById('q7').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w1 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w1 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
	if (w3 == w5 && w3 == w7) {
		document.getElementById('q3').style.backgroundColor = 'green';
		document.getElementById('q5').style.backgroundColor = 'green';
		document.getElementById('q7').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w3 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w3 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
}
function q_8(){
	document.getElementById('q8').style.backgroundImage = geral
	q8.disabled = true;
	if (geral == "url('img/x.png')") {
		w8 = 1;
	}
	if (geral == "url('img/o.png')") {
		w8 = 0;
	}
	update();
	if (w7 == w8 && w7 == w9) {
		document.getElementById('q7').style.backgroundColor = 'green';
		document.getElementById('q8').style.backgroundColor = 'green';
		document.getElementById('q9').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w7 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w7 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
	if (w2 == w5 && w2 == w8) {
		document.getElementById('q2').style.backgroundColor = 'green';
		document.getElementById('q5').style.backgroundColor = 'green';
		document.getElementById('q8').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w2 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w2 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
}
function q_9(){
	document.getElementById('q9').style.backgroundImage = geral
	q9.disabled = true;
	if (geral == "url('img/x.png')") {
		w9 = 1;
	}
	if (geral == "url('img/o.png')") {
		w9 = 0;
	}
	update();
	if (w7 == w8 && w7 == w9) {
		document.getElementById('q7').style.backgroundColor = 'green';
		document.getElementById('q8').style.backgroundColor = 'green';
		document.getElementById('q9').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w7 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w7 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
	if (w3 == w6 && w3 == w9) {
		document.getElementById('q3').style.backgroundColor = 'green';
		document.getElementById('q6').style.backgroundColor = 'green';
		document.getElementById('q9').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w3 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w3 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
	if (w1 == w5 && w1 == w9) {
		document.getElementById('q1').style.backgroundColor = 'green';
		document.getElementById('q5').style.backgroundColor = 'green';
		document.getElementById('q9').style.backgroundColor = 'green';
		q1.disabled = true;q2.disabled = true;q3.disabled = true;q4.disabled = true;q5.disabled = true;q6.disabled = true;q7.disabled = true;q8.disabled = true;q9.disabled = true;
		if (w1 == 1) {
			px = document.getElementById('px').innerHTML;
			px++
			document.getElementById('px').innerHTML = px;
		}
		if (w1 == 0) {
			po = document.getElementById('po').innerHTML;
			po++
			document.getElementById('po').innerHTML = po;
		}
	}
}