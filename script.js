// Burger menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');

    // Fetch random user from the RandomUser API
const getRandomUser = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];

        // Get random user's image and name
        const userImage = user.picture.large;
        const userName = `${user.name.first} ${user.name.last}`;

        // Update HTML with fetched data
        document.getElementById('random-user-img').src = userImage;
        document.getElementById('random-user-name').textContent = userName;
    } catch (error) {
        console.error('Error fetching random user:', error);
    }
};

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', getRandomUser);

});