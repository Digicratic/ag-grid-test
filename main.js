var gridOptions = {
    columnDefs: [
      { field: 'field_name', rowGroup: true, hide: true },
      { field: 'identifier' },
      { field: 'value_type' },
      { field: 'operators' },
      { field: 'eg_values' },
    ],
    defaultColDef: {
      flex: 1,
      minWidth: 100,
      sortable: true,
      resizable: true,
    },
    autoGroupColumnDef: {
      minWidth: 200,
    },
    groupUseEntireRow: true,
    enableRangeSelection: true,
    animateRows: true,
  };
  
  // setup the grid after the page has finished loading
  document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
  
    agGrid
      .simpleHttpRequest({
        url:
          'https://raw.githubusercontent.com/Digicratic/ag-grid-test/master/test.json',
      })
      .then(function(data) {
        gridOptions.api.setRowData(data);
      });
  });
  