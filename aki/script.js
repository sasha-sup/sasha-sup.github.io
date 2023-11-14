const translations = {
    'en': {
        greeting: 'Hello, my name is Akihiro 🦊',
        lost_dog_heading: 'I\'m lost and I really want to get home 🏠',
        lost_dog_contanct: 'Call my parents 🥺',
        owner_info: {
            sasha: 'Sasha 🙋🏻‍♂️:',
            marina: 'Marina 🙋‍♀️:',
        },
    },
    'ru': {
        greeting: 'Привет, меня зовут Акихиро 🦊',
        lost_dog_heading: 'Я потерялась и очень хочу попасть домой 🏠',
        lost_dog_contanct: 'Позвоните моим родителям 🥺',
        owner_info: {
            sasha: 'Саша 🙋🏻‍♂️:',
            marina: 'Марина 🙋‍♀️:',
        },
    }
};


function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const ownerKey = element.getAttribute('data-owner');

        if (key === 'owner_info') {
            const translatedText = translations[language][key][ownerKey];
            element.childNodes[0].nodeValue = translatedText;
        } else {
            const translatedText = translations[language][key];
            element.innerText = translatedText;
        }
    });
}

