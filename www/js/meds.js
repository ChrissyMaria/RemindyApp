// https://www.webmd.com/drugs/2/drug-13826/l-thyroxine-oral/details
var thyroxin = {
    name: "Thyroxin",
    img: "./images/Thyroxin.png",
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
    }
}


//https://www.webmd.com/drugs/2/drug-21097/yasmin-28-oral/details
//Ich musste hier die Yasmin 28 nehmen weil es von Aristelle keinen englischen Beipackzettel gibt und ich nicht alles übersetzen wollte :D
// also entweder wir übersetzen Aristelle oder sagen einfach pauschal wir nehmen Yasmin28 als Pille?
var aristelle = {
    name: "Aristelle",
    img: "./images/packshot_Aristelle-0-03-mg-2-mg-Filmtabletten.png.jpeg",
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
    }
}

//https://www.webmd.com/drugs/2/drug-7748/ciprofloxacin-oral/details
var ciprofloxacin = {
    name: "Ciprofloxacin",
    img: "./images/cipro.png",
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
    }
}