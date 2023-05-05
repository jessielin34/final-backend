const { Instructor, Course } = require('../models');

const seedDB = async () => {
	const dummyInstructor = await Instructor.create({
		firstname: "Melissa",
		lastname: "Lynch",
		department: "Computer Science"
	});
	const dummyInstructor2 = await Instructor.create({
		firstname: "Jessie",
		lastname: "Lin",
        department: "Computer Science",
	});
	const dummyInstructor3 = await Instructor.create({
		firstname: "Ethan",
		lastname: "Li",
        department: "Nursing",
	});

	const dummyCourse = await Course.create({
		title: "CSCI 39548",
        location: "C107",
        timeslot: "W 5:35 - 8:15 PM"
	});

    const dummyCourse2 = await Course.create({
		title: "BIO 100",
        location: "C102",
        timeslot: "W 5:35 - 8:15 PM"
	});

    await dummyCourse.setInstructor(dummyInstructor);
    await dummyCourse.setInstructor(dummyInstructor2);
    await dummyCourse2.setInstructor(dummyInstructor3);

	
}

module.exports = seedDB;