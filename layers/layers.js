var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleImagery_1 = new ol.layer.Tile({
            'title': 'Google Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIGray_2 = new ol.layer.Tile({
            'title': 'ESRI Gray',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_3 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoalClosureEnergyCommunities_4 = new ol.format.GeoJSON();
var features_CoalClosureEnergyCommunities_4 = format_CoalClosureEnergyCommunities_4.readFeatures(json_CoalClosureEnergyCommunities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoalClosureEnergyCommunities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoalClosureEnergyCommunities_4.addFeatures(features_CoalClosureEnergyCommunities_4);
var lyr_CoalClosureEnergyCommunities_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoalClosureEnergyCommunities_4, 
                style: style_CoalClosureEnergyCommunities_4,
                interactive: true,
    title: 'Coal Closure Energy Communities<br />\
    <img src="styles/legend/CoalClosureEnergyCommunities_4_0.png" /> Census tract directly adjoining a census tract with a coal closure<br />\
    <img src="styles/legend/CoalClosureEnergyCommunities_4_1.png" /> Census tract with a coal closure<br />'
        });
var format_MSANonMSAsthatareEnergyCommunities_5 = new ol.format.GeoJSON();
var features_MSANonMSAsthatareEnergyCommunities_5 = format_MSANonMSAsthatareEnergyCommunities_5.readFeatures(json_MSANonMSAsthatareEnergyCommunities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSANonMSAsthatareEnergyCommunities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSANonMSAsthatareEnergyCommunities_5.addFeatures(features_MSANonMSAsthatareEnergyCommunities_5);
var lyr_MSANonMSAsthatareEnergyCommunities_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MSANonMSAsthatareEnergyCommunities_5, 
                style: style_MSANonMSAsthatareEnergyCommunities_5,
                interactive: true,
    title: 'MSA/Non-MSAs that are Energy Communities<br />\
    <img src="styles/legend/MSANonMSAsthatareEnergyCommunities_5_0.png" /> is an energy community, as it meets both the Fossil Fuel Employment (FFE) threshold and the unemployment rate requirement<br />'
        });
var format_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6 = new ol.format.GeoJSON();
var features_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6 = format_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.readFeatures(json_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.addFeatures(features_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6);
var lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6, 
                style: style_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6,
                interactive: true,
                title: '<img src="styles/legend/AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.png" /> Additional Selection Criteria Geographic Option 2 Persistent Poverty County'
            });
var format_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7 = new ol.format.GeoJSON();
var features_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7 = format_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.readFeatures(json_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.addFeatures(features_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7);
var lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7, 
                style: style_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7,
                interactive: true,
                title: '<img src="styles/legend/AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.png" /> Additional Selection Criteria Geographic Option 1 CEJST Energy'
            });
var format_Category1Eligibility_8 = new ol.format.GeoJSON();
var features_Category1Eligibility_8 = format_Category1Eligibility_8.readFeatures(json_Category1Eligibility_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Category1Eligibility_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Category1Eligibility_8.addFeatures(features_Category1Eligibility_8);
var lyr_Category1Eligibility_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Category1Eligibility_8, 
                style: style_Category1Eligibility_8,
                interactive: true,
                title: '<img src="styles/legend/Category1Eligibility_8.png" /> Category 1 Eligibility/NMTC Qualified Areas'
            });
var format_ElectricCertifiedTerritories_9 = new ol.format.GeoJSON();
var features_ElectricCertifiedTerritories_9 = format_ElectricCertifiedTerritories_9.readFeatures(json_ElectricCertifiedTerritories_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElectricCertifiedTerritories_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElectricCertifiedTerritories_9.addFeatures(features_ElectricCertifiedTerritories_9);
var lyr_ElectricCertifiedTerritories_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElectricCertifiedTerritories_9, 
                style: style_ElectricCertifiedTerritories_9,
                interactive: true,
    title: 'Electric Certified Territories<br />\
    <img src="styles/legend/ElectricCertifiedTerritories_9_0.png" /> AEP Ohio<br />\
    <img src="styles/legend/ElectricCertifiedTerritories_9_1.png" /> Duke Energy Ohio<br />\
    <img src="styles/legend/ElectricCertifiedTerritories_9_2.png" /> Ohio Edison<br />\
    <img src="styles/legend/ElectricCertifiedTerritories_9_3.png" /> Toledo Edison<br />\
    <img src="styles/legend/ElectricCertifiedTerritories_9_4.png" /> Consolidated Electric<br />'
        });
