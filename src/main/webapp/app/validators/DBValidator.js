class DBValidator {
    static validateForm() {
        jQuery('#SpreadAdd').validate({
            rules: {
                dbName: {
                    required: true,
                    maxlength: 40
                },
                dbLink: {
                    required: true,
                    maxlength: 255,
                    url: true
                }
            },
            submitHandler: (form) => {
                jQuery.ajax({
                    url: '/selfDb/add',
                    method: 'POST',
                    dataType: 'json',
                    data: {
                        dbName: jQuery(form).find('input[name="dbName"]').val(),
                        dbLink: jQuery(form).find('input[name="dbLink"]').val(),
                        dbType: 5
                    },
                    success: (response) => {
                        if (response.id) {
                            window.toastr.success("Success to add the spread!");
                        } else {
                            window.toastr.error("Something go wrong when adding the new spread!!")
                        }
                    }
                });
            }
        });

        jQuery('#dbAdd').validate({
            rules: {
                dbName: {
                    required: true,
                    maxlength: 40
                },
                dbLink: {
                    required: true,
                    maxlength: 255,
                    url: true
                },
                dbType: {
                    required: true
                }
            },
            submitHandler: (form) => {
                jQuery.ajax({
                    url: '/selfDb/add',
                    method: 'POST',
                    dataType: 'json',
                    data: {
                        dbName: jQuery(form).find('input[name="dbName"]').val(),
                        dbLink: jQuery(form).find('input[name="dbLink"]').val(),
                        dbType: jQuery(form).find('select[name="dbType"]').val()
                    },
                    success: (response) => {
                        if (response.id) {
                            window.toastr.success("Success to add the database!");
                        } else {
                            window.toastr.error("Something go wrong when adding the new database!!")
                        }
                    }
                });
            }
        });
    }
}

export default DBValidator;