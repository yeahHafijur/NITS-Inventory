// Initialize item counts for both Buy and Sell
let sellItemCount = 0;
let buyItemCount = 0;

// Function to handle form submission
document.getElementById('buySellForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page reload

    // Get form data
    const itemType = document.getElementById('itemType').value;
    const itemName = document.getElementById('itemName').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const contactNumber = document.getElementById('contactNumber').value;

    // Generate the item number
    let itemNumber = '';
    if (itemType === 'sell') {
        sellItemCount++;
        itemNumber = `Item No: ${sellItemCount}`;
    } else if (itemType === 'buy') {
        buyItemCount++;
        itemNumber = `Item No: ${buyItemCount}`;
    }

    // Create item details HTML
    const itemDetails = `
        <div class="item">
            <h4>${itemNumber}</h4>
            <p><strong>Name:</strong> ${itemName}</p>
            <p><strong>Description:</strong> ${itemDescription}</p>
            <p><strong>Price:</strong> ${itemPrice}</p>
            <p><strong>Contact:</strong> ${contactNumber}</p>
        </div>
    `;

    // Append item to respective section
    if (itemType === 'sell') {
        document.getElementById('sellItems').innerHTML += itemDetails;
    } else if (itemType === 'buy') {
        document.getElementById('buyItems').innerHTML += itemDetails;
    }

    // Clear the form after submission
    document.getElementById('buySellForm').reset();
});
