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
      //Id_tutor: faker.datatype.number(1, 59)

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

  for (let i = 1; i < 7; i++) {
    const fakeGrade = {
      Name: i,
    };

    await prisma.grades.create({ data: fakeGrade });
  }

  res.json({ message: "10 grados creados" });
}

export default fakerExtraActivity;