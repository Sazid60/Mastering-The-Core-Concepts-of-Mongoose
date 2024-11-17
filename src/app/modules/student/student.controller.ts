import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    // const student = req.body.student;
    // or
    const { student: studentData } = req.body;

    // will call service function to send this data
    const result = await studentServices.createStudentIntoDB(studentData);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student Is Created Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentController = {
  createStudent,
};
