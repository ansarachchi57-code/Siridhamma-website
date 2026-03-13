// app.js
document.addEventListener('DOMContentLoaded', () => {
    // Current Time
    const timeDisplay = document.getElementById('current-time');
    setInterval(() => {
        const now = new Date();
        timeDisplay.textContent = now.toLocaleString('si-LK');
    }, 1000);

    // Sidebar Navigation
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.view-section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('data-target');
            
            // Remove active from all
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active'));
            
            // Add active to clicked
            item.classList.add('active');
            
            const targetSec = document.getElementById(targetId);
            if(targetSec) {
                targetSec.classList.add('active');
            } else {
                const placeholder = document.getElementById('placeholder');
                if (placeholder) {
                    placeholder.classList.add('active');
                    document.getElementById('placeholder-title').textContent = item.textContent.trim();
                }
            }
        });
    });

    // Image Upload Handlers
    const logoUpload = document.getElementById('logo-upload');
    const sidebarLogo = document.getElementById('sidebar-logo');
    
    if (logoUpload && sidebarLogo) {
        logoUpload.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                const reader = new FileReader();
                reader.onload = function(uploadObj) {
                    sidebarLogo.src = uploadObj.target.result;
                }
                reader.readAsDataURL(e.target.files[0]);
            }
        });
    }

    const bannerUpload = document.getElementById('banner-upload');
    const heroImage = document.getElementById('hero-image');

    if (bannerUpload && heroImage) {
        bannerUpload.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                const reader = new FileReader();
                reader.onload = function(uploadObj) {
                    heroImage.src = uploadObj.target.result;
                }
                reader.readAsDataURL(e.target.files[0]);
            }
        });
    }
});

function sendNoticeWhatsApp() {
    alert("නිවේදනය සාර්ථකව පලකළ අතර අදාළ පාර්ශවයන්ට පණිවිඩ යවන ලදී. (Message sent!)");
}

function sendAbsentWhatsApp() {
    alert("දෙමාපියන්ට හෝ ප්‍රධාන ආචාර්යවරයාට පණිවිඩය යවන ලදී. (Message sent to parent/principal!)");
}

function sendExamMarksWhatsApp() {
    alert("විභාග ලකුණු දෙමාපියන්ට යවන ලදී. (Marks sent!)");
}

// Inline Table Row Addition
window.addRow = function(tbodyId) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    
    let colCount = 5;
    if (tbodyId === 'students-tbody') colCount = 6;
    
    if (tbody.rows.length > 0) {
        colCount = tbody.rows[0].cells.length;
    }
    
    const tr = document.createElement('tr');
    
    let html = '';
    for(let i=0; i<colCount - 1; i++) {
        html += '<td contenteditable="true">[නව දත්ත]</td>';
    }
    html += '<td><button class="btn btn-danger btn-sm" onclick="this.closest(\'tr\').remove()"><i class="fa-solid fa-trash"></i></button></td>';
    
    tr.innerHTML = html;
    tbody.appendChild(tr);
};
