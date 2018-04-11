// ----------------------------------------------------
// 날짜/시간 정보와 관련된 객체
// ----------------------------------------------------

// Date 객체 생성 및 변수 참조
// 밀레니엄 계산(2000년대) 과의 호환성을 위해
// 연도를 지정할 때는 반드시 4자리로 써야 합니다.
// 예를 들자면, 98이 아닌 1998로 써야한다는 뜻입니다.
// 연도 지정을 돕기 위해, JavaScript는
// getFullYear, setFullYear, getUTCFullYear, setUTCFullYear
// 등의 메소드를 포함하고 있습니다.

var Time = (function() {


	var getYear = function() {
		var date_obj = new Date();
		return date_obj.getFullYear();
	};
	var getMonth = function() {
		var date_obj = new Date();
		return date_obj.getMonth() + 1;
	};
	var getDate = function() {
		var date_obj = new Date();
		return date_obj.getDate();
	};
	var getDay = function() {
		var date_obj = new Date();
		var current_day;

		switch(date_obj.getDay()) {
			case 0:
				current_day = '일';
				break;
			case 1:
				current_day = '월';
				break;
			case 2:
				current_day = '화';
				break;
			case 3:
				current_day = '수';
				break;
			case 4:
				current_day = '목';
				break;
			case 5:
				current_day = '금';
				break;
			default:
				current_day = '토';
		}
		return current_day;
	};

	var getHour = function() {
		var date_obj = new Date();
		return date_obj.getHours();
	};
	var getMinute = function() {
		var date_obj = new Date();
		return date_obj.getMinutes();
	};
	var getSecond = function() {
		var date_obj = new Date();
		return date_obj.getSeconds();
	};
	var getMillisecond = function() {
		var date_obj = new Date();
		return date_obj.getMilliseconds();
	};
	var getIsoTime = function() {
		var date_obj = new Date();
		return date_obj.toISOString();
	};

	return {
		year: getYear,
		month: getMonth,
		date: getDate,
		day: getDay,
		hour: getHour,
		minute: getMinute,
		sec: getSecond,
		millisecond: getMillisecond,
		isoTime: getIsoTime
	};
}());


var el = function(selector, context) {
	// debugger;
	if (typeof selector !== 'string' || selector.trim().length === 0) { return null; }
	if (context && context.nodeType !== document.ELEMENT_NODE) { context = el(String(context)); }
	if (!context) { context = document; }

	return context.querySelector(selector);
};

var today = el('.today');
var year = el('.year', today);
var month = el('.month', today);
var date = el('.date', today);
var day = el('.day', today);
var hours = el('.hours', today);
var minutes = el('.minutes', today);
var seconds = el('.seconds', today);
var milliseconds = el('.milliseconds', today);

var updateTime = function() {
	today.setAttribute('datetime', Time.isoTime());
	year.textContent = Time.year();
	month.textContent = Time.month();
	date.textContent = Time.date();
	day.textContent = Time.day();
	hours.textContent = Time.hour();
	minutes.textContent = Time.minute();
	seconds.textContent = Time.sec();
	milliseconds.textContent = Time.millisecond();
};

setInterval(updateTime, 1000);

// 현재 년(year) 구하기
// 로컬 시간에 따라 명시된
// 날짜의 연도(4개 문자)를 반환
// var current_year = date_obj.getFullYear();

// 현재 월(month) 구하기
// 로컬 시간에 따라 명시된
// 월(0-11)을 반환
// 0 = 1월, 11 = 12월
// var current_month = date_obj.getMonth() + 1;

// 현재 일(date) 구하기
// 로컬 시간에 따라 명시된 날짜가
// 한달의 몇번째 날인지 반환 (1-31)
// var current_date = date_obj.getDate();

// 현재 요일(day) 구하기
// 로컬 시간에 따라 명시된 날짜가
// 주중의 몇번째 요일인지 반환 (0-6)
// 0 = 일요일
// var current_day = date_obj.getDay();

// 현재 시간(hours) 구하기
// 로컬 시간에 따라 명시된
// 시간(0-23)을 반환
// 12 = 오후 12시
// var current_hours = date_obj.getHours();

// 현재 분(minutes) 구하기
// 로컬 시간에 따라 명시된
// 분(0-59)을 반환
// var current_minutes = date_obj.getMinutes();

// 현재 초(seconds) 구하기
// 로컬 시간에 따라 명시된
// 초(0-59)를 반환
// var current_seconds = date_obj.getSeconds();

// 현재 밀리초(milliseconds) 구하기
// 로컬 시간에 따라 명시된
// 밀리초(0-999)를 반환
// 1000밀리초 = 1초
// var current_milliseconds = date_obj.getMilliseconds();

// 현재 시간을 밀리초(milliseconds) 값으로 구하기
// 로컬 시간에 따라 명시된 날짜의 숫자 값을
// 1970년 1월 1일 00:00:00 UTC 이후의 밀리 초 수로 반환
/*

var current_time_to_milliseconds = date_obj;

document.querySelector('.year').innerHTML = current_year;
document.querySelector('.month').innerHTML = current_month;
document.querySelector('.date').innerHTML = current_date;

switch(current_day) {
	case 0:
		current_day = '일';
		break;
	case 1:
		current_day = '월';
		break;
	case 2:
		current_day = '화';
		break;
	case 3:
		current_day = '수';
		break;
	case 4:
		current_day = '목';
		break;
	case 5:
		current_day = '금';
		break;
	default:
		current_day = '토';
}


document.querySelector('.day').innerHTML = current_day;
document.querySelector('.hours').innerHTML = current_hours;
document.querySelector('.minutes').innerHTML = current_minutes;
document.querySelector('.seconds').innerHTML = current_seconds;
document.querySelector('.milliseconds').innerHTML = current_milliseconds;*/

/* ============================================
 * 객체의 메서드(함수)를 사용하여 현재 날짜 정보 가져오기 */

// .toLocaleDateString()
// "2018. 3. 20."

// .toDateString()
// "Tue Mar 20 2018"

// .toISOString()
// "2018-03-20T04:59:05.131Z"
// document.querySelector('time').setAttribute('datetime', date_obj.toISOString());

// .toLocaleTimeString()
// "오후 1:59:05"

// .toString()
// "Tue Mar 20 2018 13:59:05 GMT+0900 (KST)"

// .toTimeString()
// "13:59:05 GMT+0900 (KST)"

// .toUTCString()
// "Tue, 20 Mar 2018 04:59:05 GMT"



/* ============================================
 * 날짜를 설정하여 객체를 생성 */

// "December 31, 1980 21:42:18"

// 1980, 11, 31               →   11 = 12월

// 1980, 11, 31, 21, 42, 18   →   11 = 12월
