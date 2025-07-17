
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const user = localStorage.getItem('loggedInUser');
  if (user) {
    const logoutBtn = document.createElement('button');
    logoutBtn.textContent = "Logout";
    logoutBtn.onclick = () => {
      localStorage.removeItem('loggedInUser');
      window.location.href = 'login.html';
    };
    document.body.prepend(logoutBtn);
  } else {
    window.location.href = 'login.html'; // force login
  }
});
