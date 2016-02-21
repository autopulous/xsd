var primitiveDataTypeCount = 19;
var derivedDataTypeCount = 25;
var dataTypeCount = primitiveDataTypeCount + derivedDataTypeCount;
var facetCount = 12;

var index, key;

describe('xsd.js test to confirm that everything is wired together cleanly', function () {
    describe('primitive data types', function () {
        it('should have ' + primitiveDataTypeCount + ' members', function () {
            expect(autopulous.xsd.primitiveDataTypeKeys.length).toEqual(primitiveDataTypeCount);
        });

        it('should have monotonically ascending member values', function () {
            for (index = 0; autopulous.xsd.primitiveDataTypeKeys.length > index; index++) {
                expect(index).toEqual(autopulous.xsd.primitiveDataTypes[autopulous.xsd.primitiveDataTypeKeys[index]]);
            }
        });

        it('should be verifiable by index', function () {
            expect(false).toEqual(autopulous.xsd.isPrimitiveDataTypeKey(autopulous.xsd.primitiveDataTypeKey(-1)));

            for (index = 0; autopulous.xsd.primitiveDataTypeKeys.length > index; index++) {
                expect(true).toEqual(autopulous.xsd.isPrimitiveDataTypeKey(autopulous.xsd.primitiveDataTypeKey(index)));
            }

            expect(false).toEqual(autopulous.xsd.isPrimitiveDataTypeKey(autopulous.xsd.primitiveDataTypeKey(autopulous.xsd.primitiveDataTypeKeys.length)));
        });

        it('should be verifiable by key', function () {
            expect(false).toEqual(autopulous.xsd.isPrimitiveDataType(""));

            for (key in autopulous.xsd.primitiveDataTypeKeys) {
                if (autopulous.xsd.primitiveDataTypeKeys.hasOwnProperty(key)) {
                    expect(true).toEqual(autopulous.xsd.isPrimitiveDataType(key));
                }
            }
        });

        it('should be able to retrieve a name by index', function () {
            for (index = 0; autopulous.xsd.primitiveDataTypeKeys.length > index; index++) {
                expect(index).toEqual(autopulous.xsd.primitiveDataTypes[autopulous.xsd.primitiveDataTypeKey(index)]);
            }
        });

        it('should be able to retrieve a type using a name', function () {
            for (index = 0; autopulous.xsd.primitiveDataTypeKeys.length > index; index++) {
                expect(index).toEqual(autopulous.xsd.primitiveDataType(autopulous.xsd.primitiveDataTypeKey(index)));
            }
        });
    });

    describe('derived data types', function () {
        it('should have ' + derivedDataTypeCount + ' members', function () {
            expect(autopulous.xsd.derivedDataTypeKeys.length).toEqual(derivedDataTypeCount);
        });

        it('should have monotonically ascending member values', function () {
            for (index = 0 + autopulous.xsd.primitiveDataTypeKeys.length; autopulous.xsd.primitiveDataTypeKeys.length + autopulous.xsd.derivedDataTypeKeys.length > index; index++) {
                expect(index).toEqual(autopulous.xsd.derivedDataTypes[autopulous.xsd.dataTypeKeys[index]]);
            }
        });

        it('should be verifiable by index', function () {
            expect(false).toEqual(autopulous.xsd.isDerivedDataTypeKey(autopulous.xsd.derivedDataTypeKey(-1)));

            for (index = autopulous.xsd.primitiveDataTypeKeys.length; autopulous.xsd.primitiveDataTypeKeys.length + autopulous.xsd.derivedDataTypeKeys.length > index; index++) {
                expect(true).toEqual(autopulous.xsd.isDerivedDataTypeKey(autopulous.xsd.derivedDataTypeKey(index)));
            }

            expect(false).toEqual(autopulous.xsd.isDerivedDataTypeKey(autopulous.xsd.derivedDataTypeKey(autopulous.xsd.primitiveDataTypeKeys.length + autopulous.xsd.derivedDataTypeKeys.length)));
        });

        it('should be verifiable by key', function () {
            expect(false).toEqual(autopulous.xsd.isDerivedDataType(""));

            for (key in autopulous.xsd.derivedDataTypeKeys) {
                if (autopulous.xsd.derivedDataTypeKeys.hasOwnProperty(key)) {
                    expect(true).toEqual(autopulous.xsd.isDerivedDataType(key));
                }
            }
        });

        it('should be able to retrieve a name by index', function () {
            for (index = autopulous.xsd.primitiveDataTypeKeys.length; autopulous.xsd.primitiveDataTypeKeys.length + autopulous.xsd.derivedDataTypeKeys.length > index; index++) {
                expect(index).toEqual(autopulous.xsd.derivedDataTypes[autopulous.xsd.derivedDataTypeKey(index)]);
            }
        });

        it('should be able to retrieve a type using a name', function () {
            for (index = autopulous.xsd.primitiveDataTypeKeys.length; autopulous.xsd.primitiveDataTypeKeys.length + autopulous.xsd.derivedDataTypeKeys.length > index; index++) {
                expect(index).toEqual(autopulous.xsd.derivedDataType(autopulous.xsd.derivedDataTypeKey(index)));
            }
        });
    });

    describe('combined primitive & derived data types', function () {
        it('should have ' + dataTypeCount + ' members', function () {
            expect(autopulous.xsd.dataTypeKeys.length).toEqual(dataTypeCount);
        });

        it('should have monotonically ascending member values', function () {
            for (index = 0; autopulous.xsd.dataTypeKeys.length > index; index++) {
                expect(index).toEqual(autopulous.xsd.dataTypes[autopulous.xsd.dataTypeKeys[index]]);
            }
        });

        it('should be verifiable by index', function () {
            expect(false).toEqual(autopulous.xsd.isDataTypeKey(autopulous.xsd.dataTypeKey(-1)));

            for (index = 0; autopulous.xsd.dataTypeKeys.length > index; index++) {
                expect(true).toEqual(autopulous.xsd.isDataTypeKey(autopulous.xsd.dataTypeKey(index)));
            }

            expect(false).toEqual(autopulous.xsd.isDataTypeKey(autopulous.xsd.dataTypeKey(autopulous.xsd.dataTypeKeys.length)));
        });

        it('should be verifiable by key', function () {
            expect(false).toEqual(autopulous.xsd.isDataType(""));

            for (key in autopulous.xsd.dataTypeKeys) {
                if (autopulous.xsd.dataTypeKeys.hasOwnProperty(key)) {
                    expect(true).toEqual(autopulous.xsd.isDataType(key));
                }
            }
        });

        it('should be able to retrieve a name by index', function () {
            for (index = 0; autopulous.xsd.dataTypeKeys.length > index; index++) {
                expect(index).toEqual(autopulous.xsd.dataTypes[autopulous.xsd.dataTypeKey(index)]);
            }
        });

        it('should be able to retrieve a type using a name', function () {
            for (index = 0; autopulous.xsd.dataTypeKeys.length > index; index++) {
                expect(index).toEqual(autopulous.xsd.dataType(autopulous.xsd.dataTypeKey(index)));
            }
        });
    });

    describe('facet types', function () {
        it('should have ' + facetCount + ' members', function () {
            expect(autopulous.xsd.facetTypeKeys.length).toEqual(facetCount);
        });

        it('should have monotonically ascending member values', function () {
            for (index = 0; autopulous.xsd.facetTypeKeys.length > index; index++) {
                expect(index).toEqual(autopulous.xsd.facetTypes[autopulous.xsd.facetTypeKeys[index]]);
            }
        });

        it('should be verifiable by index', function () {
            expect(false).toEqual(autopulous.xsd.isFacetTypeKey(autopulous.xsd.facetTypeKey(-1)));

            for (index = 0; autopulous.xsd.facetTypeKeys.length > index; index++) {
                expect(true).toEqual(autopulous.xsd.isFacetTypeKey(autopulous.xsd.facetTypeKey(index)));
            }

            expect(false).toEqual(autopulous.xsd.isFacetTypeKey(autopulous.xsd.facetTypeKey(autopulous.xsd.facetTypeKeys.length)));
        });

        it('should be verifiable by key', function () {
            expect(false).toEqual(autopulous.xsd.isFacetType(""));

            for (key in autopulous.xsd.facetTypeKeys) {
                if (autopulous.xsd.facetTypeKeys.hasOwnProperty(key)) {
                    expect(true).toEqual(autopulous.xsd.isFacetType(key));
                }
            }
        });

        it('should be able to retrieve a name by index', function () {
            for (index = 0; autopulous.xsd.facetTypeKeys.length > index; index++) {
                expect(index).toEqual(autopulous.xsd.facetTypes[autopulous.xsd.facetTypeKey(index)]);
            }
        });

        it('should be able to retrieve a type using a name', function () {
            for (index = 0; autopulous.xsd.facetTypeKeys.length > index; index++) {
                expect(index).toEqual(autopulous.xsd.facetType(autopulous.xsd.facetTypeKey(index)));
            }
        });
    });
});