class ProgressBar {
    static loadingTo(rate) {
        let properties = new Map();

        properties.set('rate', 0);
        properties.set('delay', 1.3);
        properties.set('wait', 0);

        if (Number.isInteger(rate)) {
            properties.set('rate', rate);
        }

        // boundary detect
        if (properties.get('rate') > 100) {
            properties.set('rate', 100);
        }
        else if (properties.get('rate') < 0) {
            properties.set('rate', 0);
        }

        let target      = $('div.loading-bar');

        // animation delay
        TweenMax.to(
            target,
            properties.get('delay'),
            {
                css: {
                    width: properties.get('rate') + '%'
                },
                delay: properties.get('wait'),
                ease: target.data('rate') > properties.get('rate') ? Expo.easeOut : Expo.easeIn,
                onStart: function() {},
                onComplete: function() {
                    if (target.data('rate') === 100) {
                        ProgressBar.hideBar();
                    }
                },
                onUpdate: function() {
                    target.data('rate', Number.parseInt(target.width(), 10));
                }
            }
        );
    }

    static hideBar() {
        $('div.loading-bar').addClass('hide-bar');
    }
}

export default ProgressBar;