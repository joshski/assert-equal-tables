var daff = require('daff')

module.exports = function assertEqualTables(actual, expected) {
  var columns = uniqueColumnsInBothTables(actual, expected)

  var data1 = formatTableData(columns, actual)
  var data2 = formatTableData(columns, expected)

  var table1 = new daff.TableView(data1)
  var table2 = new daff.TableView(data2)
  var comparison = daff.compareTables(table1, table2)

  var alignedComparison = comparison.align()
  var options = new daff.CompareFlags()
  var td = new daff.TableDiff(alignedComparison, options)

  var output = new daff.TableView([])
  td.hilite(output)

  if (td.hasDifference()) {
    var render = new daff.TerminalDiffRender(options)
    var terminalRenderedOutput = render.render(output)
    throw new Error(
      'Expected tables with the same data, but found differences:\n' + terminalRenderedOutput
    )
  }
}

function formatTableData(columns, rows) {
  return [columns].concat(
    rows.map(function(row) {
      return columns.map(function(column) {
        return String(row[column] || '')
      })
    })
  )
}

function uniqueColumnsInBothTables(table1, table2) {
  return unique(columnsInTable(table1).concat(columnsInTable(table2)))
}

function columnsInTable(rows) {
  return rows.reduce(function(cols, row) {
    return cols.concat(Object.keys(row))
  }, [])
}

function unique(array) {
  return array.reduce(function(u, e) {
    return u.indexOf(e) > -1 ? u : u.concat(e)
  }, [])
}
