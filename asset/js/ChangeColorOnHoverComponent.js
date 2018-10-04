// EXAMPLE USE: .. change-color-on-hover="color: #00aaff; url: ./trax/recent">
AFRAME.registerComponent('change-color-on-hover', 
{
    schema:
    {
        color: {default: 'red'}
    },

    init: function ()
    {
        var data = this.data;
        var el = this.el;
        var defaultColor = el.getAttribute('material').color;

        el.addEventListener('mouseenter', function ()
            {
                el.setAttribute("color", data.color);
            });

        el.addEventListener('mouseleave', function()
            {
                el.setAttribute('color', defaultColor);
            });

        el.addEventListener('click', function()
            {
                el.setAttribute('color', '#44FFaa');

                // load url
                // window.location.href = data.url; 
                window.location.assign(data.url);
            });
    }
});