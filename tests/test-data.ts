export interface TestCase {
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

export const testCases: TestCase[] = [
    {
        "id": "Pos_Fun_02",
        "description": "Simple sentence: I want rice",
        "type": "Positive",
        "input": "mata bath oonee.",
        "expected": "මට බත් ඕනේ.",
        "category": "Sentence structures",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Sentence structures - Accuracy validation"
    },
    {
        "id": "Pos_Fun_01",
        "description": "Simple sentence: I go home",
        "type": "Positive",
        "input": "mama gedhara yanavaa.",
        "expected": "මම ගෙදර යනවා.",
        "category": "Sentence structures",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Sentence structures - Accuracy validation"
    },
    {
        "id": "Pos_Fun_04",
        "description": "Complex sentence: Condition",
        "type": "Positive",
        "input": "oya enavaanam mama balan innavaa.",
        "expected": "ඔය එනවානම් මම බලන් ඉන්නවා.",
        "category": "Sentence structures",
        "length": "M",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Sentence structures - Accuracy validation"
    },
    {
        "id": "Pos_Fun_06",
        "description": "Command: Come immediately",
        "type": "Positive",
        "input": "vahaama enna.",
        "expected": "වහාම එන්න.",
        "category": "Interrogative/Imperative",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Interrogative/Imperative - Accuracy validation"
    },
    {
        "id": "Pos_Fun_03",
        "description": "Compound sentence: Rain and home",
        "type": "Positive",
        "input": "mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee.",
        "expected": "මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ.",
        "category": "Sentence structures",
        "length": "M",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Sentence structures - Accuracy validation"
    },
    {
        "id": "Pos_Fun_05",
        "description": "Question: How are you?",
        "type": "Positive",
        "input": "oyaata kohomadha?",
        "expected": "ඔයාට කොහොමද?",
        "category": "Interrogative/Imperative",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Interrogative/Imperative - Accuracy validation"
    },
    {
        "id": "Pos_Fun_07",
        "description": "Positive: I do that",
        "type": "Positive",
        "input": "mama ehema karanavaa.",
        "expected": "මම එහෙම කරනවා.",
        "category": "Positive/Negative",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Positive/Negative - Accuracy validation"
    },
    {
        "id": "Pos_Fun_09",
        "description": "Greeting: Ayubowan",
        "type": "Positive",
        "input": "aayuboovan!",
        "expected": "ආයුබෝවන්!",
        "category": "Daily Usage",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Daily Usage - Accuracy validation"
    },
    {
        "id": "Pos_Fun_08",
        "description": "Negative: I do not do that",
        "type": "Positive",
        "input": "mama ehema karannee naehae.",
        "expected": "මම එහෙම කරන්නේ නැහැ.",
        "category": "Positive/Negative",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Positive/Negative - Accuracy validation"
    },
    {
        "id": "Pos_Fun_10",
        "description": "Request: Can you help?",
        "type": "Positive",
        "input": "mata udhavvak karanna puLuvandha?",
        "expected": "මට උදව්වක් කරන්න පුළුවන්ද?",
        "category": "Daily Usage",
        "length": "M",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Daily Usage - Accuracy validation"
    },
    {
        "id": "Pos_Fun_11",
        "description": "Response: Okay I will do",
        "type": "Positive",
        "input": "hari, mama karannam.",
        "expected": "හරි, මම කරන්නම්.",
        "category": "Daily Usage",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Daily Usage - Accuracy validation"
    },
    {
        "id": "Pos_Fun_12",
        "description": "Polite: Sorry",
        "type": "Positive",
        "input": "samaavenna, eeka athvaeradhiimak.",
        "expected": "සමාවෙන්න, ඒක අත්වැරදීමක්.",
        "category": "Polite/Informal",
        "length": "M",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Polite/Informal - Accuracy validation"
    },
    {
        "id": "Pos_Fun_13",
        "description": "Informal: Give that",
        "type": "Positive",
        "input": "eeyi, ooka dhiyan.",
        "expected": "එයි, ඕක දියන්.",
        "category": "Polite/Informal",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Polite/Informal - Accuracy validation"
    },
    {
        "id": "Pos_Fun_14",
        "description": "Expression: Sleepy",
        "type": "Positive",
        "input": "mata nidhimathayi.",
        "expected": "මට නිදිමතයි.",
        "category": "Daily Usage",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Daily Usage - Accuracy validation"
    },
    {
        "id": "Pos_Fun_15",
        "description": "Phrase: Just wait",
        "type": "Positive",
        "input": "poddak inna",
        "expected": "පොඩ්ඩක් ඉන්න",
        "category": "Word Combinations",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Word Combinations - Accuracy validation"
    },
    {
        "id": "Pos_Fun_17",
        "description": "Repeated: OK OK",
        "type": "Positive",
        "input": "hari hari",
        "expected": "හරි හරි",
        "category": "Word Combinations",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Word Combinations - Accuracy validation"
    },
    {
        "id": "Pos_Fun_16",
        "description": "Spacing: I want bread",
        "type": "Positive",
        "input": "mata paan kanna oonee.",
        "expected": "මට පාන් කන්න ඕනේ.",
        "category": "Word Combinations",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Word Combinations - Accuracy validation"
    },
    {
        "id": "Pos_Fun_18",
        "description": "Past: Went home",
        "type": "Positive",
        "input": "mama iiyee gedhara giyaa.",
        "expected": "මම ඊයේ ගෙදර ගියා.",
        "category": "Grammar",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Grammar - Accuracy validation"
    },
    {
        "id": "Pos_Fun_19",
        "description": "Present: Working now",
        "type": "Positive",
        "input": "mama dhaen vaeda karanavaa.",
        "expected": "මම දැන් වැඩ කරනවා.",
        "category": "Grammar",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Grammar - Accuracy validation"
    },
    {
        "id": "Pos_Fun_20",
        "description": "Future: Will come tomorrow",
        "type": "Positive",
        "input": "mama heta enavaa.",
        "expected": "මම හෙට එනවා.",
        "category": "Grammar",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Grammar - Accuracy validation"
    },
    {
        "id": "Pos_Fun_21",
        "description": "Singular: Is he/she coming?",
        "type": "Positive",
        "input": "eyaa enavadha?",
        "expected": "එයා එනවද?",
        "category": "Grammar",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Grammar - Accuracy validation"
    },
    {
        "id": "Pos_Fun_22",
        "description": "Plural: Let us go",
        "type": "Positive",
        "input": "api yamu.",
        "expected": "අපි යමු.",
        "category": "Grammar",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Grammar - Accuracy validation"
    },
    {
        "id": "Pos_Fun_23",
        "description": "Polite Request: Can you send?",
        "type": "Positive",
        "input": "puLuvannam mata eeka evanna.",
        "expected": "පුළුවන්නම් මට ඒක එවන්න.",
        "category": "Grammar",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Grammar - Accuracy validation"
    },
    {
        "id": "Pos_Fun_24",
        "description": "Direct Request: Give it",
        "type": "Positive",
        "input": "eeka dhenna.",
        "expected": "ඒක දෙන්න.",
        "category": "Grammar",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "See coveredBy for details",
        "coveredBy": "Grammar - Accuracy validation"
    },
    {
        "id": "Neg_Fun_01",
        "description": "Missing Spaces: mamagedharayanavaa",
        "type": "Negative",
        "input": "mamagedharayanavaa",
        "expected": "මමගෙදරයනවා",
        "category": "Robustness",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "Robustness validation",
        "coveredBy": "Robustness - Robustness validation"
    },
    {
        "id": "Neg_Fun_02",
        "description": "Mixed English: WiFi",
        "type": "Negative",
        "input": "mata WiFi password eka dhenna.",
        "expected": "මට WiFi password එක දෙන්න.",
        "category": "Mixed Language",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "Robustness validation",
        "coveredBy": "Mixed Language - Robustness validation"
    },
    {
        "id": "Neg_Fun_04",
        "description": "Punctuation heavy",
        "type": "Negative",
        "input": "!! ?? \"hello\" ...",
        "expected": "SHOULD_FAIL_PUNCTUATION",
        "category": "Punctuation",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "Robustness validation",
        "coveredBy": "Punctuation - Robustness validation"
    },
    {
        "id": "Neg_Fun_05",
        "description": "Currency: Rs. 5000",
        "type": "Negative",
        "input": "Rs. 5343",
        "expected": "SHOULD_FAIL_CURRENCY",
        "category": "Numeric",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "Robustness validation",
        "coveredBy": "Numeric - Robustness validation"
    },
    {
        "id": "Neg_Fun_07",
        "description": "Abbreviation: NIC",
        "type": "Negative",
        "input": "magee NIC eka nathi unaa.",
        "expected": "මගේ NIC එක නැති වුනා.",
        "category": "Abbreviations",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "Robustness validation",
        "coveredBy": "Abbreviations - Robustness validation"
    },
    {
        "id": "Neg_Fun_06",
        "description": "Slang: bQQ",
        "type": "Negative",
        "input": "adoo vaedak baaragaththaanam eeka hariyata karapanko bQQ.",
        "expected": "අඩෝ වැඩක් බාරගත්තනම් ඒක හරියට කරපන්කො bQQ.",
        "category": "Slang",
        "length": "M",
        "focus": "Accuracy validation",
        "justification": "Robustness validation",
        "coveredBy": "Slang - Robustness validation"
    },
    {
        "id": "Neg_Fun_08",
        "description": "Line Breaks",
        "type": "Negative",
        "input": "mama gedhara yanavaa.\noyaa enavadha maath ekka yanna?",
        "expected": "මම ගෙදර යනවා.\nඔයා එනවද මාත් එක්ක යන්න?",
        "category": "Formatting",
        "length": "M",
        "focus": "Accuracy validation",
        "justification": "Robustness validation",
        "coveredBy": "Formatting - Robustness validation"
    },
    {
        "id": "Neg_Fun_09",
        "description": "Brand: WhatsApp",
        "type": "Negative",
        "input": "WhatsApp msg ekak danna.",
        "expected": "WhatsApp msg එකක් දාන්න.",
        "category": "Mixed Language",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "Robustness validation",
        "coveredBy": "Mixed Language - Robustness validation"
    },
    {
        "id": "Neg_Fun_10",
        "description": "No Input (Empty)",
        "type": "Negative",
        "input": "",
        "expected": "SHOULD_FAIL_EMPTY",
        "category": "Edge Case",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "Robustness validation",
        "coveredBy": "Edge Case - Robustness validation"
    },
    {
        "id": "Pos_UI_01",
        "description": "Real-time update check",
        "type": "UI",
        "input": "man gedhara yanavaa",
        "expected": "මං ගෙදර යනවා",
        "category": "UI Behavior",
        "length": "S",
        "focus": "Accuracy validation",
        "justification": "Real-time output update behavior",
        "coveredBy": "UI Behavior - Real-time output update behavior"
    }
];
