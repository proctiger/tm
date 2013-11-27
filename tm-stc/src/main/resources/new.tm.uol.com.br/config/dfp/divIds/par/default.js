
	TM.defaultBanners = [
    {
        'id'    : 'banner-1x1',
        'pos'   : 11, 
        'width' : 1, 
        'height': 1
    },
    {
        'id'    : 'banner-300x250', 
        'dfpPos': 'bottom', 
        'pos'   : 5, 
        'width' : 300, 
        'height': 250
    },
    {
        'id'    : 'banner-300x600',
        'pos'   : 3, 
        'width' : 300, 
        'height': 600
    },
    {
        'id'    : 'banner-728x90',
        'dfpPos': 'top',
        'pos'   : 1, 
        'width' : 728,
        'height': 90
    }
];


TM.urlConfBanners = [
    {
        're'      : /^http(s)?:\/\/cenapop.(virgula)(.(bol|uol|yacowslabs))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-728x90-2',
                'dfpPos': 'bottom',
                'pos': 8,
                'width': 728,
                'height': 90
            }, 
            {
                'id': 'banner-300x250-2',
                'dfpPos': 'Middle', 
                'pos': 8,
                'width': 300,
                'height': 250
            }, 
            {
                'id': 'banner-120x600',
                'dfpPos': 'middle', 
                'pos': 6,
                'width': 120,
                'height': 600
            },            
            {
                'id': 'banner-300x600-2',
                'dfpPos': 'Middle', 
                'pos': 6,
                'width': 300,
                'height': 600
            },            
            {
                'id': 'banner-588x414',
                'dfpPos': 'Middle', 
                'pos': 6,
                'width': 588,
                'height': 414
            }, 
            {
                'id': 'banner-300x250-3',
                'dfpPos': 'bottom',
                'pos': 12,
                'width': 300,
                'height': 250
            }
        ]
    },  
    {
        're'      : /^http(s)?:\/\/(.+)?(virgula)(.(bol|uol|yacowslabs))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-728x90-2',
                'dfpPos': 'bottom',
                'pos': 8,
                'width': 728,
                'height': 90
            }, 
            {
                'id': 'banner-300x250-2',
                'dfpPos': 'Middle', 
                'pos': 8,
                'width': 300,
                'height': 250
            }, 
            {
                'id': 'banner-120x600',
                'dfpPos': 'middle', 
                'pos': 6,
                'width': 120,
                'height': 600
            },            
            {
                'id': 'banner-300x600-2',
                'dfpPos': 'Middle', 
                'pos': 6,
                'width': 300,
                'height': 600
            },            
            {
                'id': 'banner-588x414',
                'dfpPos': 'Middle', 
                'pos': 6,
                'width': 588,
                'height': 414
            }
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?(the-west|br.grepolis|tribalwars|mensagensepoemas|revista(gestaoenegocios|geo))(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x60',
                'pos': 6,
                'width': 120,
                'height': 60
            },
            {
                'id': 'banner-120x600',
                'pos': 6,
                'width': 120,
                'height': 600
            }            
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?(operamundi|ultimainstancia|sulamericaparadiso|revistasamuel)(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id'    : 'banner-180x150',
                'width' : 180, 
                'height': 150, 
                'pos'   : 7
            }
        ]
    }, 
    {
        're'      : /xpg/,
        'banners' : [
            {
                'id': 'banner-120x90',
                'dfpPos': 'top',
                'pos': 3,
                'width': 120,
                'height': 90
            }
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?(todaoferta|vh1brasil|icarly|vinhoegastronomia|jogos360|discoverymulher)(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x600',
                'pos': 6,
                'width': 120,
                'height': 600
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/folhadealphaville.uol.com.br(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x600',
                'pos': 6,
                'width': 120,
                'height': 600
            },
            {
                'id': 'banner-300x250-2',
                'pos': 1,
                'width': 300,
                'height': 250
            }, 

            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            }, 
            {
                'id': 'banner-468x60-2',
                'pos': 8,
                'width': 468,
                'height': 60
            }
        ]
    },    
    {
        're'      : /^http(s)?:\/\/spacenun.com(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x600',
                'pos': 6,
                'width': 120,
                'height': 600
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?radardedescontos.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-200x446',
                'pos': 9,
                'width': 200,
                'height': 446
            }
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?(roteiroceara|caranddriverbrasil|wikimetal)(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-300x250-2',
                'dfpPos': 'Middle', 
                'pos': 8,
                'width': 300,
                'height': 250
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?(tribunadoceara|caranddriverbrasil)(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x600',
                'pos': 6,
                'width': 120,
                'height': 600
            },
            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?(revistavivasaude)(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-300x250-2',
                'dfpPos': 'Middle', 
                'pos': 8,
                'width': 300,
                'height': 250
            }, 
            {
                'id': 'banner-300x250-3',
                'dfpPos': 'Bottom', 
                'pos': 12,
                'width': 300,
                'height': 250
            }
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?(gratisjogos|atrevida|corpoacorpo)(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-300x250-2',
                'dfpPos': 'Middle', 
                'pos': 8,
                'width': 300,
                'height': 250
            }
        ]
    },    
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?(belladasemana|sentirbem|sacizento)(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            }
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?osmaisbaratos.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'ad-1',
                'pos': 8,
                'width': 728,
                'height': 90
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?revistashape(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-728x90-2',
                'dfpPos': 'bottom',
                'pos': 8,
                'width': 728,
                'height': 90
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?aeromagazine(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            }, 
            {
                'id': 'banner-728x90-2',
                'dfpPos': 'bottom',
                'pos': 8,
                'width': 728,
                'height': 90
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?bemzen(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            }, 
            {
                'id': 'banner-300x250-2',
                'dfpPos': 'middle',
                'pos': 8,
                'width': 300,
                'height': 250
            }, 
            {
                'id': 'banner-300x250-3',
                'dfpPos': 'bottom',
                'pos': 12,
                'width': 300,
                'height': 250
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?revistacult.uol.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-220x90',
                'dfpPos': 'bottom',
                'pos': 8,
                'width': 220,
                'height': 90
            },
            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            }, 
            {
                'id': 'banner-120x60',
                'pos': 6,
                'width': 120,
                'height': 60
            }
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?(americaeconomiabrasil|geografia)(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            }, 
            {
                'id': 'banner-120x60',
                'pos': 6,
                'width': 120,
                'height': 60
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?revistapaisefilhos(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-728x90-2',
                'dfpPos': 'Bottom',
                'pos': 8,
                'width': 728,
                'height': 90
            }, 
            {
                'id': 'banner-300x250-2',
                'pos': 12,
                'width': 300,
                'height': 250
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?(revistasentidos)(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x60',
                'pos': 6,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            }, 
            {
                'id': 'banner-468x60-2',
                'pos': 8,
                'width': 468,
                'height': 60
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?portalimprensa(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            }, 
            {
                'id': 'banner-468x60-2',
                'pos': 8,
                'width': 468,
                'height': 60
            }
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?roteirosincriveis(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-728x90-2',
                'dfpPos': 'bottom',
                'pos': 8,
                'width': 728,
                'height': 90
            }, 
            {
                'id': 'banner-300x250-2',
                'pos': 8,
                'width': 300,
                'height': 250
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?ocapacitor(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x600',
                'pos': 6,
                'width': 120,
                'height': 600
            }, 
            {
                'id': 'banner-300x250-2',
                'pos': 8,
                'width': 300,
                'height': 250
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?pensador(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-300x250-2',
                'pos': 8,
                'width': 300,
                'height': 250
            }
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?congressoemfoco(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x600',
                'pos': 8,
                'width': 120,
                'height': 600
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?(revistaguiainfantil|revistaguiafundamental|revistavisaojuridica|racabrasil)(.(bol|uol))?.com(.br)?(\/.*)?$/, 
        'banners' : [
            {
                'id': 'banner-120x60',
                'pos': 3,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x90',
                'pos': 3,
                'width': 120,
                'height': 90
            },           
            {
                'id': 'banner-120x600',
                'pos': 6,
                'width': 120,
                'height': 600
            }
        ]
    },  
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?(mundonick|levelupgames)(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x60',
                'pos': 3,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x600',
                'pos': 6,
                'width': 120,
                'height': 600
            }
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?(construirmaispormenos)(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x60',
                'pos': 3,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            }, 
            {
                'id': 'banner-120x600',
                'pos': 6,
                'width': 120,
                'height': 600
            }, 
            {
                'id': 'banner-120x240',
                'dfpPos': 'left',
                'pos': 6,
                'width': 120,
                'height': 240
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?(revista(casaeconstrucao|decorarmaispormenos)|decorababy|festaviva)(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x60',
                'pos': 3,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            }, 
            {
                'id': 'banner-120x600',
                'pos': 6,
                'width': 120,
                'height': 600
            }, 
            {
                'id': 'banner-120x240',
                'dfpPos': 'left',
                'pos': 6,
                'width': 120,
                'height': 240
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?(mixriofm|construirmaispormenos)(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            }, 
            {
                'id': 'banner-120x600',
                'pos': 6,
                'width': 120,
                'height': 600
            }
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?(((psique|filosofia|portal|sociologia)cienciaevida)|leiturasdahistoria|omelhorvinho|literatura|conhecimentopratico|linguaportuguesa|filosofia)(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x60',
                'pos': 3,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            }
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?jcconcursos(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-728x90-2',
                'dfpPos': 'bottom',
                'pos': 8,
                'width': 728,
                'height': 90
            }, 
            {
                'id': 'banner-300x250-2',
                'dfpPos': 'bottom',
                'pos': 8,
                'width': 300,
                'height': 250
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?basilico(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-125x125',
                'pos': 7,
                'width': 125,
                'height': 125
            }, 
            {
                'id': 'banner-728x90-2',
                'dfpPos': 'bottom',
                'pos': 8,
                'width': 728,
                'height': 90
            }, 
            {
                'id': 'banner-300x250-2',
                'dfpPos': 'bottom',
                'pos': 8,
                'width': 300,
                'height': 250
            }, 
            {
                'id': 'banner-220x90',
                'dfpPos': 'bottom',
                'pos': 8,
                'width': 220,
                'height': 90
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?bestcars(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-728x90-2',
                'dfpPos': 'bottom',
                'pos': 8,
                'width': 728,
                'height': 90
            }, 
            {
                'id': 'banner-300x250-2',
                'pos': 8,
                'width': 300,
                'height': 250
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?portalcasaecia(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x60',
                'pos': 3,
                'width': 120,
                'height': 60
            },
            {
                'id': 'banner-120x240',
                'dfpPos': 'left',
                'pos': 6,
                'width': 120,
                'height': 240
            },
            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            }
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)uol.com(.br)?\/cabelos(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x600',
                'pos': 6,
                'width': 120,
                'height': 600
            },
            {
                'id': 'banner-120x240',
                'dfpPos': 'left',
                'pos': 6,
                'width': 120,
                'height': 240
            }, 
            {
                'id': 'banner-125x125',
                'dfpPos': 'par3',
                'pos': 7,
                'width': 125,
                'height': 125
            },
            {
                'id': 'banner-234x60',
                'dfpPos': 'left',
                'pos': 3,
                'width': 234,
                'height': 60
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?uol.com(.br)?\/canalexecutivo(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x600',
                'dfpPos': 'top',
                'pos': 6,
                'width': 120,
                'height': 600
            }, 
            {
                'id': 'banner-120x600-2',
                'dfpPos': 'bottom',
                'pos': 12,
                'width': 120,
                'height': 600
            },             
            {
                'id': 'banner-120x60',
                'pos': 3,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-728x90-2',
                'dfpPos': 'bottom',
                'pos': 8,
                'width': 728,
                'height': 90
            }, 
            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            }
        ]
    },   
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?carsale(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x600',
                'pos': 6,
                'width': 120,
                'height': 600
            }, 
            {
                'id': 'banner-960x60',
                'pos': 2,
                'width': 960,
                'height': 60
            }, 
            {
                'id': 'banner-468x60',
                'dfpPos': 'top',
                'pos': 1,
                'width': 468,
                'height': 60
            }, 
            {
                'id': 'banner-120x60',
                'pos': 3,
                'width': 120,
                'height': 60
            }
        ]
    },  
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?rollingstone(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x60',
                'pos': 3,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-300x250',
                'dfpPos': 'middle', 
                'pos': 5,
                'width': 300,
                'height': 250
            },            
            {
                'id': 'banner-300x250-2',
                'dfpPos': 'bottom', 
                'pos': 8,
                'width': 300,
                'height': 250
            }
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?([a-zA-Z0-9]+.)?humortadela(.bol)?(.uol)?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            }, 
            {
                'id': 'banner-728x90-2',
                'dfpPos': 'bottom',
                'pos': 8,
                'width': 728,
                'height': 90
            },             
            {
                'id': 'banner-120x60',
                'pos': 3,
                'width': 120,
                'height': 60
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?revistaadega(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            }, 
            {
                'id': 'banner-120x60',
                'pos': 3,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x240',
                'pos': 6,
                'width': 120,
                'height': 240
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?revistatenis(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            }, 
            {
                'id': 'banner-120x60',
                'pos': 3,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x240',
                'pos': 6,
                'width': 120,
                'height': 240
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?televisao(.(bol|uol))?.com(.br)?\/colunas\/flavio-ricco(\/.*)?$/,
        'banners' : [
            {
                'id'    : 'banner-1x1',
                'pos'   : 11, 
                'width' : 1, 
                'height': 1
            },
            {
                'id':'banner-120x35',
                'action':'http://bn.imguol.com/1x1.gif',
                'pos':6,
                'width':120,
                'height':35
            }, 
            {
                'id':'banner-120x35-2',
                'action':'http://bn.imguol.com/1x1.gif',
                'pos':9,
                'width':120,
                'height':35
            }, 
            {
                'id': 'banner-130x55',
                'action': 'http://bn.imguol.com/1x1.gif', 
                'pos': 6,
                'width': 130,
                'height': 55
            }
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?joycepascowitch(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            }, 
            {
                'id': 'banner-120x60',
                'dfpPos': 'par1',
                'pos': 3,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x60-2',
                'dfpPos': 'par2',
                'pos': 6,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x60-3',
                'dfpPos': 'par3',
                'pos': 9,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x60-4',
                'dfpPos': 'par4',
                'pos': 12,
                'width': 120,
                'height': 60
            }
        ]
    },   
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?motordream(.bol)?(.uol)?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id'    : 'banner-468x60',
                'width' : 468, 
                'height': 60, 
                'pos'   : 1
            }, 
            {
                'id'    : 'banner-180x150',
                'dfpPos': 'par1',
                'width' : 180, 
                'height': 150, 
                'pos'   : 3
            }, 
            {
                'id'    : 'banner-180x150-2',
                'dfpPos': 'par2',
                'width' : 180, 
                'height': 150, 
                'pos'   : 5
            }, 
            {
                'id'    : 'banner-180x150-3',
                'dfpPos': 'par3',
                'width' : 180, 
                'height': 150, 
                'pos'   : 6
            }, 
            {
                'id' : 'banner-180x150-4',
                'dfpPos': 'par4',
                'width' : 180, 
                'height': 150, 
                'pos': 7
            }, 
            {
                'id' : 'banner-180x150-5',
                'dfpPos': 'par5',
                'width' : 180, 
                'height': 150, 
                'pos': 9
            }, 
            {
                'id'    : 'banner-180x150-6',
                'dfpPos': 'par6',
                'width' : 180, 
                'height': 150, 
                'pos'   : 12
            }
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?(.*)?ruralcentro(.(bol.uol|bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-234x60',
                'dfpPos': 'left',
                'pos': 3,
                'width': 234,
                'height': 60
            }, 
            {
                'id': 'banner-234x60-2',
                'dfpPos': 'Middle',
                'pos': 5,
                'width': 234,
                'height': 60
            }, 
            {
                'id': 'banner-234x60-3',
                'dfpPos': 'right',
                'pos': 8,
                'width': 234,
                'height': 60
            },
            {
                'id': 'banner-234x60-4',
                'dfpPos': 'Bottom',
                'pos': 12,
                'width': 234,
                'height': 60
            },           
            {
                'id': 'banner-250x250',
                'width': 250, 
                'height': 250,
                'pos': 6 
            },
            {
                'id': 'banner-250x250-2',
                'dfpPos': 'Middle',
                'width': 250, 
                'height': 250,
                'pos': 9 
            },            
            {
                'id': 'banner-160x600',
                'pos': 6,
                'width': 160,
                'height': 600
            },             
            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            },
            {
                'id': 'banner-300x250-2',
                'dfpPos': 'middle', 
                'pos': 8,
                'width': 300,
                'height': 250
            },
            {
                'id': 'banner-300x250-3',
                'dfpPos': 'bottom', 
                'pos': 12,
                'width': 300,
                'height': 250
            }, 
            {
                'id': 'banner-300x250-4',
                'dfpPos': 'middle-2', 
                'pos': 16,
                'width': 300,
                'height': 250
            }, 
            {
                'id': 'banner-300x600-2',
                'dfpPos': 'Middle', 
                'pos': 6,
                'width': 300,
                'height': 600
            }
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?omelete(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-234x60-2',
                'dfpPos': 'Middle',
                'pos': 5,
                'width': 234,
                'height': 60
            }, 
            {
                'id': 'banner-234x60-3',
                'dfpPos': 'right',
                'pos': 8,
                'width': 234,
                'height': 60
            },

            {
                'id': 'banner-234x60',
                'dfpPos': 'Middle',
                'pos': 3,
                'width': 234,
                'height': 60
            },
            {
                'id': 'banner-960x60',
                'pos': 6,
                'width': 960,
                'height': 60
            }, 
            {
                'id': 'banner-300x250',
                'dfpPos': 'top', 
                'pos': 8,
                'width': 300,
                'height': 250
            }, 
            {
                'id': 'banner-300x250-2',
                'dfpPos': 'middle', 
                'pos': 8,
                'width': 300,
                'height': 250
            }, 
            {
                'id': 'banner-300x250-3',
                'dfpPos': 'bottom', 
                'pos': 12,
                'width': 300,
                'height': 250
            }, 
            {
                'id': 'banner-300x250-4',
                'dfpPos': 'middle-2', 
                'pos': 16,
                'width': 300,
                'height': 250
            }, 
            {
                'id': 'banner-468x60',
                'dfpPos': 'top', 
                'pos': 1,
                'width': 468,
                'height': 60
            }, 
            {
                'id': 'banner-468x60-2',
                'dfpPos': 'bottom', 
                'pos': 8,
                'width': 468,
                'height': 60
            }, 
            {
                'id': 'banner-120x600-1',
                'dfpPos': 'right', 
                'pos': 6,
                'width': 120,
                'height': 600
            },
            {
                'id': 'banner-120x600-2',
                'dfpPos': 'left', 
                'pos': 6,
                'width': 120,
                'height': 600
            }            
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/(.*)?jovempan(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x240',
                'pos': 6,
                'width': 120,
                'height': 600
            }, 
            {
                'id': 'banner-120x600',
                'pos': 6,
                'width': 120,
                'height': 600
            }, 
            {
                'id': 'banner-180x150',
                'pos': 7,
                'width': 180,
                'height': 150
            }, 
            {
                'id': 'banner-200x446',
                'pos': 6,
                'width': 200,
                'height': 446
            }, 
            {
                'id': 'banner-200x446-2',
                'pos': 9,
                'width': 200,
                'height': 446
            }, 
            {
                'id': 'banner-200x78',
                'dfpPos': 'par1',
                'pos': 3,
                'width': 200,
                'height': 78
            }, 
            {
                'id': 'banner-200x78-2',
                'dfpPos': 'par2',
                'pos': 6,
                'width': 200,
                'height': 78
            }, 
            {
                'id': 'banner-200x78-3',
                'dfpPos': 'par3',
                'pos': 9,
                'width': 200,
                'height': 78
            }, 
            {
                'id': 'banner-200x78-4',
                'dfpPos': 'par4',
                'pos': 12,
                'width': 200,
                'height': 78
            }, 
            {
                'id': 'banner-300x250-2',
                'pos': 12,
                'width': 300,
                'height': 250
            }
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?glamuramadevel2.clientes.ananke.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x60',
                'dfpPos': 'par1',
                'pos': 3,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x60-2',
                'dfpPos': 'par2',
                'pos': 6,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x60-3',
                'dfpPos': 'par3',
                'pos': 9,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x60-4',
                'dfpPos': 'par4',
                'pos': 12,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x60-5',
                'dfpPos': 'par5',
                'pos': 15,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x60-6',
                'dfpPos': 'par6',
                'pos': 18,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x60-7',
                'dfpPos': 'par7',
                'pos': 21,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x60-8',
                'dfpPos': 'par8',
                'pos': 24,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            }, 
            {
                'id': 'banner-300x250-2',
                'dfpPos': 'middle',
                'pos': 8,
                'width': 300,
                'height': 250
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?glamurama(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x60',
                'dfpPos': 'par1',
                'pos': 3,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x60-2',
                'dfpPos': 'par2',
                'pos': 6,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x60-3',
                'dfpPos': 'par3',
                'pos': 9,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x60-4',
                'dfpPos': 'par4',
                'pos': 12,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x60-5',
                'dfpPos': 'par5',
                'pos': 15,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x60-6',
                'dfpPos': 'par6',
                'pos': 18,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x60-7',
                'dfpPos': 'par7',
                'pos': 21,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x60-8',
                'dfpPos': 'par8',
                'pos': 24,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-468x60',
                'pos': 1,
                'width': 468,
                'height': 60
            }, 
            {
                'id': 'banner-300x250-2',
                'dfpPos': 'middle',
                'pos': 8,
                'width': 300,
                'height': 250
            }
        ]
    }, 
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?insercao(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x60',
                'dfpPos': 'top',
                'pos': 3,
                'width': 120,
                'height': 60
            },
            {
                'id': 'banner-468x60',
                'dfpPos': 'top',
                'pos': 1,
                'width': 468,
                'height': 60
            },
            {
                'id': 'banner-120x240',
                'dfpPos': 'left',
                'pos': 6,
                'width': 120,
                'height': 240
            }, 
            {
                'id': 'banner-125x125',
                'dfpPos': 'par1',
                'pos': 3,
                'width': 125,
                'height': 125
            }, 
            {
                'id': 'banner-125x125-2',
                'dfpPos': 'par2',
                'pos': 5,
                'width': 125,
                'height': 125
            }, 
            {
                'id': 'banner-125x125-3',
                'dfpPos': 'par3',
                'pos': 7,
                'width': 125,
                'height': 125
            }, 
            {
                'id': 'banner-125x125-4',
                'dfpPos': 'par4',
                'pos': 9,
                'width': 125,
                'height': 125
            }, 
            {
                'id': 'banner-120x600',
                'dfpPos': 'right',
                'pos': 6,
                'width': 120,
                'height': 600
            }
        ]
    },
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?carpress(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-120x60',
                'dfpPos': 'top',
                'pos': 3,
                'width': 120,
                'height': 60
            },
            {
                'id': 'banner-468x60',
                'dfpPos': 'top',
                'pos': 1,
                'width': 468,
                'height': 60
            },
            {
                'id': 'banner-120x240',
                'dfpPos': 'left',
                'pos': 6,
                'width': 120,
                'height': 240
            }, 
            {
                'id': 'banner-125x125',
                'dfpPos': 'par1',
                'pos': 3,
                'width': 125,
                'height': 125
            }, 
            {
                'id': 'banner-125x125-2',
                'dfpPos': 'par2',
                'pos': 5,
                'width': 125,
                'height': 125
            }, 
            {
                'id': 'banner-125x125-3',
                'dfpPos': 'par3',
                'pos': 7,
                'width': 125,
                'height': 125
            }, 
            {
                'id': 'banner-125x125-4',
                'dfpPos': 'par4',
                'pos': 9,
                'width': 125,
                'height': 125
            }, 
            {
                'id': 'banner-120x600',
                'dfpPos': 'right',
                'pos': 6,
                'width': 120,
                'height': 600
            }
        ]
    },  
    {
        're'      : /^http(s)?:\/\/(www[0-9]*.)?(homologacao.)?comparecar(.(bol|uol))?.com(.br)?(\/.*)?$/,
        'banners' : [
            {
                'id': 'banner-100x30',
                'pos': 3,
                'width': 100,
                'height': 30
            },
            {
                'id': 'banner-100x30-2',
                'pos': 6,
                'width': 100,
                'height': 30
            }, 
            {
                'id': 'banner-100x30-3',
                'pos': 9,
                'width': 100,
                'height': 30
            }, 
            {
                'id': 'banner-100x30-4',
                'pos': 12,
                'width': 100,
                'height': 30
            }, 
            {
                'id': 'banner-100x30-5',
                'pos': 15,
                'width': 100,
                'height': 30
            }, 
            {
                'id': 'banner-100x30-6',
                'pos': 18,
                'width': 100,
                'height': 30
            },
            {
                'id': 'banner-120x600',
                'dfpPos': 'par1',
                'pos': 6,
                'width': 120,
                'height': 600
            }, 
            {
                'id': 'banner-120x600-2',
                'dfpPos': 'par2',
                'pos': 12,
                'width': 120,
                'height': 600
            },  
            {
                'id': 'banner-120x60',
                'pos': 3,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-120x60-2',
                'dfpPos': 'par2',
                'pos': 6,
                'width': 120,
                'height': 60
            }, 
            {
                'id': 'banner-728x90-2',
                'dfpPos': 'bottom',
                'pos': 8,
                'width': 728,
                'height': 90
            }, 
            {
                'id': 'banner-300x250-2',
                'pos': 12,
                'width': 300,
                'height': 250
            }, 
            {
                'id': 'banner-300x600-2',
                'dfpPos': 'Middle', 
                'pos': 6,
                'width': 300,
                'height': 600
            }, 
            {
                'id': 'banner-985x60',
                'dfpPos': 'Middle', 
                'pos': 2,
                'width': 985,
                'height': 60
            }
        ]
    }
];
