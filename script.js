document.addEventListener('DOMContentLoaded', function () {
    const dataList = document.getElementById('data-list');

    // Fetch data from the fake API
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            // Loop through the data and create list items
            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.className = 'data-item';
                listItem.textContent = `Name: ${item.name}, Email: ${item.email}`;
                dataList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            const listItem = document.createElement('li');
            listItem.className = 'data-item';
            listItem.textContent = 'Failed to load data.';
            dataList.appendChild(listItem);
        });
});