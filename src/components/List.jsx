import React, { useState, useEffect } from "react";
import Edit from "./Edit";
import { getMoviesApi, deleteMovieApi } from "../services/allApis";

function List({ success }) {
  const [movielist, setMovieList] = useState([]);
  const [editRes,setEditRes]=useState("")

  useEffect(() => {
    getData();
  }, [success,editRes]);

  const getData = async () => {
    try {
      const result = await getMoviesApi();
      if (result.status === 200) {
        setMovieList(result.data);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const deleteMovie = async (id) => {
    try {
      const result = await deleteMovieApi(id);
      if (result.status === 200) {
        alert("Movie deleted successfully!");
        getData(); // Refresh list
      }
    } catch (error) {
      console.error("Error deleting movie:", error);
      alert("Failed to delete movie. Please try again.");
    }
  };

  return (
    <>
      {movielist.length > 0 ? (
        <table className="table table-bordered border-5 shadow border-light text-light">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Year</th>
              <th>Poster</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movielist.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.year}</td>
                <td>
                  <img
                    src={item.image}
                    height="200px"
                    width="150px"
                    alt={item.name}
                  />
                </td>
                <td>
                  <Edit movie={item} edit={setEditRes} onEditSuccess={getData} />
                  <button
                    onClick={() => deleteMovie(item.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3>No movies added</h3>
      )}
    </>
  );
}

export default List;

