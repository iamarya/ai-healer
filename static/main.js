var outputArea = $("#chat-output");

$("#user-input-form").on("submit", function(e) {
  
  e.preventDefault();
  
  var message = $("#user-input").val();
  
  outputArea.append(`
    <div class='bot-message'>
      <div class='message'>
        ${message}
      </div>
    </div>
  `);

    $.ajax({
        url: "/chat",
        type: 'POST',
        dataType: "json",
        data: JSON.stringify({'message': message}),
        cors: true ,
        contentType:'application/json',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        success: function (result){
          console.log('hiiii'+ result);
          outputArea.append(`
            <div class='user-message'>
              <div class='message'>
              ${result.message}
              </div>
            </div>
          `);
          $('html, body').scrollTop( $(document).height() );
        }
    });
  
  $("#user-input").val("");
});