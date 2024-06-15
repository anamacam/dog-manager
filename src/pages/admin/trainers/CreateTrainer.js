import { Link, useNavigate } from "react-router-dom";
import React from "react";

export default function CreateTrainer() {
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const trainer = Object.fromEntries(formData.entries());

        if (!trainer.name || !trainer.age || !trainer.experience ||
            !trainer.specialty || !trainer.image) {
            alert("Please fill all the fields!");
            return;
        }

        try {
            const response = await fetch("http://localhost:4000/trainers", {
                method: "POST",
                body: formData,
            });

            // eslint-disable-next-line no-unused-vars
            const data = await response.json();

            if (response.ok) {
                navigate("/admin/trainers");
            } else if (response.status === 400) {
                alert("Validation errors");
            } else {
                alert("Unable to create the trainer!");
            }
        } catch (error) {
            alert("An error occurred while creating the trainer!");
        }
    }

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 mx-auto rounded border p-4">
                    <h2 className="text-center mb-5">Create Trainer</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Name</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name="name" />
                                <span className="text-danger"></span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Age</label>
                            <div className="col-sm-8">
                                <input type="number" className="form-control" name="age" />
                                <span className="text-danger"></span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Experience</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name="experience" />
                                <span className="text-danger"></span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Specialty</label>
                            <div className="col-sm-8">
                                <select className="form-control" name="specialty">
                                    <option value="tracking">Tracking Training</option>
                                    <option value="agility">Agility Training</option>
                                    <option value="obedience">Obedience Training</option>
                                    <option value="service">Service Dog Training</option>
                                </select>
                                <span className="text-danger"></span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Image</label>
                            <div className="col-sm-8">
                                <input type="file" className="form-control" name="image" />
                                <span className="text-danger"></span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="offset-sm-4 col-4 d-grid">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            <div className="col-sm-4 d-grid">
                                <Link className="btn btn-secondary" to="/admin/trainers" role="button">Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
