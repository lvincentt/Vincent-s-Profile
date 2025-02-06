// Get all the card containers and their corresponding buttons
const cardContainers = {
    'best-seller': document.querySelector('.best-seller'),
    'limited-edition': document.querySelector('.limited-edition'),
    'staff-picks': document.querySelector('.staff-picks')
};

// Function to handle scrolling
function handleScroll(direction, sectionId) {
    const container = cardContainers[sectionId];
    if (!container) return;

    // Calculate the width of one card plus the gap
    // Card width (300px) + gap (3rem = 48px) = 348px
    const scrollAmount = 348;
    
    // Calculate the new scroll position
    const newScrollPosition = direction === 'next' 
        ? container.scrollLeft + scrollAmount
        : container.scrollLeft - scrollAmount;
    
    // Smooth scroll to the new position
    container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
    });
}

// Add click event listeners to all arrow buttons
document.querySelectorAll('.section-header').forEach(header => {
    const prevBtn = header.querySelector('.prev-btn');
    const nextBtn = header.querySelector('.next-btn');
    
    // Find the closest section to determine which carousel we're controlling
    const section = header.closest('.product-section');
    let sectionId;
    
    // Determine the section ID based on the section
    if (section.id === 'bestseller') {
        sectionId = 'best-seller';
    } else if (section.id === 'limted-edition') {
        sectionId = 'limited-edition';
    } else if (section.id === 'staff-picks') {
        sectionId = 'staff-picks';
    }
    
    // Add click handlers
    prevBtn.addEventListener('click', () => handleScroll('prev', sectionId));
    nextBtn.addEventListener('click', () => handleScroll('next', sectionId));
});

// Add scroll event listeners to handle button visibility
Object.entries(cardContainers).forEach(([sectionId, container]) => {
    const section = container.closest('.product-section');
    const prevBtn = section.querySelector('.prev-btn');
    const nextBtn = section.querySelector('.next-btn');

    container.addEventListener('scroll', () => {
        // Show/hide previous button based on scroll position
        prevBtn.style.opacity = container.scrollLeft <= 0 ? '0.5' : '1';
        
        // Show/hide next button based on whether we can scroll further
        const maxScroll = container.scrollWidth - container.clientWidth;
        nextBtn.style.opacity = container.scrollLeft >= maxScroll ? '0.5' : '1';
    });
    
    // Initial button state
    prevBtn.style.opacity = '0.5';
});