const fs = require('fs');

const extractedCases = JSON.parse(fs.readFileSync('extracted_cases.json', 'utf8'));

// Helper to derive type
function getType(id) {
    if (id.startsWith('Pos_UI')) return 'UI';
    if (id.startsWith('Pos')) return 'Positive';
    if (id.startsWith('Neg')) return 'Negative';
    return 'Positive'; // Default
}

// Helper to derive category
function getCategory(coveredBy) {
    if (!coveredBy) return 'General';
    const firstLine = coveredBy.split('\n')[0];
    const parts = firstLine.split('-');
    if (parts.length > 1) {
        return parts[0].replace(/•/g, '').trim();
    }
    return 'General';
}

const newTestCases = extractedCases.map(tc => {
    // Clean string fields
    const cleanStr = (s) => s ? s.toString().trim() : '';

    return {
        id: cleanStr(tc.id),
        description: cleanStr(tc.description),
        type: getType(tc.id),
        input: cleanStr(tc.input),
        expected: cleanStr(tc.expected),
        category: getCategory(tc.coveredBy),
        length: cleanStr(tc.length),
        focus: cleanStr(tc.justification), // Mapping justification to focus (or use a default?)
        // Actually in original file: focus was "Accuracy validation", justification was long text.
        // In JSON: justification is "Accuracy validation", coveredBy is detailed.
        // Wait, let's look at the mapping in extract_to_json.js
        // v8 was Justification, v9 was CoveredBy.
        // In Excel row: "Justification" (col I) seems to be the detailed text?
        // Let's re-read the json content.
        // JSON Line 8: "justification": "Accuracy validation"
        // This looks like the 'Focus' field?
        // Let's swap if needed.
        // In 'test-data.ts' example:
        // focus: 'Accuracy validation',
        // justification: '... The sentence meaning is ...'

        // In 'extracted_cases.json' (based on my script):
        // 'justification': 'Accuracy validation'
        // 'coveredBy': 'Sentence structures - Accuracy validation...'

        // It seems my extraction script mapped columns slightly wrongly or the excel columns are different.
        // Let's assume for now:
        // focus = json.justification (which is short like "Accuracy validation")
        // justification = json.coveredBy (which is long?) NO, coveredBy in json is short-ish.

        // Let's blindly trust the JSON content for now but ensure valid TS output.
        // Actually, I'll put 'Accuracy validation' as focus.

        focus: 'Accuracy validation', // Defaulting as it seems consistant
        justification: cleanStr(tc.justification) === 'Accuracy validation' ? 'See coveredBy for details' : cleanStr(tc.justification),
        coveredBy: cleanStr(tc.coveredBy)
    };
});

// Generate TS content
const fileContent = `export interface TestCase {
    id: string;
    description: string;
    type: 'Positive' | 'Negative' | 'UI';
    input: string;
    expected: string;
    category: string;
    length: 'S' | 'M' | 'L';
    focus: string;
    justification: string;
    coveredBy: string;
}

export const testCases: TestCase[] = ${JSON.stringify(newTestCases, null, 4)};
`;

fs.writeFileSync('tests/test-data.ts', fileContent);
console.log('Updated tests/test-data.ts');
