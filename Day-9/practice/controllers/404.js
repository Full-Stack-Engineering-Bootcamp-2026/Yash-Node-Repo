exports.notFound = (req, res) => {
  const url = req.url;
  res.status(404).json({
    message: ` '${url}' Not found`,
  });
};
