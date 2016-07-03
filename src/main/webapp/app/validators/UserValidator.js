class UserValidator {
    static validateForm() {
        jQuery('#userAdd').validate({
            rules: {
                userId: {
                    required: true,
                    maxlength: 30
                },
                password: {
                    required: true
                },
                rePassword: {
                    required: true,
                    equalTo: "#userAdd input[name='password']"
                },
                username: {
                    required: true,
                    maxlength: 30
                },
                mobile: {
                    required: true,
                    number: true,
                    digits: true,
                    rangelength: [11, 11]
                },
                email: {
                    required: true,
                    email: true
                }
            },
            submitHandler: (form) => {
                jQuery.ajax({
                    url: '/user/add',
                    method: 'POST',
                    dataType: 'json',
                    data: {
                        userId: jQuery(form).find('input[name="userId"]').val(),
                        password: jQuery(form).find('input[name="password"]').val(),
                        rePassword: jQuery(form).find('input[name="rePassword"]').val(),
                        username: jQuery(form).find('input[name="username"]').val(),
                        mobile: jQuery(form).find('input[name="mobile"]').val(),
                        email: jQuery(form).find('input[name="email"]').val()
                    },
                    success: (response) => {
                        if (response.userId) {
                            window.toastr.success("Success to add the user!");
                        } else {
                            window.toastr.error("Something go wrong when adding the new user!!")
                        }
                    }
                })
            }
        });
    }

    static validateModify(id) {
        jQuery('#userModify').validate({
            submitHandler: (form) => {
                jQuery.ajax({
                    url: '/user/modify',
                    method: 'POST',
                    dataType: 'json',
                    data: {
                        userId: id,
                        password: jQuery(form).find('input[name="password"]').val(),
                        rePassword: jQuery(form).find('input[name="rePassword"]').val(),
                        username: jQuery(form).find('input[name="username"]').val(),
                        mobile: jQuery(form).find('input[name="mobile"]').val(),
                        email: jQuery(form).find('input[name="email"]').val()
                    },
                    success: (response) => {
                        if (response > 0) {
                            window.toastr.success("Success to modify the user's information");
                        } else {
                            window.toastr.error("Something go wrong when modifying the new user!!")
                        }
                    }
                })
            }
        });
    }
}

export default UserValidator;