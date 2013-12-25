var tableToExcel = (function() {
  var uri = 'data:application/vnd.ms-excel;base64,', template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>', 
  base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }, format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
  
  return function(table, name) {
    if (!table.nodeType) table = document.getElementById(table)
    var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
    window.location.href = uri + base64(format(template, ctx))
  }
})()


function render(tmpl_name, tmpl_data) {
    if ( !render.tmpl_cache ) { 
        render.tmpl_cache = {};
    }

    if ( ! render.tmpl_cache[tmpl_name] ) {
        var tmpl_dir = '';
        var tmpl_url = tmpl_dir + '/' + tmpl_name + '.html';

        var tmpl_string;
        jQuery.ajax({
            url: tmpl_url,
            method: 'GET',
            async: false,
            success: function(data) {
                tmpl_string = data;
            }
        });

        render.tmpl_cache[tmpl_name] = Handlebars.compile(tmpl_string);// _.template(tmpl_string);
    }

    return render.tmpl_cache[tmpl_name](tmpl_data);
}

var weekday=new Array(7);
	weekday[0]="Dom";
	weekday[1]="Seg";
	weekday[2]="Ter";
	weekday[3]="Qua";
	weekday[4]="Qui";
	weekday[5]="Sex";
	weekday[6]="Sab";

function zerozero(str_num){
			if (String(str_num).length<2){
				return "0"+str_num;
			}else{
				return str_num;
			}
		}

function formatAMPM(date) {
	  var hours = date.getHours();
	  var minutes = date.getMinutes();
	  var ampm = hours >= 12 ? 'pm' : 'am';
	  hours = hours % 12;
	  hours = hours ? hours : 12; // the hour '0' should be '12'
	  minutes = minutes < 10 ? '0'+minutes : minutes;
	  var strTime = hours + ':' + minutes + ' ' + ampm;
	  return strTime;
	}

function formatAMPM(date) {
	  var hours = date.getHours();
	  var minutes = date.getMinutes();
	  var ampm = hours >= 12 ? 'pm' : 'am';
	  hours = hours % 12;
	  hours = hours ? hours : 12; // the hour '0' should be '12'
	  minutes = minutes < 10 ? '0'+minutes : minutes;
	  var strTime = hours + ':' + minutes + ' ' + ampm;
	  return strTime;
	}

function formatShortDate(date) {
	  var day = zerozero(date.getDate());
	  var month=zerozero(date.getMonth()+1);
	  var strTime = weekday[date.getDay()] + ' ' + day + '/' + month;
	  return strTime;
	}
function formatDate(date) {
  var day = zerozero(date.getDate());
  var month=zerozero(date.getMonth()+1);
  var year=zerozero(date.getFullYear());
  var strTime = day + '/' + month+ '/' + year;
  return strTime;
}

function formatShortDateFromString(date) {
	date = new Date(date);
  var day = zerozero(date.getDate());
  var month=zerozero(date.getMonth()+1);
  var strTime = weekday[date.getDay()] + ' ' + day + '/' + month;
  return strTime;
}

function displayHour(date) {
	date = new Date(date);
  var hours = zerozero(date.getHours());
  var minutes=zerozero(date.getMinutes());
  var strTime = hours + ':' + minutes;
  return strTime;
}

Handlebars.registerHelper("dateTimeISODate", function(timestamp) {
    toDate = new Date(timestamp)
    return formatDate(toDate)+" "+displayHour(toDate);
});

Handlebars.registerHelper("prettifyISODate", function(timestamp) {
    return formatAMPM(new Date(timestamp));
});

Handlebars.registerHelper("prettifyDate", function(timestamp) {
    return formatAMPM(timestamp);
});


jQuery(document).ready(function ($) {
    $('#id_get_report_data_button').click(function () {
        get_report_data();
    });

    $('#id_filter-start_date').datetimepicker({
        controlType: 'select',
        timeFormat: 'HH:mm',
        dateFormat: "yy-mm-dd",
        stepMinute: 15
    });

    $('#id_filter-end_date').datetimepicker({
        controlType: 'select',
        timeFormat: 'HH:mm',
        dateFormat: "yy-mm-dd",
        stepMinute: 15
        
    });
    var today=new Date();
    $('#id_filter-end_date').datepicker("setDate" , today)
    
    var newDate= new Date(today);
    newDate.setDate(newDate.getDate()-30);
    $('#id_filter-start_date').datepicker("setDate" , newDate)


});

  function get_report_data(){

    var v_filter={"start":new Date(jQuery('#id_filter-start_date').val()).toUTCString(),
    				"end":new Date(jQuery('#id_filter-end_date').val()).toUTCString()
        };
    idIndicador=jQuery('#id_filter-indicador').val()

    var report_data_request = jQuery.ajax({
            type: 'GET',
            url: 'chart_data.json?id='+idIndicador, //TODO: adjust to test environmet URL
            data: JSON.stringify({ "filter": v_filter }),//TODO: test date filter
            beforeSend: function(jqXHR, settings) {
                
            },
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json"
        });
        report_data_request.done(function(data) {
            if (data.statusResponse.status){
                rendered_html= render('app/indicadores/data-table', data.objectData);
                var div = document.getElementById('id_report_content');
                div.innerHTML = rendered_html;
            }else{
                alert(data['error'], "Ocorreu um Erro");
            }
        });
        report_data_request.fail(function(jqXHR, textStatus,errorThrown){
            alert( "Request failed: " + textStatus );
            alert(errorThrown, "Ocorreu um Erro");
        });
}