"use strict";
const filtersEach = document.querySelectorAll(".filter-inner");
const progbox = document.querySelectorAll(".prog-box");
const allFilters = document.querySelectorAll(".each-prog");
const sortFilters = document.querySelectorAll(".each-progs");
const coursesBox = document.querySelector(".courses-inner-div");
const eachCourseDiv = document.querySelector(".each-course");
const pageNumber = document.querySelectorAll(".page-num");
const filterNames = document.querySelector(".filter-items-box");
const cleanAllFiltersBtn = document.querySelector(".clean-btn");
const arrowUpList = document.querySelectorAll(".arrow-up");
const arrowDownList = document.querySelectorAll(".arrow-down");
const paginationDiv = document.querySelector(".pagination-div");
const sortByDates = document.querySelectorAll(".sort-by-dates");
const programsSet = new Set();
const mentorsSet = new Set();
const levelSet = new Set();
const durationSet = new Set();
const ratingsSet = new Set();
let clickedNum = 1;
let filteredDataGlobal;
let originalData;

function addFilterNames(filter) {
  const eachFilter = `<div class="each-filter-item">
       <span class="each-item">${filter}</span>
        <div class="close-btn-div">
         <img
          src="images/courses/close-line-icon (1) 1.svg"
           class="close-btn"
         />
        </div>
      </div>`;

  filterNames.insertAdjacentHTML("beforeend", eachFilter);
}
function removeFilterNames(text) {
  document.querySelectorAll(".each-item").forEach((item) => {
    if (item.textContent === text) {
      item.parentElement.remove();
    }
  });
}
filtersEach.forEach((filterName) => {
  filterName.addEventListener("click", function () {
    let arrowDown = filterName.children[1].children[0];
    let arrowUp = filterName.children[1].children[1];

    progbox.forEach((box) => {
      box !== filterName.nextElementSibling ? box.classList.add("hidden") : "";
    });
    arrowUpList.forEach((arr) => {
      arr.parentElement.parentElement !== filterName
        ? arr.classList.add("hidden")
        : "";
    });
    arrowDownList.forEach((arr) => {
      arr.parentElement.parentElement !== filterName
        ? arr.classList.remove("hidden")
        : "";
    });
    filterName.nextElementSibling?.classList.toggle("hidden");
    arrowDown.classList.toggle("hidden");
    arrowUp.classList.toggle("hidden");
  });
});
cleanAllFiltersBtn.addEventListener("click", function () {
  allFilters.forEach((eachFilter) => {
    eachFilter.children[0].classList.remove("hidden");
    eachFilter.children[1].classList.add("hidden");
    programsSet.clear();
    mentorsSet.clear();
    levelSet.clear();
    durationSet.clear();
    ratingsSet.clear();
    clickedNum = 1;
    main();
    filterNames.innerHTML = "";
  });
  sortFilters.forEach((each) => {
    each.children[0].classList.remove("hidden");
    each.children[1].classList.add("hidden");
    oldToNew = true;
    newToOld = true;
  });
});
function removeFiltersXBtn() {
  document.querySelectorAll(".close-btn").forEach((xBtn) => {
    let deleteFilter =
      xBtn.parentElement.parentElement.firstElementChild.textContent;

    xBtn.addEventListener("click", function () {
      allFilters.forEach((eachFilter) => {
        if (eachFilter.children[2].textContent === deleteFilter) {
          eachFilter.children[0].classList.remove("hidden");
          eachFilter.children[1].classList.add("hidden");
        }
      });
      sortFilters.forEach((eachFilter) => {
        if (eachFilter.children[2].textContent === deleteFilter) {
          console.log("this");
          eachFilter.children[0].classList.remove("hidden");
          eachFilter.children[1].classList.add("hidden");
          newToOld = true;
          oldToNew = true;
          loadAllCourses(originalData);
        }
      });
      if (programsSet.has(deleteFilter)) {
        programsSet.delete(deleteFilter);
        main();
        // loadAllCourses(filteredDataGlobal);
      }
      if (mentorsSet.has(deleteFilter)) {
        mentorsSet.delete(deleteFilter);
        main();
      }
      if (levelSet.has(deleteFilter)) {
        levelSet.delete(deleteFilter);
        main();
      }
      if (durationSet.has(deleteFilter)) {
        durationSet.delete(deleteFilter);
        main();
      }
      if (ratingsSet.has(deleteFilter)) {
        ratingsSet.delete(deleteFilter);
        main();
      }

      xBtn.parentElement.parentElement.remove();
    });
  });
}
allFilters.forEach((eachFilter) => {
  eachFilter.addEventListener("click", function () {
    eachFilter.children[0].classList.toggle("hidden");
    eachFilter.children[1].classList.toggle("hidden");
    const thirdChild = eachFilter.children[2].textContent;
    clickedNum = 1;

    if (eachFilter.parentElement.classList.contains("programs-box")) {
      if (programsSet.has(thirdChild)) {
        programsSet.delete(thirdChild);
        removeFilterNames(thirdChild);
        main();
      } else {
        programsSet.add(thirdChild);
        addFilterNames(thirdChild);

        main();
      }
    }
    if (eachFilter.parentElement.classList.contains("mentors-box")) {
      if (mentorsSet.has(thirdChild)) {
        mentorsSet.delete(thirdChild);
        removeFilterNames(thirdChild);
        main();
      } else {
        mentorsSet.add(thirdChild);
        addFilterNames(thirdChild);
        main();
      }
    }
    if (eachFilter.parentElement.classList.contains("level-box")) {
      if (levelSet.has(thirdChild)) {
        levelSet.delete(thirdChild);
        removeFilterNames(thirdChild);
        main();
      } else {
        levelSet.add(thirdChild);
        addFilterNames(thirdChild);
        main();
      }
    }
    if (eachFilter.parentElement.classList.contains("duration-box")) {
      if (durationSet.has(thirdChild)) {
        durationSet.delete(thirdChild);
        removeFilterNames(thirdChild);
        main();
      } else {
        durationSet.add(thirdChild);
        addFilterNames(thirdChild);
        main();
      }
    }
    if (eachFilter.parentElement.classList.contains("ratings-box")) {
      if (ratingsSet.has(thirdChild)) {
        ratingsSet.delete(thirdChild);
        removeFilterNames(thirdChild);
        main();
      } else {
        ratingsSet.add(thirdChild);
        addFilterNames(thirdChild);
        main();
      }
    }

    removeFiltersXBtn();
  });
});

