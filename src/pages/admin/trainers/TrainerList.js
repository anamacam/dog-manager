import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TrainerList() {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        getTrainers();
    }, []);

    function getTrainers() {
        fetch("http://localhost:4000/trainers")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok");
            })
            .then(data => {
                // eslint-disable-next-line no-unused-vars
                const sortedData = data.sort((a, b) => b.id - a.id);
                setTrainers(data);
            })
            .catch(error => {
                alert("Unable to get the data");
            });
    }

    // eslint-disable-next-line no-unused-vars
    function refreshTrainers() {
        getTrainers();
    }

    useEffect(getTrainers,[] )

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">List of Dog Trainers</h2>

            <div className="row mb-3">
                <div className="col">
                    <Link className="btn btn-primary me-1" to="/admin/trainers/create" role="button">
                        Create Trainer
                    </Link>
                    <button type="button" className="btn btn-outline-primary" onClick={getTrainers}>
                        Refresh
                    </button>
                </div>
                <div className="col"></div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Experience</th>
                        <th>Specialty</th>
                        <th>Image</th>
                        <th>Create At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {trainers.map((trainer, index) => {
                    return(
                        <tr key={index}>
                            <td>{trainer.id}</td>
                            <td>{trainer.name}</td>
                            <td>{trainer.age}</td>
                            <td>{trainer.experience}</td>
                            <td>{trainer.specialty}</td>
                            <td><img src={"http://localhost:4000/images/" + trainer.imageFileName} 
                                width="100" alt="..."/></td>
                            <td>{trainer.createdAt.slice(0, 10)}</td>
                            <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                                <Link className="btn btn-primary btn-sm me-1"
                                 to={"/admin/trainers/edit/" + trainer.id}> Edit</Link>
                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                            </td>
                         </tr>
                   )

                })

            }
            </tbody>
            </table>
        </div>
    )
}
