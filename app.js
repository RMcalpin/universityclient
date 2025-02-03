const express = require('express');
const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.get('/download', (req, res) => {
  const archive = archiver('zip', {
    zlib: { level: 9 }
  });

  res.attachment('files.zip');

  archive.pipe(res);

  archive.file(path.join(__dirname, 'src/client-call.js'), {name: 'client-call.js' });
  archive.file(path.join(__dirname, 'src/dept-insert.html'), { name: 'dept-insert.html' });
  archive.file(path.join(__dirname, 'src/test.html'), { name: 'test.html' });

  archive.finalize();
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});