const ExcelJS = require('exceljs');
const fs = require('fs');

async function readExcel() {
    const filename = 'IT23827080_v2.xlsx';
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filename);
    const worksheet = workbook.worksheets[0];

    const rows = [];
    worksheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) return; // Skip header match
        // values[1] is result of A1 (if 1-based) but usually row.values is padded with null at 0
        const v = row.values;

        // Basic mapping guessing from previous output
        // Row 35: [null, "Pos_UI_01", "Real-time...", "S", "input", "exp", "act", "Pass", "Just...", "Cov..."]

        const item = {
            id: v[1],
            description: v[2],
            length: v[3],
            input: v[4],
            expected: v[5],
            // v[6] seems to be 'actual' in the sheet?
            // v[7] status
            justification: v[8],
            coveredBy: v[9]
        };
        rows.push(item);
    });

    fs.writeFileSync('extracted_cases.json', JSON.stringify(rows, null, 2));
    console.log(`Extracted ${rows.length} rows.`);
}

readExcel();
