"use strict";
const students = [
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
  {
    firstName: "ანიტა",
    lastName: "ჯავახიშვილი",
    story:
      "კურსის დაწყებამდე ჩემს შესაძლებლობებში ეჭვი მეპარებოდა, რადგან ეს სრულიად უცხო სფერო იყო. ლექტორის ჩართულობამ და მასალის ადვილად გადმოცემის უნარმა, ჩემს თავში დამარწმუნდა და ვხედავდი ყოველი გაკვეთილის შემდეგ როგორ უმჯობესდებოდა ჩემი უნდარები.",
    mainPhoto: "images/students/student-main-photo.jpg",
    additionalPhotos: [
      "images/students/image1.jpg",
      "images/students/image4.jpg",
      "images/students/image3.jpg",
      "images/students/image2.jpg",
    ],
  },
];

const itemsPerPage = 4;
let currentPage = 1;

// Selectors
const studentsWrapper = document.querySelector(".successful-students-wrapper");
const pageNumbersContainer = document.getElementById("page-numbers");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Function to display students for the current page
function displayStudents(page) {
  studentsWrapper.innerHTML = ""; // Clear current students

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const studentsToShow = students.slice(start, end);

  // Create and append student cards
  studentsToShow.forEach((student) => {
    const studentCard = document.createElement("div");
    studentCard.className = "student-card";

    studentCard.innerHTML = `
      <div class="student-main-data">
        <img src="${student.mainPhoto}" alt="Main Photo" />
        <div class="student-info-text">
          <h3>${student.firstName}</h3>
          <h3>${student.lastName}</h3>
          <p>${student.story}</p>
        </div>
      </div>
      <div class="student-pics">
        <div class="student-3-pics">
          <img src="${student.additionalPhotos[0]}" alt="Additional Photo 1" />
          <div class="student-2-pics">
            <img src="${student.additionalPhotos[1]}" alt="Additional Photo 2" />
            <img src="${student.additionalPhotos[2]}" alt="Additional Photo 3" />
          </div>
        </div>
        <img src="${student.additionalPhotos[3]}" alt="Additional Photo 4" />
      </div>
    `;

    studentsWrapper.appendChild(studentCard);
  });
}

// Function to update pagination controls
function updatePagination() {
  pageNumbersContainer.innerHTML = "";
  const totalPages = Math.ceil(students.length / itemsPerPage);

  let pageRange = [];

  if (totalPages <= 5) {
    pageRange = [...Array(totalPages).keys()].map((i) => i + 1);
  } else if (currentPage <= 3) {
    pageRange = [1, 2, 3, 4, 5, "...", totalPages];
  } else if (currentPage > totalPages - 3) {
    pageRange = [
      1,
      "...",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  } else {
    pageRange = [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  }

  pageRange.forEach((page) => {
    const pageNumber = document.createElement("span");
    pageNumber.className = "page-number";
    pageNumber.textContent = page;

    if (page === currentPage) pageNumber.classList.add("active");
    if (page !== "...") {
      pageNumber.addEventListener("click", () => {
        currentPage = page;
        displayStudents(currentPage);
        updatePagination();
        updateButtons();
      });
    }

    pageNumbersContainer.appendChild(pageNumber);
  });
}

// Function to update previous/next button states
function updateButtons() {
  prevButton.disabled = currentPage === 1;
  nextButton.disabled =
    currentPage === Math.ceil(students.length / itemsPerPage);
}

// Event listeners for the previous and next buttons
prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayStudents(currentPage);
    updatePagination();
    updateButtons();
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage < Math.ceil(students.length / itemsPerPage)) {
    currentPage++;
    displayStudents(currentPage);
    updatePagination();
    updateButtons();
  }
});

// Initialize the page
displayStudents(currentPage);
updatePagination();
updateButtons();
