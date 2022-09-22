import axios from "axios";
import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { env } from "../Components/Config";

function Mentors() {
  const [mentor, setmentors] = useState([]);
  const [isloding, setloading] = useState(false);
  useEffect(() => {
    DataLoad();
  }, []);
  let DataLoad = async () => {
    setloading(true);
    let data = await axios.get(`${env.api}/mentors`);
    setloading(false);
    setmentors(data.data);
  };

  let removementor = async (id) => {
    setloading(true);
    await axios.delete(`${env.api}/mentors/${id}`);
    setloading(false);
  };
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
            <Link
              to={"/Add_mentors"}
              className="btn btn-primary mt-5 mb-5 col-1 offset-5"
            >
              Add mentors
            </Link>
            <table class="table text-center t-mentor">
              <thead class="table-primary">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Topics</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {mentor.map((mentor, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{mentor.name}</td>
                      <td>{mentor.topics}</td>

                      <td>
                        <button className="btn-primary btn me-5 ">
                          <Link
                            className="text-light addstudents"
                            to={`/Addstudents${mentor._id}`}
                          >
                            Addstudents
                          </Link>
                        </button>
                        <button className="btn-primary btn me-5">
                          <Link
                            className="text-light addstudents"
                            to={`/Assigned_students${mentor._id}`}
                          >
                            ViewStudents
                          </Link>
                        </button>
                        <button
                          className="btn-primary btn"
                          onClick={() => {
                            removementor(mentor._id);
                          }}
                        >
                          Remove Mentor
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

export default Mentors;
