import { useEffect, useState } from "react";
import { createData, deleteData, editDataa,  getData } from "../services/AllApi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


const Addstudent = () => {
  const [inputvalue, setinputvalue] = useState({
    name: "",
    course: "",
    grade: "",
  });
  let [data, setData] = useState([]);
  const [editData, seteditData] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    showStudentdetails();
  }, []);

  const addStudent = async (reqBody) => {
    reqBody = {
      name: inputvalue.name,
      course: inputvalue.course,
      grade: inputvalue.grade,
    };
    let apiResponse = await createData(reqBody);
    console.log(apiResponse.data);
    showStudentdetails();
  };

  const showStudentdetails = async () => {
    let apiResponse = await getData();
    console.log(apiResponse.data);
    setData(apiResponse.data);
  };

  const deleteStudent = async (id) => {
    let apiResponse = await deleteData(id);
    console.log(apiResponse);
    showStudentdetails();
  };

  const oneditClick = (data) => {
    console.log(data);
    seteditData(data);
    setShow(true);
  };

  const oneditDataa = async () => {
    let reqBody = {
      name: editData.name,
      course: editData.course,
      grade: editData.grade,
    };
    let apiResponse = await editDataa(editData.id, reqBody);
    console.log(apiResponse);
    showStudentdetails();
    setShow(false);
  };

  return (
    <>
      <div id="firstbox" className="py-3 mx-5 mt-5">
        <div id="firstBox" className="d-flex justify-content-around mt-5">
          <input
            onChange={(e) =>
              setinputvalue({ ...inputvalue, name: e.target.value })
            }
            id="input"
            placeholder="Enter Name"
            type="text"
          />
          <input
            onChange={(e) =>
              setinputvalue({ ...inputvalue, name: e.target.value })
            }
            id="input"
            placeholder="Enter Course Name"
            type="text"
          />
          <input
            onChange={(e) =>
              setinputvalue({ ...inputvalue, name: e.target.value })
            }
            id="input"
            placeholder="Enter grade"
            type="text"
          />
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-primary" onClick={addStudent}>
            Create
          </button>
        </div>
      </div>
      <div>
        <div id="secondbox" className="d-flex mt-4 py-3 container ">
          <table className="table  table-striped mt-4">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>COURSE</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {data.map((eachdata) => (
                <tr key={eachdata.id}>
                  <td>{eachdata.id}</td>
                  <td>{eachdata.name}</td>
                  <td>{eachdata.course}</td>
                  <td>{eachdata.grade}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteStudent(eachdata.id)}
                    >
                      Delete
                    </button>

                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => oneditClick(eachdata)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} className="bg-dark">
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Edit Student Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h1 className="fs-5 ">Name</h1>
          <input
            value={editData.name}
            type="text"
            className="form-control"
            id="editname"
            onChange={(e) => seteditData({ ...editData, name: e.target.value })}
          />

          <h1 className="fs-5  mt-2">Course</h1>
          <input
            value={editData.course}
            type="text"
            className="form-control"
            id="editcourse"
            onChange={(e) =>
              seteditData({ ...editData, course: e.target.value })
            }
          />
          <h1 className="fs-5 mt-2">Grade</h1>
          <input
            value={editData.grade}
            type="text"
            className="form-control"
            id="editgrade"
            onChange={(e) =>
              seteditData({ ...editData, grade: e.target.value })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={oneditDataa}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Addstudent;
