var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_GEOLOGIAJUNIN_1 = new ol.format.GeoJSON();
var features_GEOLOGIAJUNIN_1 = format_GEOLOGIAJUNIN_1.readFeatures(json_GEOLOGIAJUNIN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGIAJUNIN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGIAJUNIN_1.addFeatures(features_GEOLOGIAJUNIN_1);
var lyr_GEOLOGIAJUNIN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGIAJUNIN_1, 
                style: style_GEOLOGIAJUNIN_1,
                popuplayertitle: 'GEOLOGIA JUNIN',
                interactive: true,
    title: 'GEOLOGIA JUNIN<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_0.png" /> A-a<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_1.png" /> Ad-c<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_2.png" /> Ao-b<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_3.png" /> C_poblados<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_4.png" /> Caq-e<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_5.png" /> Cat-e<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_6.png" /> Catq-e<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_7.png" /> Cbt-d<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_8.png" /> Cbtq-d<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_9.png" /> Fv2-a<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_10.png" /> Fvs-a<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_11.png" /> Islas<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_12.png" /> Lagunas<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_13.png" /> Lt-c<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_14.png" /> Ltq-c<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_15.png" /> Nv<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_16.png" /> Rios polyg<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_17.png" /> Ta-a<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_18.png" /> Tad-b<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_19.png" /> Tb-a<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_20.png" /> Tm-a<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_21.png" /> Vg-a<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_22.png" /> Vs1-d<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_23.png" /> Vs1-e<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_24.png" /> Vs2-d<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_25.png" /> Vs2-e<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_26.png" /> Vs3-e<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_27.png" /> Vsa-b<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_28.png" /> VsA1-d<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_29.png" /> VsA1-e<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_30.png" /> VsA2-d<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_31.png" /> VsA2-e<br />\
    <img src="styles/legend/GEOLOGIAJUNIN_1_32.png" /> Vso-c<br />' });
var format_JUNIN_2 = new ol.format.GeoJSON();
var features_JUNIN_2 = format_JUNIN_2.readFeatures(json_JUNIN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JUNIN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JUNIN_2.addFeatures(features_JUNIN_2);
var lyr_JUNIN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JUNIN_2, 
                style: style_JUNIN_2,
                popuplayertitle: 'JUNIN',
                interactive: true,
                title: '<img src="styles/legend/JUNIN_2.png" /> JUNIN'
            });

lyr_EsriTopographic_0.setVisible(true);lyr_GEOLOGIAJUNIN_1.setVisible(true);lyr_JUNIN_2.setVisible(true);
var layersList = [lyr_EsriTopographic_0,lyr_GEOLOGIAJUNIN_1,lyr_JUNIN_2];
lyr_GEOLOGIAJUNIN_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SIMBOLO_': 'SIMBOLO_', 'REGION': 'REGION', 'FORMAS_DEL': 'FORMAS_DEL', 'Area': 'Area', 'Perimetro': 'Perimetro', });
lyr_JUNIN_2.set('fieldAliases', {'NAME_1': 'NAME_1', });
lyr_GEOLOGIAJUNIN_1.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'SIMBOLO_': 'TextEdit', 'REGION': 'Hidden', 'FORMAS_DEL': 'Hidden', 'Area': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_JUNIN_2.set('fieldImages', {'NAME_1': 'TextEdit', });
lyr_GEOLOGIAJUNIN_1.set('fieldLabels', {'SIMBOLO_': 'inline label - always visible', 'Area': 'inline label - always visible', 'Perimetro': 'inline label - always visible', });
lyr_JUNIN_2.set('fieldLabels', {'NAME_1': 'inline label - always visible', });
lyr_JUNIN_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});