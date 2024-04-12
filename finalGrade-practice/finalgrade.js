// Write your function here:
const finalGrade = (num1, num2, num3) => {
  let nums = [num1, num2, num3];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0 && nums[i] < 100) {
      avg = (num1 + num2 + num3)/3;
    } else {
      return ('You have entered an invalid grade.')
    };
  };

  switch (true) {
    case (avg <= 100 && avg >= 90):
      return ('A');
      break;
    case (avg <= 89 && avg >= 80):
      return ('B');
      break;
    case (avg <= 79 && avg >= 70):
      return ('C');
      break;
    case (avg <= 69 && avg >= 60):
      return ('D');
      break;
    case (avg <= 59 && avg >= 0):
      return ('F');
      break;
  };
};





console.log(finalGrade(99, 92, 95)) // Should print 'A'
