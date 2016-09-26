exports.chatNewMessage = function(hook, context, cb){
  var msgDate = new Date(context.timestamp);
  
  var weekday;
  switch (msgDate.getDay()) {
  	case 0:
  	  weekday = "Sun";
  	  break;
  	case 1:
  	  weekday = "Mon";
  	  break;
  	case 2:
  	  weekday = "Tue";
  	  break;
  	case 3:
  	  weekday = "Wed";
  	  break;
  	case 4:
  	  weekday = "Thu";
  	  break;
  	case 5:
  	  weekday = "Fri";
  	  break;
  	case 6:
  	  weekday = "Sat";
  	  break;
  	default:
  	  weekday = "";
  }

  var month;
  switch (msgDate.getMonth()) {
  	case 0:
  	  month = "Jan";
  	  break;
  	case 1:
  	  month = "Feb";
  	  break;
  	case 2:
  	  month = "Mar";
  	  break;
  	case 3:
  	  month = "Apr";
  	  break;
  	case 4:
  	  month = "May";
  	  break;
  	case 5:
  	  month = "Jun";
  	  break;
  	case 6:
  	  month = "Jul";
  	  break;
  	case 7:
  	  month = "Aug";
  	  break;
  	case 8:
  	  month = "Sep";
  	  break;
  	case 9:
  	  month = "Oct";
  	  break;
  	case 10:
  	  month = "Nov";
  	  break;
  	case 11:
  	  month = "Dec";
  	  break;
  	default:
  	  month = "";
  }
  
  var day = msgDate.getDate();

  var year = msgDate.getFullYear();
  
  context.timeStr = context.timeStr + " - " + weekday + "<br />" + month + " " + day + " " + year;

  // run the rest of the callback to show the new chat message
  return cb();
}
