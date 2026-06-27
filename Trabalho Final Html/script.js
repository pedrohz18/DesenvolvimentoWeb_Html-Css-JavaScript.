const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        
        if (sidebar.classList.contains('active')) {
            menuToggle.textContent = '✕';
        } else {
            menuToggle.textContent = '☰';
        }
    });
}

const btnTheme = document.getElementById('btnTheme');

if (btnTheme) {
    const themes = ['default', 'light', 'dark'];
    const labels = {
        default: 'Tema: Padrão',
        light: 'Tema: Claro',
        dark: 'Tema: Escuro'
    };
    
    let currentTheme = localStorage.getItem('portfolio-theme') || 'default';
    
    function applyTheme(theme) {
        document.body.classList.remove('theme-light', 'theme-dark');
        
        if (theme === 'light') {
            document.body.classList.add('theme-light');
        } else if (theme === 'dark') {
            document.body.classList.add('theme-dark');
        }
        
        btnTheme.textContent = labels[theme];
        localStorage.setItem('portfolio-theme', theme);
    }
    
    applyTheme(currentTheme);
    
    btnTheme.addEventListener('click', () => {
        let index = themes.indexOf(currentTheme);
        index = (index + 1) % themes.length;
        currentTheme = themes[index];
        applyTheme(currentTheme);
    });
}