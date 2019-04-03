import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeradorCsvService {
  
  constructor() {}

  private static converterArrayParaCSV(args) {
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
        if (ctr > 0) result += columnDelimiter;

        result += item[key];
        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }

  public static downloadCSV(list, filename) {
    var filename, link;

    var csv = this.converterArrayParaCSV({
      data: list
    });
    if (csv == null) return;

    filename = filename || 'export.csv';

    var encodedUri = encodeURI(csv);
    link = document.createElement("a");
    link.setAttribute("href", "data:text/csv;charset=utf-8,\uFEFF" + encodedUri);
    link.setAttribute("download", filename );
    link.click();
  }

}
