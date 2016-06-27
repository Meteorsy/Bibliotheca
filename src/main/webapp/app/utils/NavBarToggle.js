class NavBarToggle {
    static setNavBar() {
        let $items_with_subs = $('nav').find('li:has(> ul > li)');

        $items_with_subs.filter('.active').addClass('expanded');

        $items_with_subs.each((i, el) => {
            let $li     = $(el),
                $a      = $li.children('a'),
                $sub    = $li.children('ul');

            $li.addClass('has-sub');

            $a.on('click', (ev) => {
                ev.preventDefault();

                NavBarToggle.toggleSiblings($li);

                if ($li.hasClass('expanded') || $li.hasClass('opened')) {
                    NavBarToggle.collapseNavBar($li, $sub);
                }
                else {
                    NavBarToggle.expendNavBar($li, $sub);
                }
            });
        });
    }

    static toggleSiblings($li) {
        $li.siblings().not($li).filter('.expanded, .opened').each((i, el) => {
            let $_li = $(el),
                $_sub = $_li.children('ul');

            NavBarToggle.collapseNavBar($_li, $_sub);
        });
    }

    static expendNavBar($li, $sub) {
        if (!$li.data('is-busy') && !($('nav').hasClass('collapsed'))) {
            $li.addClass('expanded').data('is-busy', true);
            $sub.show();

            let
                $sub_items      = $sub.children(),
                sub_height      = $sub.outerHeight();

            $sub_items.addClass('is-hidden');
            $sub.height(0);

            TweenMax.to(
                $sub,
                .2,
                {
                    css: {
                        height: sub_height
                    },
                    onUpdate: NavBarToggle.ps_update,
                    onComplete: function() {
                        $sub.height('');
                    }
                }
            );

            let
                interval_1 = $li.data('sub_i_1'),
                interval_2 = $li.data('sub_i_2');

            window.clearTimeout(interval_1);

            interval_1 = setTimeout(() => {
                $sub_items.each((i, el) => {
                    let $sub_item = $(el);

                    $sub_item.addClass('is-shown');
                });

                let
                    finish_on  = 150 * $sub_items.length,
                    t_duration = parseFloat($sub_items.eq(0).css('transition-duration')),
                    t_delay    = parseFloat($sub_items.last().css('transition-delay'));

                if (t_duration && t_delay) {
                    finish_on = (t_duration + t_delay) * 1000;
                }

                window.clearTimeout(interval_2);

                interval_2 = setTimeout(() => {
                    $sub_items.removeClass('is-hidden is-shown');
                }, finish_on);

                $li.data('is-busy', false);
            }, 0);

            $li.data('sub_i_1', interval_1);
            $li.data('sub_i_2', interval_2);
        }
    }

    static collapseNavBar($li, $sub) {
        if (!$li.data('is-busy')) {
            let $sub_items = $sub.children();

            $li.removeClass('expanded').data('is-busy', true);
            $sub_items.addClass('hidden-item');

            TweenMax.to(
                $sub,
                .2,
                {
                    css: {
                        height: 0
                    },
                    onUpdate: NavBarToggle.ps_update,
                    onComplete: function() {
                        $li.data('is-busy', false).removeClass('opened');

                        $sub.attr('style', '').hide();
                        $sub_items.removeClass('hidden-item');

                        $li.find('li.expanded ul').attr('style', '').hide().parent().removeClass('expanded');

                        NavBarToggle.ps_update(true);
                    }
                }
            )
        }
    }

    static ps_update(destroy_init) {
        if ($.isFunction($.fn.perfectScrollbar)) {
            if (!$('nav').hasClass('collapsed')) {
                $('nav').perfectScrollbar('update');

                if (destroy_init) {
                    NavBarToggle.ps_destroy();
                    NavBarToggle.ps_init();
                }
            }
        }
    }

    static ps_init() {
        if ($.isFunction($.fn.perfectScrollbar)) {
            if (!$('nav').hasClass('collapsed') && $('nav').hasClass('fixed')) {
                $('nav').perfectScrollbar({
                    wheelSpeed: 2,
                    wheelPropagation: true
                });
            }
        }
    }

    static ps_destroy() {
        if ($.isFunction($.fn.perfectScrollbar)) {
            $('nav').perfectScrollbar('destroy');
        }
    }
}

export default NavBarToggle;