function showDatePicker(e) {
  
  var pxFromTop = $(".date-picker-date").offset().top;
  var datePicker = $("#date-picker-modal");
  datePicker.css("top", pxFromTop - 380);
  // check if right edge of colourPicker will go off the edge of the screen, and if so then reduce left by that amount
  var rightEdge = e.pageX + colourPickerWidth;
  var overflowWidth = rightEdge - windowWidth;
  if (overflowWidth > 0) {
    datePicker.css("left", e.pageX - overflowWidth);
  } else {
    datePicker.css("left", e.pageX - 150);
  }
    
if (windowWidth < 425) {
    datePicker.css("top", pxFromTop - 180);
    datePicker.css("left", e.pageX - 150);
}
  
  $("#date-picker-modal").removeClass("hidden-2");
}

var headerRow = `
    <tr id="date-picker-weekdays">
      <th>D</th>
      <th>S</th>
      <th>T</th>
      <th>Q</th>
      <th>Q</th>
      <th>S</th>
      <th>S</th>
    </tr>`;