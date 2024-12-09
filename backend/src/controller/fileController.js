export let uploadSingleFileController = async (req, res, next) => {
  let link = `https://crud-blog-n2n1.onrender.com/${req.file.filename}`;
  res.status(201).json({
    success: true,
    message: "File successfully Uploaded",
    result: link,
  });
};
