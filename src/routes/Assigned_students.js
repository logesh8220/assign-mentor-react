import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { env } from "../Components/Config";
import Students from "./Students";

function Assigned_students() {
  const [isloading, setloading] = useState();
  const [assignd, setassigned] = useState([]);
  const params = useParams();

  useEffect(() => {
    LoadData();
  }, []);

  async function LoadData() {
    setloading(true);
    let data = await axios.get(`${env.api}/mentors/${params.id}`);

    setassigned(data.data.students);

    setloading(false);
  }

  return (
    <main id="main" class="main col-7">
      <div className="form offset-5 text-center">
        <div class="row">
          <form>
            {isloading ? (
              <div class="text-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden"></span>
                </div>
              </div>
            ) : (
              <table class="table text-center">
                <thead class="table-primary">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col"> Students</th>
                  </tr>
                </thead>
                <tbody>
                  {assignd == undefined ? (
                    <tr>Students not assigned</tr>
                  ) : (
                    assignd.map((students, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{students}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

export default Assigned_students;
