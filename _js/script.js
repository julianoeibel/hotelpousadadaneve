$(window).ready(function () {
    $('.flexslider').flexslider();
    touch: true;
});

$(window).scroll(function() {
    if($(window).scrollTop()) {
        $('.scroll-header').addClass('active');
        $('.scroll-header-mobile').addClass('active');
        $('.icon-scroll').addClass('inactive');
    } else {
        $('.scroll-header').removeClass('active');
        $('.scroll-header-mobile').removeClass('active');
        $('.icon-scroll').removeClass('inactive');
    }
});

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
       $('.scroll-header-mobile').removeClass('active');
       $('.scroll-header').removeClass('active');
   }
});
function loading() {
    $(window).on("load", function(){
        $("#preloader").delay(300).fadeOut("slow");
        $("#status").fadeOut();
    });
}

$(window).load(function(){
    var height = $(this).height();
    var windowWidth = $(this).width();
    if(windowWidth > 768) {
        $(".sidebar").css("min-height", height);
        $(".main").css("min-height", height);
        $(".parallax-one").css("min-height", height);
        $(".sidebar iframe").css("min-height", height);
    } else {
        $(".main").css("min-height", height);
        $(".sidebar").css("min-height", height);
        $(".parallax-one").css("min-height", height);
        $(".parallax-two").css("min-height", height);
        $(".parallax-three").css("min-height", height);
        $(".parallax-four").css("min-height", height);
        $(".parallax-five").css("min-height", height);
        $(".parallax-six").css("min-height", height);
        $(".parallax-seven").css("min-height", height);
        $(".parallax-eight").css("min-height", height);
        $(".parallax-nine").css("min-height", height);
        $(".parallax-ten").css("min-height", height);
    }
});

$(".btn").on("click", function() {
    $(this).next('ul').toggleClass("active");
    $(this).children('.hotplus-icon').toggleClass("inactive");
    $('.hotminus-icon').toggleClass("active");
    $('.menu-mobileBtn').toggleClass("inactive");
});

$(".icon").on("click", function(){
    $(this).toggleClass("active");
    $('.sidebar').toggleClass("active");
    $('.mobile-menu').toggleClass("active");
    $('.hotplus-icon').removeClass("inactive");
    $('.hotminus-icon').removeClass("active");
    $('.hotel').removeClass("active");
    $('.tarifario').removeClass("active");
    $('.menu-mobileBtn').removeClass("inactive");
});

