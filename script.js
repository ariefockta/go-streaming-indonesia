// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = hamburger.querySelector('.material-symbols-outlined');
        icon.textContent = mobileMenu.classList.contains('hidden') ? 'menu' : 'close';
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            // Add active state
            mobileMenu.querySelectorAll('a').forEach(l => {
                l.classList.remove('!bg-primary', '!text-white');
            });
            link.classList.add('!bg-primary', '!text-white');
            
            // Close menu after short delay
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                const icon = hamburger.querySelector('.material-symbols-outlined');
                icon.textContent = 'menu';
            }, 300);
        });
    });
}

// Portfolio Filter
const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
const portfolioGrid = document.querySelector('#portfolio .grid');

if (filterBtns.length > 0 && portfolioGrid) {
    const portfolioItems = portfolioGrid.querySelectorAll('[class*="col-span"]');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => {
                b.classList.remove('bg-primary', 'text-white', 'shadow-lg', 'shadow-red-500/30');
                b.classList.add('bg-white', 'text-slate-600');
            });
            btn.classList.remove('bg-white', 'text-slate-600');
            btn.classList.add('bg-primary', 'text-white', 'shadow-lg', 'shadow-red-500/30');
            
            // Filter items
            portfolioItems.forEach(item => {
                const categoryText = item.querySelector('.text-primary')?.textContent.toLowerCase();
                
                if (filter === 'all') {
                    item.style.display = '';
                } else if (filter === 'livestream' && (categoryText?.includes('siaran') || categoryText?.includes('multikamera'))) {
                    item.style.display = '';
                } else if (filter === 'booth' && categoryText?.includes('booth')) {
                    item.style.display = '';
                } else if (filter === 'videotron' && categoryText?.includes('videotron')) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Portfolio Lightbox
const portfolioImages = document.querySelectorAll('#portfolio img');

portfolioImages.forEach(img => {
    img.addEventListener('click', (e) => {
        e.stopPropagation();
        const imgSrc = img.src;
        
        // Create lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4';
        lightbox.innerHTML = `
            <button class="absolute top-4 right-4 text-white text-4xl hover:text-primary transition-colors z-10 w-12 h-12 flex items-center justify-center">&times;</button>
            <img src="${imgSrc}" class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" alt="Preview">
        `;

        document.body.appendChild(lightbox);

        // Close on click
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.tagName === 'BUTTON') {
                lightbox.remove();
            }
        });

        // Close on ESC key
        const closeOnEsc = (e) => {
            if (e.key === 'Escape') {
                lightbox.remove();
                document.removeEventListener('keydown', closeOnEsc);
            }
        };
        document.addEventListener('keydown', closeOnEsc);
    });
});

// WhatsApp Form Handler
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nama = document.getElementById('nama').value || 'Tamu';
            const tanggal = document.getElementById('tanggal').value || 'Belum ditentukan';
            const layananEl = document.getElementById('layanan');
            const layanan = layananEl ? layananEl.value : 'Belum dipilih';
            const pesan = document.getElementById('pesan').value || '-';
            
            const message = `Halo, saya ${nama}%0A%0ATanggal Acara: ${tanggal}%0ALayanan: ${layanan}%0A%0APesan: ${pesan}`;
            const waUrl = `https://wa.me/6285393132410?text=${message}`;
            
            window.open(waUrl, '_blank');
        });
    }
});