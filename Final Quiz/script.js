
import { questions } from "./questions.js";
import { uploadToDatabase } from "./firebase.js";


let currentQuestion = 0;
let score = 0;
let wrongs = 0;
let startTime = 0;
let endTime = 0;
let percentage;
let timeTaken = 0;
const nameInput = document.getElementById('nameInput');
const instagramInput = document.getElementById('instagramInput');
const startQuizBtn = document.getElementById('startQuizBtn');
const quizContent = document.getElementById('quizContent');
const questionDiv = document.getElementById('quizQuestion');
const optionsDiv = document.getElementById('quizOptions');
const dialog = document.getElementById('quizDialog');
const dialogContent = document.getElementById('dialogContent');
const winDialog = document.getElementById('winDialog');
const winDialogContent = document.getElementById('winDialogContent');
const retakeQuizBtn = document.getElementById('retakeQuizBtn');
const scoreBanner = document.getElementById('scoreBanner');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayQuestion() {
    questionDiv.textContent = questions[currentQuestion].question;
    optionsDiv.innerHTML = '';
    questions[currentQuestion].options.forEach((option) => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('quizOption');
        optionDiv.textContent = option;
        optionDiv.addEventListener('click', () => selectOption(option));
        optionsDiv.appendChild(optionDiv);
    });
}

function selectOption(option) {
    optionsDiv.querySelectorAll('.quizOption').forEach((opt) => {
        opt.removeEventListener('click', () => { });
        opt.style.pointerEvents = 'none';
    });
    const selectedOption = option.trim().toLowerCase();
    const correctAnswer = questions[currentQuestion].answer.trim().toLowerCase();
    if (selectedOption === correctAnswer) {
        showDialog("Correct Answer!", "#036541");
        score++;
    } else {
        showDialog("Wrong Answer!", "#ab3143");
        wrongs++;
    }
}

function showDialog(message, color) {
    dialogContent.textContent = message;
    dialogContent.style.color = color;
    dialog.style.display = 'block';
    dialog.style.animation = 'fadeIn 0.5s ease forwards';
    setTimeout(() => {
        dialog.style.animation = 'fadeOut 0.5s ease forwards';
        setTimeout(() => {
            dialog.style.display = 'none';
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                displayQuestion();
            } else {
                endTime = Date.now();
                timeTaken = (endTime - startTime) / 1000; // Calculate time taken in seconds
                const name = nameInput.value.trim();
                const instagramId = instagramInput.value.trim();
                showWinDialog(name, instagramId, timeTaken);
            }
        }, 500);
    }, 1000);
}

function closeDialog() {
    dialog.style.display = 'none';
}

displayQuestion();

