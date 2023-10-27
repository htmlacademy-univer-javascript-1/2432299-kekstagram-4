const getTimeInMins = (time) => {
  const timeSplit = time.split(':').map(Number);

  return timeSplit[0] * 60 + timeSplit[1];
}

const checkIfInTime = (dayStartTime, dayEndTime, meetingStartTime, meetingDuration) => {
  let dayStartInMins = getTimeInMins(dayStartTime);
  let dayEndInMins = getTimeInMins(dayEndTime);
  let meetingStartInMins = getTimeInMins(meetingStartTime);

  return (meetingStartInMins >= dayStartInMins) && (meetingStartInMins + meetingDuration <= dayEndInMins);
}

checkIfInTime('08:00', '17:30', '14:00', 90);
checkIfInTime('8:0', '10:0', '8:0', 120);
checkIfInTime('08:00', '14:30', '14:00', 90);
checkIfInTime('14:00', '17:30', '08:0', 90);
checkIfInTime('8:00', '17:30', '08:00', 900);

/*const checkStringLength = (string, strLength) => string.length <= strLength;

const checkPalidromes = (string) => {
  const reversedString = string.replaceAll(' ', '').toLowerCase();
  return string === reversedString;
};

const getNums = function (input) {
  let result = '';
  input = String(input).replaceAll(' ', '');

  for (let i = 0; i < input.length; i++) {
    if (input[i] === Number(input[i])) {
      result += input[i];
    }
  }

  return parseInt(result, 10);
};

checkStringLength('проверяемая строка', 20);
checkPalidromes('Лёша на полке клопа нашёл ');
getNums('2023 год');*/