const fetchCoursesData = async function () {
  const response = await fetch("coursesData.json");
  const data = await response.json();
  return data;
};

async function main() {
  const data = await fetchCoursesData();
  const { users: courses } = data;
  filterCourses(courses);
}
main();

const loadAllCourses = function (data) {
  coursesBox.innerHTML = "";
  data.forEach((course, i) => {
    if (i >= (clickedNum - 1) * 12 && i < clickedNum * 12) {
      const eachCourse = `
    <div class="each-course number-1">
    <div class="img-box-courses">
    <img src="${course.img}"/>
      <div class="heart">
        <img
          src="images/top-sect-photos/Vector-empty-heart.svg"
          alt="heart icon"
          class="empty-heart"
        />
        <img
          src="images/top-sect-photos/Vector-full-heart.svg"
          alt="heart icon"
          class="full-heart hidden"
        />
      </div>
      <div class='stars-div'>
        <span class="stars">${course.stars}</span> <span class="star-rating"> ${course.rating}</span>
        </div>
    </div>
    <div class="course-description-box">
      <h4 class="course-name">
        ${course.courseName}
      </h4>
      <div class="course-details">
        <div class="details-left">
          <span class="details-text"
            ><img
              src="images/top-sect-photos/1.svg"
              class="details-icon"
            />${course.level}</span
          >
          <span class="details-text"
            ><img
              src="images/top-sect-photos/2.svg"
              class="details-icon"
            />6 სტუდენტი</span
          >
        </div>
        <div class="details-right">
          <span class="details-text"
            ><img
              src="images/top-sect-photos/3.svg"
              class="details-icon"
            />24 საათი</span
          >
          <span class="details-text"
            ><img
              src="images/top-sect-photos/4.svg"
              class="details-icon"
            />${course.timeframe}</span
          >
        </div>
      </div>
    </div>
    <div class="details-box">
      <button class="details-btn">
        <a href="#" class="details-link">დეტალები</a>
      </button>
    </div>
    </div>
  `;
      coursesBox.insertAdjacentHTML("beforeend", eachCourse);
    }
  });
  clickHeart();
};

