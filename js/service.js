function showCropInfo() {
    var cropSelect = document.getElementById("crop-select");
    var cropInfo = document.getElementById("crop-info");
    if (cropSelect.value == "Select Crop") {
      cropInfo.innerHTML = "";
    } else {
      if (cropSelect.value == "Wheat" || cropSelect.value == "Barley" || cropSelect.value == "Mustard" || cropSelect.value == "Gram" || cropSelect.value == "Peas" || cropSelect.value == "Coriander") {
        cropInfo.innerHTML = "<h2>" + cropSelect.value + " - Rabi Crop</h2><img src='js\image\rabi.jpg'><p>Requirements:</p><ul><li>Fertile soil with good water holding capacity</li><li>Temperature between 10 to 25 degrees Celsius</li><li>Less rainfall</li></ul>";
      } else {
        cropInfo.innerHTML = "<h2>" + cropSelect.value + " - Kharif Crop</h2><img src='js\image\khrif-crops.jpg'><p>Requirements:</p><ul><li>Fertile soil with good water holding capacity</li><li>Temperature between 25 to 35 degrees Celsius</li><li>Adequate rainfall</li></ul>";
      }
    }
  }