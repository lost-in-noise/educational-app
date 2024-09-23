"use strict"

// mentors-page drop-down menu
const mentorsPageBtns = document.querySelectorAll(".mentors-page-filter-name")
const mentorsPageImage = document.querySelectorAll(".mentors-page-vector")
const dropDownBtns = document.querySelectorAll(".drop-down-options")
const bullets = document.querySelectorAll(".bullet-li")

mentorsPageBtns.forEach((button, index) => {
    button.addEventListener('click', () => {
        const isActive = button.classList.contains('active')
        const activeImg = '../images/mentors-page/vector-up.svg'

        mentorsPageBtns.forEach(btn => btn.classList.remove('active'))
        dropDownBtns.forEach(div => div.style.display = 'none')
        mentorsPageImage.forEach(img => img.src = '../images/mentors-page/vector-down.svg')

        if (!isActive) {
            button.classList.add('active')
            if (dropDownBtns[index]) {
                dropDownBtns[index].style.display = 'flex'
            }
            if (mentorsPageImage[index]) {
                mentorsPageImage[index].src = activeImg
            }
        }
    })
})


//filter serach-bar
const pages = document.querySelectorAll(".page")
const allPersonBoxes = document.querySelectorAll(".person-box")

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.search-form')
    const inputField = document.querySelector(".input-field")

    function searchBar(items, searchItem) {
        const caseInsensitive = searchItem.toLowerCase()
        return items.filter(item => item.toLowerCase().includes(caseInsensitive))
    }

    function updateResults() {
        const search = inputField.value.replace(/\s+/g, '')
        const allPersonDetails = Array.from(allPersonBoxes).map(box => {
            const name = box.querySelector(".person-name").textContent.trim()
            const direction = box.querySelector(".direction").textContent.trim()
            return { name, direction, box }
        })

        const personBoxesMap = allPersonDetails.reduce((map, { name, direction, box }) => {
            const key = `${name} ${direction}`.toLowerCase().replace(/\s+/g, '') 
            if (!map[key]) {
                map[key] = []
            }
            map[key].push(box)
            return map
        }, {})

        const filteredKeys = searchBar(Object.keys(personBoxesMap), search)

        allPersonBoxes.forEach(box => box.style.display = 'none')

        pages.forEach(page => {
            let shouldShowPage = false
             allPersonBoxes.forEach(box => {
                const key = `${box.querySelector(".person-name").textContent.trim()} ${box.querySelector(".direction").textContent.trim()}`.toLowerCase().replace(/\s+/g, '')
                if (filteredKeys.includes(key)) {
                    box.style.display = ''
                    shouldShowPage = true
                }
            })
            page.style.display = shouldShowPage ? 'flex' : 'none'
        })
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault() // Prevent form from submitting and refreshing the page
        updateResults() // Call the filter function on form submission
    })

    inputField.addEventListener('input', updateResults)
})

//cancel button
const cancelBtn = document.querySelector('.cancel-image')
if (cancelBtn) {
    cancelBtn.classList.add('hide-original')
}

// appending bullet-list 
const bulletsDiv = document.querySelector(".selected-filter")
bullets.forEach(bullet => {
    bullet.addEventListener('click', () => {
        const img = bullet.querySelector('img')


        if (bullet.classList.contains("full")) {
            const bulletDiv = bulletsDiv.querySelector(`[data-bullet-id="${bullet.dataset.bulletId}"]`)
            
            if (bulletDiv) {
                bulletsDiv.removeChild(bulletDiv)
            }
            if (img) {
                img.src = '../images/mentors-page/rectangle-empty.svg'
            }
        } else {
            const newBulletDiv = document.createElement('div')
            newBulletDiv.className = 'bullet-item'
            newBulletDiv.dataset.bulletId = bullet.dataset.bulletId
            newBulletDiv.textContent = bullet.textContent
            newBulletDiv.style.border = "1px solid #DEE0F6"
            // newBulletDiv.style.padding = "10px 13px 10px 8px"
            // newBulletDiv.style.marginRight = "24px"

            if (cancelBtn) {
                const cancelBtnClone = cancelBtn.cloneNode(true)
                cancelBtnClone.classList.remove('hide-original')

                cancelBtnClone.addEventListener('click', (e) => {
                    e.stopPropagation()
                    newBulletDiv.remove()
                    bullet.classList.remove("full")
                    if (img) {
                        img.src = '../images/mentors-page/rectangle-empty.svg'
                    }
                    filterPersonBoxes()
                })

                newBulletDiv.appendChild(cancelBtnClone)
            }
            
            bulletsDiv.style.display = "flex"
            bulletsDiv.appendChild(newBulletDiv)

            if (img) {
                img.src = '../images/mentors-page/rectangle-full.svg'
            }
        }

        bullet.classList.toggle("full")
        filterPersonBoxes()
    })
})

bullets.forEach(bullet => {
    bullet.addEventListener('click', () => {
        filterPersonBoxes()
    })
})


function filterClear() {
    const allPages = document.querySelectorAll(".page")
    allPages.forEach(page => {
        page.style.display = "flex"
        const allPersonBoxes = page.querySelectorAll(".person-box")
        allPersonBoxes.forEach(box => {
            box.style.display = "flex"
        })
    })
}

