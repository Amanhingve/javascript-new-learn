document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting
  
    // Retrieve height and weight values from the input fields
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
  
    // Calculate BMI: weight (kg) / height (m)^2
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100; // Convert height from cm to meters
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  
      // Display the BMI result
      const resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = `<p>Your BMI is: ${bmi}</p>`;
  
      // Display corresponding message based on BMI category
      let message = '';
      if (bmi < 18.6) {
        message = 'You are Underweight.';
      } else if (bmi >= 18.6 && bmi <= 24.9) {
        message = 'You are in the Normal weight range.';
      } else {
        message = 'You are Overweight.';
      }
  
      resultsDiv.innerHTML += `<p>${message}</p>`;
    } else {
      alert('Please enter valid height and weight values.');
    }
  });