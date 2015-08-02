(function (env) {
    "use strict";
    env.ddg_spice_shabbat_candle_lighting_times = function(api_result){

        // Validate the response (customize for your Spice)
        if (!api_result || api_result.error) {
            return Spice.failed('shabbat_candle_lighting_times');
        }

        // Render the response
        Spice.add({
            id: "shabbat_candle_lighting_times",

            // Customize these properties
            name: "Candle Lighting",
            data: api_result,
            meta: {
                sourceName: "hebcalhebcal.com",
                sourceUrl: 'http://www.hebcal.com/shabbat/'
            },
            templates: {
                group: 'base',
                options: {
                    content: Spice.shabbat_candle_lighting_times.content,
                    moreAt: false
                }
            }
        });
    };
}(this));
