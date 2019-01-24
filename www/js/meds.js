// https://www.webmd.com/drugs/2/drug-13826/l-thyroxine-oral/details
var thyroxin = {
    name: "Thyroxin",
    img: "./images/Thyroxin.png",
    shortInfo: "Levothyroxine is used to treat an underactive thyroid (hypothyroidism). It replaces or provides more thyroid hormone.",
    generalInfo: "Levothyroxine is used to treat an underactive thyroid (hypothyroidism). " +
        "It replaces or provides more thyroid hormone, which is normally produced by the thyroid gland. " +
        "Having enough thyroid hormone is important for maintaining normal mental and physical " +
        "activity.",
    sideEffects: ["Hair loss", "increased sweating", "mental / mood changes", "tiredness", "diarrhea", "shaking (tremor)",
        "headache", "shortness of breath", "bone pain", "easily broken bones"],
    //there are much more...
    precaution: {
        allergicReactions: "Contains inactive ingredients. May cause allergic reactions or other problems",
        medicalHistory: ["Caution with medical history, especially with: ", "increased thyroid hormones (thyrotoxicosis)",
            "decreased adrenal gland function", "heart disease (such as coronary artery disease, irregular heartbeat)",
            "high blood pressure" ],
        diabetes: "If you have diabetes, this drug may affect your blood sugar."
    },
    //there are much more...
    interactions: {
        seriousInteractions: ["agents that affect IODIDE/RADIOACTIVE IODIDE"],
        moderateInteractions: ["THYROID PREPARATIONS/BILE ACID SEQUESTRANTS; SEVELAMER", "LEVOTHYROXINE/ORAL CALCIUM " +
        "ACETATE; CARBONATE; CITRATE", "THYROID/IRON SALTS, ORAL", "ORAL THYROID AGENTS/ALUMINUM;MAGNESIUM;LANTHANUM;SIMETHICONE"]
    },
    pills_left: 10,
    per_day: 1,
    intake: [
        {
            //note: we have to define a whole new date - we will later simply extract the time
            time: new Date(2019, 1, 9, 9, 30, 0, 0),
            amount: 1,
            taken: true
        }
    ],
    link: 'https://www.blinkhealth.com/l-thyroxine-sodium'
}