$('.btn').delay(400).queue(function(next) {
    $(this).addClass('hover').delay(1800).queue(function(next) {
        $(this).removeClass('hover');
    });
    next();
});
function datePicker() {
    $(".booBtn").click(function( event ) {
      event.preventDefault();
      var url = "https://reservas.desbravador.com.br/reservas/rol1/?token=G25CpPpaGyLLcyvYF6%2F0cC%2FFwydrW6ScMLeH4IIn7lyEQsmSoZFYgswOKgCmbtT9S1NldxEIPQgXWOyahEn81w%3D%3D"
      var checkin = $("#date-picker-date-first").text().replace(/\//g, '-');
      var checkout = $(".date-picker-date")[1].innerHTML.replace(/\//g, '-');
      var path = url + "&checkin=" + checkin + "&checkout=" + checkout 
      window.open(path, '_blank');
    });
    var monthFormatter = new Intl.DateTimeFormat("pt-br", { month: "long" });
    var weekdayFormatter = new Intl.DateTimeFormat("pt-br", { weekday: "long" });

    var dates = [];
    dates[0] = new Date(); // defaults to today
    dates[1] = addDays(dates[0], 1);
    dates[2] = addDays(dates[1], 30);

    var currentDate = 0; // index into dates[]
    var previousDate = 1;

    var datesBoxes = $(".date-picker-date");
    var displayBoxes = $(".date-picker-display");

    // sensible default just in case jQuery doesn't kick in
    // makes sure that the experience is still usable, and when $(window).width() returns then this variable is updated to the correct value
    var windowWidth = 300;
    var colourPickerWidth = 300;

    // set up dates
    $(document).ready(function() {
      // will work the same the first time as every other
      updateDatePicker();

      // update dates shown to correct dates
      $(datesBoxes[0]).text(getDateString(dates[0]));
      $(datesBoxes[1]).text(getDateString(dates[1]));

      $(displayBoxes[0]).text(dates[0].getDate() + " " + monthFormatter.format(dates[0]).slice(0,3));
      $(displayBoxes[1]).text(dates[2].getDate() + " " + monthFormatter.format(dates[2]).slice(0,3));
    });

    // add event listeners
    $(document).ready(function() {

      // has to be applied each time, as it's removed when calendar is reset
      applyDateEventListener();

      $(".date-picker-date").click(function(e) {

        // if active, toggle picker off and return
        var currentlyActive = $(this).hasClass("active");
        if (currentlyActive) {
          $(this).removeClass("active");
          hideDatePicker();
          return;
        }

        $(".date-picker-date").removeClass("active");
        $(this).addClass("active");

        // update currentDate
        previousDate = currentDate;
        if ($(this)[0].id == "date-picker-date-first") {
          currentDate = 0;
        } else {
          currentDate = 1;
        }

        // update calendar
        showDatePicker(e);
        updateDatePicker();
      });

      $("#date-picker-next-month").click(function() {
        changeMonth("Next");
      });

      $("#date-picker-previous-month").click(function() {
        changeMonth("Previous");
      });

      $("#date-picker-exit").click(function() {
        hideDatePicker();
      });

      $(document).click(function(e) {
        var target = $(e.target);
        var clickedOnPicker = (target.closest("#date-picker-modal").length);
        var clickedOnDate = (target.closest(".date-picker-date").length);
        var isPreviousOrNext = target.hasClass("previous-month") || target.hasClass("next-month");

        if (!(clickedOnPicker || clickedOnDate || isPreviousOrNext)) {
          hideDatePicker();
        }
      });

    });

    // called on initialising (set to today) and then every time the month changes or on moving between dates
    function updateDatePicker(changeMonth = false) {

      var datePicker = $("#date-picker");
      var curDate = dates[currentDate]; // shorthand

      // check if it needs to update
      // updates if changed month directly (changeMonth) or if switched to other .date-picker-date and month is different (differentMonth)
      var differentMonth = checkChangedMonth();
      if (changeMonth === false && differentMonth === false) { return; }

      updatePickerMonth();

      // clear out all tr instances other than the header row
      // really just removing all rows and appending header row straight back in
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
      // clear all rows
      datePicker.contents().remove();
      datePicker.append(headerRow);

      var todayDate = curDate.getDate();
      var firstOfMonth = new Date(curDate.getFullYear(), curDate.getMonth(), 1);
      var firstWeekday = firstOfMonth.getDay(); // 0-indexed; 0 is Sunday, 6 is Saturday
      var lastMonthToInclude = firstWeekday; // happily, this just works as-is.
      var firstOfNextMonth = addMonths(firstOfMonth, 1);
      var lastOfMonth = addDays(firstOfNextMonth, -1).getDate();

      var openRow = "<tr class='date-picker-calendar-row'>";
      var closeRow = "</tr>";
      var currentRow = openRow;

      // Add in as many of last month as required
      if (lastMonthToInclude > 0) {
        var lastMonthLastDay = addDays(firstOfMonth, -1);
        var lastMonthDays = lastMonthLastDay.getDate();
        var lastMonthStartAdding = lastMonthDays - lastMonthToInclude + 1;

        // add days from previous month
        // takes arguments (start loop, end loop <=, counter, 'true' if current month OR class if another month (optional, default "") )
        //addToCalendar(lastMonthStartAdding, lastMonthDays, 0, "previous-month");
        //addToCalendar(lastMonthStartAdding, lastMonthDays, 0, "month-previous");
        addToCalendar(lastMonthStartAdding, lastMonthDays, 0, "previous-month");
      }

      // fill out rest of row with current month
      // doesn't matter how many of last month were included, all accounted for
      addToCalendar(1, 7 - lastMonthToInclude, lastMonthToInclude, true);

      // reset for current month generation
      currentRow = openRow;

      var counter = 7;
      var addedFromCurrentMonth = 7 - firstWeekday + 1;

      addToCalendar(addedFromCurrentMonth, lastOfMonth, counter, true);

      // at this point, counter = all of this month + whatever was included from last month
      counter = lastMonthToInclude + lastOfMonth;
      var nextMonthToInclude = counter % 7 === 0 ? 0 : 7 - (counter % 7);

      addToCalendar(1, nextMonthToInclude, counter, "next-month");

      // add event listener again
      applyDateEventListener();

      // update current date box
      updateDateShown();



      // functions scoped to this outer function
      //############################################################
      function checkChangedMonth() {
        // updates if changed month directly (changeMonth) or if switched to other .date-picker-date and month is different (differentMonth)
        var differentMonth = false;
        // checks if it's the same date again
        if (currentDate !== previousDate) {
          // if either month or year are different then month has changed
          if (dates[0].getMonth() !== dates[2].getMonth() || dates[0].getYear() !== dates[2].getYear() ) {
            differentMonth = true;
          }
        }

        return differentMonth;

      }

      function addToCalendar(start, end, counter, cellClass) {

        var currentMonth = cellClass === true ? true : false;

        for (var i = start; i <= end; i++) {
          counter += 1;
          if (i === todayDate && currentMonth) {
            currentRow += `<td class="active">${i}</td>`;
          } else if (cellClass && !currentMonth) {
            currentRow += `<td class="${cellClass}">${i}</td>`;
          } else {
            currentRow += `<td>${i}</td>`;
          }
          if (counter % 7 === 0) {
            datePicker.append(currentRow + closeRow);
            currentRow = openRow;
          }
        }
      }
    }

    function updatePickerMonth() {
      var monthName = monthFormatter.format(dates[currentDate]);
      var year = dates[currentDate].getFullYear();
      var dateText = monthName + " " + year;
      $("#date-picker-month").text(dateText);
    }

    function dateSelected(currentDay) {

      // update the active .date-picker-date with the current date
      var activeDate = $( $(".date-picker-date.active")[0] );

      // get current date and update
      dates[currentDate].setDate(currentDay);
      updateDateShown();
    }

    // 'direction' can be either "Next" or "Previous"
    function changeMonth(direction) {

      var increment = direction === "Next" ? 1 : -1;

      // change month
      dates[currentDate] = addMonths(dates[currentDate], increment);

      // change month name in picker
      updatePickerMonth();

      // update calendar
      // passes 'true' that month has changed
      updateDatePicker(true);
    }

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

    function hideDatePicker() {
      $(".date-picker-date").removeClass("active");
      $("#date-picker-modal").addClass("hidden-2");
    }

    function applyDateEventListener() {

      $("#date-picker td").click(function() {

        // Calendar UI
        $("#date-picker td").removeClass("active");
        $(this).addClass("active");

        // update variables
        currentDay = $(this).text();

        // update the current date
        dateSelected(currentDay);

        // change month based on calendar day class
        if ($(this).hasClass("previous-month")) {
          changeMonth("Previous");
        } else if ($(this).hasClass("next-month")) {
          changeMonth("Next");
        } else {
          // clicked in current month; made selection so hide picker again
          hideDatePicker();
        }
      });

    }


    // Utilities
    //################################################################
    // set location for date picker
    $(document).ready(function() {
      updateWidths();
    });

    $(window).resize(function() {
      updateWidths();
    });

    function updateWidths() {
      windowWidth = $(window).width();
    }

    // courtesy of https://stackoverflow.com/questions/563406/add-days-to-javascript-date
    function addDays(date, days) {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }

    function addMonths(date, months) {
      var result = new Date(date);
      result.setMonth(result.getMonth() + months);
      return result;
    }

    // courtesy of https://stackoverflow.com/a/15764763/7170445
    function getDateString(date) {
      var year = date.getFullYear();

      var month = (1 + date.getMonth()).toString();
      month = month.length > 1 ? month : '0' + month;

      var day = date.getDate().toString();
      day = day.length > 1 ? day : '0' + day;

      return day + '/' + month + '/' + year;
    }

    function updateDateShown() {
      var formattedDate = getDateString(dates[currentDate]);
      var updateDateBox = $(datesBoxes[currentDate]);

      var updateDisplayBox = $(displayBoxes[currentDate]);
      var dayAndMonth = dates[currentDate].getDate() + " " + monthFormatter.format(dates[currentDate]).slice(0,3);

      updateDateBox.text(formattedDate);
      updateDisplayBox.text(dayAndMonth);
    }
}