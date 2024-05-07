let currentQuestion = 0;
        let answers = {
            Cedric: 0,
            Ron: 0,
            Harry: 0,
            Draco: 0
        };
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

        function displayQuestion() {
            questionDiv.textContent = questions[currentQuestion].question;
            optionsDiv.innerHTML = '';
            questions[currentQuestion].options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.classList.add('quizOption');
                optionDiv.textContent = option;
                optionDiv.addEventListener('click', () => selectOption(index));
                optionsDiv.appendChild(optionDiv);
            });
        }

        function selectOption(index) {
            const answer = questions[currentQuestion].answers[index];
            answers[answer]++;
            nextQuestion();
        }

        function nextQuestion() {
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                displayQuestion();
            } else {
                showWinDialog();
            }
        }

        function showWinDialog() {
    const house = Object.keys(answers).reduce((a, b) => answers[a] > answers[b] ? a : b);
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomProduct = products[randomIndex];

    // Define colors for each house
    const houseColors = {
        Harry: { background: "#68251f", text: "#ffd700", buttonBackground: "#ffd700", buttonText: "#68251f" }, // Red background, golden text, dark red button
        Draco: { background: "#4b8646", text: "#ffffff", buttonBackground: "#ffffff", buttonText: "#4b8646" }, // Green background, white text, dark green button
        Cedric: { background: "#edd364", text: "#000000", buttonBackground: "#000000", buttonText: "#edd364" }, // Yellow background, black text, dark yellow button
        Ron: { background: "#68251f", text: "#ffd700", buttonBackground: "#ffd700", buttonText: "#68251f" } // Blue background, white text, dark blue button
    };

    // Get the colors for the current house
    const colors = houseColors[house];

    winDialogContent.innerHTML = `
        <h2>Congratulations, ${nameInput.value}!</h2>
        <h2>${house} will take you to yule ball</h2>
        <img src="${houseImages[house]}" alt="${house}" style="border-radius: 10px;">
        <h4>You Won Free ${randomProduct.name}</h4>
        <div id="productContainer" class="product">
            <img src="${randomProduct.image}" alt="${randomProduct.name}">
            <br><br><br>
            <a href="${randomProduct.link}" target="_blank" class="product-btn" style="background-color: ${colors.buttonBackground}; color: ${colors.buttonText}; text-decoration: none; padding: 8px 16px; border-radius: 4px;">Claim Reward</a>
        </div><br>
    `;

    // Set background color and text color based on the house
    winDialog.style.backgroundColor = colors.background;
    winDialogContent.style.color = colors.text;

    winDialog.style.display = 'block';
}


        // Remove retake button event listener // retakeQuizBtn.addEventListener('click', () => { // currentQuestion = 0; // answers = { // Gryffindor: 0, // Slytherin: 0, // Hufflepuff: 0, // Ravenclaw: 0 // }; // displayQuestion(); // winDialog.style.display = 'none'; // startQuizBtn.style.display = 'block'; // Show Start Quiz button // document.getElementById('inputFields').style.display = 'block'; // Show input fields // quizContent.style.display = 'none'; // nameInput.value = ''; // instagramInput.value = ''; // });

        startQuizBtn.addEventListener('click', () => {
            startQuizBtn.style.display = 'none';
            document.getElementById('inputFields').style.display = 'none'; // Hide input fields
            quizContent.style.display = 'block';
            displayQuestion();
        });

        winDialog.addEventListener('click', (e) => {
            if (e.target && e.target.id === 'retakeQuizBtn') {
                winDialog.style.display = 'none';
                currentQuestion = 0;
                answers = {
                    Cedric: 0,
                    Ron: 0,
                    Harry: 0,
                    Draco: 0
                };
                displayQuestion();
                startQuizBtn.style.display = 'block'; // Show Start Quiz button
                document.getElementById('inputFields').style.display = 'block'; // Show input fields
            }
        });

        const products = [{
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