export let uploadSingleFileController = async (req, res, next) => {
  let link = `http://localhost:8000/${req.file.filename}`;
  res.status(201).json({
    success: true,
    message: "File successfully Uploaded",
    result: link,
  });
};
