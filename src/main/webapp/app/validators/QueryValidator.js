class QueryValidator {
    static validateForm() {
        jQuery('#queryAdd').validate({
            rules: {
                keyword: {
                    required: true,
                    maxlength: 250
                }
            },
            submitHandler: (form) => {
                jQuery.ajax({
                    url: '/query/add',
                    method: 'POST',
                    dataType: 'json',
                    data: {
                        keyword: jQuery(form).find('input[name="keyword"]').val()
                    },
                    success: (response) => {
                        if (response.id) {
                            window.toastr.success("Success to add the query!");
                        } else {
                            window.toastr.error("Something go wrong when adding the new query!!")
                        }
                    }
                })
            }
        });
    }
}

export default QueryValidator;