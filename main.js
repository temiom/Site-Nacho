
function dofusBuildsMenu() {
    const classState = `${dofusBuilds.classList}`

    if (classState == `` ) {
        openDofusBuildsMenu()
        return
    }

    if (classState == `buildMenu-expanded`) {
        closeDofusBuildsMenu()
    }
}

function openDofusBuildsMenu() {
    dofusBuilds.classList.add('buildMenu-expanded')
}

function closeDofusBuildsMenu() {
    dofusBuilds.classList.remove('buildMenu-expanded')
}

function classDofusBuildsMenu(name) {
    let className = document.querySelector(`#${name}`)
    let classState = `${className.classList}`
    if (classState == `` ) {
        closeClassDofusBuildsMenu('Geral')
        closeClassDofusBuildsMenu('Cra')
        closeClassDofusBuildsMenu('Ecaflip')
        closeClassDofusBuildsMenu('Eliotrope')
        closeClassDofusBuildsMenu('Enutrof')
        closeClassDofusBuildsMenu('Feca')
        closeClassDofusBuildsMenu('Forjalança')
        closeClassDofusBuildsMenu('Iop')
        closeClassDofusBuildsMenu('Kilorf')
        closeClassDofusBuildsMenu('Osamodas')
        closeClassDofusBuildsMenu('Pandawa')
        closeClassDofusBuildsMenu('Sacrier')
        closeClassDofusBuildsMenu('Sadida')
        closeContentBuildMenu('Geral')
        closeContentBuildMenu('Cra')
        closeContentBuildMenu('Ecaflip')
        closeContentBuildMenu('Eliotrope')
        closeContentBuildMenu('Enutrof')
        closeContentBuildMenu('Feca')
        closeContentBuildMenu('Forjalança')
        closeContentBuildMenu('Iop')
        closeContentBuildMenu('Kilorf')
        closeContentBuildMenu('Osamodas')
        closeContentBuildMenu('Pandawa')
        closeContentBuildMenu('Sacrier')
        closeContentBuildMenu('Sadida')
        
        openClassDofusBuildsMenu(name)
        openContentBuildMenu(name)
        return
    }

    if (classState = `classDofusBuildsMenu-expanded`) {
        closeClassDofusBuildsMenu(name)
        closeContentBuildMenu(name)
    }

}

function openClassDofusBuildsMenu(name) {
    let className = document.querySelector(`#${name}`)
    className.classList.add('classDofusBuildsMenu-expanded')
}
function closeClassDofusBuildsMenu(name) {
    let className = document.querySelector(`#${name}`)
    className.classList.remove('classDofusBuildsMenu-expanded')
}

// hiddenContent / Build Menu on 1024px screen

function openContentBuildMenu(name) {
    let className = document.querySelector(`#${name}Content`)
    className.classList.add('hiddenContentMenu-expanded')
}
function closeContentBuildMenu(name) {
    let className = document.querySelector(`#${name}Content`)
    className.classList.remove('hiddenContentMenu-expanded')
}

// Elements 

function elementsBuildsMenu(name) {
    let className = document.querySelector(`#${name}`)
    let classState = `${className.classList}`
    if (classState == `` ) {
        openElementsBuildsMenu(name)
        return
    }

    if (classState = `elementsBuildsMenu-expanded`) {
        closeElementsBuildsMenu(name)
    }

}

function openElementsBuildsMenu(name) {
    let className = document.querySelector(`#${name}`)
    className.classList.add('elementsBuildsMenu-expanded')
}
function closeElementsBuildsMenu(name) {
    let className = document.querySelector(`#${name}`)
    className.classList.remove('elementsBuildsMenu-expanded')
}

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()

    activateMenuAtCurrentSection(brunachosBuilds)
    activateMenuAtCurrentSection(tutorials)
}

function showNavOnScroll() {
    navigation = document.getElementById('navigation')
    navigation.classList.add('scroll')

    if (scrollY == 0) {
        navigation.classList.remove('scroll')
    }
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY +  innerHeight / 2

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    const sectionEndAt = sectionTop + sectionHeight

    const sectionEndPassedTargetLine = sectionEndAt <= targetLine

    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    } 
}


ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`#home, 
    #home img, 
    #home header,
    #about,
    #about .detail,
    #about .social-links,
    #about .about,
    #brunachosBuilds,
    #brunachosBuilds .hiddenContent,
    #brunachosBuilds header,
    #brunachosBuilds .content,
    #brunachosBuilds #dofusBuilds,
    `);