function showWinDialog(name, instagramId, timeTaken) {
    percentage = ((score / questions.length) * 100).toFixed(2); 
    let message;
    let certification;
    if (percentage >= 80) {
        // console.log(timeTaken);
        uploadToDatabase(nameInput.value.trim(), instagramInput.value.trim(), parseInt(percentage), timeTaken);
        message = `Congratulations, ${name}!`;
        certification = `You are a true Potterhead and have earned the Certified Potterhead certification!`;

        // Show the download certificate button
        document.getElementById('downloadCertBtn').style.display = 'block';
    } else {
        message = `Nice try, ${name}.`;
        certification = `You are not qualified to become a certified Potterhead this time. Better luck next time!`;

        // Hide the download certificate button
        document.getElementById('downloadCertBtn').style.display = 'none';
    }

    // Hide the score banner
    document.getElementById('scoreBanner').style.display = 'none';


    const products = [
        {
            name: "Harry Potter Magic Wands",
            image: "https://wizardzworld.com/cdn/shop/files/S6e9af013a6114866a699c97b6c692168q.webp?v=1711706961&width=200",
            link: "https://wizardzworld.com/products/harry-potter-magic-wands?country=US"
        },
        {
            name: "Golden Snitch Pocket Watches",
            image: "https://cdn.shopify.com/s/files/1/0595/9604/6397/files/S870b5303075742f6901bd88275d6d8150.webp?v=1712129712&width=200",
            link: "https://wizardzworld.com/products/hp-themed-pocket-watches?variant=41122661466173"
        },
        {
            name: "Marauder's Map Pocket Watch",
            image: "https://wizardzworld.com/cdn/shop/files/Bronze-The-Marauder-s-Map-Design-Pendant-Pocket-Watch-Old-Fashion-Souvenir-Necklace-Clock-Gifts-for-3558990850.jpg?v=1712129712&width=200",
            link: "https://wizardzworld.com/products/new-arrival-map-bronze-quartz-pocket-watch-with-pendant-necklace-men-womens-watches-gift?country=US"
        },
        {
            name: "Horcrux Pocket Watches!",
            image: "https://wizardzworld.com/cdn/shop/files/m_63fa9d966149732373b3cd5d.jpg?v=1712129712&width=200",
            link: "https://wizardzworld.com/products/horcrux-pocket-watches?country=US"
        },
        {
            name: "Deathly Hallows Pendant Necklace",
            image: "https://wizardzworld.com/cdn/shop/files/S9df21cec79fb43ad9b9c24cbc28fb743p.webp?v=1712679890&width=200",
            link: "https://wizardzworld.com/products/deathly-hallows-pendant-necklace"
        }
    ];

    const randomProduct = products[Math.floor(Math.random() * products.length)];

    winDialogContent.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center;">
            <h2 style="margin-bottom: 10px;">${message}</h2>
            <p style="font-size: 1.2rem; margin-bottom: 5px;">${certification}</p>
            <p style="font-size: 1.2rem; margin-bottom: 5px;">Your Score: ${score}/${questions.length} (${percentage}%)</p>
            <p style="font-size: 1.2rem; margin-bottom: 5px;">Time Taken: ${timeTaken} seconds</p>
            <p style="font-size: 1.2rem; margin-bottom: 5px;">Your Instagram ID: ${instagramId}</p>
            <h3 style="margin-top: 20px; margin-bottom: 5px;">You've Won: ${randomProduct.name}</h3>
            <div id="productContainer" class="product" style="margin-top: 10px;">
                <img src="${randomProduct.image}" alt="${randomProduct.name}" style="max-width: 100%; height: auto;">
                <br><br><br>
                <a href="${randomProduct.link}" target="_blank" class="product-btn" style="background-color: #774a2d; color: white; text-decoration: none; padding: 8px 16px; border-radius: 4px;">Claim Reward</a>
                <br><br><button id="quizrank">Check Your Rank</button>
            </div>
        </div>
    `;
    winDialog.style.display = 'block';
}



document.getElementById("downloadCertBtn").addEventListener('click', () => {
    const name = encodeURIComponent(document.getElementById('nameInput').value);
    percentage = encodeURIComponent(percentage)
    window.open(`certificate.html?name=${name}&percentage=${percentage}`, "_blank")
    // window.location.href = "certificate.html";
})

document.getElementById("quizrank").addEventListener('click', () => {
    window.open('Rank.html', '_blank');
});


retakeQuizBtn.addEventListener('click', () => {
    // currentQuestion = 0;
    // score = 0;
    // wrongs = 0;
    // displayQuestion();
    winDialog.style.display = 'none';
    // startQuizBtn.style.display = 'block';
    // document.getElementById('inputFields').style.display = 'block';
    // quizContent.style.display = 'none';
    // nameInput.value = '';
    // instagramInput.value = '';
    // scoreBanner.style.display = 'none';
    startTime = Date.now();
    quizContent.style.display = 'block';
    scoreBanner.style.display = 'block';
    shuffle(questions);
    questions.splice(1);
    currentQuestion = 0;
    score = 0;
    wrongs = 0;
    displayQuestion();
});

startQuizBtn.addEventListener('click', () => {
    hideQuizImage();
    startTime = Date.now();
    startQuizBtn.style.display = 'none';
    document.getElementById('inputFields').style.display = 'none';
    quizContent.style.display = 'block';
    scoreBanner.style.display = 'block';
    shuffle(questions);
    questions.splice(1);
    currentQuestion = 0;
    score = 0;
    wrongs = 0;
    displayQuestion();
});

function updateScoreBanner() {
    const questionsElement = document.getElementById('questions');
    const rightsElement = document.getElementById('rights');
    const wrongsElement = document.getElementById('wrongs');
    const percentageElement = document.getElementById('percentage');
    questionsElement.textContent = `Q: ${currentQuestion + 1}/${questions.length}`;
    rightsElement.textContent = `R: ${score}`;
    wrongsElement.textContent = `W: ${wrongs}`;
    percentageElement.textContent = `Percentage: ${((score / (currentQuestion + 1)) * 100).toFixed(2)}%`;
}

setInterval(updateScoreBanner, 100);

// Get the quiz image element
const quizImage = document.getElementById('quizImage');

// Function to hide the quiz image
function hideQuizImage() {
    quizImage.style.display = 'none';
}

function hideResultbutton() {
    quizImage.style.display = 'none';
}

// Event listener for the start quiz button
// startQuizBtn.addEventListener('click', () => {
//     // Hide the quiz image when the button is clicked
//     hideQuizImage();

//     // Other logic for starting the quiz...
// });

// Function to show the quiz image
function showQuizImage() {
    quizImage.style.display = 'block'; // or 'inline' if it was originally an inline element
}

// Event listener for the retake quiz button
// retakeQuizBtn.addEventListener('click', () => {
//     // Show the quiz image when the button is clicked
//     showQuizImage();

//     // Other logic for retaking the quiz...
// });

const quizRankBtn = document.getElementById('quizrank');
// Event listener for the "Start Quiz" button
startQuizBtn.addEventListener('click', () => {
    // Hide the quiz rank button
    quizRankBtn.style.display = 'none';
    
    // Other logic for starting the quiz...
});
