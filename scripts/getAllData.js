$( document ).ready(function() { 
    $('#reviewForm').on('submit',function(e){
        var form = document.getElementById('reviewForm');  

        if($('#inputName').val() == '' || $('#inputEmail').val() == '' || $('#inputTitle').val() == '' ||
        $('#inputDescription').val() == ''){            

        }else{

            $captcha = $( '#recaptcha' );
            response = grecaptcha.getResponse();
    
            if (response.length === 0) {
                $( '.msg-error').text( "Please enter the captcha." );
                if( !$captcha.hasClass( "error" ) ){
                    $captcha.addClass( "error" );
                }
            } else {
                $( '.msg-error' ).text('');
                    $captcha.removeClass( "error" );
                    
                    $('.modal').addClass('is-active');            
        
                    $('#modalName').text(form.inputName.value);
                    $('#modalEmail').text(form.inputEmail.value);
                    $('#modalReviewTitle').text(form.inputTitle.value);
                    $('#modalReviewText').text(form.inputDescription.value);
                    $('.starability-result').attr('data-rating', form.rating.value);
                return true;
            }
        }   
    })

    $('.modal-close').click(function() {
        $('.modal').removeClass('is-active');
        location.reload();
    });

    $('.buttonCloseModal').click(function() {
        $('.modal').removeClass('is-active');
        location.reload();
    });
    
});





