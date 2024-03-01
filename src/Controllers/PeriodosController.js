import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get all period
const getAllperiod = async (req, res) => {
  try {
    const period = await prisma.period.findMany();
    res.json(period);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a periodo by ID
const getPeriodById = async (req, res) => {
  const { id } = req.params;
  try {
    const periodo = await prisma.period.findUnique({
      where: { Id: parseInt(id) },
    });
    if (!periodo) {
      return res.status(404).json({ error: 'Periodo not found' });
    }
    res.json(periodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new periodo
const createPeriod = async (req, res) => {
  console.log(req.body);
  try {
    
    const periodo = await prisma.period.create({
      data: {
        Name: req.body.Name,
       Price : req.body.Precio,
        Start_date : req.body.Start_date,
        Final_Date : req.body.Final_Date,
      },
    });
    res.status(201).json(periodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a periodo by ID
const updatePeriod = async (req, res) => {
  const { id } = req.params;
  const { Name,Price, Start_date, Final_Date } = req.body;
  try {
    const updatedPeriod = await prisma.period.update({
      where: { Id: parseInt(id) },
      data: {
        Name: Name,
       Price :Price,
        Start_date : Start_date,
        Final_Date : Final_Date,
      },
    });
    res.json(updatedPeriod);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a periodo by ID
const deletePeriod = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.period.delete({
      where: { Id: parseInt(id) },
    });
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default  {
  getAllperiod,
  getPeriodById,
  createPeriod,
  updatePeriod,
  deletePeriod
};
