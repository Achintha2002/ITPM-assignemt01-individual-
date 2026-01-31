const ExcelJS = require('exceljs');
const fs = require('fs');
const path = require('path');

const csvPath = 'test-results.csv';
const xlsxPath = 'IT3779570_final.xlsx';

async function convert() {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Assignment 1 Test Results');

    const content = fs.readFileSync(csvPath, 'utf-8');
    // Remove BOM if present
    const cleanContent = content.charCodeAt(0) === 0xFEFF ? content.slice(1) : content;

    // ROBUST CSV PARSING (Handles quoted newlines)
    const rows = [];
    let currentRow = [];
    let currentCell = '';
    let inQuotes = false;

    for (let i = 0; i < cleanContent.length; i++) {
        const char = cleanContent[i];
        const nextChar = cleanContent[i + 1];

        if (char === '"') {
            if (inQuotes && nextChar === '"') {
                // Escaped quote ("") -> just one quote
                currentCell += '"';
                i++; // Skip next quote
            } else {
                // Toggle quote state
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            // End of cell
            currentRow.push(currentCell);
            currentCell = '';
        } else if ((char === '\r' || char === '\n') && !inQuotes) {
            // End of row (handle \r\n or \n)
            if (char === '\r' && nextChar === '\n') {
                i++; // Skip \n
            }
            // Only push if we have content (avoids empty lines causing issues)
            if (currentRow.length > 0 || currentCell.length > 0) {
                currentRow.push(currentCell);
                rows.push(currentRow);
                currentRow = [];
                currentCell = '';
            }
        } else {
            currentCell += char;
        }
    }
    // Push last row if exists
    if (currentRow.length > 0 || currentCell.length > 0) {
        currentRow.push(currentCell);
        rows.push(currentRow);
    }

    rows.forEach((rowData, index) => {
        const row = worksheet.addRow(rowData);

        // Header Styling
        if (index === 0) {
            row.font = { bold: true };
            row.eachCell((cell) => {
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FFFFFF00' } // Yellowish header like widely used, or plain
                };
                cell.border = {
                    top: { style: 'thin' },
                    left: { style: 'thin' },
                    bottom: { style: 'thin' },
                    right: { style: 'thin' }
                };
                cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
            });
            row.height = 30;
        } else {
            // Data Styling
            row.eachCell((cell, colNumber) => {
                cell.border = {
                    top: { style: 'thin' },
                    left: { style: 'thin' },
                    bottom: { style: 'thin' },
                    right: { style: 'thin' }
                };
                cell.alignment = { vertical: 'top', horizontal: 'left', wrapText: true };

                // Status Color
                if (colNumber === 7) { // Status column
                    if (cell.value === 'Pass') {
                        cell.font = { color: { argb: 'FF008000' }, bold: true }; // Green
                    } else if (cell.value === 'Fail') {
                        cell.font = { color: { argb: 'FFFF0000' }, bold: true }; // Red
                    }
                }
            });
        }
    });

    // Set Column Widths
    worksheet.columns = [
        { width: 15 }, // ID
        { width: 25 }, // Name
        { width: 10 }, // Type
        { width: 30 }, // Input
        { width: 30 }, // Expected
        { width: 30 }, // Actual
        { width: 10 }, // Status
        { width: 40 }, // Justification
        { width: 40 }  // Covered
    ];

    await workbook.xlsx.writeFile(xlsxPath);
    console.log('Excel file created:', xlsxPath);
}

convert();
