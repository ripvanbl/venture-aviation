(function($, kendo) {
    window.bl = window.bl || {};
    window.bl.views = window.bl.views || {};
    
    window.bl.views.TerminalAviation = function(templateId, options) {
        var view, viewModel, 
        settings = $.extend({}, options);
        
        viewModel = new kendo.observable({
            airport: '',
            departDate: new Date(),
            email: '',
            
            getFormattedDepartDate: function() {
                var departDate;
            
                departDate = kendo.toString(viewModel.get('departDate'), 'd');
                return departDate;
            },
            isValidBidForm: function() {
                var airport, departDate, email;
                
                airport = viewModel.get('airport');
                departDate = viewModel.get('departDate');
                email = viewModel.get('email');
                
                return airport && email && departDate;
            },
            openDatePicker: function() {
                var $win, kWin;
                
                document.activeElement.blur();
                
                $win = $('<div style="display:none;"><div></div></div>').appendTo('body');
                $('div:first', $win).kendoCalendar({
                    change: function() {
                        viewModel.set('departDate', this.value());
                        kWin.close();
                    }
                });
                
                kWin = $win.kendoWindow({
                    modal: true,
                    position: {top:0,left:0},
                    title: 'Choose a date'
                }).data('kendoWindow');
                
                kWin.center().open();
            },
            openMap: function() {
                var $win, kWin, mapOptions, map, createMarker;
                
                document.activeElement.blur();
                
                $win = $('<div style="display:none;"><div style="height:300px;width:300px;"></div></div>').appendTo('body');
                
                createMarker = function(place) {
                    var placeLoc = place.geometry.location;
                    var marker = new google.maps.Marker({
                        map: map,
                        position: place.geometry.location
                    });
                    
                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.setContent('<a href="#" data-airportname="'+ place.name +'" data-bind="click:setAirport">'+ place.name +'</a>');
                        infowindow.open(map, this);
                        kendo.bind($win, viewModel);
                    });
                };
                
                kWin = $win.kendoWindow({
                    activate: function() {
                        $('div:first', $win).css('height', '100%').css('width', '100%');
                        
                        mapOptions = {
                            zoom: 9,
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        };
                    
                        map = new google.maps.Map($('div:first', $win)[0], mapOptions);
                    
                        if(navigator.geolocation) {
                            navigator.geolocation.getCurrentPosition(function(position) {
                                var pos = new google.maps.LatLng(position.coords.latitude,
                                position.coords.longitude);
                        
                            map.setCenter(pos);
                            
                            var request = {
                                location: pos,
                                radius: 50000,
                                types: ['airport']
                              };
                              
                              infowindow = new google.maps.InfoWindow();
                              var service = new google.maps.places.PlacesService(map);
                              service.nearbySearch(request, function(results, status) {
                                  if (status == google.maps.places.PlacesServiceStatus.OK) {
                                    for (var i = 0; i < results.length; i++) {
                                      createMarker(results[i]);
                                    }
                                  }
                              });
                            }, function() {
                                handleNoGeolocation(true);
                            });
                        } else {
                            // Browser doesn't support Geolocation
                            handleNoGeolocation(false);
                        }
                    },
                    modal: true,
                    position: {top:0,left:0},
                    title: 'Choose an airport'
                }).data('kendoWindow');
                
                kWin.center().open().maximize();
            },
            setAirport: function(e) {
                var $target;
                
                $target = $(e.target);
                
                viewModel.set('airport', $target.data('airportname'));
                
                $target.closest('.k-window-content').data('kendoWindow').close();
                
                return false;
                
            },
            submitBid: function() {
                var $win;
                
                $win = $("<div style='display:none;'><div>If this were real, I'd submit it, but it's not, so I won't.</div></div>").appendTo('body');
                $win.kendoWindow({
                    modal: true,
                    position: {top:0,left:0},
                    title: 'Request ... not submitted'
                }).data('kendoWindow').center().open();
            }
        });
        
        function handleNoGeolocation(errorFlag) {
          if (errorFlag) {
            var content = 'Error: The Geolocation service failed.';
          } else {
            var content = 'Error: Your browser doesn\'t support geolocation.';
          }
        
          var options = {
            map: map,
            position: new google.maps.LatLng(60, 105),
            content: content
          };
        
          var infowindow = new google.maps.InfoWindow(options);
          map.setCenter(options.position);
        }
        
        view = new kendo.View(templateId, {model: viewModel});
        
        return {
            view: view
        };
    };
})(window.jQuery, window.kendo);