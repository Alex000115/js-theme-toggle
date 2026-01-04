const body = document.body;

function toggle(){
  const isDark = body.classList.toggle('dark');
  body.classList.toggle('light', !isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

const saved = localStorage.getItem('theme') || 'light';
body.classList.add(saved);
