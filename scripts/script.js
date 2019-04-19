$( document ).ready(function() {
    $('#pagination-demo').twbsPagination({
        totalPages: 12,
        // the current page that show on start
        startPage: new Date().getMonth() + 1,
        
        // maximum visible pages
        visiblePages: 3,
        
        initiateStartPageClick: true,
        
        // template for pagination links
        href: false,
        
        // variable name in href template for page number
        hrefVariable: '{{number}}',
        
        // Text labels
        first: 'First',
        prev: '&laquo;',
        next: '&raquo;',
        last: 'Last',  

        // carousel-style pagination
        loop: true,
        
        // callback function
        onPageClick: function (event, page) {
            $('.page-active').removeClass('page-active');
            $('#page' + page).addClass('page-active');
        },

        formatPageLabel: (itemText) => {
            const itemTexts = [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ];

            const text = itemTexts[itemText-1];
            if (text !== undefined) {
                return text;
            }

            return itemText;
        },
        
        // pagination Classes
        paginationClass: 'pagination',
        nextClass: 'next',
        prevClass: 'prev',
        lastClass: 'last',
        firstClass: 'first',
        pageClass: 'page',
        activeClass: 'active',
        disabledClass: 'disabled'
    });
});