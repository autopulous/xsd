'use strict';

if ("undefined" == typeof autopulous) var autopulous = {};
if ("undefined" == typeof autopulous.xsd) autopulous.xsd = {};

autopulous.xsd.primitiveDataTypes = {
    string: 0,
    boolean: 1,
    decimal: 2,
    float: 3,
    double: 4,
    hexBinary: 5,
    base64Binary: 6,
    duration: 7,
    dateTime: 8,
    time: 9,
    date: 10,
    gYearMonth: 11,
    gYear: 12,
    gMonthDay: 13,
    gDay: 14,
    gMonth: 15,
    anyURI: 16,
    QName: 17,
    NOTATION: 18
};

autopulous.xsd.primitiveDataTypeKeys = Object.keys(autopulous.xsd.primitiveDataTypes);

autopulous.xsd.isPrimitiveDataType = function (primitiveDataType) {
    return undefined != autopulous.xsd.primitiveDataTypeKeys[primitiveDataType];
};

autopulous.xsd.isPrimitiveDataTypeKey = function (primitiveDataTypeKey) {
    return undefined != autopulous.xsd.primitiveDataTypes[primitiveDataTypeKey];
};

autopulous.xsd.primitiveDataType = function (primitiveDataTypeKey) {
    return autopulous.xsd.primitiveDataTypes[primitiveDataTypeKey];
};

autopulous.xsd.primitiveDataTypeKey = function (primitiveDataType) {
    return autopulous.xsd.primitiveDataTypeKeys[primitiveDataType];
};

autopulous.xsd.derivedDataTypes = {
    byte: 19,
    unsignedByte: 20,
    short: 21,
    unsignedShort: 22,
    int: 23,
    unsignedInt: 24,
    long: 25,
    unsignedLong: 26,
    integer: 27,
    positiveInteger: 28,
    nonPositiveInteger: 29,
    nonNegativeInteger: 30,
    negativeInteger: 31,
    normalizedString: 32,
    language: 33,
    Name: 34,
    NCName: 35,
    token: 36,
    NMTOKEN: 37,
    NMTOKENS: 38,
    ID: 39,
    IDREF: 40,
    IDREFS: 41,
    ENTITY: 42,
    ENTITIES: 43
};

autopulous.xsd.derivedDataTypeKeys = Object.keys(autopulous.xsd.derivedDataTypes);

autopulous.xsd.isDerivedDataType = function (derivedDataType) {
    return undefined != autopulous.xsd.derivedDataTypeKeys[derivedDataType];
};

autopulous.xsd.isDerivedDataTypeKey = function (derivedDataTypeKey) {
    return undefined != autopulous.xsd.derivedDataTypes[derivedDataTypeKey];
};

autopulous.xsd.derivedDataType = function (derivedDataTypeKey) {
    return autopulous.xsd.derivedDataTypes[derivedDataTypeKey];
};

autopulous.xsd.derivedDataTypeKey = function (derivedDataType) {
    return autopulous.xsd.derivedDataTypeKeys[derivedDataType - autopulous.xsd.primitiveDataTypeKeys.length];
};

autopulous.xsd.dataTypes = autopulous.mergeObjects(autopulous.xsd.primitiveDataTypes, autopulous.xsd.derivedDataTypes);

autopulous.xsd.dataTypeKeys = Object.keys(autopulous.xsd.dataTypes);

autopulous.xsd.isDataTypeKey = function (dataTypeKey) {
    return undefined != autopulous.xsd.dataTypes[dataTypeKey];
};

autopulous.xsd.dataTypeKey = function (dataType) {
    return autopulous.xsd.dataTypeKeys[dataType];
};

autopulous.xsd.isDataType = function (dataType) {
    return undefined != autopulous.xsd.dataTypeKeys[dataType];
};

autopulous.xsd.dataType = function (dataTypeKey) {
    return autopulous.xsd.dataTypes[dataTypeKey];
};

autopulous.xsd.facetTypes = {
    length: 0,
    minLength: 1,
    maxLength: 2,
    minInclusive: 3,
    minExclusive: 4,
    maxInclusive: 5,
    maxExclusive: 6,
    totalDigits: 7,
    fractionDigits: 8,
    enumeration: 9,
    pattern: 10,
    whiteSpace: 11
};

autopulous.xsd.facetTypeKeys = Object.keys(autopulous.xsd.facetTypes);

autopulous.xsd.isFacetType = function (facetType) {
    return undefined != autopulous.xsd.facetTypeKeys[facetType];
};

autopulous.xsd.isFacetTypeKey = function (facetTypeKey) {
    return undefined != autopulous.xsd.facetTypes[facetTypeKey];
};

autopulous.xsd.facetType = function (facetTypeKey) {
    return autopulous.xsd.facetTypes[facetTypeKey];
};

autopulous.xsd.facetTypeKey = function (facetType) {
    return autopulous.xsd.facetTypeKeys[facetType];
};