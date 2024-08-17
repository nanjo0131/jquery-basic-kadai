
    $(window).on('load', () => {
     console.log('loadイベントが発生しました');
    });
  
       $(document).on('scroll', (e) => {
        if(e.type === 'scroll'){
            console.log('scrollイベントが発生しました');
        }
    });


    
    