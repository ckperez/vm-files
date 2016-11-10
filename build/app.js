$.ajax({
    type: 'HEAD',
    url: '/backend',
    success: function(data, message, xhr){
        console.log(data);
    }
});