function filterPersonBoxes() {
    const bulletsDiv = document.querySelector(".selected-filter")
    const allPages = document.querySelectorAll(".page")
    const activeFilters = Array.from(document.querySelectorAll(".selected-filter .bullet-item")).map(item => item.textContent.trim())

    if (activeFilters.length === 0) {
        filterClear()
        return
    }

    allPages.forEach(page => {
        const allPersonBoxes = page.querySelectorAll(".person-box")

        allPersonBoxes.forEach(box => {
            const boxContent = `${box.querySelector(".person-name").textContent.trim()} ${box.querySelector(".direction").textContent.trim()}`.toLowerCase().replace(/\s+/g, '')
            const shouldDisplay = activeFilters.some(filter => boxContent.includes(filter.toLowerCase().replace(/\s+/g, '')))
            
            box.style.display = shouldDisplay ? "flex" : "none"
        })

        const hasVisibleBoxes = Array.from(allPersonBoxes).some(box => box.style.display === 'flex')
        page.style.display = hasVisibleBoxes ? 'flex' : 'none'
    })
}

//clear button 
const clearFilter = document.querySelector(".filter-clear")
if (clearFilter) {
    clearFilter.addEventListener("click", () => {
        const bulletsDiv = document.querySelector(".selected-filter")
        if (bulletsDiv) {
            bulletsDiv.innerHTML = ''
        }
        bullets.forEach(bullet => {
            bullet.classList.remove("full")
            const img = bullet.querySelector('img')
            if (img) {
                img.src = '../images/mentors-page/rectangle-empty.svg'
            }
        })
        filterClear() 
    })
}

// page buttons 
document.addEventListener('DOMContentLoaded', () => {
    const pagesBtns = document.querySelector('.pages-btns') // Div with buttons
    const buttons = document.querySelectorAll(".page-btn") // Page buttons
    const childrenArray = Array.from(pagesBtns.children) // Array of button elements
    const originalHTML = childrenArray.map(child => child.innerHTML) // Store original HTML content
    let isUpdated = false

    // Handle dots click event
    document.querySelector(".dots").addEventListener("click", () => {
        if (isUpdated) {
            childrenArray[2].innerHTML = originalHTML[2]
            childrenArray[3].innerHTML = originalHTML[3]
            childrenArray[4].innerHTML = originalHTML[4]
            childrenArray[5].innerHTML = originalHTML[5]
        } else {
            childrenArray[2].innerHTML = "6"
            childrenArray[3].innerHTML = "7"
            childrenArray[4].innerHTML = "8"
            childrenArray[5].innerHTML = "9"
        }
        isUpdated = !isUpdated
    })

    // Handle button click event
    buttons.forEach(btn => {
    const blackVectorL = '../images/mentors-page/people-vector-left0.svg'
    const blackVectorR = '../images/mentors-page/people-vector-right0.svg'
    const grayVectorL =   '../images/mentors-page/page-btns-vector-left.svg'
    const grayVectorR =   '../images/mentors-page/page-btns-vector-right.svg'
    const imgL = document.querySelector("#vector-left")
    const imgR = document.querySelector("#vector-right")
        btn.addEventListener("click", () => {

            if (btn.textContent == 1) {
                imgL.src = grayVectorL
            } else if (btn.textContent == 10) {
                imgR.src = grayVectorR
            } else {
                imgL.src = blackVectorL
                imgR.src = blackVectorR
            }

            buttons.forEach(button => button.classList.remove("purple"))
            btn.classList.add("purple")

            const allPages = document.querySelector(".page-with-backround")
            const pagesArray = Array.from(allPages.children)

            pagesArray.forEach(page => page.style.display = "none")

            const pageToShow = `page${btn.textContent.trim()}`
            const pageElement = allPages.querySelector(`.${pageToShow}`)
            if (pageElement) {
                pageElement.style.display = "flex"
            }
        })
    })

    // Handle vector-right click event
    document.querySelector("#vector-right").addEventListener("click", () => {
        const activeBtn = document.querySelector(".page-btn.purple")
        if (activeBtn) {
            const nextBtn = activeBtn.nextElementSibling
            if (nextBtn && nextBtn.classList.contains("page-btn")) {
                activeBtn.classList.remove("purple")
                nextBtn.classList.add("purple")
                nextBtn.click() 
            }

        }
    })

    //Handle vector-left click event
   document.querySelector("#vector-left").addEventListener("click", () => {
       const activeBtn = document.querySelector(".page-btn.purple")
       if (activeBtn) {
           const prevBtn = activeBtn.previousElementSibling
           if (prevBtn && prevBtn.classList.contains("page-btn")) {
               activeBtn.classList.remove("purple")
               prevBtn.classList.add("purple")
               prevBtn.click()
           }
        }
    })
})

// responsive filter-button
const responsiveFilterBtn = document.querySelector(".responsive-filter-btn")
const responsiveFilterBtnDiv = document.querySelector (".responsive-filter-btn-div")
responsiveFilterBtn.addEventListener("click", ()=> {
    responsiveFilterBtn.classList.toggle("active")
    if (responsiveFilterBtn.classList.contains("active")) {
        responsiveFilterBtnDiv.style.display ="block"
    } else responsiveFilterBtnDiv.style.display = "none"

})
