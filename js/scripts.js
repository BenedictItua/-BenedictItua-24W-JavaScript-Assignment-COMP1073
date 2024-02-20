// Constants for query selectors
const studentID = document.getElementById('studentID');
const colorInput = document.getElementById('colorInput');
const changeCustomColorBtn = document.getElementById('changeCustomColor');
const changeRandomColorBtn = document.getElementById('changeRandomColor');
const imageSelect = document.getElementById('imageSelect');
const displayedImage = document.getElementById('displayedImage');

// Function to display student ID
function displayStudentID() {
    studentID.textContent = "Student ID is 1220702";
}

// Function to change background color based on user input
function changeCustomColor() {
    const userInput = parseInt(colorInput.value);
    let color;

    if (userInput < 0 || userInput > 100) {
        color = 'red';
    } else if (userInput <= 20) {
        color = 'green';
    } else if (userInput <= 40) {
        color = 'blue';
    } else if (userInput <= 60) {
        color = 'orange';
    } else if (userInput <= 80) {
        color = 'purple';
    } else {
        color = 'yellow';
    }

    document.body.style.backgroundColor = color;
    displayStudentID();
    changeCustomColorBtn.textContent = "Custom color changed"; // Update button text
}

// Function to change background color with random number
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    changeBackgroundColor(randomNumber);
    changeRandomColorBtn.textContent = "Random color changed"; // Update button text
}

// Function to change background color based on value
function changeBackgroundColor(value) {
    let color;

    if (value < 0 || value > 100) {
        color = 'red';
    } else if (value <= 20) {
        color = 'green';
    } else if (value <= 40) {
        color = 'blue';
    } else if (value <= 60) {
        color = 'orange';
    } else if (value <= 80) {
        color = 'purple';
    } else {
        color = 'yellow';
    }

    document.body.style.backgroundColor = color;
}

// Function to generate options for select list
function generateImageOptions() {
    const imageNames = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

    imageNames.forEach(imageName => {
        const option = document.createElement('option');
        option.textContent = imageName;
        option.value = imageName;
        imageSelect.appendChild(option);
    });
}

// Function to display selected image
function displaySelectedImage() {
    const selectedImage = imageSelect.value;
    displayedImage.src = 'img/' + selectedImage;
}

// Event listeners
changeCustomColorBtn.addEventListener('click', changeCustomColor);
changeRandomColorBtn.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('change', displaySelectedImage);

// Generate image options
generateImageOptions();
