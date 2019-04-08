import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var GeradorCsvService = /** @class */ (function () {
    function GeradorCsvService() {
    }
    GeradorCsvService.converterArrayParaCSV = function (args) {
        var result, ctr, keys, columnDelimiter, lineDelimiter, data;
        data = args.data || null;
        if (data == null || !data.length) {
            return null;
        }
        columnDelimiter = args.columnDelimiter || ';';
        lineDelimiter = args.lineDelimiter || '\n';
        keys = Object.keys(data[0]);
        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;
        data.forEach(function (item) {
            ctr = 0;
            keys.forEach(function (key) {
                if (ctr > 0)
                    result += columnDelimiter;
                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });
        return result;
    };
    GeradorCsvService.downloadCSV = function (list, filename) {
        var filename, link;
        var csv = this.converterArrayParaCSV({
            data: list
        });
        if (csv == null)
            return;
        filename = filename || 'export.csv';
        var encodedUri = encodeURI(csv);
        link = document.createElement("a");
        link.setAttribute("href", "data:text/csv;charset=utf-8,\uFEFF" + encodedUri);
        link.setAttribute("download", filename);
        link.click();
    };
    GeradorCsvService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], GeradorCsvService);
    return GeradorCsvService;
}());
export { GeradorCsvService };
//# sourceMappingURL=gerador-csv.service.js.map