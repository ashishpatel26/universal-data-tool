import React from "react"
import Survey from "material-survey/components/Survey"

// https://gist.github.com/DimazzzZ/4e2a5a6c8c6f67900091#gistcomment-2021620
const languages = [
    {  value: 'ab', text : 'Abkhazian' },
    {  value: 'aa', text : 'Afar' },
    {  value: 'af', text : 'Afrikaans' },
    {  value: 'ak', text : 'Akan' },
    {  value: 'sq', text : 'Albanian' },
    {  value: 'am', text : 'Amharic' },
    {  value: 'ar', text : 'Arabic' },
    {  value: 'an', text : 'Aragonese' },
    {  value: 'hy', text : 'Armenian' },
    {  value: 'as', text : 'Assamese' },
    {  value: 'av', text : 'Avaric' },
    {  value: 'ae', text : 'Avestan' },
    {  value: 'ay', text : 'Aymara' },
    {  value: 'az', text : 'Azerbaijani' },
    {  value: 'bm', text : 'Bambara' },
    {  value: 'ba', text : 'Bashkir' },
    {  value: 'eu', text : 'Basque' },
    {  value: 'be', text : 'Belarusian' },
    {  value: 'bn', text : 'Bengali' },
    {  value: 'bh', text : 'Bihari languages' },
    {  value: 'bi', text : 'Bislama' },
    {  value: 'bs', text : 'Bosnian' },
    {  value: 'br', text : 'Breton' },
    {  value: 'bg', text : 'Bulgarian' },
    {  value: 'my', text : 'Burmese' },
    {  value: 'ca', text : 'Catalan, Valencian' },
    {  value: 'km', text : 'Central Khmer' },
    {  value: 'ch', text : 'Chamorro' },
    {  value: 'ce', text : 'Chechen' },
    {  value: 'ny', text : 'Chichewa, Chewa, Nyanja' },
    {  value: 'zh', text : 'Chinese' },
    {  value: 'cu', text : 'Church Slavonic, Old Bulgarian, Old Church Slavonic' },
    {  value: 'cv', text : 'Chuvash' },
    {  value: 'kw', text : 'Cornish' },
    {  value: 'co', text : 'Corsican' },
    {  value: 'cr', text : 'Cree' },
    {  value: 'hr', text : 'Croatian' },
    {  value: 'cs', text : 'Czech' },
    {  value: 'da', text : 'Danish' },
    {  value: 'dv', text : 'Divehi, Dhivehi, Maldivian' },
    {  value: 'nl', text : 'Dutch, Flemish' },
    {  value: 'dz', text : 'Dzongkha' },
    {  value: 'en', text : 'English' },
    {  value: 'eo', text : 'Esperanto' },
    {  value: 'et', text : 'Estonian' },
    {  value: 'ee', text : 'Ewe' },
    {  value: 'fo', text : 'Faroese' },
    {  value: 'fj', text : 'Fijian' },
    {  value: 'fi', text : 'Finnish' },
    {  value: 'fr', text : 'French' },
    {  value: 'ff', text : 'Fulah' },
    {  value: 'gd', text : 'Gaelic, Scottish Gaelic' },
    {  value: 'gl', text : 'Galician' },
    {  value: 'lg', text : 'Ganda' },
    {  value: 'ka', text : 'Georgian' },
    {  value: 'de', text : 'German' },
    {  value: 'ki', text : 'Gikuyu, Kikuyu' },
    {  value: 'el', text : 'Greek (Modern)' },
    {  value: 'kl', text : 'Greenlandic, Kalaallisut' },
    {  value: 'gn', text : 'Guarani' },
    {  value: 'gu', text : 'Gujarati' },
    {  value: 'ht', text : 'Haitian, Haitian Creole' },
    {  value: 'ha', text : 'Hausa' },
    {  value: 'he', text : 'Hebrew' },
    {  value: 'hz', text : 'Herero' },
    {  value: 'hi', text : 'Hindi' },
    {  value: 'ho', text : 'Hiri Motu' },
    {  value: 'hu', text : 'Hungarian' },
    {  value: 'is', text : 'Icelandic' },
    {  value: 'io', text : 'Ido' },
    {  value: 'ig', text : 'Igbo' },
    {  value: 'id', text : 'Indonesian' },
    {  value: 'ia', text : 'Interlingua (International Auxiliary Language Association)' },
    {  value: 'ie', text : 'Interlingue' },
    {  value: 'iu', text : 'Inuktitut' },
    {  value: 'ik', text : 'Inupiaq' },
    {  value: 'ga', text : 'Irish' },
    {  value: 'it', text : 'Italian' },
    {  value: 'ja', text : 'Japanese' },
    {  value: 'jv', text : 'Javanese' },
    {  value: 'kn', text : 'Kannada' },
    {  value: 'kr', text : 'Kanuri' },
    {  value: 'ks', text : 'Kashmiri' },
    {  value: 'kk', text : 'Kazakh' },
    {  value: 'rw', text : 'Kinyarwanda' },
    {  value: 'kv', text : 'Komi' },
    {  value: 'kg', text : 'Kongo' },
    {  value: 'ko', text : 'Korean' },
    {  value: 'kj', text : 'Kwanyama, Kuanyama' },
    {  value: 'ku', text : 'Kurdish' },
    {  value: 'ky', text : 'Kyrgyz' },
    {  value: 'lo', text : 'Lao' },
    {  value: 'la', text : 'Latin' },
    {  value: 'lv', text : 'Latvian' },
    {  value: 'lb', text : 'Letzeburgesch, Luxembourgish' },
    {  value: 'li', text : 'Limburgish, Limburgan, Limburger' },
    {  value: 'ln', text : 'Lingala' },
    {  value: 'lt', text : 'Lithuanian' },
    {  value: 'lu', text : 'Luba-Katanga' },
    {  value: 'mk', text : 'Macedonian' },
    {  value: 'mg', text : 'Malagasy' },
    {  value: 'ms', text : 'Malay' },
    {  value: 'ml', text : 'Malayalam' },
    {  value: 'mt', text : 'Maltese' },
    {  value: 'gv', text : 'Manx' },
    {  value: 'mi', text : 'Maori' },
    {  value: 'mr', text : 'Marathi' },
    {  value: 'mh', text : 'Marshallese' },
    {  value: 'ro', text : 'Moldovan, Moldavian, Romanian' },
    {  value: 'mn', text : 'Mongolian' },
    {  value: 'na', text : 'Nauru' },
    {  value: 'nv', text : 'Navajo, Navaho' },
    {  value: 'nd', text : 'Northern Ndebele' },
    {  value: 'ng', text : 'Ndonga' },
    {  value: 'ne', text : 'Nepali' },
    {  value: 'se', text : 'Northern Sami' },
    {  value: 'no', text : 'Norwegian' },
    {  value: 'nb', text : 'Norwegian Bokmål' },
    {  value: 'nn', text : 'Norwegian Nynorsk' },
    {  value: 'ii', text : 'Nuosu, Sichuan Yi' },
    {  value: 'oc', text : 'Occitan (post 1500)' },
    {  value: 'oj', text : 'Ojibwa' },
    {  value: 'or', text : 'Oriya' },
    {  value: 'om', text : 'Oromo' },
    {  value: 'os', text : 'Ossetian, Ossetic' },
    {  value: 'pi', text : 'Pali' },
    {  value: 'pa', text : 'Panjabi, Punjabi' },
    {  value: 'ps', text : 'Pashto, Pushto' },
    {  value: 'fa', text : 'Persian' },
    {  value: 'pl', text : 'Polish' },
    {  value: 'pt', text : 'Portuguese' },
    {  value: 'qu', text : 'Quechua' },
    {  value: 'rm', text : 'Romansh' },
    {  value: 'rn', text : 'Rundi' },
    {  value: 'ru', text : 'Russian' },
    {  value: 'sm', text : 'Samoan' },
    {  value: 'sg', text : 'Sango' },
    {  value: 'sa', text : 'Sanskrit' },
    {  value: 'sc', text : 'Sardinian' },
    {  value: 'sr', text : 'Serbian' },
    {  value: 'sn', text : 'Shona' },
    {  value: 'sd', text : 'Sindhi' },
    {  value: 'si', text : 'Sinhala, Sinhalese' },
    {  value: 'sk', text : 'Slovak' },
    {  value: 'sl', text : 'Slovenian' },
    {  value: 'so', text : 'Somali' },
    {  value: 'st', text : 'Sotho, Southern' },
    {  value: 'nr', text : 'South Ndebele' },
    {  value: 'es', text : 'Spanish, Castilian' },
    {  value: 'su', text : 'Sundanese' },
    {  value: 'sw', text : 'Swahili' },
    {  value: 'ss', text : 'Swati' },
    {  value: 'sv', text : 'Swedish' },
    {  value: 'tl', text : 'Tagalog' },
    {  value: 'ty', text : 'Tahitian' },
    {  value: 'tg', text : 'Tajik' },
    {  value: 'ta', text : 'Tamil' },
    {  value: 'tt', text : 'Tatar' },
    {  value: 'te', text : 'Telugu' },
    {  value: 'th', text : 'Thai' },
    {  value: 'bo', text : 'Tibetan' },
    {  value: 'ti', text : 'Tigrinya' },
    {  value: 'to', text : 'Tonga (Tonga Islands)' },
    {  value: 'ts', text : 'Tsonga' },
    {  value: 'tn', text : 'Tswana' },
    {  value: 'tr', text : 'Turkish' },
    {  value: 'tk', text : 'Turkmen' },
    {  value: 'tw', text : 'Twi' },
    {  value: 'ug', text : 'Uighur, Uyghur' },
    {  value: 'uk', text : 'Ukrainian' },
    {  value: 'ur', text : 'Urdu' },
    {  value: 'uz', text : 'Uzbek' },
    {  value: 've', text : 'Venda' },
    {  value: 'vi', text : 'Vietnamese' },
    {  value: 'vo', text : 'Volap_k' },
    {  value: 'wa', text : 'Walloon' },
    {  value: 'cy', text : 'Welsh' },
    {  value: 'fy', text : 'Western Frisian' },
    {  value: 'wo', text : 'Wolof' },
    {  value: 'xh', text : 'Xhosa' },
    {  value: 'yi', text : 'Yiddish' },
    {  value: 'yo', text : 'Yoruba' },
    {  value: 'za', text : 'Zhuang, Chuang' },
    {  value: 'zu', text : 'Zulu' }
];


const form = {
  questions: [
    {
        name: "transcriptionType",
        title: "Transcription Type",
        type: "dropdown",
        choices: [
            "simple",
            "proper"
        ]
    },
    {
        name: "phraseBank",
        title: "Phrase Bank",
        description: "URL of single-column CSV or TXT file with allowed phrases",
        type: "text",
    },
    {
        name: "onlyUseWordsInPhraseBank",
        title: "Only Use Words In Phrase Bank",
        type: "boolean",
    },
    {
        name: "languange",
        title: "Language",
        type: "dropdown",
        // https://gist.github.com/DimazzzZ/4e2a5a6c8c6f67900091#gistcomment-2858621
        choices: languages
    },
    {
        name: "description",
        title: "Description",
        type: "multiline-text"
    }
  ]
}

export default ({ iface, onChange }) => {    
    return(
        <Survey
            noActions
            variant="flat"
            onQuestionChange={(questionId, newValue, answers) =>{
                if(newValue.value){
                    onChange({...iface, [questionId]: newValue.value})
                }else{
                    onChange({...iface, [questionId]: newValue})
                }
            }}
            form={form}
        />
    )
}