const ExcelJS = require('exceljs');
const fs = require('fs');

const files = [
    'IT3779570.xlsx',
    'IT3779570_final.xlsx',
    'IT3779570_v2.xlsx',
    'IT3779570/IT3779570.xlsx'
];

async function checkLinks(file) {
    if (!fs.existsSync(file)) return;
    console.log(`Checking ${file}...`);
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(file);

    workbook.eachSheet(sheet => {
        sheet.eachRow(row => {
            row.eachCell(cell => {
                if (cell.value) {
                    const val = cell.value.toString();
                    if (val.includes('http') || val.includes('github') || val.includes('.com')) {
                        console.log(`[${file}] Found URL-like: ${val}`);
                    }
                    if (cell.hyperlink) {
                        console.log(`[${file}] Found Hyperlink: ${cell.hyperlink}`);
                    }
                }
            });
        });
    });
}

async function run() {
    for (const f of files) {
        await checkLinks(f);
    }
}

run();
