
// Sample game data for the table
const gameData = [
    {
        gameNumber: 1547,
        word: "CRANE",
        difficulty: "medium",
        avgAttempts: 3.8,
        successRate: 92,
        date: "2024-01-15"
    },
    {
        gameNumber: 1546,
        word: "BLITZ",
        difficulty: "hard",
        avgAttempts: 4.2,
        successRate: 78,
        date: "2024-01-14"
    },
    {
        gameNumber: 1545,
        word: "HAPPY",
        difficulty: "easy",
        avgAttempts: 3.1,
        successRate: 96,
        date: "2024-01-13"
    },
    {
        gameNumber: 1544,
        word: "QUERY",
        difficulty: "hard",
        avgAttempts: 4.5,
        successRate: 71,
        date: "2024-01-12"
    },
    {
        gameNumber: 1543,
        word: "DANCE",
        difficulty: "easy",
        avgAttempts: 2.9,
        successRate: 98,
        date: "2024-01-11"
    },
    {
        gameNumber: 1542,
        word: "GLOBE",
        difficulty: "medium",
        avgAttempts: 3.6,
        successRate: 89,
        date: "2024-01-10"
    },
    {
        gameNumber: 1541,
        word: "WROTH",
        difficulty: "hard",
        avgAttempts: 4.8,
        successRate: 65,
        date: "2024-01-09"
    },
    {
        gameNumber: 1540,
        word: "BRAVE",
        difficulty: "easy",
        avgAttempts: 3.0,
        successRate: 94,
        date: "2024-01-08"
    }
];

// Function to populate the table
function populateTable() {
    const tableBody = document.getElementById('gamesTableBody');
    
    gameData.forEach(game => {
        const row = document.createElement('tr');
        
        // Format the date
        const formattedDate = new Date(game.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
        
        // Create difficulty badge
        const difficultyClass = `difficulty-${game.difficulty}`;
        const difficultyBadge = `<span class="${difficultyClass}">${game.difficulty.toUpperCase()}</span>`;
        
        row.innerHTML = `
            <td>#${game.gameNumber}</td>
            <td><strong>${game.word}</strong></td>
            <td>${difficultyBadge}</td>
            <td>${game.avgAttempts}</td>
            <td>${game.successRate}%</td>
            <td>${formattedDate}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Function to add hover effects to cards
function addCardEffects() {
    const cards = document.querySelectorAll('.content-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
}

// Function to add smooth scrolling for internal links
function addSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Function to add loading animation
function addLoadingAnimation() {
    const table = document.getElementById('gamesTable');
    table.style.opacity = '0';
    table.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        table.style.transition = 'all 0.5s ease';
        table.style.opacity = '1';
        table.style.transform = 'translateY(0)';
    }, 300);
}

// Function to track clicks on external links
function trackExternalLinks() {
    const externalLinks = document.querySelectorAll('a[href^="https://wordleunlimitedunblocked.com/"]');
    
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('External link clicked:', this.href);
            // Add analytics tracking here if needed
        });
    });
}

// Function to generate random stats (for demo purposes)
function generateRandomStats() {
    const words = ['TIGER', 'MOUSE', 'PLANT', 'STORM', 'BEACH', 'MUSIC', 'LIGHT', 'PHONE'];
    const difficulties = ['easy', 'medium', 'hard'];
    
    // Add one new random entry to demonstrate dynamic content
    const newGame = {
        gameNumber: 1548,
        word: words[Math.floor(Math.random() * words.length)],
        difficulty: difficulties[Math.floor(Math.random() * difficulties.length)],
        avgAttempts: (Math.random() * 2 + 2.5).toFixed(1),
        successRate: Math.floor(Math.random() * 30 + 70),
        date: new Date().toISOString().split('T')[0]
    };
    
    // Add to the beginning of the array
    gameData.unshift(newGame);
    
    // Keep only the latest 8 games
    if (gameData.length > 8) {
        gameData.pop();
    }
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Generate some random stats for demo
    generateRandomStats();
    
    // Populate the table
    populateTable();
    
    // Add interactive effects
    addCardEffects();
    addSmoothScrolling();
    addLoadingAnimation();
    trackExternalLinks();
    
    // Add some interactive features
    console.log('Wordle Unlimited Hub loaded successfully!');
});

// Add some fun interactive features
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('cta-button') || e.target.classList.contains('play-button')) {
        // Add a subtle animation when buttons are clicked
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = 'scale(1)';
        }, 150);
    }
});
