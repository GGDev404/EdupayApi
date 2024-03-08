import { faker } from '@faker-js/faker';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

 const createFakeUsers = async  (req, res) => {
  for (let i = 0; i < 10; i++) {
    const fakeUser = {
      Name: faker.person.firstName(),
      Last_Name: faker.person.lastName(),
      Firs_Name: faker.person.lastName(),
      Email: 'Admin' + i + '@gmail.com',
      Password: "123",
      Profile_Photo: faker.image.avatar(),
      Rol: 'ADMIN',
      //Id_Group: faker.datatype.number(1, 6),
      //Id_tutor: faker.datatype.number(1, 31)

    };

    await prisma.Users.create({ data: fakeUser });
  }
  res.json({ message: "30 usuarios creados" });
}

const fakerExtraActivity = async  (req, res) => {
  const activities = ['Fútbol', 'Danza', 'Baloncesto', 'Natación', 'Gimnasia', 'Atletismo', 'Voleibol', 'Tenis', 'Rugby', 'Hockey'];
  const fakeExtraActivities = [];

  for (let i = 0; i < 10; i++) {
    const startDate = faker.date.soon(30);
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);

    const fakeExtraActivity = {
      Name: activities[i],
      Description: faker.commerce.productDescription(),
      Price: parseFloat(faker.commerce.price()),
      Image: faker.image.imageUrl(),
      Start_date: startDate,
      Final_Date: endDate,
    };

    await prisma.extra_Activity.create({ data: fakeExtraActivity });
  }

  res.json({ message: "10 activiades creados" });
}
const fakerGrades = async  (req, res) => {
  let grades = ['1ro', '2do', '3ro', '4to', '5to', '6to'];

  for (let i = 0; i < 6; i++) {
    const fakeGrade = {
      Name: (grades[i]),
      Id_Period: 20

    };

    await prisma.grade.create({ data: fakeGrade });
  }

  res.json({ message: "grados creados" });
}


const fakerGrups = async  (req, res) => {
  let grades = ['A', 'B', 'C', 'D'];

  for (let y =11; y < 73; y++) {
    for (let i = 0; i < 4; i++) {
      const fakeGroup = {
        Name: grades[i],
        Quota : 30,
        Id_Grade: y ,
      };
      await prisma.groups.create({ data: fakeGroup });
    }
  }
  res.json({ message: "grupos creados" });
}



const fakerPeriod = async (req,res) => {
  let periodos = ['Enero-Marzo-2025', 'Abril-Junio-2025', 'Julio-Septiembre-2025', 'Octubre-Diciembre-2025'];

  for (let i = 0; i < 4; i++) {
    const startDate = new Date();
    startDate.setFullYear(2025);
    startDate.setMonth(i * 3); // Set the start date to the beginning of the period
    startDate.setDate(1); // Set the day to the first of the month

    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 3); // Set the end date to 3 months after the start date
    endDate.setDate(0); // Set the day to the last day of the previous month

    const fakePeriod = {
      Name: periodos[i],
      Price: 5000,
      Start_date: startDate,
      Final_Date: endDate,
    };

    await prisma.period.create({ data: fakePeriod });
  }
  res.json({ message: "periodos creados" });
}

export default fakerGrups;