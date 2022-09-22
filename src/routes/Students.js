import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { env } from "../Components/Config";

function Students() {
  const [student_data, set_student_data] = useState([]);
  const [isloding, setloading] = useState(false);
  useEffect(() => {
    loaddata();
  }, []);

  async function loaddata() {
    setloading(true);
    let s_data = await axios.get(`${env.api}/students`);
    set_student_data(s_data.data);
    setloading(false);
  }

  async function deletedata(id) {
    try {
      let ask = window.confirm("Do you want remove this student");
      if (ask) {
        await axios.delete(`${env.api}/students/${id}`);
      }
      loaddata();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <main id="main" class="main">
      {isloding ? (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden"></span>
          </div>
        </div>
      ) : (
        <section class="section dashboard">
          <div class="row">
            <button className="btn-primary btn me-5 mt-5 mb-5 col-1 offset-5">
              <Link className="text-light addstudents" to={`/Add_New_students`}>
                Addstudents
              </Link>
            </button>
            <table class="table text-center">
              <thead class="table-primary">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">PhoneNo</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {student_data.map((student, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.phone_no}</td>

                      <td>
                        <button
                          className="btn-danger btn"
                          onClick={() => {
                            deletedata(student._id);
                          }}
                        >
                          Removestudent
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div></div>
        </section>
      )}
    </main>
  );
}

export default Students;
