const ExcelJS = require('exceljs');
const path = require('path');

async function readExcel() {
    const filename = 'IT23827080_final.xlsx';
    const workbook = new ExcelJS.Workbook();
    try {
        await workbook.xlsx.readFile(filename);
        
        // Assuming the first sheet has the data
        const worksheet = workbook.worksheets[0];
        
        console.log(`Reading ${filename}, Sheet: ${worksheet.name}`);
        
        worksheet.eachRow((row, rowNumber) => {
            // Print row content to understand structure
            const values = row.values;
            // ExcelJS values are 1-based, so index 1 is column A
            console.log(`Row ${rowNumber}: ${JSON.stringify(values)}`);
        });
        
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

readExcel();
