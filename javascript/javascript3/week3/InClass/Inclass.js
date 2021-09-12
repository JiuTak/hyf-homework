class userName {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

const newUser = new userName("Jiu", "Tak");

console.log(newUser);

console.log(newUser.firstName);
console.log(newUser.lastName);
console.log(newUser.getFullName());

/*================================================
        Creating a CV class
================================================*/
class Job {
  constructor(id, title, description, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

class Education {
  constructor(id, title, school, address, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.school = school;
    this.address = address;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

const myJob1 = new Job(1, "Junior", "Important job", "today", "tomorrow");
const myJob2 = new Job(
  2,
  "Marketer",
  "Less Important job",
  "Yesterday",
  "the day after tomorrow"
);
const myJob3 = new Job(
  3,
  "Entrepreneur",
  "Less Important job",
  "Yesterday",
  "the day after tomorrow"
);
const myEducation1 = new Education(
  1,
  "Administrator",
  "Catholic Univ.",
  "Korea",
  "2006",
  "2010"
);

const body = document.querySelector("body");
class CV {
  constructor(email) {
    this.jobs = [];
    this.educations = [];
    this.email = email;
  }

  addJob(job) {
    // add functionality here
    this.jobs.push(job);
  }

  removeJob(job) {
    // add functionality here
    const findIndex = this.jobs.indexOf(job);
    if (findIndex > -1) {
      this.jobs.splice(job, 1);
    }
  }

  addEducation(education) {
    // add functionality here
    this.educations.push(education);
  }

  removeEducation(education) {
    // add functionality here
    const findIndex = this.educations.indexOf(education);
    if (findIndex > -1) {
      this.educations.splice(education, 1);
    }
  }

  renderCV() {
    this.jobs.forEach((element) => {
      const heading = document.createElement("h1");
      heading.innerHTML = element.title;
      body.append(heading);
    });

    this.educations.forEach((element) => {
      const heading = document.createElement("h1");
      heading.innerHTML = element.title;
      body.append(heading);
    });
  }
}

myCV = new CV("aurajiu@gmail.com");
myCV.addJob(myJob1);
myCV.addJob(myJob2);
// myCV.removeJob(myJob2);

myCV.renderCV(myJob1);
console.log(myCV);
