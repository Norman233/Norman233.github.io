// Burger menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');

    // Function to fetch random user data
function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())  
        .then(data => {
            const userImage = data.results[0].picture.large; 
            document.getElementById('randomUserImage').src = userImage;  
        })
        .catch(error => console.log('Error fetching random user:', error));  
}

// Run the function to load a random user image when the page loads
window.onload = () => {
    fetchRandomUser();
};
});