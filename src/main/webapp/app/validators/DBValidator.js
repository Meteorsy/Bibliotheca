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

    static validateModify(e) {
        jQuery('#dbModify').validate({
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
                    url: '/selfDb/modify',
                    method: 'POST',
                    dataType: 'json',
                    data: {
                        dbName: jQuery(form).find('input[name="dbName"]').val(),
                        dbLink: jQuery(form).find('input[name="dbLink"]').val(),
                        dbType: jQuery(form).find('select[name="dbType"]').val(),
                        id: e
                    },
                    success: (response) => {
                        if (response > 0) {
                            jQuery('#dbModal').modal('hide');
                            window.toastr.success("Success to update the database!");
                        } else {
                            window.toastr.error("Something go wrong when updating the new database!!")
                        }
                    }
                });
            }
        });
    }

    static validateModified(e) {
        jQuery('#SpreadModify').validate({
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
                    url: '/selfDb/modify',
                    method: 'POST',
                    dataType: 'json',
                    data: {
                        dbName: jQuery(form).find('input[name="dbName"]').val(),
                        dbLink: jQuery(form).find('input[name="dbLink"]').val(),
                        dbType: 5,
                        id: e
                    },
                    success: (response) => {
                        if (response > 0) {
                            jQuery('#spreadModal').modal('hide');
                            window.toastr.success("Success to update the spread!");
                        } else {
                            window.toastr.error("Something go wrong when updating the new spread!!")
                        }
                    }
                });
            }
        });
    }
}

export default DBValidator;