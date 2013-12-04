/**
    examples:
    'sprites_name' : {
         'file' : 'path/to/file',
         'tile' : width,
         'tileh' : height,
         'elements': {
             'sprite_name' : [0, 0]
         }
    },
*/

Sprites = Backbone.Model.extend({
    defaults: {
        images:{
            'sprite.png': {
                'file': 'web/images/sprite.png',
                'tile': 16,
                'tileh': 16,
                'elements': {
                    grass1: [0,0],
                    grass2: [1,0],
                    grass3: [2,0],
                    grass4: [3,0],
                    flower: [0,1],
                    bush1:  [0,2],
                    bush2:  [1,2],
                    player: [0,3]
                }
            }, 'LarrySprite.png': {
                'file': 'web/images/LarrySprite4x.png',
                'tile': 56,
                'tileh': 132,
                'elements': {
                    larry: [0,0]
                }
            }, 'LarryBackgrounds.png': {
                file: 'web/images/lsl1bgs_4x.png',
                tile: 320*4,
                tileh: 168*4,
                elements: {
                    bg_leftys: [9, 0],
                    bg_leftys_interior: [2, 1]
                }
            }
        }
    },
    initialize: function(){

    },
    /**
     * Create Crafty sprites from images object
     * Pass key if You want create only one choosen sprite.
     *
     * @param  string key - sprite definition key
     */
    create: function(key){
        if(key != undefined){
            element = this.get('images')[key];
            if(element['tileh'] == undefined)
                Crafty.sprite(element['tile'], element['file'], element['elements']);
            else
                Crafty.sprite(element['tile'], element['tileh'], element['file'], element['elements']);

            return true;
        };

        _.each(this.get('images'), function(element, k){
            if(element['tileh'] == undefined)
                Crafty.sprite(element['tile'], element['file'], element['elements']);
            else
                Crafty.sprite(element['tile'], element['tileh'], element['file'], element['elements']);
        });

    },
    /**
     * Get path for sprites files - for loading
     *
     * @return array array of files paths
     */
    getPaths: function(){
        var array = [], i=0;
        _.each(this.get('images'), function(element, key){
            array[i] = element['file']
            i++;
        });

        return array;
    }
});