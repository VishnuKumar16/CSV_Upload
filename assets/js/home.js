console.log("Home Script Loaded!!!");

const dropBox = document.querySelector(".upload-box");

const preventDefaultBehaviour = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

const handleDragEnter = (e) => {
  console.log("entered");
  preventDefaultBehaviour(e);
};

const handleDragLeave = (e) => {
  console.log("left");
  preventDefaultBehaviour(e);
};

const handleDragOver = (e) => {
  console.log("dragging over");
  preventDefaultBehaviour(e);
};

const handleDrop = (e) => {
  console.log("dropped");
  preventDefaultBehaviour(e);
  const file = e.dataTransfer.files[0];
  console.log(file);

  if (file.type == "text/csv") {
    console.log("Dropped CSV File");
    uploadFile(file);
  } else {
    console.log("Please Select CSV File");
  }
};

// Uploading Files
function uploadFile(file) {
  const formData = new FormData();
  formData.append("file", file);

  fetch("/upload", {
    method: "POST",
    body: formData,
  })
  .then((response) => {
    if (response.ok) {
      window.location.href = '/';
    } else {
      console.error('File upload failed.');
    }
  })
  .catch((error) => {
    console.error(error);
  });
}

// Handle drop box clicks
function handleUploadClick() {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = ".csv"; // Specify the allowed file types if needed
  fileInput.addEventListener("change", handleFileSelect);
  fileInput.click();
}

function handleFileSelect(e) {
  const file = e.target.files[0];
  console.log(file);
  uploadFile(file);
}

dropBox.addEventListener("dragenter", handleDragEnter);
dropBox.addEventListener("dragleave", handleDragLeave);
dropBox.addEventListener("dragover", handleDragOver);
dropBox.addEventListener("drop", handleDrop);
