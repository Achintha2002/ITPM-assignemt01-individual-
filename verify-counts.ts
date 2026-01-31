import { testCases } from './tests/test-data';

const positive = testCases.filter(t => t.type === 'Positive').length;
const negative = testCases.filter(t => t.type === 'Negative').length;
const ui = testCases.filter(t => t.type === 'UI').length;

console.log(`Positive: ${positive}`);
console.log(`Negative: ${negative}`);
console.log(`UI: ${ui}`);
console.log(`Total: ${testCases.length}`);

console.log('Positive IDs:', testCases.filter(t => t.type === 'Positive').map(t => t.id).join(', '));
console.log('Negative IDs:', testCases.filter(t => t.type === 'Negative').map(t => t.id).join(', '));
