$(()=>{
    $('.input-group>input[type="email"]').on(
        {
            blur: function(){
                if(this.value.length != "")
                    this.classList.add('has-content');
                else{
                    this.classList.remove('has-content');
                    this.classList.add('error');
                    $(this).siblings('.error-box').text("Email is required")
                }
            }
        }
    )
    $('.summary').click(function(e){
        $(this).toggleClass('open');
        $(this).siblings('.details').slideToggle(250);
        $(this).parent().siblings().children('.details').slideUp(250);
        $(this).parent().siblings().children('.summary').removeClass('open');
    })
})
