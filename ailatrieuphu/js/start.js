function fstart() {
	musicbg.pause();
	cmuss.play();
	start.style.display = 'none';

	// var math = Math.ceil(Math.random() * 50);
	ii +=1;
    math = (arrquestion[ii]);
	order = math;
	document.getElementsByClassName("cau")[0].innerText = "Câu:";
	document.getElementById("questionanswer").style.display = 'block';
	var moneyy = document.getElementsByClassName("money")[0].innerHTML = "Số tiền: " + money;
	answer_1.style.backgroundColor = "rgb(105,114,255)";
	answer_2.style.backgroundColor = "rgb(105,114,255)";
	answer_3.style.backgroundColor = "rgb(105,114,255)";
	answer_4.style.backgroundColor = "rgb(105,114,255)";

	answer_1.style.color = "black";
	answer_2.style.color = "black";
	answer_3.style.color = "black";
	answer_4.style.color = "black";
	if(numberquestion === 15) {
		winner();
	} else {
		setTimeout(function() {
			selectan = 0;
		}, 1400);
		setTimeout(function() {
			tim = setInterval(rePlay, 1000);
		}, 1500);
		switch(math) {
			case 1:
				question.innerText = question_1.question;
				answer_1.innerText = question_1.answer_a;
				answer_2.innerText = question_1.answer_b;
				answer_3.innerText = question_1.answer_c;
				answer_4.innerText = question_1.answer_d;
				numberquestion += 1;
				correct = 2;
				break;
			case 2:
				question.innerText = question_2.question;
				answer_1.innerText = question_2.answer_a;
				answer_2.innerText = question_2.answer_b;
				answer_3.innerText = question_2.answer_c;
				answer_4.innerText = question_2.answer_d;
				numberquestion += 1;
				correct = 3;
				break;
			case 3:
				question.innerText = question_3.question;
				answer_1.innerText = question_3.answer_a;
				answer_2.innerText = question_3.answer_b;
				answer_3.innerText = question_3.answer_c;
				answer_4.innerText = question_3.answer_d;
				numberquestion += 1;
				correct = 1;
				break;
			case 4:
				question.innerText = question_4.question;
				answer_1.innerText = question_4.answer_a;
				answer_2.innerText = question_4.answer_b;
				answer_3.innerText = question_4.answer_c;
				answer_4.innerText = question_4.answer_d;
				numberquestion += 1;
				correct = 2;
				break;
			case 5:
				question.innerText = question_5.question;
				answer_1.innerText = question_5.answer_a;
				answer_2.innerText = question_5.answer_b;
				answer_3.innerText = question_5.answer_c;
				answer_4.innerText = question_5.answer_d;
				numberquestion += 1;
				correct = 4;
				break;
			case 6:
				question.innerText = question_6.question;
				answer_1.innerText = question_6.answer_a;
				answer_2.innerText = question_6.answer_b;
				answer_3.innerText = question_6.answer_c;
				answer_4.innerText = question_6.answer_d;
				numberquestion += 1;
				correct = 1;
				break;
			case 7:
				question.innerText = question_7.question;
				answer_1.innerText = question_7.answer_a;
				answer_2.innerText = question_7.answer_b;
				answer_3.innerText = question_7.answer_c;
				answer_4.innerText = question_7.answer_d;
				numberquestion += 1;
				correct = 1;
				break;
			case 8:
				question.innerText = question_8.question;
				answer_1.innerText = question_8.answer_a;
				answer_2.innerText = question_8.answer_b;
				answer_3.innerText = question_8.answer_c;
				answer_4.innerText = question_8.answer_d;
				numberquestion += 1;
				correct = 3;
				break;
			case 9:
				question.innerText = question_9.question;
				answer_1.innerText = question_9.answer_a;
				answer_2.innerText = question_9.answer_b;
				answer_3.innerText = question_9.answer_c;
				answer_4.innerText = question_9.answer_d;
				numberquestion += 1;
				correct = 2;
				break;
			case 10:
				question.innerText = question_10.question;
				answer_1.innerText = question_10.answer_a;
				answer_2.innerText = question_10.answer_b;
				answer_3.innerText = question_10.answer_c;
				answer_4.innerText = question_10.answer_d;
				numberquestion += 1;
				correct = 1;
				break;
			case 11:
				question.innerText = question_11.question;
				answer_1.innerText = question_11.answer_a;
				answer_2.innerText = question_11.answer_b;
				answer_3.innerText = question_11.answer_c;
				answer_4.innerText = question_11.answer_d;
				numberquestion += 1;
				correct = 4;
				break;
			case 12:
				question.innerText = question_12.question;
				answer_1.innerText = question_12.answer_a;
				answer_2.innerText = question_12.answer_b;
				answer_3.innerText = question_12.answer_c;
				answer_4.innerText = question_12.answer_d;
				numberquestion += 1;
				correct = 3;
				break;
			case 13:
				question.innerText = question_13.question;
				answer_1.innerText = question_13.answer_a;
				answer_2.innerText = question_13.answer_b;
				answer_3.innerText = question_13.answer_c;
				answer_4.innerText = question_13.answer_d;
				numberquestion += 1;
				correct = 4;
				break;
			case 14:
				question.innerText = question_14.question;
				answer_1.innerText = question_14.answer_a;
				answer_2.innerText = question_14.answer_b;
				answer_3.innerText = question_14.answer_c;
				answer_4.innerText = question_14.answer_d;
				numberquestion += 1;
				correct = 4;
				break;
			case 15:
				question.innerText = question_15.question;
				answer_1.innerText = question_15.answer_a;
				answer_2.innerText = question_15.answer_b;
				answer_3.innerText = question_15.answer_c;
				answer_4.innerText = question_15.answer_d;
				numberquestion += 1;
				correct = 4;
				break;
			case 16:
				question.innerText = question_16.question;
				answer_1.innerText = question_16.answer_a;
				answer_2.innerText = question_16.answer_b;
				answer_3.innerText = question_16.answer_c;
				answer_4.innerText = question_16.answer_d;
				numberquestion += 1;
				correct = 1;
				break;
			case 17:
				question.innerText = question_17.question;
				answer_1.innerText = question_17.answer_a;
				answer_2.innerText = question_17.answer_b;
				answer_3.innerText = question_17.answer_c;
				answer_4.innerText = question_17.answer_d;
				numberquestion += 1;
				correct = 1;
				break;
			case 18:
				question.innerText = question_18.question;
				answer_1.innerText = question_18.answer_a;
				answer_2.innerText = question_18.answer_b;
				answer_3.innerText = question_18.answer_c;
				answer_4.innerText = question_18.answer_d;
				numberquestion += 1;
				correct = 1;
				break;
			case 19:
				question.innerText = question_19.question;
				answer_1.innerText = question_19.answer_a;
				answer_2.innerText = question_19.answer_b;
				answer_3.innerText = question_19.answer_c;
				answer_4.innerText = question_19.answer_d;
				numberquestion += 1;
				correct = 1;
				break;
			case 20:
				question.innerText = question_20.question;
				answer_1.innerText = question_20.answer_a;
				answer_2.innerText = question_20.answer_b;
				answer_3.innerText = question_20.answer_c;
				answer_4.innerText = question_20.answer_d;
				numberquestion += 1;
				correct = 1;
				break;
			case 21:
				question.innerText = question_21.question;
				answer_1.innerText = question_21.answer_a;
				answer_2.innerText = question_21.answer_b;
				answer_3.innerText = question_21.answer_c;
				answer_4.innerText = question_21.answer_d;
				numberquestion += 1;
				correct = 2;
				break;
			case 22:
				question.innerText = question_22.question;
				answer_1.innerText = question_22.answer_a;
				answer_2.innerText = question_22.answer_b;
				answer_3.innerText = question_22.answer_c;
				answer_4.innerText = question_22.answer_d;
				numberquestion += 1;
				correct = 2;
				break;
			case 23:
				question.innerText = question_23.question;
				answer_1.innerText = question_23.answer_a;
				answer_2.innerText = question_23.answer_b;
				answer_3.innerText = question_23.answer_c;
				answer_4.innerText = question_23.answer_d;
				numberquestion += 1;
				correct = 2;
				break;
			case 24:
				question.innerText = question_24.question;
				answer_1.innerText = question_24.answer_a;
				answer_2.innerText = question_24.answer_b;
				answer_3.innerText = question_24.answer_c;
				answer_4.innerText = question_24.answer_d;
				numberquestion += 1;
				correct = 2;
				break;
			case 25:
				question.innerText = question_25.question;
				answer_1.innerText = question_25.answer_a;
				answer_2.innerText = question_25.answer_b;
				answer_3.innerText = question_25.answer_c;
				answer_4.innerText = question_25.answer_d;
				numberquestion += 1;
				correct = 2;
				break;
			case 26:
				question.innerText = question_26.question;
				answer_1.innerText = question_26.answer_a;
				answer_2.innerText = question_26.answer_b;
				answer_3.innerText = question_26.answer_c;
				answer_4.innerText = question_26.answer_d;
				numberquestion += 1;
				correct = 3;
				break;
			case 27:
				question.innerText = question_27.question;
				answer_1.innerText = question_27.answer_a;
				answer_2.innerText = question_27.answer_b;
				answer_3.innerText = question_27.answer_c;
				answer_4.innerText = question_27.answer_d;
				numberquestion += 1;
				correct = 3;
				break;
			case 28:
				question.innerText = question_28.question;
				answer_1.innerText = question_28.answer_a;
				answer_2.innerText = question_28.answer_b;
				answer_3.innerText = question_28.answer_c;
				answer_4.innerText = question_28.answer_d;
				numberquestion += 1;
				correct = 3;
				break;
			case 29:
				question.innerText = question_29.question;
				answer_1.innerText = question_29.answer_a;
				answer_2.innerText = question_29.answer_b;
				answer_3.innerText = question_29.answer_c;
				answer_4.innerText = question_29.answer_d;
				numberquestion += 1;
				correct = 3;
				break;
			case 30:
				question.innerText = question_30.question;
				answer_1.innerText = question_30.answer_a;
				answer_2.innerText = question_30.answer_b;
				answer_3.innerText = question_30.answer_c;
				answer_4.innerText = question_30.answer_d;
				numberquestion += 1;
				correct = 3;
				break;
			case 31:
				question.innerText = question_31.question;
				answer_1.innerText = question_31.answer_a;
				answer_2.innerText = question_31.answer_b;
				answer_3.innerText = question_31.answer_c;
				answer_4.innerText = question_31.answer_d;
				numberquestion += 1;
				correct = 4;
				break;
			case 32:
				question.innerText = question_32.question;
				answer_1.innerText = question_32.answer_a;
				answer_2.innerText = question_32.answer_b;
				answer_3.innerText = question_32.answer_c;
				answer_4.innerText = question_32.answer_d;
				numberquestion += 1;
				correct = 4;
				break;
			case 33:
				question.innerText = question_33.question;
				answer_1.innerText = question_33.answer_a;
				answer_2.innerText = question_33.answer_b;
				answer_3.innerText = question_33.answer_c;
				answer_4.innerText = question_33.answer_d;
				numberquestion += 1;
				correct = 4;
				break;
			case 34:
				question.innerText = question_34.question;
				answer_1.innerText = question_34.answer_a;
				answer_2.innerText = question_34.answer_b;
				answer_3.innerText = question_34.answer_c;
				answer_4.innerText = question_34.answer_d;
				numberquestion += 1;
				correct = 4;
				break;
			case 35:
				question.innerText = question_35.question;
				answer_1.innerText = question_35.answer_a;
				answer_2.innerText = question_35.answer_b;
				answer_3.innerText = question_35.answer_c;
				answer_4.innerText = question_35.answer_d;
				numberquestion += 1;
				correct = 4;
				break;
			case 36:
				question.innerText = question_36.question;
				answer_1.innerText = question_36.answer_a;
				answer_2.innerText = question_36.answer_b;
				answer_3.innerText = question_36.answer_c;
				answer_4.innerText = question_36.answer_d;
				numberquestion += 1;
				correct = 4;
				break;
			case 37:
				question.innerText = question_37.question;
				answer_1.innerText = question_37.answer_a;
				answer_2.innerText = question_37.answer_b;
				answer_3.innerText = question_37.answer_c;
				answer_4.innerText = question_37.answer_d;
				numberquestion += 1;
				correct = 4;
				break;
			case 38:
				question.innerText = question_38.question;
				answer_1.innerText = question_38.answer_a;
				answer_2.innerText = question_38.answer_b;
				answer_3.innerText = question_38.answer_c;
				answer_4.innerText = question_38.answer_d;
				numberquestion += 1;
				correct = 1;
				break;
			case 39:
				question.innerText = question_39.question;
				answer_1.innerText = question_39.answer_a;
				answer_2.innerText = question_39.answer_b;
				answer_3.innerText = question_39.answer_c;
				answer_4.innerText = question_39.answer_d;
				numberquestion += 1;
				correct = 1;
				break;
			case 40:
				question.innerText = question_40.question;
				answer_1.innerText = question_40.answer_a;
				answer_2.innerText = question_40.answer_b;
				answer_3.innerText = question_40.answer_c;
				answer_4.innerText = question_40.answer_d;
				numberquestion += 1;
				correct = 1;
				break;
			case 41:
				question.innerText = question_41.question;
				answer_1.innerText = question_41.answer_a;
				answer_2.innerText = question_41.answer_b;
				answer_3.innerText = question_41.answer_c;
				answer_4.innerText = question_41.answer_d;
				numberquestion += 1;
				correct = 2;
				break;
			case 42:
				question.innerText = question_42.question;
				answer_1.innerText = question_42.answer_a;
				answer_2.innerText = question_42.answer_b;
				answer_3.innerText = question_42.answer_c;
				answer_4.innerText = question_42.answer_d;
				numberquestion += 1;
				correct = 2;
				break;
			case 43:
				question.innerText = question_43.question;
				answer_1.innerText = question_43.answer_a;
				answer_2.innerText = question_43.answer_b;
				answer_3.innerText = question_43.answer_c;
				answer_4.innerText = question_43.answer_d;
				numberquestion += 1;
				correct = 2;
				break;
			case 44:
				question.innerText = question_44.question;
				answer_1.innerText = question_44.answer_a;
				answer_2.innerText = question_44.answer_b;
				answer_3.innerText = question_44.answer_c;
				answer_4.innerText = question_44.answer_d;
				numberquestion += 1;
				correct = 3;
				break;
			case 45:
				question.innerText = question_45.question;
				answer_1.innerText = question_45.answer_a;
				answer_2.innerText = question_45.answer_b;
				answer_3.innerText = question_45.answer_c;
				answer_4.innerText = question_45.answer_d;
				numberquestion += 1;
				correct = 3;
				break;
			case 46:
				question.innerText = question_46.question;
				answer_1.innerText = question_46.answer_a;
				answer_2.innerText = question_46.answer_b;
				answer_3.innerText = question_46.answer_c;
				answer_4.innerText = question_46.answer_d;
				numberquestion += 1;
				correct = 3;
				break;
			case 47:
				question.innerText = question_47.question;
				answer_1.innerText = question_47.answer_a;
				answer_2.innerText = question_47.answer_b;
				answer_3.innerText = question_47.answer_c;
				answer_4.innerText = question_47.answer_d;
				numberquestion += 1;
				correct = 3;
				break;
			case 48:
				question.innerText = question_48.question;
				answer_1.innerText = question_48.answer_a;
				answer_2.innerText = question_48.answer_b;
				answer_3.innerText = question_48.answer_c;
				answer_4.innerText = question_48.answer_d;
				numberquestion += 1;
				correct = 3;
				break;
			case 49:
				question.innerText = question_49.question;
				answer_1.innerText = question_49.answer_a;
				answer_2.innerText = question_49.answer_b;
				answer_3.innerText = question_49.answer_c;
				answer_4.innerText = question_49.answer_d;
				numberquestion += 1;
				correct = 3;
				break;
			case 50:
				question.innerText = question_50.question;
				answer_1.innerText = question_50.answer_a;
				answer_2.innerText = question_50.answer_b;
				answer_3.innerText = question_50.answer_c;
				answer_4.innerText = question_50.answer_d;
				numberquestion += 1;
				correct = 3;
				break;
			default:
				math = Math.ceil(Math.random() * 50);
				break;
		}
		document.getElementsByClassName("numberquestion")[0].innerHTML = numberquestion;
	}
}

function fmoney() {
	switch(numberquestion) {
		case 1:
			money = 200;
			break;
		case 2:
			money = 400;
			break;
		case 3:
			money = 600;
			break;
		case 4:
			money = 1000;
			break;
		case 5:
			money = 2000;
			break;
		case 6:
			money = 3000;
			break;
		case 7:
			money = 6000;
			break;
		case 8:
			money = 10000;
			break;
		case 9:
			money = 14000;
			break;
		case 10:
			money = 22000;
			break;
		case 11:
			money = 30000;
			break;
		case 12:
			money = 40000;
			break;
		case 13:
			money = 60000;
			break;
		case 14:
			money = 85000;
			break;
		case 15:
			money = 150000;
			break;
		default:
			break;
	}
}