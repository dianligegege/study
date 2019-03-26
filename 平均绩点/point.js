import jQuery from 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js';

if($('#dqwz')) {
    alert('yes');
    $('.search_con').append('<button type="submit" name="Button1" value="按学期查询" id="Button1" class="button">');
};

if($('.nav last')) {
    setTimeout(() => {
        console.log($('.search_con'));
    }, 500);
}