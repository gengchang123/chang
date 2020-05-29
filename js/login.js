$(function(){
    $('.user').on('blur',function(){
        var yanzheng=$('.user').val()
        var message=''
        var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1})) \d{8})$/;
        if(yanzheng == ''){
           $('.message').text("手机号码不能为空！") ;
        //    $('.login-hd').append('<span class="message">123</span>') ;
        }else if(yanzheng.length !=11){
            $('.message').text("请输入11的手机号码！") ;
        }else if(!myreg.test(yanzheng)){
            $('.message').text("请输入有效的手机号码！") ;
        }
        
    })
        var number=1;
        // 图标切换
    $('.tubiao').click(function(){
        if(number==1){
            $('.tubiao').addClass('icon-browse')
            $('.tubiao').removeClass('con-Notvisible')      
            $(".psd").attr("type","text");
            // $('.tubiao').html('&#xe745')
              number=2
        }else{
            $('.tubiao').addClass('con-Notvisible')
            $('.tubiao').removeClass('icon-browse')
            $(".psd").attr("type","password");
            
            

            // $('.tubiao').html('&#xe6fe')
              number=1
        }
    })
    // 登录按钮制作
    $('.btn').on('click', function () {
       var username=$('.user').val()
       var password=$('.psd').val()
      $.ajax({
          type:'post',
          url:'http://127.0.0.1:8888/api/private/v1/login',
          data:{
              username:username,
              password:password

          },
          success:function(response){
            location.href = '/Users/Administrator/Desktop/%E6%B5%8B%E8%AF%95/06%E6%98%BE%E7%A4%BA%E5%88%87%E6%8D%A2.html';
            
          },
          error:() => {
            alert('退出失败')
          }
      })
       
    });
})