function filterCourses(data) {
  const filteredData = data
    .filter((value, i) => {
      if (programsSet.size === 0) return value;
      else return programsSet.has(value.courseName);
    })
    .filter((value, i) => {
      if (mentorsSet.size === 0) return value;
      else return mentorsSet.has(value.mentor);
    })
    .filter((value, i) => {
      if (levelSet.size === 0) return value;
      else return levelSet.has(value.level);
    })
    .filter((value, i) => {
      if (durationSet.size === 0) return value;
      else return durationSet.has(value.timeframe);
    })
    .filter((value, i) => {
      if (ratingsSet.size === 0) return value;
      else return ratingsSet.has(value.rating);
    });
  pageNumberAll(filteredData.length);
  filteredDataGlobal = [...filteredData];
  originalData = [...filteredData];
  document.querySelectorAll(".each-item").forEach((each) => {
    if (each.textContent === "ახალი-ძველი") {
      filteredDataGlobal.sort((a, b) => b.date - a.date);
    }
    if (each.textContent === "ძველი-ახალი") {
      filteredDataGlobal.sort((a, b) => a.date - b.date);
    }
  });

  loadAllCourses(filteredDataGlobal);
}
let numberOfPages;
function pageNumberAll(cardNums) {
  paginationDiv.innerHTML = "";
  let pageNums = Math.ceil(cardNums / 12);
  for (let i = 0; i < pageNums; i++) {
    let pagesBelow = `<div class="each-page ${
      i === 0 ? "active-page" : ""
    }"><span class="page-num">${i + 1}</span></div>
`;
    paginationDiv.insertAdjacentHTML("beforeend", pagesBelow);
  }
  pageNumClick();
  numberOfPages = pageNums;
  return pageNums;
}

function pageNumClick() {
  document.querySelectorAll(".page-num").forEach((eachNum) => {
    eachNum.addEventListener("click", function () {
      document.querySelectorAll(".each-page").forEach((each) => {
        each.classList.remove("active-page");
      });
      eachNum.parentElement.classList.add("active-page");
      clickedNum = Number(eachNum.textContent);
      loadAllCourses(filteredDataGlobal);
    });
  });
}
document.querySelector(".arrow-left").addEventListener("click", function () {
  if (clickedNum > 1) {
    clickedNum--;
    loadAllCourses(filteredDataGlobal);
    document.querySelectorAll(".each-page").forEach((eachNum) => {
      if (eachNum.textContent == clickedNum + 1) {
        eachNum.classList.remove("active-page");
      }
      if (eachNum.textContent == clickedNum) {
        eachNum.classList.add("active-page");
      }
    });
  }
});
document.querySelector(".arrow-right").addEventListener("click", function () {
  if (clickedNum < numberOfPages) {
    clickedNum++;
    loadAllCourses(filteredDataGlobal);
    document.querySelectorAll(".each-page").forEach((eachNum) => {
      if (eachNum.textContent == clickedNum - 1) {
        eachNum.classList.remove("active-page");
      }
      if (eachNum.textContent == clickedNum) {
        eachNum.classList.add("active-page");
      }
    });
  }
});
function clickHeart() {
  document.querySelectorAll(".heart").forEach((heart) => {
    heart.addEventListener("click", function () {
      heart.lastElementChild.classList.toggle("hidden");
    });
  });
}

let newToOld = true;
let oldToNew = true;

sortByDates.forEach((eachSort) => {
  eachSort.addEventListener("click", function () {
    if (this.children[2].textContent === "ახალი-ძველი") {
      if (newToOld) {
        filteredDataGlobal.sort((a, b) => b.date - a.date);
        loadAllCourses(filteredDataGlobal);
        newToOld = !newToOld;
        oldToNew = true;
        addFilterNames(this.children[2].textContent);
        removeFilterNames(this.nextElementSibling.children[2].textContent);
      } else {
        loadAllCourses(originalData);
        newToOld = !newToOld;
        removeFilterNames(this.children[2].textContent);
      }

      this.nextElementSibling.children[0].classList.remove("hidden");
      this.nextElementSibling.children[1].classList.add("hidden");
      this.children[0].classList.toggle("hidden");
      this.children[1].classList.toggle("hidden");
    } else if (this.children[2].textContent === "ძველი-ახალი") {
      if (oldToNew) {
        filteredDataGlobal.sort((a, b) => a.date - b.date);
        loadAllCourses(filteredDataGlobal);
        oldToNew = !oldToNew;
        newToOld = true;
        addFilterNames(this.children[2].textContent);
        removeFilterNames(this.previousElementSibling.children[2].textContent);
      } else {
        loadAllCourses(originalData);
        oldToNew = !oldToNew;
        removeFilterNames(this.children[2].textContent);
      }
      this.previousElementSibling.children[0].classList.remove("hidden");
      this.previousElementSibling.children[1].classList.add("hidden");
      this.children[0].classList.toggle("hidden");
      this.children[1].classList.toggle("hidden");
    }
    removeFiltersXBtn();
  });
});
