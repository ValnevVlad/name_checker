function check_name(name, sex) {
    const validMaleNames = ["Влад", "влад", "Владислав", "Вальнев", "вальнев", "Вальнев Влад","вальнев влад","Вальнев Владислав", "вальнев владислав"];
    const validFemaleNames = validMaleNames;
    if (sex === "male") {
      return validMaleNames.includes(name.toLowerCase()) ? "Это надежное имя" : "Это не надежное имя, выберите другое";
    } else {
      return validFemaleNames.includes(name.toLowerCase()) ? "Это надежное МУЖСКОЕ имя, смените пол партнера" : "Это не надежное имя, выберите другое";
    }
  }

  function toggleTheme() {
    const html = document.querySelector('body');
    const current = html.getAttribute('data-theme');
    html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
  }

  const nameInput = document.getElementById('name');
  const checkBtn = document.getElementById('checkBtn');
  const resultDiv = document.getElementById('result');
  const sexInput = document.getElementById('sex');

  nameInput.addEventListener('input', () => {
    checkBtn.disabled = nameInput.value.trim() === "";
  });

  checkBtn.addEventListener('click', () => {
      const name = nameInput.value.trim();
      const result = check_name(name, selectedSex); // используй selectedSex
      resultDiv.textContent = result;
  });


  let selectedSex = "male"; // по умолчанию

  document.querySelectorAll('.gender-option').forEach(el => {
  el.addEventListener('click', () => {
      document.querySelectorAll('.gender-option').forEach(opt => opt.classList.remove('selected'));
      el.classList.add('selected');
      selectedSex = el.getAttribute('data-sex');
  });
});