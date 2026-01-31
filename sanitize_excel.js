const ExcelJS = require('exceljs');
const fs = require('fs');

const files = [
    'IT3779570.xlsx',
    'IT3779570_final.xlsx',
    'IT3779570_v2.xlsx',
    'IT3779570/IT3779570.xlsx'
];

async function updateExcel(file) {
    if (!fs.existsSync(file)) return;

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(file);

    let modified = false;

    workbook.eachSheet(sheet => {
        sheet.eachRow(row => {
            row.eachCell(cell => {
                if (cell.value && cell.value.toString().includes('sandundimantha')) {
                    console.log(`Found unmatching link in ${file}: ${cell.value}`);
                    const newVal = cell.value.toString().replace('sandundimantha/ITPM-Assignment-01-last', 'Achintha2002/ITPM_assignment');
                    cell.value = newVal;
                    modified = true;
                }
            });
        });
    });

    if (modified) {
        await workbook.xlsx.writeFile(file);
        console.log(`Updated ${file}`);
    } else {
        console.log(`No match in ${file}`);
    }
}

async function run() {
    for (const f of files) {
        await updateExcel(f);
    }
}

run();