//https://www.webmd.com/drugs/2/drug-21097/yasmin-28-oral/details
//Ich musste hier die Yasmin 28 nehmen weil es von Aristelle keinen englischen Beipackzettel gibt und ich nicht alles übersetzen wollte :D
// also entweder wir übersetzen Aristelle oder sagen einfach pauschal wir nehmen Yasmin28 als Pille?
var aristelle = {
    name: "Yasmin-28",
    img: "./images/packshot_Aristelle-0-03-mg-2-mg-Filmtabletten.png.jpeg",
    shortInfo: "Yasmin-28 is used to prevent pregnancy. It is a combination of 2 hormones: an estrogen (ethinyl estradiol) and a progestin.",
    generalInfo: "This medication is a combination of 2 hormones: an estrogen (ethinyl estradiol) and a progestin " +
        "(drospirenone). It is used to prevent pregnancy. It works mainly by preventing the release of an egg " +
        "(ovulation) during your menstrual cycle. It also makes vaginal fluid thicker to help prevent sperm from " +
        "reaching an egg (fertilization) and changes the lining of the uterus (womb) to prevent attachment of a " +
        "fertilized egg. If a fertilized egg does not attach to the uterus, it passes out of the body. Besides " +
        "preventing pregnancy, birth control pills may make your periods more regular, " +
        "decrease blood loss and painful periods, and decrease your risk of ovarian cysts.",
    sideEffects: ["Nausea", "vomiting", "headache", "bloating", "breast tenderness", "swelling of the ankles/feet (fluid retention)",
        "weight change", "Vaginal bleeding between periods (spotting)", "missed/irregular periods (especially during the " +
        "first few months of use"],
    //there are much more...
    precaution: {
        allergicReactions: "Contains inactive ingredients. May cause allergic reactions to ethinyl estradiol or drospirenone; or " +
            "to other estrogens or progestins; or if you have any other allergies.",
        medicalHistory: ["Caution with medical history, especially with: ", "adrenal gland problems", "stroke",
                "blood clots (such as in the legs, eyes, lungs)", "high blood pressure", "abnormal breast exam",
            "cancer (especially endometrial or breast cancer)", "blood clotting disorders (such as protein C or protein S deficiency)",
            "diabetes that has caused kidney/eye/nerve/blood vessel disease", "severe headaches/migraines",
            "family medical history (especially angioedema)", "heart problems (such as heart valve disease",
            "irregular heartbeat", "previous heart attack)", "kidney problems", "liver problems (such as liver " +
            "tumor, active liver disease)", "history of yellowing eyes/skin (jaundice) during pregnancy " +
            "or while using birth control pills", "unexplained vaginal bleeding, high cholesterol or triglyceride " +
            "(blood fat) levels", "depression", "swelling (edema)", "gallbladder problems", "obesity"],
        diabetes: "If you have diabetes, this medication may affect your blood sugar."
    },
    //there are much more...
    interactions: {
        severeInteractions: ["DROSPIRENONE/BOCEPREVIR", "ETHINYL ESTRADIOL/OMBITASVIR-PARITAPREVIR-RITONAVIR-DASABUV",
            "DROSPIRENONE-ETHINYL ESTRADIOL/ATAZANAVIR-COBICISTAT", "WEAK CYP3A4 INHIBITORS/LOMITAPIDE (>40MG)",
            "ESTROGENIC AGENTS/TRANEXAMIC ACID", "CONTRACEPTIVES/SODIUM TETRADECYL SULFATE", "ESTROGENS/SELECTED ANTI-AROMATASE AGENTS"],
        seriousInteractions: ["HORMONAL CONTRACEPTIVES/RIFAMYCINS", "CONTRACEPTIVES/TROLEANDOMYCIN", "CONTRACEPTIVES/GRISEOFULVIN",
            "HORMONAL CONTRACEPTIVE AGENTS/EFAVIRENZ; NEVIRAPINE", "HORMONAL CONTRACEPTIVES/SELECTED ANTICONVULSANTS",
            "HORMONAL CONTRACEPTIVES/ST. JOHN'S WORT", "HORMONAL CONTRACEPTIVE AGENTS/BOSENTAN", "STEROIDAL CONTRACEPTIVES/APREPITANT",
            "HORMONAL CONTRACEPTIVES/MYCOPHENOLATE"],
        moderateInteractions: ["CONTRACEPTIVES/XANTHINE DERIVATIVES", "ORAL CONTRACEPTIVES/PENICILLINS",
            "CONTRACEPTIVES/TETRACYCLINES; TIGECYCLINE", "DROSPIRENONE/ACE INHIBITORS; ARBS", "DROSPIRENONE/POTASSIUM SPARING DIURETICS",
            "DROSPIRENONE/NSAIDS", "DROSPIRENONE/POTASSIUM SUPPLEMENTS", "DROSPIRENONE/HEPARIN", "ORAL CONTRACEPTIVES/SELECT CEPHALOSPORIN"]
    },
    pills_left: 3,
    per_day: (1/21),
    intake: [
        {
            time: new Date(2019, 1, 9, 18, 0, 0, 0),
            amount: (1/21),
            taken: false
        }
    ],
    link: 'https://www.blinkhealth.com/yasmin-28'
}
var ibu = {
    name: "Ibuprofen",
    img: "./images/Ibu.jpg",
    shortInfo: "Ibuprofen is used to relieve pain from various conditions such as headache, dental pain, menstrual cramps, " +
        "muscle aches, or arthritis. It blocks your body's production " +
        "of certain natural substances that cause inflammation.",
    //there are much more
    sideEffects: ["Upset stomach", "nausea", "vomiting", "headache", "diarrhea", "constipation", "dizziness,"],
    //there are much more...
    precaution: {
        allergicReactions: "This product may contain inactive ingredients, which can cause allergic reactions or other problems. " +
            "Tell your doctor or pharmacist if you are allergic to it; or to aspirin or other NSAIDs (such as naproxen, celecoxib); " +
            "or if you have any other allergies. ",
        medicalHistory: ["Caution with medical history, especially with: ", "asthma", "blood disorder",
            "growths in the nose", "heart problems", "high blood pressure"],
        further: ["Kidney problems can sometimes occur with the use of NSAID medications, including ibuprofen. " +
        "Problems are more likely to occur if you are dehydrated, have heart failure or kidney disease, are an older adult, " +
        "or if you take certain medications (see also Drug Interactions section). " +
        "Drink plenty of fluids as directed by your doctor to prevent dehydration and tell your doctor right " +
        "away if you have a change in the amount of urine. This drug may make you dizzy or drowsy. " +
        "Alcohol or marijuana can make you more dizzy or drowsy. Do not drive, use machinery, " +
        "or do anything that needs alertness until you can do it safely. Limit alcoholic beverages. " +
        "Talk to your doctor if you are using marijuana."
        ]
    },
    //there are much more...
    interactions: {
        severeInteractions: ["SELECTED NEPHROTOXIC AGENTS/CIDOFOVIR NSAIDS", "ASPIRIN (> 81 MG)/KETOROLAC (INJECTABLE) NSAID",
            "ASPIRIN (> 81 MG)/KETOROLAC (NON-INJECTION)"],
        seriousInteractions: ["SELECTED NEPHROTOXIC AGENTS/FOSCARNET", "AGENTS AFFECTING GROWTH HORMONE/MACIMORELIN",
        "NSAIDS/APIXABAN; BETRIXABAN; EDOXABAN; RIVAROXABAN", "NSAIDS/DABIGATRAN", "NSAIDS/MIFAMURTIDE"],
        moderateInteractions: ["NSAIDS/CORTICOSTEROIDS", "NSAIDS/LOOP DIURETICS", "NSAIDS/LITHIUM", "NONSTEROIDAL ANTI-INFLAMMATORY DRUGS/BETA-BLOCKERS"]
    },
    pills_left: 6,
    per_day: 2,
    intake: [
        {
            time: new Date(2019, 1, 9, 7, 0, 0, 0),
            amount: 1,
            taken: true
        },
        {
            time: new Date(2019, 1, 9, 17, 0, 0, 0),
            amount: 1,
            taken: false
        }
    ],
    link: 'https://www.blinkhealth.com/ibu'
}
//https://www.webmd.com/drugs/2/drug-7748/ciprofloxacin-oral/details
var ciprofloxacin = {
    name: "Ciprofloxacin",
    img: "./images/cipro.png",
    shortInfo: "Ciprofloxacin belongs to quinolone antibiotics and is used to treat bacterial infections. It works by stopping the growth of bacteria.",
    generalInfo: "This medication is used to treat a variety of bacterial infections. Ciprofloxacin belongs to a class " +
        "of drugs called quinolone antibiotics. It works by stopping the growth of bacteria." +
        "This antibiotic treats only bacterial infections. It will not work for virus infections " +
        "(such as common cold, flu). Using any antibiotic when it is not needed can cause it to not work for future infections.",
    //there are much more
    sideEffects: ["Nausea", "diarrhea", "dizziness", "lightheadedness", "headache", "trouble sleeping "],
    //there are much more...
    precaution: {
        allergicReactions: "Contains inactive ingredients. May cause allergic reactions to quinolone antibiotics " +
            "such as norfloxacin, gemifloxacin, levofloxacin, moxifloxacin, or ofloxacin; or if you have any other allergies.",
        medicalHistory: ["Caution with medical history, especially with: ", "diabetes", "heart problems (such as " +
        "recent heart attack)", "joint/tendon problems (such as tendonitis, bursitis)", "kidney disease",
            "liver disease", "mental/mood disorders (such as depression)", "myasthenia gravis", "nerve problems" +
            " (such as peripheral neuropathy)", "seizures", "conditions that increase your " +
            "risk of seizures (such as brain/head injury, brain tumors, cerebral atherosclerosis"],
        further: ["Ciprofloxacin may cause a condition that affects the heart rhythm (QT prolongation). " +
        "QT prolongation can rarely cause serious (rarely fatal) fast/irregular heartbeat and other symptoms " +
        "(such as severe dizziness, fainting) that need medical attention right away.", "This medication may rarely " +
        "cause serious changes in blood sugar, especially if you have diabetes.", "This drug may make you dizzy. " +
        "Alcohol or marijuana can make you more dizzy. Do not drive, use machinery, or do anything that needs " +
        "alertness until you can do it safely. Limit alcoholic beverages. Talk to your doctor if you are using marijuana"
        ]
    },
    //there are much more...
    interactions: {
        severeInteractions: ["STRONG AND MODERATE CYP3A4 INHIBITORS/ASUNAPREVIR", "SELECTED CYP1A2 INHIBITORS/RASAGILINE (> 0.5 MG)",
            "STRONG OR MODERATE CYP3A4 INHIBITORS/LOMITAPIDE", "MODERATE CYP3A4 INHIBITORS/NALOXEGOL (> 12.5 MG)",
            "QT PROLONGING AGENTS/ANAGRELIDE", "MODERATE CYP3A4 INHIBITORS/AVANAFIL (> 50 MG)", "STRONG OR MODERATE CYP3A4 " +
            "INHIBITORS/FLIBANSERIN", "QT PROLONGING AGENTS/DOMPERIDONE", "QT PROLONGING AGENTS/AMIFAMPRIDINE",
            "QT PROLONGING AGENTS/DRONEDARONE"],
        seriousInteractions: ["SELECTED QUINOLONES/CLASS IA & III ANTIARRHYTHMICS", "STRONG AND MODERATE " +
        "CYP3A4 INHIBITORS/ENCORAFENIB", "SELECTED PHOTOSENSITIZERS/AMINOLEVULINIC ACID", "QT PROLONGING AGENTS/LOFEXIDINE",
            "QT PROLONGING AGENTS/MACIMORELIN", "QT PROLONGING AGENTS/INOTUZUMAB OZOGAMICIN",
            "STRONG AND MODERATE CYP3A4 INHIBITORS/NERATINIB", "MODERATE CYP3A4 INHIBITORS THAT PROLONG QT/QUETIAPINE",
            "QT PROLONGING AGENTS/RIBOCICLIB", "CIPROFLOXACIN/ERLOTINIB"],
        moderateInteractions: ["QUINOLONES, ORAL/SUCRALFATE", "QUINOLONES, ORAL/DIDANOSINE PEDIATRIC SUSPENSION+ANTACIDS",
            "QUINOLONES/CORTICOSTEROIDS", "SELECTED QUINOLONES/ENTERAL NUTRITION", "ORAL FLUOROQUINOLONES/SEVELAMER",
            "CIPROFLOXACIN/QT PROLONGING AGENTS"]
    },
    pills_left: 6,
    per_day: 2,
    intake: [
        {
            time: new Date(2019, 1, 9, 8, 0, 0, 0),
            amount: 1,
            taken: false
        },
        {
            time: new Date(2019, 1, 9, 19, 0, 0, 0),
            amount: 1,
            taken: false
        }
    ],
    link: 'https://www.blinkhealth.com/ciprofloxacin'
}