var format_Ohio_10 = new ol.format.GeoJSON();
var features_Ohio_10 = format_Ohio_10.readFeatures(json_Ohio_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ohio_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ohio_10.addFeatures(features_Ohio_10);
var lyr_Ohio_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ohio_10, 
                style: style_Ohio_10,
                interactive: false,
                title: '<img src="styles/legend/Ohio_10.png" /> Ohio'
            });
var format_OhioCounties_11 = new ol.format.GeoJSON();
var features_OhioCounties_11 = format_OhioCounties_11.readFeatures(json_OhioCounties_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OhioCounties_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OhioCounties_11.addFeatures(features_OhioCounties_11);
var lyr_OhioCounties_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OhioCounties_11, 
                style: style_OhioCounties_11,
                interactive: true,
                title: '<img src="styles/legend/OhioCounties_11.png" /> Ohio Counties'
            });
var format_OhioCountyNames_12 = new ol.format.GeoJSON();
var features_OhioCountyNames_12 = format_OhioCountyNames_12.readFeatures(json_OhioCountyNames_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OhioCountyNames_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OhioCountyNames_12.addFeatures(features_OhioCountyNames_12);
var lyr_OhioCountyNames_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OhioCountyNames_12, 
                style: style_OhioCountyNames_12,
                interactive: false,
                title: '<img src="styles/legend/OhioCountyNames_12.png" /> Ohio County Names'
            });
var format_SignedParcelslastupdated12423_13 = new ol.format.GeoJSON();
var features_SignedParcelslastupdated12423_13 = format_SignedParcelslastupdated12423_13.readFeatures(json_SignedParcelslastupdated12423_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SignedParcelslastupdated12423_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SignedParcelslastupdated12423_13.addFeatures(features_SignedParcelslastupdated12423_13);
var lyr_SignedParcelslastupdated12423_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SignedParcelslastupdated12423_13, 
                style: style_SignedParcelslastupdated12423_13,
                interactive: true,
                title: '<img src="styles/legend/SignedParcelslastupdated12423_13.png" /> Signed Parcels (last updated 12/4/23)'
            });
var format_SignedParcelslastupdated12423_14 = new ol.format.GeoJSON();
var features_SignedParcelslastupdated12423_14 = format_SignedParcelslastupdated12423_14.readFeatures(json_SignedParcelslastupdated12423_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SignedParcelslastupdated12423_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SignedParcelslastupdated12423_14.addFeatures(features_SignedParcelslastupdated12423_14);cluster_SignedParcelslastupdated12423_14 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_SignedParcelslastupdated12423_14
});
var lyr_SignedParcelslastupdated12423_14 = new ol.layer.Vector({
                declutter: true,
                source:cluster_SignedParcelslastupdated12423_14, 
                style: style_SignedParcelslastupdated12423_14,
                interactive: false,
                title: '<img src="styles/legend/SignedParcelslastupdated12423_14.png" /> Signed Parcels (last updated 12/4/23)'
            });
var format_ParcelNames_15 = new ol.format.GeoJSON();
var features_ParcelNames_15 = format_ParcelNames_15.readFeatures(json_ParcelNames_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelNames_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelNames_15.addFeatures(features_ParcelNames_15);
var lyr_ParcelNames_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelNames_15, 
                style: style_ParcelNames_15,
                interactive: false,
                title: '<img src="styles/legend/ParcelNames_15.png" /> Parcel Names'
            });
var group_48eLowIncomeCredits = new ol.layer.Group({
                                layers: [lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6,lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7,lyr_Category1Eligibility_8,],
                                title: "48e Low Income Credits"});
