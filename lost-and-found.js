// Initialize an empty array if nothing is stored in localStorage
let lostItems = JSON.parse(localStorage.getItem('lostItems')) || [];
let foundItems = JSON.parse(localStorage.getItem('foundItems')) || [];

// Function to display the items
function displayItems() {
    // Display lost items
    const lostItemsContainer = document.getElementById('lostItems');
    lostItemsContainer.innerHTML = '';  // Clear current list
    lostItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <h3>Lost Item #${index + 1}: ${item.name}</h3>
            <p>${item.description}</p>
            <p><strong>Contact:</strong> ${item.contactNumber || 'Not Provided'}</p>
        `;
        lostItemsContainer.appendChild(itemDiv);
    });

    // Display found items
    const foundItemsContainer = document.getElementById('foundItems');
    foundItemsContainer.innerHTML = '';  // Clear current list
    foundItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <h3>Found Item #${index + 1}: ${item.name}</h3>
            <p>${item.description}</p>
            <p><strong>Contact:</strong> ${item.contactNumber || 'Not Provided'}</p>
        `;
        foundItemsContainer.appendChild(itemDiv);
    });
}

// Form submission logic
document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const itemType = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const contactNumber = document.getElementById('contactNumber').value;

    const newItem = { name, description, contactNumber };

    if (itemType === 'lost') {
        lostItems.push(newItem);
        localStorage.setItem('lostItems', JSON.stringify(lostItems)); // Save to localStorage
    } else {
        foundItems.push(newItem);
        localStorage.setItem('foundItems', JSON.stringify(foundItems)); // Save to localStorage
    }

    displayItems(); // Update displayed items

    // Clear form
    document.getElementById('reportForm').reset();
});

// Initial display of items from localStorage
displayItems();
