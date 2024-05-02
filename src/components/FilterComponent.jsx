import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const FilterComponent = ({ onFilterChange }) => {
  const [role, setRole] = useState("");
  const [minExperience, setMinExperience] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [remoteOnSite, setRemoteOnSite] = useState(false);
  const [techStack, setTechStack] = useState("");
  const [location, setLocation] = useState("");
  const [minBasePay, setMinBasePay] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Update state based on the input type
    switch (name) {
      case "role":
        setRole(value);
        break;
      case "minExperience":
        setMinExperience(value);
        break;
      case "companyName":
        setCompanyName(value);
        break;
      case "remoteOnSite":
        setRemoteOnSite(checked);
        break;
      case "techStack":
        setTechStack(checked);
        break;
      case "location":
        setLocation(value);
        break;
      case "minBasePay":
        setMinBasePay(value);
        break;
      default:
        break;
    }

    // Pass the filter changes to the parent component
    onFilterChange(name, type === "checkbox" ? checked : value);
  };

  return (
    <div className="mt-4">
      <div className="flex justify-center gap-3">
        <div className="flex flex-col w-1/2 gap-2">
          <div className="flex justify-between">
            <div className=" border-gray-300 p-2 w-1/2">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="role-label">Role</InputLabel>
                  <Select
                    name="role"
                    labelId="role-label"
                    label="Role"
                    value={role} // Display selected role
                    onChange={handleChange}
                  >
                    <MenuItem value="">Select</MenuItem>
                    <MenuItem value={"tech lead"}>Tech Lead</MenuItem>
                    <MenuItem value={"frontend"}>Frontend Developer</MenuItem>
                    <MenuItem value={"ios"}>iOS Developer</MenuItem>
                    <MenuItem value={"backend"}>Backend Developer</MenuItem>
                    <MenuItem value={"android"}>Android Developer</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

            <div className=" p-2 w-1/2">
              <Box sx={{ minWidth: 120 }}>
                <TextField
                  label="Min Experience"
                  type="number"
                  name="minExperience"
                  value={minExperience} // Display selected minExperience
                  onChange={handleChange}
                />
              </Box>
            </div>
          </div>

          <TextField
            label="Company Name"
            variant="outlined"
            name="companyName"
            value={companyName} // Display selected companyName
            onChange={handleChange}
          />

          <Box sx={{ minWidth: 120 }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Remote/On-site"
              name="remoteOnSite"
              checked={remoteOnSite} // Display selected remoteOnSite
              onChange={handleChange}
            />
          </Box>

          <Box sx={{ minWidth: 120 }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Tech Stack"
              name="techStack"
              checked={techStack} // Display selected techStack
              onChange={handleChange}
            />
          </Box>

          <div className="flex justify-between">
            <div className=" p-2 w-1/2">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="location-label">Location</InputLabel>
                  <Select
                    name="location"
                    label="Location"
                    value={location} // Display selected location
                    onChange={handleChange}
                  >
                    <MenuItem value="">Select</MenuItem>
                    <MenuItem value={"remote"}>Remote</MenuItem>
                    <MenuItem value={"chennai"}>Chennai</MenuItem>
                    <MenuItem value={"delhi ncr"}>Delhi NCR</MenuItem>
                    <MenuItem value={"mumbai"}>Mumbai</MenuItem>
                    <MenuItem value={"bangalore"}>Bangalore</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

            <div className=" p-2 w-1/2">
              <Box sx={{ minWidth: 120 }}>
                <TextField
                  label="Min Base Pay"
                  type="number"
                  name="minBasePay"
                  value={minBasePay} // Display selected minBasePay
                  onChange={handleChange}
                />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