var group_EnergyCommunities = new ol.layer.Group({
                                layers: [lyr_CoalClosureEnergyCommunities_4,lyr_MSANonMSAsthatareEnergyCommunities_5,],
                                title: "Energy Communities"});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_GoogleTerrain_0,lyr_GoogleImagery_1,lyr_ESRIGray_2,lyr_OpenStreetMap_3,],
                                title: "Basemaps"});

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleImagery_1.setVisible(true);lyr_ESRIGray_2.setVisible(true);lyr_OpenStreetMap_3.setVisible(true);lyr_CoalClosureEnergyCommunities_4.setVisible(true);lyr_MSANonMSAsthatareEnergyCommunities_5.setVisible(true);lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.setVisible(true);lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.setVisible(true);lyr_Category1Eligibility_8.setVisible(true);lyr_ElectricCertifiedTerritories_9.setVisible(true);lyr_Ohio_10.setVisible(true);lyr_OhioCounties_11.setVisible(true);lyr_OhioCountyNames_12.setVisible(false);lyr_SignedParcelslastupdated12423_13.setVisible(true);lyr_SignedParcelslastupdated12423_14.setVisible(true);lyr_ParcelNames_15.setVisible(false);
var layersList = [group_Basemaps,group_EnergyCommunities,group_48eLowIncomeCredits,lyr_ElectricCertifiedTerritories_9,lyr_Ohio_10,lyr_OhioCounties_11,lyr_OhioCountyNames_12,lyr_SignedParcelslastupdated12423_13,lyr_SignedParcelslastupdated12423_14,lyr_ParcelNames_15];
lyr_CoalClosureEnergyCommunities_4.set('fieldAliases', {'objectid': 'OBJECTID', 'affgeoid_tract_2020': 'AFFGEOID_Tract_2020', 'fipstate_2020': 'fipstate_2020', 'fipcounty_2020': 'fipcounty_2020', 'geoid_county_2020': 'geoid_county_2020', 'fiptract_2020': 'fiptract_2020', 'geoid_tract_2020': 'geoid_tract_2020', 'mine_qual': 'Mine_Qual', 'generator_qual': 'Generator_Qual', 'neighbor_qual': 'Neighbor_Qual', 'state_name': 'State_Name', 'county_name': 'County_Name', 'censustract_name': 'CensusTract_Name', 'mine_closure': 'Mine_Closure', 'generator_closure': 'Generator_Closure', 'adjacent_to_closure': 'Adjacent_to_Closure', 'tract_status': 'Tract_Status', 'date_last_update': 'date_last_update', 'dataset_version': 'dataset_version', 'record_added': 'record_added', 'symbol': 'Symbol', 'SHAPE__Length': 'SHAPE__Length', 'SHAPE__Area': 'SHAPE__Area', });
lyr_MSANonMSAsthatareEnergyCommunities_5.set('fieldAliases', {'objectid_1': 'OBJECTID_1', 'objectid': 'ObjectID', 'affgeoid_cty_2020': 'AFFGEOID_COUNTY_2020', 'fipstate_2020': 'fipstate_2020', 'fipscty_2020': 'fipscounty_2020', 'geoid_cty_2020': 'geoid_county_2020', 'county_name_2020': 'county_name_2020', 'state_name': 'state_name', 'msa_area_id': 'MSA_area_ID_2020', 'msa_area_name': 'MSA_area_name_2020', 'ffe_ind_qual': 'ffe_ind_qual', 'ec_ind_qual': 'ec_ind_qual', 'msa_qual': 'msa_qual', 'fee_qual_status': 'FEE_qual_status', 'ec_qual_status': 'EC_qual_status', 'label_fee': 'Label_FEE', 'label_ec': 'Label_EC', 'msa_nmsa_label': 'Label_MSA_NMSA', 'date_last_update': 'date_last_update', 'dataset_version': 'dataset_version', 'date_record_added': 'date_record_added', 'globalid': 'globalid', 'SHAPE__Length': 'SHAPE__Length', 'SHAPE__Area': 'SHAPE__Area', });
lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'NAME', 'Persistent': 'Persistent', 'Persiste_1': 'Persiste_1', 'Persiste_2': 'Persiste_2', 'Persiste_3': 'Persiste_3', 'ObjectId': 'ObjectId', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.set('fieldAliases', {'GEOID10': 'GEOID10', 'SF': 'SF', 'CF': 'CF', 'N_ENY': 'N_ENY', 'ObjectId': 'ObjectId', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_Category1Eligibility_8.set('fieldAliases', {'CensusTrac': 'CensusTrac', 'NMTCQualif': 'NMTCQualif', 'StateName': 'StateName', 'CountyName': 'CountyName', 'Vintage': 'Vintage', 'CountyFIPS': 'CountyFIPS', 'ObjectId': 'ObjectId', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_ElectricCertifiedTerritories_9.set('fieldAliases', {'Shape.STArea()': 'Shape.STArea()', 'Shape.STLength()': 'Shape.STLength()', 'OBJECTID': 'OBJECTID', 'EL_BoundaryID': 'EL_BoundaryID', 'EL_CompanyID': 'EL_CompanyID', 'CreateUser': 'CreateUser', 'CreateDate': 'CreateDate', 'EditUser': 'EditUser', 'EditDate': 'EditDate', });
lyr_Ohio_10.set('fieldAliases', {'STATE': 'STATE', 'NAME': 'NAME', 'FIPS': 'FIPS', 'LON': 'LON', 'LAT': 'LAT', });
lyr_OhioCounties_11.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_OhioCountyNames_12.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_SignedParcelslastupdated12423_13.set('fieldAliases', {'Parcel': 'Parcel', 'owner': 'owner', 'bldblAcr': 'bldblAcr', 'LotSize': 'LotSize', 'Utility': 'Utility', });
lyr_SignedParcelslastupdated12423_14.set('fieldAliases', {'id': 'id', 'Parcel': 'Parcel', 'owner': 'owner', 'bldblAcr': 'bldblAcr', 'LotSize': 'LotSize', 'Utility': 'Utility', 'layer': 'layer', 'path': 'path', });
lyr_ParcelNames_15.set('fieldAliases', {'id': 'id', 'Parcel': 'Parcel', 'owner': 'owner', 'bldblAcr': 'bldblAcr', 'LotSize': 'LotSize', 'Utility': 'Utility', 'layer': 'layer', 'path': 'path', });
lyr_CoalClosureEnergyCommunities_4.set('fieldImages', {'objectid': 'TextEdit', 'affgeoid_tract_2020': 'TextEdit', 'fipstate_2020': 'TextEdit', 'fipcounty_2020': 'TextEdit', 'geoid_county_2020': 'TextEdit', 'fiptract_2020': 'TextEdit', 'geoid_tract_2020': 'TextEdit', 'mine_qual': 'TextEdit', 'generator_qual': 'TextEdit', 'neighbor_qual': 'TextEdit', 'state_name': 'TextEdit', 'county_name': 'TextEdit', 'censustract_name': 'TextEdit', 'mine_closure': 'TextEdit', 'generator_closure': 'TextEdit', 'adjacent_to_closure': 'TextEdit', 'tract_status': 'TextEdit', 'date_last_update': 'DateTime', 'dataset_version': 'TextEdit', 'record_added': 'DateTime', 'symbol': 'TextEdit', 'SHAPE__Length': 'TextEdit', 'SHAPE__Area': 'TextEdit', });
lyr_MSANonMSAsthatareEnergyCommunities_5.set('fieldImages', {'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'affgeoid_cty_2020': 'TextEdit', 'fipstate_2020': 'TextEdit', 'fipscty_2020': 'TextEdit', 'geoid_cty_2020': 'TextEdit', 'county_name_2020': 'TextEdit', 'state_name': 'TextEdit', 'msa_area_id': 'TextEdit', 'msa_area_name': 'TextEdit', 'ffe_ind_qual': 'TextEdit', 'ec_ind_qual': 'TextEdit', 'msa_qual': 'TextEdit', 'fee_qual_status': 'TextEdit', 'ec_qual_status': 'TextEdit', 'label_fee': 'TextEdit', 'label_ec': 'TextEdit', 'msa_nmsa_label': 'TextEdit', 'date_last_update': 'DateTime', 'dataset_version': 'TextEdit', 'date_record_added': 'DateTime', 'globalid': 'TextEdit', 'SHAPE__Length': 'TextEdit', 'SHAPE__Area': 'TextEdit', });
lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.set('fieldImages', {'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'Persistent': 'TextEdit', 'Persiste_1': 'TextEdit', 'Persiste_2': 'TextEdit', 'Persiste_3': 'Range', 'ObjectId': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.set('fieldImages', {'GEOID10': 'TextEdit', 'SF': 'TextEdit', 'CF': 'TextEdit', 'N_ENY': 'Range', 'ObjectId': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_Category1Eligibility_8.set('fieldImages', {'CensusTrac': 'TextEdit', 'NMTCQualif': 'TextEdit', 'StateName': 'TextEdit', 'CountyName': 'TextEdit', 'Vintage': 'Range', 'CountyFIPS': 'TextEdit', 'ObjectId': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_ElectricCertifiedTerritories_9.set('fieldImages', {'Shape.STArea()': 'TextEdit', 'Shape.STLength()': 'TextEdit', 'OBJECTID': 'TextEdit', 'EL_BoundaryID': 'TextEdit', 'EL_CompanyID': 'ValueMap', 'CreateUser': 'TextEdit', 'CreateDate': 'DateTime', 'EditUser': 'TextEdit', 'EditDate': 'DateTime', });
lyr_Ohio_10.set('fieldImages', {'STATE': 'TextEdit', 'NAME': 'TextEdit', 'FIPS': 'TextEdit', 'LON': 'TextEdit', 'LAT': 'TextEdit', });
lyr_OhioCounties_11.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_OhioCountyNames_12.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_SignedParcelslastupdated12423_13.set('fieldImages', {'Parcel': 'TextEdit', 'owner': 'TextEdit', 'bldblAcr': 'TextEdit', 'LotSize': 'TextEdit', 'Utility': 'TextEdit', });
lyr_SignedParcelslastupdated12423_14.set('fieldImages', {'id': 'TextEdit', 'Parcel': 'TextEdit', 'owner': 'TextEdit', 'bldblAcr': 'TextEdit', 'LotSize': 'TextEdit', 'Utility': '', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ParcelNames_15.set('fieldImages', {'id': 'TextEdit', 'Parcel': 'TextEdit', 'owner': 'TextEdit', 'bldblAcr': 'TextEdit', 'LotSize': 'TextEdit', 'Utility': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoalClosureEnergyCommunities_4.set('fieldLabels', {});
lyr_MSANonMSAsthatareEnergyCommunities_5.set('fieldLabels', {});
lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.set('fieldLabels', {});
lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.set('fieldLabels', {});
lyr_Category1Eligibility_8.set('fieldLabels', {});
lyr_ElectricCertifiedTerritories_9.set('fieldLabels', {'Shape.STArea()': 'no label', 'Shape.STLength()': 'no label', 'OBJECTID': 'no label', 'EL_BoundaryID': 'no label', 'EL_CompanyID': 'no label', 'CreateUser': 'no label', 'CreateDate': 'no label', 'EditUser': 'no label', 'EditDate': 'no label', });
lyr_Ohio_10.set('fieldLabels', {'STATE': 'no label', 'NAME': 'no label', 'FIPS': 'no label', 'LON': 'no label', 'LAT': 'no label', });
lyr_OhioCounties_11.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'GEOID': 'no label', 'NAME': 'header label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'MTFCC': 'no label', 'CSAFP': 'no label', 'CBSAFP': 'no label', 'METDIVFP': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_OhioCountyNames_12.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'MTFCC': 'no label', 'CSAFP': 'no label', 'CBSAFP': 'no label', 'METDIVFP': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_SignedParcelslastupdated12423_13.set('fieldLabels', {'Parcel': 'header label', 'owner': 'inline label', 'bldblAcr': 'header label', 'LotSize': 'inline label', 'Utility': 'no label', });
lyr_SignedParcelslastupdated12423_14.set('fieldLabels', {'id': 'no label', 'Parcel': 'header label', 'owner': 'inline label', 'bldblAcr': 'no label', 'LotSize': 'no label', 'Utility': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ParcelNames_15.set('fieldLabels', {'id': 'no label', 'Parcel': 'header label', 'owner': 'inline label', 'bldblAcr': 'no label', 'LotSize': 'no label', 'Utility': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ParcelNames_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});