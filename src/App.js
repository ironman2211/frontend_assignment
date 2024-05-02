import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { JobCard } from "./components/JobCard";
import Navbar from "./components/Navbar";
import FilterComponent from "./components/FilterComponent";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState({
    role: "",
    location: "",
    companyName: "",
    minExp: "", // Changed to minExp for consistency
    minBasePay: "", // Changed to minBasePay for consistency
  });

  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 6;

  const observer = useRef(null);
  const lastJobRef = useRef(null);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      limit,
      offset,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    setLoading(true);
    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched jobs:", data); // Print fetched jobs
        setJobs((prevJobs) => [...prevJobs, ...data.jdList]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [offset]);

  useEffect(() => {
    setFilteredJobs(
      jobs.filter((job) => {
        return (
          (filters.role === "" || job.jobRole === filters.role) &&
          (filters.location === "" || job.location === filters.location) &&
          (filters.companyName === "" ||
            job.companyName === filters.companyName) &&
          (filters.minExp === "" ||
            filters.minExp === null ||
            filters.minExp === undefined ||
            (job.minExp !== null &&
              job.minExp !== undefined &&
              job.minExp > parseInt(filters.minExp, 10))) &&
          (filters.minBasePay === "" ||
            job.minJdSalary >= parseInt(filters.minBasePay, 10))
        );
      })
    );
    // console.log("Filtered jobs for experience:", filteredJobs);
    console.log(
      "Filtered jobs for experience:",
      filteredJobs.map((job) => ({
        jobRole: job.jobRole,
        location: job.location,
        minExp: job.minExp,
      }))
    );
  }, [filters, jobs]);

  // Print filtered jobs with minExperience greater than user-entered value and Min Base Salary
  // console.log(
  //   "Filtered jobs with minExperience greater than user-entered value and Min Base Salary:",
  //   filteredJobs
  //     .filter((job) => job.minExp > parseInt(filters.minExp, 10))
  //     .map((job) => ({ minExp: job.minExp, minJdSalary: job.minJdSalary }))
  // );

  const handleFilterChange = (name, value) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setOffset((prevOffset) => prevOffset + limit);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    observer.current = new IntersectionObserver(handleObserver, options);
  }, []);

  useEffect(() => {
    if (lastJobRef.current) {
      observer.current.observe(lastJobRef.current);
    }
  }, [filteredJobs]);

  console.log("Jobs:", jobs); // Print jobs
  console.log("Filtered jobs:", filteredJobs); // Print filtered jobs

  return (
    <div className="App">
      <Navbar />
      <FilterComponent onFilterChange={handleFilterChange} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 max-w-full px-36">
        {filteredJobs.map((job, index) => (
          <div
            className="w-full"
            key={job.jdUid}
            ref={index === filteredJobs.length - 1 ? lastJobRef : null}
          >
            <JobCard
              jobRole={job.jobRole}
              location={job.location}
              description={job.jobDetailsFromCompany}
              minExp={job.minExp}
              minJdSalary={job.minJdSalary}
              maxJdSalary={job.maxJdSalary}
            />
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default App;
