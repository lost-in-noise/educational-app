"use strict";
const filtersEach = document.querySelectorAll(".filter-inner");
const progbox = document.querySelectorAll(".prog-box");
const allFilters = document.querySelectorAll(".each-prog");
const coursesBox = document.querySelector(".courses-inner-div");
const eachCourseDiv = document.querySelector(".each-course");
const pageNumber = document.querySelectorAll(".page-num");

const sortSet = new Set();

filtersEach.forEach((filterName) => {
  filterName.addEventListener("click", function () {
    progbox.forEach((box) => {
      box !== filterName.nextElementSibling ? box.classList.add("hidden") : "";
    });
    filterName.nextElementSibling?.classList.toggle("hidden");
  });
});

allFilters.forEach((eachFilter) => {
  eachFilter.addEventListener("click", function () {
    eachFilter.children[0].classList.toggle("hidden");
    eachFilter.children[1].classList.toggle("hidden");

    if (sortSet.has(eachFilter.children[2].textContent)) {
      sortSet.delete(eachFilter.children[2].textContent);
      main();
    } else {
      sortSet.add(eachFilter.children[2].textContent);
      main();
    }
    console.log(sortSet);
  });
});
let coursesData = {};
const fetchCoursesData = async function (page = 1) {
  const response = await fetch("coursesData.json");
  const data = await response.json();
  if (data) {
    loadAllCourses(data.users, page);
  }
  return data;
};
fetchCoursesData();
const loadAllCourses = function (data, page = 1) {
  coursesBox.innerHTML = "";
  data.forEach((course, i) => {
    if (i >= (page - 1) * 12 && i < page * 12) {
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

pageNumber.forEach((pageNum) => {
  pageNum.addEventListener("click", function () {
    removeBackgr();
    pageNum.classList.add("active-page");
    const pageNumber = pageNum.textContent;
    fetchCoursesData(pageNumber);
  });
});

function removeBackgr() {
  pageNumber.forEach((each) => each.classList.remove("active-page"));
}

function filterCourses(data) {
  const { users } = data;
  const filteredData = users.filter((value, i) => {
    // console.log(value);
    if (sortSet.size === 0) {
      return value;
    } else {
      return (
        sortSet.has(value.courseName) ||
        sortSet.has(value.mentor) ||
        sortSet.has(value.level) ||
        sortSet.has(value.timeframe) ||
        sortSet.has(value.rating)
      );
    }
  });
  loadAllCourses(filteredData);
}

async function main() {
  const data = await fetchCoursesData();
  filterCourses(data);
}
function clickHeart() {
  document.querySelectorAll(".heart").forEach((heart) => {
    heart.addEventListener("click", function () {
      heart.lastElementChild.classList.toggle("hidden");
    });
  });
}
