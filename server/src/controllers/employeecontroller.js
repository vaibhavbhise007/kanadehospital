const Employee = require('../models/employeesmodel');
const { cloudinary } = require("../configs/cloudinary");
// Create a new employee
const createEmployee = async (req, res) => {
  try {
    const { employeeName, designation, img, resume, joiningDate, experience, mobileNumber, email, address, travellingType } = req.body;
    const findemployee =await Employee.findOne({ employeeName: employeeName });
    if (findemployee) {
      return res.status(400).json({ message: "Employee already exists" });
      }

      let imageUrl = null;
          let imageid = null;
          if (req.file) {
            const imageUploaded = await cloudinary.v2.uploader.upload(req.file.path);
            imageUrl = imageUploaded.secure_url;
            imageid = imageUploaded.public_id
          }

    const employee = new Employee({
      employeeName,
      designation,
      img: imageUrl,
      img_id: imageid,
      resume,
      joiningDate,
      experience,
      mobileNumber,
      email,
      address,
      travellingType,
    });

    await employee.save();
    res.status(201).json({ message: 'Employee created successfully', employee });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get an employee by ID
const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an employee by ID
// const updateEmployee = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updates = req.body;

//     const findEmployee = await Employee.findOne({ employeeName: updates.employeeName });
//     if (findEmployee) {
//       return res.status(400).json({ error: 'Employee already exists' });
//     }
//     let imageUrl = blog.img;
//         let imageid = blog.img_id;
//         if (req.file) {
//           // Delete the old image from Cloudinary
//           if (blog.img_id) {
//             await cloudinary.v2.uploader.destroy(blog.img_id);
//           }
    
//           const imageUploaded = await cloudinary.v2.uploader.upload(req.file.path);
//           imageUrl = imageUploaded.secure_url;
//           imageid = imageUploaded.public_id;
//         }

//     const updatedEmployee = await Employee.findByIdAndUpdate(id, updates, { new: true });

//     if (!updatedEmployee) {
//       return res.status(404).json({ error: 'Employee not found' });
//     }


//     res.status(200).json({ message: 'Employee updated successfully', updatedEmployee });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    if (updates.employeeName && updates.employeeName !== employee.employeeName) {
      const findEmployee = await Employee.findOne({ employeeName: updates.employeeName });
      if (findEmployee) {
        return res.status(400).json({ error: 'Employee name already exists' });
      }
    }

    let imageUrl = employee.img;
    let imageId = employee.img_id;

    if (req.file) {
      // Delete the old image from Cloudinary
      if (employee.img_id) {
        await cloudinary.v2.uploader.destroy(employee.img_id);
      }

      const imageUploaded = await cloudinary.v2.uploader.upload(req.file.path);
      imageUrl = imageUploaded.secure_url;
      imageId = imageUploaded.public_id;
    }

    employee.employeeName = updates.employeeName || employee.employeeName;
    employee.designation = updates.designation || employee.designation;
    employee.img = imageUrl;
    employee.img_id = imageId;
    employee.resume = updates.resume || employee.resume;
    employee.joiningDate = updates.joiningDate || employee.joiningDate;
    employee.experience = updates.experience || employee.experience;
    employee.mobileNumber = updates.mobileNumber || employee.mobileNumber;
    employee.email = updates.email || employee.email;
    employee.address = updates.address || employee.address;
    employee.travellingType = updates.travellingType || employee.travellingType;

    await employee.save();
    res.status(200).json({ message: 'Employee updated successfully', employee });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Delete an employee by ID
const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEmployee = await Employee.findByIdAndDelete(id);

    if (!deletedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
