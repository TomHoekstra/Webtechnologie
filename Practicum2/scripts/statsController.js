angular.module('gylfiApp').controller('statsController', [function () {
  this.stats = "club";
  this.flotData = [];
  this.flotDataFiltered = [];
  this.options;
  _this = this;

  // this.options = {
  //   xaxis:
  //   {
  //     min: 2008, max: 2016, tickSize: 1, tickDecimals: 0
  //   },
  //   yaxis:
  //   {
  //     min: 0, max: 40, tickSize: 5, tickDecimals: 0
  //   }
  // }
  

  this.getJSON = function (file) {
    $.ajax({
      url: '../sources/' + file,
      async: false,
      dataType: 'json',
      success: function (response) {
        if (file == "stats.json") {
          _this.mapStats(response);
        }
        else if (file == "options.json") {
          _this.options = response;
        }
      }
    });
  };

  this.mapStats = function (response) {
    $.each(response, function (key, data) {
      _this.flotData.push({
        label: data.label,
        data: data.data,
        color: data.color,
        selected: true
      });
    });
  }

  this.generateFlot = function () {
    this.getJSON("stats.json");
    this.getJSON("options.json");

    this.flotDataFiltered = this.flotData;

    $.plot($("#flotgraph"), this.flotDataFiltered, this.options);
  }

  this.reflot = function(){
    this.flotDataFiltered = [];

    for(var i = 0; i < this.flotData.length; i++)
    {
      if(this.flotData[i].selected)
      {
        this.flotDataFiltered.push(this.flotData[i]);
      }
    }

    $.plot($("#flotgraph"), this.flotDataFiltered, this.options);
  }

  this.generateFlot();
}]);