var aar_or = {
    name: "AAR OS N Dragees",
    img: "./images/AAR_OS.jpg",
    shortInfo: "",
    generalInfo: "",
    //there are much more
    sideEffects: [],
    //there are much more...
    precaution: {
        allergicReactions: "",
        medicalHistory: [],
        further: []
    },
    //there are much more...
    interactions: {
        severeInteractions: [],
        seriousInteractions: [],
        moderateInteractions: []
    },
    pills_left: 6,
    per_day: 2,
    intake: [],
    link: ''
}


var abasaglar = {
    name: "ABASAGLAR 100 E/ml Injektionslösung KwikPen",
    img: "./images/abasaglar_packshot.jpg",
    shortInfo: "",
    generalInfo: "",
    //there are much more
    sideEffects: [],
    //there are much more...
    precaution: {
        allergicReactions: "",
        medicalHistory: [],
        further: []
    },
    //there are much more...
    interactions: {
        severeInteractions: [],
        seriousInteractions: [],
        moderateInteractions: []
    },
    pills_left: 6,
    per_day: 2,
    intake: [],
    link: ''
}

var abno = {
    name: "ABNOBAVISCUM Pini 20 mg",
    img: "./images/Abnobaviscum-Abiet-0.2Mg-von-ABNOBA-GmbH-2437015.jpg",
    shortInfo: "",
    generalInfo: "",
    //there are much more
    sideEffects: [],
    //there are much more...
    precaution: {
        allergicReactions: "",
        medicalHistory: [],
        further: []
    },
    //there are much more...
    interactions: {
        severeInteractions: [],
        seriousInteractions: [],
        moderateInteractions: []
    },
    pills_left: 6,
    per_day: 2,
    intake: [],
    link: ''
}

var coaprovel = {
    name: "Coaprovel",
    img: "./images/Coaprovel.jpg",
    shortInfo: "",
    generalInfo: "",
    //there are much more
    sideEffects: [],
    //there are much more...
    precaution: {
        allergicReactions: "",
        medicalHistory: [],
        further: []
    },
    //there are much more...
    interactions: {
        severeInteractions: [],
        seriousInteractions: [],
        moderateInteractions: []
    },
    pills_left: 6,
    per_day: 2,
    intake: [],
    link: ''
}




