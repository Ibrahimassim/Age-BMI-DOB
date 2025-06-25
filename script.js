
function calculateAge() {
  const dob = new Date(document.getElementById("dob").value);
  const now = new Date();
  const diff = now - dob;
  const ageDate = new Date(diff);

  const years = ageDate.getUTCFullYear() - 1970;
  const months = now.getMonth() - dob.getMonth();
  const days = now.getDate() - dob.getDate();
  const seconds = Math.floor(diff / 1000);

  document.getElementById("ageResult").textContent =
    `Your age is ${years} years, ${months < 0 ? 12 + months : months} months, and ${days < 0 ? 30 + days : days} days (` +
    `${seconds} seconds old)`;
}

function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value) / 100;
  const weight = parseFloat(document.getElementById("weight").value);
  const bmi = (weight / (height * height)).toFixed(2);

  let status = "";
  if (bmi < 18.5) status = "Underweight";
  else if (bmi < 25) status = "Normal";
  else if (bmi < 30) status = "Overweight";
  else status = "Obese";

  document.getElementById("bmiResult").textContent = `Your BMI is ${bmi} (${status})`;
}

function findDOB() {
  const age = parseInt(document.getElementById("ageInput").value);
  const today = new Date();
  const year = today.getFullYear() - age;
  const estimatedDOB = new Date(year, today.getMonth(), today.getDate());

  document.getElementById("dobResult").textContent = `Estimated DOB: ${estimatedDOB.toDateString()}`;
}
