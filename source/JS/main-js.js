const buttonDestination = document.querySelector('.header__navigation-item')

buttonDestination.addEventListener(
    'click',
    (event) => {
        event.preventDefault()
    }
)
buttonDestination.addEventListener(
    'click',
    () => {
        const blockIndonesiaDesc = document.querySelector('.indonesia__desc')
        blockIndonesiaDesc.scrollIntoView(true)
    }
)

const experiencesButton = document.getElementById('experiences');

experiencesButton.addEventListener(
    'click',
    (event) => {
        event.preventDefault()
    }
)
experiencesButton.addEventListener(
    'click',
    () => {
        const blockResearchResult = document.querySelector('.research-result')
        blockResearchResult.scrollIntoView({behavior:'smooth'})
    }
)


const scrollButtonFooter = document.querySelector('.footer__btn-scroll')

scrollButtonFooter.addEventListener(
    'click',
    (event) => {
        const headerBlock = document.querySelector('header');
        headerBlock.scrollIntoView({
            behavior: "smooth",
            "block": "end"
        })
    }
)


















