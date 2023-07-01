$(document).ready(function() {
    $('#taskForm').on('submit', function(event) {
      event.preventDefault();
      let taskInput = $('#taskInput');
      let taskName = taskInput.val();
  
      if (taskName.trim() !== '') {
        let taskItem = $('<li></li>').text(taskName);
        $('#taskList').append(taskItem);
        taskInput.val('');
      }
    });
  
    $('#taskList').on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  });
  