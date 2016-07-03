class BookValidator {
    static validateForm() {
        jQuery('#bookBorrow').validate({
            rules: {
                bookId: {
                    required: true
                }
            },
            submitHandler: (form) => {
                jQuery.ajax({
                    url: '/book/change',
                    method: 'POST',
                    dataType: 'json',
                    data: {
                        bookId: jQuery(form).find('input[name="bookId"]').val()
                    },
                    success: (response) => {
                        if (response > 0) {
                            window.toastr.success("Success to book the book!");
                        } else {
                            window.toastr.error("Something go wrong when booking the book!!")
                        }
                    }
                })
            }
        });
    }

    static validateAdd() {
        jQuery('#bookAdd').validate({
            rules: {
                bookId: {
                    required: true,
                    maxlength: 20
                },
                bookName: {
                    required: true,
                    maxlength: 50
                }
            },
            submitHandler: (form) => {
                jQuery.ajax({
                    url: '/book/add',
                    method: 'POST',
                    dataType: 'json',
                    data: {
                        bookId: jQuery(form).find('input[name="bookId"]').val(),
                        bookName: jQuery(form).find('input[name="bookName"]').val()
                    },
                    success: (response) => {
                        if (response.bookId) {
                            window.toastr.success("Success to add the book!");
                        } else {
                            window.toastr.error("Something go wrong when adding the new book!!")
                        }
                    }
                });
            }
        });
    }
}

export default BookValidator;