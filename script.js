// DOM Elements
const accountBtn = document.getElementById('accountBtn');
const accountModal = document.getElementById('accountModal');
const closeAccount = document.getElementById('closeAccount');
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const submitLogin = document.getElementById('submitLogin');
const submitRegister = document.getElementById('submitRegister');
const logoutBtn = document.getElementById('logoutBtn');
const dashboard = document.getElementById('dashboard');
const portfolioGrid = document.getElementById('portfolioGrid');
const usernameSpan = document.getElementById('username');

// Tab switching
loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
});

registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
});

// Sample portfolio data (simulating loading from a folder)
const portfolioData = [
    { id: 3, title: 'Logo design', description: 'Brand identity and logos', folder: 'project3', link: 'Logo&Identify.html', image: 'Logo&Identify.jpg' },
    { id: 1, title: 'Web design project', description: 'Modern website UI/UX', folder: 'project1', link: 'Webdesign project.html', image: 'WEBSITE 1.1.jpg' },
    { id: 2, title: 'Graphic Design', description: 'Design work', folder: 'project2', link: 'GraphicDesign.html', image: 'Layout books project1.2.1.jpg' },
    { id: 4, title: 'editing', description: 'Video editing', folder: 'project4', link: 'editing.html', image: 'Screenshot 2025-03-14 133714.png' }
];

// Load portfolio items
function loadPortfolio() {
    portfolioGrid.innerHTML = '';
    
    portfolioData.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item');
        
        portfolioItem.innerHTML = `
            <div class="portfolio-img" style="width: 100%; height: 180px; overflow: hidden; display: flex; align-items: center; justify-content: center; background-color: #5a5a5a;">
                ${item.image ? `<img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">` : ''} <!-- แสดงรูปเฉพาะ Logo Design -->
            </div>
            <div class="portfolio-info">
                <h3><a href="${item.link}" target="_blank" style="text-decoration: none; color: inherit;">${item.title}</a></h3>
                <p>${item.description}</p>
            </div>
        `;
        
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Load portfolio on page load
document.addEventListener('DOMContentLoaded', loadPortfolio);
    

// Show modal
accountBtn.addEventListener('click', (e) => {
    e.preventDefault();
    accountModal.style.display = 'block';
});

// Close modal
closeAccount.addEventListener('click', () => {
    accountModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === accountModal) {
        accountModal.style.display = 'none';
    }
});

// Form submissions (simulated)
submitLogin.addEventListener('click', () => {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email && password) {
        // In a real app, you would validate credentials against a server
        simulateLogin(email);
    } else {
        alert('Please fill in all fields');
    }
});

submitRegister.addEventListener('click', () => {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (name && email && password && confirmPassword) {
        if (password === confirmPassword) {
            // In a real app, you would send this data to a server
            alert('Registration successful! You are now logged in.');
            simulateLogin(email);
        } else {
            alert('Passwords do not match');
        }
    } else {
        alert('Please fill in all fields');
    }
});

// Simulate login
function simulateLogin(email) {
    // Extract username from email (for display purposes)
    const username = email.split('@')[0];
    
    // Update UI for logged in user
    accountBtn.textContent = 'Dashboard';
    accountBtn.href = '#dashboard';
    dashboard.classList.remove('hidden');
    usernameSpan.textContent = username;
    
    // Close modal
    accountModal.style.display = 'none';
    
    // Store login info in local storage
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('username', username);
    
    alert('Login successful!');
}

// Logout functionality
logoutBtn.addEventListener('click', () => {
    accountBtn.textContent = 'Account';
    accountBtn.href = '#account';
    dashboard.classList.add('hidden');
    
    // Clear local storage
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    
    alert('Logged out successfully');
});

// Check if user is already logged in
window.addEventListener('load', () => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn === 'true') {
        const savedUsername = localStorage.getItem('username');
        accountBtn.textContent = 'Dashboard';
        accountBtn.href = '#dashboard';
        dashboard.classList.remove('hidden');
        usernameSpan.textContent = savedUsername;
    }
});

// รีเฟรชหน้าเว็บเมื่อคลิกที่โลโก้
document.getElementById('logo').addEventListener('click', function() {
    window.location.reload();
});


