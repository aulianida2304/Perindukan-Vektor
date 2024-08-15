var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_ADM_PASIRKALIKI_1 = new ol.format.GeoJSON();
var features_ADM_PASIRKALIKI_1 = format_ADM_PASIRKALIKI_1.readFeatures(json_ADM_PASIRKALIKI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADM_PASIRKALIKI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADM_PASIRKALIKI_1.addFeatures(features_ADM_PASIRKALIKI_1);
var lyr_ADM_PASIRKALIKI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADM_PASIRKALIKI_1, 
                style: style_ADM_PASIRKALIKI_1,
                popuplayertitle: "ADM_PASIRKALIKI",
                interactive: true,
                title: '<img src="styles/legend/ADM_PASIRKALIKI_1.png" /> ADM_PASIRKALIKI'
            });
var format_Buffering200M_2 = new ol.format.GeoJSON();
var features_Buffering200M_2 = format_Buffering200M_2.readFeatures(json_Buffering200M_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffering200M_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffering200M_2.addFeatures(features_Buffering200M_2);
var lyr_Buffering200M_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffering200M_2, 
                style: style_Buffering200M_2,
                popuplayertitle: "Buffering 200M",
                interactive: true,
                title: '<img src="styles/legend/Buffering200M_2.png" /> Buffering 200M'
            });
var format_WUTPERINDUKANVEKTOR_3 = new ol.format.GeoJSON();
var features_WUTPERINDUKANVEKTOR_3 = format_WUTPERINDUKANVEKTOR_3.readFeatures(json_WUTPERINDUKANVEKTOR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WUTPERINDUKANVEKTOR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WUTPERINDUKANVEKTOR_3.addFeatures(features_WUTPERINDUKANVEKTOR_3);
var lyr_WUTPERINDUKANVEKTOR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WUTPERINDUKANVEKTOR_3, 
                style: style_WUTPERINDUKANVEKTOR_3,
                popuplayertitle: "WUT PERINDUKAN VEKTOR",
                interactive: true,
                title: '<img src="styles/legend/WUTPERINDUKANVEKTOR_3.png" /> WUT PERINDUKAN VEKTOR'
            });
var format_TitikPerindukanVektorAulianidaRabbani_4 = new ol.format.GeoJSON();
var features_TitikPerindukanVektorAulianidaRabbani_4 = format_TitikPerindukanVektorAulianidaRabbani_4.readFeatures(json_TitikPerindukanVektorAulianidaRabbani_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPerindukanVektorAulianidaRabbani_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPerindukanVektorAulianidaRabbani_4.addFeatures(features_TitikPerindukanVektorAulianidaRabbani_4);
var lyr_TitikPerindukanVektorAulianidaRabbani_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPerindukanVektorAulianidaRabbani_4, 
                style: style_TitikPerindukanVektorAulianidaRabbani_4,
                popuplayertitle: "Titik Perindukan Vektor Aulianida' Rabbani",
                interactive: true,
                title: '<img src="styles/legend/TitikPerindukanVektorAulianidaRabbani_4.png" /> Titik Perindukan Vektor Aulianida\' Rabbani'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_ADM_PASIRKALIKI_1.setVisible(true);lyr_Buffering200M_2.setVisible(true);lyr_WUTPERINDUKANVEKTOR_3.setVisible(true);lyr_TitikPerindukanVektorAulianidaRabbani_4.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_ADM_PASIRKALIKI_1,lyr_Buffering200M_2,lyr_WUTPERINDUKANVEKTOR_3,lyr_TitikPerindukanVektorAulianidaRabbani_4];
lyr_ADM_PASIRKALIKI_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_Buffering200M_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_WUTPERINDUKANVEKTOR_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TitikPerindukanVektorAulianidaRabbani_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ADM_PASIRKALIKI_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_Buffering200M_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_WUTPERINDUKANVEKTOR_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_TitikPerindukanVektorAulianidaRabbani_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_ADM_PASIRKALIKI_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_Buffering200M_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_WUTPERINDUKANVEKTOR_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TitikPerindukanVektorAulianidaRabbani_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TitikPerindukanVektorAulianidaRabbani_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});