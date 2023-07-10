const createJob = async (req, res) => {
  res.send("createjob");
};
const deleteJob = async (req, res) => {
  res.send("deleteJob");
};
const getAllJobs = async (req, res) => {
  res.send("getAllJobs");
};
const updateJobs = async (req, res) => {
  res.send("updateJobs");
};
const showStats = async (req, res) => {
  res.send("showStats");
};

export { createJob, deleteJob, getAllJobs, updateJobs, showStats };
