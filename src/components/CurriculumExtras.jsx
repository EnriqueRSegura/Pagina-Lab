import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './CurriculumExtras.css';

const CurriculumExtras = () => {
  const { t, language } = useLanguage();
  const theses = [
  {
    "title": "SINTESIS Y EVALUACION FARMACOLOGICA PRELIMINAR DE COMPUESTOS CON POTENCIAL ACTIVIDAD COLINERGICA",
    "name": "SANCHEZ LOPEZ ARACELI",
    "level": "LICENCIATURA",
    "year": "1993"
  },
  {
    "title": "SINTESIS Y EVALUACION COLINERGICA DE MALEAMIDA DE MAMINOFENOL",
    "name": "VAZQUEZ ALCANTARA IVAN",
    "level": "MAESTRÍA",
    "year": "1994"
  },
  {
    "title": "INHIBIDORES DE ACETILCOLINESTERASA, DERIVADOS DE AMONOFENOL, CON POSIBLE APLICACION TERAPEUTICA EN LA ENFERMEDAD DE ALZHEIMER",
    "name": "GARCIA GONZALEZ JUAN JOSE",
    "level": "LICENCIATURA",
    "year": "1997"
  },
  {
    "title": "SINTESIS Y EVALUACIÓN COLINÉRGICA DE LA SUCCINIMIDA ACETILADA DE META- AMINOFENOL",
    "name": "MORALES MÁRQUEZ ALEJANDRO",
    "level": "LICENCIATURA",
    "year": "1997"
  },
  {
    "title": "SINTESIS DE HETEROCICLOS ANALOGOS DE AMINOACIDOS",
    "name": "BELTRAN CONDE HIRAM ISAAC",
    "level": "LICENCIATURA",
    "year": "1998"
  },
  {
    "title": "SINTEIS Y EVALUACION BIOQUIMICA Y FARMACOLOGICA DE LA MALEAMIDA DEL ACIDO M-AMINO BENZOICO",
    "name": "CORDOVA MORENO REBECA",
    "level": "MAESTRÍA",
    "year": "1998"
  },
  {
    "title": "SINTESIS Y EVALUACION ANTICOLINESTERASICO DE LAS SUCCINAMIDAS Y SUCCINIMIDAS ACETILADAS DERIVADAS DE AMINOFENOL",
    "name": "MUÑOZ PACHECO VIOLETA",
    "level": "LICENCIATURA",
    "year": "1999"
  },
  {
    "title": "SINTESIS DE COMPUESTOS CON PROBABLE ACTIVIDAD ANTINEOPLASICA Y SU ACOPLAMIENTO CON ANTICUERPOS ANTICELULAS TUMORALES",
    "name": "ZERMEÑO MONROY MARIA DEL CONSUELO",
    "level": "MAESTRÍA",
    "year": "1999"
  },
  {
    "title": "TOXICIDAD AGUDA Y EFECTO HIPOTENSOR DE NO­2, NO­3, L­ARGININA Y OXOBOROLIDINONA DE L­ARGININA MODULADOS POR AZUL DE METILENO",
    "name": "BRAVO AVILA MARTHA ELENA",
    "level": "MAESTRÍA",
    "year": "2001"
  },
  {
    "title": "ACTIVIDAD ANTICOLINESTERASA ex-in-vivo EN CEREBRO DE RATÓN DE DERIVADOS DE AMINOFENOL",
    "name": "ESPINOSA RAYA JUDITH",
    "level": "LICENCIATURA",
    "year": "2001"
  },
  {
    "title": "AMIDAS E IMIDAS CON Y SIN CARBONILO AB INSATURADO, DERIVADAS DEL ACIDO PAMINOBENZOICO, CON ACTIVIDAD ANTICOLINESTERASICA",
    "name": "CORREA BASURTO JOSE",
    "level": "LICENCIATURA",
    "year": "2002"
  },
  {
    "title": "EFECTO ANSIOLITICO Y ANTICONVULSIVANTE DE DIMALEAMIDA DERIADA DEL MABA EN RATONES SWISS WEBSTER EVALUADOS EN EL MODELO DE CONDUCTA EXPLORATORIA DE DOS COMPARTIMENTOS",
    "name": "NAYELLI ORTEGA LOPEZ",
    "level": "LICENCIATURA",
    "year": "2002"
  },
  {
    "title": "SINTESIS, CARACTERIZACION Y EVALUACION BIOQUIMICA DE INHIBIDORES DE ACETILCOLINESTERASA DERIVADOS DEL ACIDO META-AMINOBENZOICO",
    "name": "MONTOYA CANO LETICIA",
    "level": "LICENCIATURA",
    "year": "2002"
  },
  {
    "title": "SINTESIS Y VALORACION ANTICOLINESTERASICA in vitro Y ex vivo DE DERIVADOS DE P-AMINOFENOL",
    "name": "ESPINOSA RAYA JUDITH",
    "level": "MAESTRÍA",
    "year": "2003"
  },
  {
    "title": "SINTESIS Y EVALUACION ANTICOLINESTERASICA IN VITRO DE p-ACETILOXIFENILMALEISOIMIDA",
    "name": "GONZALEZ MAY JUAN MARIO",
    "level": "LICENCIATURA",
    "year": "2003"
  },
  {
    "title": "ACTIVIDAD ANTINEOPLASICA DE CARBONILOS ALFABETA INSATURADOS",
    "name": "GODINEZ VICTORIA MARYCARMEN",
    "level": "LICENCIATURA",
    "year": "2003"
  },
  {
    "title": "Cuantificación directa de radicales libres y glutatión en tejido biológico, perturbado con el ácido 1-5 dimaleimilbenzoico y en función de la edad.",
    "name": "MARIA ELENA LOPEZ NAVARRO",
    "level": "MAESTRÍA",
    "year": "2004"
  },
  {
    "title": "BIOTRANSFORMACIÓN DE ÁCIDO VALPROICO POR CITOCROMO P-450, CIP2B4 Y CIP2C9 INMOVILIZADAS SOBRE MCM-41",
    "name": "ROSALES HERNANDEZ MARTHA C.",
    "level": "MAESTRÍA",
    "year": "2004"
  },
  {
    "title": "SÍNTESIS Y CERNIMIENTO FARMACOLÓGICO DE LA DIFENILBOROXAZOLIDONA DEL ÁCIDO D-ASPÁRTICO",
    "name": "LILIANA CHABOLLA TINAJERO",
    "level": "LICENCIATURA",
    "year": "2004"
  },
  {
    "title": "AMIDAS E IMIDAS DEL ACIDO p-AMINOBENZOICO COMO INHIBIDORES DE LA ACETILCOLINESTERASA EX VIVO",
    "name": "JOSE CORREA BASURTO",
    "level": "MAESTRÍA",
    "year": "2004"
  },
  {
    "title": "SINTESIS Y RELACION ESTRUCTURA-ACTIVIDAD DE ARILIMIDAS SUSTITUIDAS DE ACCION ANTICOLINESTERASA",
    "name": "MELCHOR MACIAS PATRICIA",
    "level": "MAESTRÍA",
    "year": "2005"
  },
  {
    "title": "Síntesis y cernimiento farmacológico de la Difenilboroxazolidona de glicina",
    "name": "ABIMAEL GONZALEZ HERNÁNDEZ",
    "level": "LICENCIATURA",
    "year": "2005"
  },
  {
    "title": "SINTESIS DE ARILMALEAMIDAS Y ARILMALEIMIDAS CON PROBABLE ACTIVIDAD ANTINEOPLASICA",
    "name": "GARCIA MACHORRO JAZMIN",
    "level": "LICENCIATURA",
    "year": "2005"
  },
  {
    "title": "SINTESIS Y CERNIMIENTO FARMACOLÓGICO DEL ÁCIDO 3--[BENZOXAZOIL]-PROPANOICO (ABP)",
    "name": "VICTOR MANUEL MATA BACA",
    "level": "LICENCIATURA",
    "year": "2005"
  },
  {
    "title": "SÍNTESIS Y VALORACIÓN COLINÉRGICA CENTRAL DE SUCCINAMIDA Y SUCCINIMIDA ACETILADA DE ¿-AMINOFENOL",
    "name": "JUDITH ESPINOSA RAYA",
    "level": "DOCTORADO",
    "year": "2006"
  },
  {
    "title": "SÍNTESIS DE AMIDAS E IMIDAS DERIVADAS DE POLIAMINAS Y SU EFECTO EN LA PROLIFERACIÓN CELULAR",
    "name": "PADILLA GARCIA MARIO",
    "level": "MAESTRÍA",
    "year": "2006"
  },
  {
    "title": "SÍNTESIS, CARACTERIZACIÓN Y VALORACIÓN DE LA FARMACOCINÉTICA DEL BORATO DE R-ARILETILAMINA EN CONEJO",
    "name": "ROMERO HUERTA JUAN",
    "level": "MAESTRÍA",
    "year": "2006"
  },
  {
    "title": "SÍNTESIS Y EVALUACIÓN DEL ÁCIDO 2-AMINO-5-CLORO- ACETAMIDOPENTANOICO COMO PROBABLE INHIBIDOR DE LA ORNITINA DESCARBOXILASA",
    "name": "EVA SUGHEY AGUIAR MORENO",
    "level": "MAESTRÍA",
    "year": "2006"
  },
  {
    "title": "SÍNTESIS, CARACTERIZACIÓN Y ACTIVIDAD BIOLÓGICA DE DOS ENANTIÓMEROS DIFENILBOROXAZOLIDONA DEL ÁCIDO GLUTÁMICO",
    "name": "ARAUJO ALVAREZ JUAN MANUEL",
    "level": "DOCTORADO",
    "year": "2006"
  },
  {
    "title": "Cernimiento neurofarmacológico de la Difenilboroxazolidona del ácido L­glutámico",
    "name": "YUNUEN FORTANELL ESTRADA",
    "level": "LICENCIATURA",
    "year": "2006"
  },
  {
    "title": "SÍNTESIS Y RELACIÓN ESTRUCTURA-ACTIVIDAD DE DERIVADOS ARÍLICOS COMO POSIBLES INHIBIDORES DE COLINESTERASAS",
    "name": "CORREA BASURTO JOSE",
    "level": "DOCTORADO",
    "year": "2006"
  },
  {
    "title": "SÍNTESIS Y EVALUACIÓN FARMACOLÓGICA DE BIS-1,4-DIHIDROPIRIDINAS ANÁLOGOS DE NIFEDIPINA",
    "name": "GOMEZ PLIEGO RAQUEL",
    "level": "DOCTORADO",
    "year": "2006"
  },
  {
    "title": "SÍNTESIS, CARACTERIZACIÓN Y AFINIDAD POR DOCKING DE DERIVADOS DEL 1-FENILBENCIMIDAZOL POR LA CICLOOXIGENASA",
    "name": "Gómez Castro Carlos Zepacto",
    "level": "MAESTRÍA",
    "year": "2006"
  },
  {
    "title": "CERNIMIENTO FARMACOLÓGICO DE 2,2-DIFENIL-1,3,2-OXAZABOROLIDIN-5-ONAS, DERIVADAS DE ¿ AMINOÁCIDOS. ALGUNAS DE SUS PROPIEDADES FISICOQUÍMICAS DE IMPORTANCIA BIOLÓGICA",
    "name": "VELASCO BEJARANO BENJAMIN",
    "level": "DOCTORADO",
    "year": "2006"
  },
  {
    "title": "Evaluación del efecto pro-apoptótico de arilmaleimidas y arilmaleimidas en una línea celular de leucemia mieloide crónica",
    "name": "MARYCARMEN GODINEZ VICTORIA",
    "level": "MAESTRÍA",
    "year": "2006"
  },
  {
    "title": "RELACIÓN ENTRE LA ESTRUCTURA QUÍMICA Y LA ACTIVIDAD ANTICOLINESTERASA DE ISOIMIDAS ESTRATÉGICAMENTE SUSTITUIDASAMIDAS E IMIDAS DERIVADAS CON INHIBIDORES DE ACHE",
    "name": "JUAN ALBERTO GUEVARA SALAZAR",
    "level": "MAESTRÍA",
    "year": "2006"
  },
  {
    "title": "CARACTERIZACIÓN QUÍMICA Y FARMACODINÁMICA DE BORATO DE R-ARILETILAMINA, UN AGONISTA SELECTIVO DEL RECEPTOR ADRENÉRGICO BETA 2 CON POTENCIAL APLICACIÓN EN EL TRATAMIENTO DEL ASMA",
    "name": "URSUA SORIANO MARVÍN ANTONIO",
    "level": "LICENCIATURA",
    "year": "2007"
  },
  {
    "title": "BIOTRANSFORMACIÓN DE CUATRO COMPUESTOS DERIVADOS DE ÁCIDO PARA-AMINOBENZOICO A TRAVÉS DE REACCIONES IN VITRO CATALIZADAS POR EL CITOCROMO P-450 DE HÍGADO DE RATA",
    "name": "TAMAY CACH FELICIANO",
    "level": "MAESTRÍA",
    "year": "2007"
  },
  {
    "title": "EVALUACIÓN DE PARA-FENILENDIMALEIMIDA EN LA MUERTE DE CÉLULAS TUMORALES",
    "name": "GARCÍA MACHORRO JAZMÍN",
    "level": "MAESTRÍA",
    "year": "2007"
  },
  {
    "title": "ESTUDIO DE LA ACTIVIDAD CATALÍTICA Y TRANSFERENCIA DE ELECTRONES DE CYP2B4 INMOVILIZADA EN UN MCM-41 CON ALUMINIO Y COBRE",
    "name": "MARTHA C. ROSALES HERNÁNDEZ",
    "level": "DOCTORADO",
    "year": "2007"
  },
  {
    "title": "Análisis de las acciones farmacológicas de las difenilboroxazolidonas de L-Fenilalanina y L-Tirosina en el sistema cardiovascular",
    "name": "ANA CRISTINA VALDERRABANO RAMI",
    "level": "LICENCIATURA",
    "year": "2008"
  },
  {
    "title": "SÌNTESIS Y EVALUACIÒN ANTICOLINESTERÀSICA DE UN COMPUESTO ACETILADO DERIVADO DEL p-AMINOFENOL",
    "name": "IO STEPHANIE ZAMUDIO VEGA",
    "level": "LICENCIATURA",
    "year": "2008"
  },
  {
    "title": "ANÁLISIS DE LAS ACCIONES FARMACOLÓGICAS DE LAS DIFENILBOROXAZOLIDONAS GLICINA Y L-TRIPTÓFANO EN EL SISTEMA CARDIOVASCULAR",
    "name": "ANEL GUADALUPE SÁNCHEZ PORTILLO",
    "level": "LICENCIATURA",
    "year": "2008"
  },
  {
    "title": "Análisis de la acción de las Difenilboroxazolidonas de Glicina y L-Glutámico sobre la conducta agresiva en ratones",
    "name": "ELIZABETH MONDRAGÓN RUIZ",
    "level": "LICENCIATURA",
    "year": "2008"
  },
  {
    "title": "EVALUACIÓN DEL EFECTO ANTIOXIDANTE DEL HIDRURO DE SILICIO EN MODELOS DE HEPATOTOXICIDAD INDUCIDOS POR TETRACLORURO DE CARBONO Y ACETAMINOFEN",
    "name": "MENDIETA WEJEBE JESSICA",
    "level": "DOCTORADO",
    "year": "2008"
  },
  {
    "title": "Síntesis, Caracterización y Evaluación Microbiológica de Compuestos Espiro-β-Lactámicos",
    "name": "Io Stephanie Zamudio Vega",
    "level": "MAESTRÍA",
    "year": "2009"
  },
  {
    "title": "CARACTERIZACIÓN DE LA INHIBICIÓN DE LA ORNITINA DESCARBOXILASA POR LA CLOROACETIL-L-ORNITINA Y SU POSIBLE EFECTO ANTINEOPLÁSICO",
    "name": "MIRIAM MARLENE MEDINA ENRÍQUEZ",
    "level": "MAESTRÍA",
    "year": "2009"
  },
  {
    "title": "Diseño, síntesis y evaluación químico-farmacodinámica de compuestos con acción sobre el receptor beta2-adrenergico",
    "name": "Marvin Antonio Soriano Ursúa",
    "level": "MAESTRÍA",
    "year": "2009"
  },
  {
    "title": "MOLECULAR SIMULATIONS OF THE DYNAMICS AND STABILITY OF TRIOSEPHOSPHATE ISOMERASE FROM PLASMODIUM FALCIPARUM",
    "name": "LENNANE MICHEL ESPINOZA FONSEC",
    "level": "DOCTORADO",
    "year": "2009"
  },
  {
    "title": "RADICALES LIBRES, EXPRESIÓN GÉNICA Y ACTIVIDAD CATALÍTICA DE LA SUPEROXIDO DISMUTASA Y NADPH OXIDASA EN PACIENTES CON DIFERENTES VARIABLES FISIOLÓGICAS DEL SÍNDROME METABÓLICO",
    "name": "LUCIA HERNÁNDEZ AMEZCUA",
    "level": "MAESTRÍA",
    "year": "2009"
  },
  {
    "title": "Evaluación teórica y experimental de una serie de isoindolinas como agentes antitumorales",
    "name": "Cynthia Raquel Trejo Muñoz",
    "level": "MAESTRÍA",
    "year": "2009"
  },
  {
    "title": "Síntesis y estudio teórico de aductos Diels­Alder derivados de los ácidos maleico y fumárico y su actividad biológica sobre la enzima aminotransferasa de GABA",
    "name": "JUAN ALBERTO GUEVARA SALAZAR",
    "level": "DOCTORADO",
    "year": "2010"
  },
  {
    "title": "ANÁLISIS DE LAS ACCIONES FARMACOLÓGICAS DE LAS DIFENILBOROXAZOLIDONAS DE GLICINA Y L­FENILALANINA SOBRE ANILLOS DE AORTA DE RATA",
    "name": "ADRIANA BERENICE MARTÍNEZ OLIV",
    "level": "LICENCIATURA",
    "year": "2010"
  },
  {
    "title": "Análisis de las acciones cardiovasculares de la difenilboroxazolidona de DL­Fenilalanina en rata anestesiada",
    "name": "Nayeri Arreguín Moreno",
    "level": "LICENCIATURA",
    "year": "2010"
  },
  {
    "title": "Análisis farmacológico de las acciones cardiovasculares de la Difenilboroxazolidona de L.­ ornitina en rata",
    "name": "Areli Yadira Marmolejo Zava",
    "level": "LICENCIATURA",
    "year": "2011"
  },
  {
    "title": "SÍNTESIS DE UN ANÁLOGO DE LA l­ORNITINA Y SU EFECTO SOBRE CELULAS NEOPLÁSICAS EN CULTIVO",
    "name": "INDRA VICTORIA VELAZQUEZ ORTIZ",
    "level": "MAESTRÍA",
    "year": "2011"
  },
  {
    "title": "EFECTOS AGUDOS Y CRÓNICOS DE LA CORTICOSTERONA SOBRE INMOVILIDAD DE LA RATA Y LA PRODUCCIÓN DE RADICALES LIBRES EN CREBRO, HÍGADO Y MÚSCULO",
    "name": "VICENTE SANDOVAL HERRERA",
    "level": "DOCTORADO",
    "year": "2011"
  },
  {
    "title": "Diseño, síntesis y evaluación in silico e in vitro del efecto inhibitorio de análogos del ácido glutámico sobre la glutamato racemasa",
    "name": "Tamay Cach Feliciano",
    "level": "DOCTORADO",
    "year": "2012"
  },
  {
    "title": "Evaluación in silico y farmacología de isóstero de benzazoles como inhibidores de triosafosfato isomerasa de trypanosoma cruzi (TcTIM) y su posible aplicación en tripanosomiasis",
    "name": "Cuevas Hernández Roberto Issac",
    "level": "MAESTRÍA",
    "year": "2012"
  },
  {
    "title": "Reconstrucción facial tridimensional forense en Blender",
    "name": "García Cortés Rocío",
    "level": "MAESTRÍA",
    "year": "2012"
  },
  {
    "title": "Síntesis, caracterización química, interacción con el receptor beta 2 adrenérgico y evaluación del efecto relajante de músculo liso de boro­derivados de salbutamol:posibles herramientas terapéuticas en enfermedades respiratorias",
    "name": "Amezcua Gutiérrez Marcos Anton",
    "level": "LICENCIATURA",
    "year": "2012"
  },
  {
    "title": "Análisis de las acciones farmacológicas de la difenilboroxazolidona de D.L triptófano en el sistema cardiovascular, INSTITUTO POLITECNICO NACIONAL / UNIDADES ACADEMICAS DE NIVEL SUPERIOR / ESCUELA NACIONAL DE CIENCIAS BIOLOGICAS / DEPARTAMENTO DE FARMACIA",
    "name": "Irene González Pacheco",
    "level": "LICENCIATURA",
    "year": "2012"
  },
  {
    "title": "Diseño de Boroderivados como Ligandos al Receptor Dopaminérgico D2: Síntesis e Inclusión en Nanopartículas Lípidas para el Tratamiento de Enfermedad de Parkinson",
    "name": "Soriano Ursúa Marvin Antonio",
    "level": "DOCTORADO",
    "year": "2012"
  },
  {
    "title": "Determinación del Efecto Inhibitorio sobre las HDACs y de la Actividad Antitumoral de una Serie de Isoindolinas-­2-­Sustituidas",
    "name": "CYNTHIA RAQUEL TREJO",
    "level": "DOCTORADO",
    "year": "2013"
  },
  {
    "title": "Estudio in vivo del efecto antineoplásico de la N­delta­cloroacetil­L­ornitina en un modelo murino",
    "name": "MIRIAM MARLENE MEDINA ENRÍQUEZ",
    "level": "DOCTORADO",
    "year": "2013"
  },
  {
    "title": "PREPARACIÓN DE NANOPARTÍCULAS LIPÍDICAS Y EVALUACIÓN DE SU EFICIENCIA EN EL TRANSPORTE DE SUSTANCIAS ACTIVAS AL SISTEMA NERVIOSO CENTRAL",
    "name": "DAVID JONATHAN HERNÁNDEZ MOGUE",
    "level": "MAESTRÍA",
    "year": "2013"
  },
  {
    "title": "Inhibición potencial de la ornitina descarboxilasa por nuevos análogos de la ornitina: estudios in silico e in vitro",
    "name": "Brenda Hernández Vázquez",
    "level": "MAESTRÍA",
    "year": "2013"
  },
  {
    "title": "SÍNTESIS, EVALUACIÓN IN SILICO E IN VITRO DE UNA SERIE DE ISOINDOLINAS CON POSIBLE INTERACCIÓN SOBRE EL RECEPTOR BETA2 ­ADRENERGICO",
    "name": "ERIK ANDRADE JORGE",
    "level": "MAESTRÍA",
    "year": "2013"
  },
  {
    "title": "Síntesis y evaluación biológica de Ftalimidas de los ácidos aspárticos (R) y (S) como posibles moduladores del receptor NMDA",
    "name": "ZAYRA ELISA HERNÁNDEZ NÚÑEZ",
    "level": "MAESTRÍA",
    "year": "2014"
  },
  {
    "title": "ISOINDOLINAS Y SUS ANÁLOGOS DE GLICINA COMO MODULADORES DEL RECEPTOR NMDA",
    "name": "NORIS DEL CONSUELO ROS CAMARIL",
    "level": "MAESTRÍA",
    "year": "2014"
  },
  {
    "title": "Diseño, síntesis y evaluación biológica de una serie de esteres derivados de alfa­aminoácidos como agentes antitumorales.",
    "name": "MARCO ANTONIO LÓPEZ GARFIAS",
    "level": "MAESTRÍA",
    "year": "2014"
  },
  {
    "title": "Evaluación de una terapia bi­dirigida en un modelo animal de la Enfermedad de Alzheimer: Nuevos anticolinesterásicos y antagonistas de receptores beta adrenérgicos",
    "name": "FABIOLA JIMENA CIPRES FLORES",
    "level": "LICENCIATURA",
    "year": "2014"
  },
  {
    "title": "Síntesis y perfil toxicologico de nuevos benzotiazoles con potencial actividad tripanocida",
    "name": "SARAÍ MARTINEZ CERÓN",
    "level": "MAESTRÍA",
    "year": "2015"
  },
  {
    "title": "Evaluación de la actividad analgésica de la (o-fenil) - 1.3 isoindolindiona, un análogo de la talidomida, INSTITUTO POLITECNICO NACIONAL / UNIDADES ACADEMICAS DE NIVEL SUPERIOR / ESCUELA NACIONAL DE CIENCIAS BIOLOGICAS / DEPARTAMENTO DE FARMACIA, LICENCIATURA, Ruth Anahí Fragoso Mendoza",
    "name": "RUTH ANAHÍ FRAGOSO MENDOZA",
    "level": "LICENCIATURA",
    "year": "2015"
  },
  {
    "title": "Estudio fitoquímico biodirigido del efecto antitumoral del extracto acetónico de Maximowiczia sonorae S. Wats",
    "name": "Mar Aramí Valdés Huerta",
    "level": "MAESTRÍA",
    "year": "2015"
  },
  {
    "title": "Evaluación de benzazoles como trypanocidas e inhibidores de triosafosfato isomerasa de trypanosoma Cruzl",
    "name": "ROBERTO ISSAC CUEVAS HERNANDEZ",
    "level": "DOCTORADO",
    "year": "2016"
  },
  {
    "title": "ANÁLISIS DE LA ACTIVIDAD FARMACOLÓGICA CENTRAL DE LA (P-FENIL)-ISOINDOLINDIONA Y TALOILGLICINA, DOS ANÁLOGOS DE LA TALIDOMIDA",
    "name": "JONATHAN RODRIGUEZ PEREZ",
    "level": "LICENCIATURA",
    "year": "2016"
  },
  {
    "title": "Evaluación de un probable agente protector de las células p pancreáticas ante el efecto del tratamiento con tacrolimus dirigido al trasplante renal",
    "name": "JULIO CÉSAR QUINTANA PÉREZ",
    "level": "MAESTRÍA",
    "year": "2016"
  },
  {
    "title": "Diseño, síntesis, caracterización y evaluación de arilaminas como ligandos del receptor beta-3 adrenérgico con potencial terapéutico en la obesida",
    "name": "Christian Fernando Hernández M",
    "level": "MAESTRÍA",
    "year": "2016"
  },
  {
    "title": "Evaluación de la inhibición del crecimiento ganglionar de extracto etanólico de las hojas de Annona muricata L., en ratones",
    "name": "VERENICE ITZEL MERLIN LUCAS",
    "level": "MAESTRÍA",
    "year": "2016"
  },
  {
    "title": "Evaluación in silico, in vitro e in vivo de una serie de isoindolinas / dioxoisoindolinas análogas a la dopamina con potencial aplicación en la enfermedad de Parkinson",
    "name": "Erik Andrade Jorge",
    "level": "DOCTORADO",
    "year": "2017"
  },
  {
    "title": "Evaluación in vitro del efecto antiviral de compuestos derivados de Oseltamivir contra el virus de influenza a H1N1",
    "name": "Rocio Maribel Neri Bázan",
    "level": "DOCTORADO",
    "year": "2017"
  },
  {
    "title": "Evaluación de la administración de agonistas y antagonistas de los receptores adrenérgicos ß en un modelo animal con déficit cognitivo",
    "name": "Fabiola Jimena Ciprés Flores",
    "level": "MAESTRÍA",
    "year": "2017"
  },
  {
    "title": "EVALUACIÓN DEL EFECTO ANTICARCINOGÉNICO DE LA ADMINISTRACIÓN CONJUNTA DE QUERCETINA Y DERIVADOS DE ANHÍDRIDO MALEICO",
    "name": "Gabriela Carrasco Torres",
    "level": "MAESTRÍA",
    "year": "2017"
  },
  {
    "title": "Efecto inducido por la administración de un dopa boro derivado en un modelo murino con parkinsonismo",
    "name": "Ana Karen Garcia Avila",
    "level": "LICENCIATURA",
    "year": "2017"
  },
  {
    "title": "Sintesis y evaluación de la actividad antiparkinsoniana de análogos de la dopamina",
    "name": "Ameyali Alvarez Guerra",
    "level": "MAESTRÍA",
    "year": "2018"
  },
  {
    "title": "Rastreo neurofarmacológico de las acciones de tamilidas N-sustituidas con los enantiómeros de los ácidos glutámico y aspártico, en ratón y el pez cebra",
    "name": "Carolina Campos Rodriguez",
    "level": "DOCTORADO",
    "year": "2018"
  },
  {
    "title": "Diseño, síntesis y evaluación de la actividad de boroalinaminas sobre el receptor adrenérgico beta3",
    "name": "Ana Lilia Ocampo Nestor",
    "level": "DOCTORADO",
    "year": "2019"
  },
  {
    "title": "Evaluación de la isonicotinamida como probable protector de células beta en un modelo de daño pancreático in vivo",
    "name": "Rogelio Aguayo Nava",
    "level": "MAESTRÍA",
    "year": "2019"
  },
  {
    "title": "Diseño, estudio in silico, síntesis-caracterización y evaluación de la actividad antineoplásica de derivados oxálicos como inhibidores de la péptido desformilasa",
    "name": "Marcos Morales Santana",
    "level": "MAESTRÍA",
    "year": "2019"
  },
  {
    "title": "Evaluación del efecto antinociceptivo potencial del RTaloil Aspartato en rata",
    "name": "Astrid Pineda Pineda",
    "level": "LICENCIATURA",
    "year": "2019"
  },
  {
    "title": "Estudio de compuestos vinílicos y su potencial acción neoplásica",
    "name": "Mariana Jarquín Martínez",
    "level": "MAESTRÍA",
    "year": "2019"
  },
  {
    "title": "Evaluación in silico e in vitro de una serie de Isoindolinas/dioxoisoindolinas como inhibidores de colinesterasas",
    "name": "Omar Ruiz Maciel",
    "level": "MAESTRÍA",
    "year": "2019"
  },
  {
    "title": "Síntesis, evaluación teórica y antibacteriana de cloromonobactamas derivadas de anilinas para-sustituidas",
    "name": "Jessica Rubí Morán Díaz",
    "level": "MAESTRÍA",
    "year": "2020"
  },
  {
    "title": "Evaluación in silico, in vitro e in vivo de boroxazolidonas derivadas de α-aminoácidos como agentes antihipertensivos",
    "name": "Alina Barquet Nieto",
    "level": "MAESTRÍA",
    "year": "2021"
  },
  {
    "title": "Evaluación de una serie de aril y alquil amidas e imidas con potencial actividad inhibidora de la monoamino oxidasa A",
    "name": "Brenda Anaid Rubio Velázquez",
    "level": "MAESTRÍA",
    "year": "2021"
  }
];

const patents = [
  {
    title: "SÍNTESIS DE UN DERIVADO DEL ÁCIDO 5-AMINOSALICÍLICO CON ACTIVIDAD ANTIOXIDANTE",
    number: "376240",
    date: "2020-10-07",
    status: "OTORGADA",
    summary: "DADA LA CRECIENTE APARICIÓN DE CONDICIONES PATÓLOGICAS DERIVADAS DE LOS DAÑOS POR AGENTES OXIDANTES AL ORGANISMO NOS DIMOS A LA TAREA DE REALIZAR LA SÍNTESIS DE UN DERIVADO DEL ÁCIDO 5-AMINOSALICÍLICO CON ACTIVIDAD ANTIOXIDANTE PARA COADYUVAR A SOLVENTAR ESTA PROBLEMÁTICA",
    authors: "JOSÉ GUADALUPE TRUJILLO FERRARA, JESSICA ELENA MENDIETA WEJEBE, ITZIA IRENE PADILLA MARTÍNEZ, JOSÉ CORREA BASURTO, MARTHA CECILIA ROSALES HERNÁNDEZ, DIANA ALEMÁN GONZÁLEZ DUHART, LETICIA ARACELI RAMÍREZ DURÁN"
  },
  {
    title: "DERIVADO DEL ÁCIDO VALPROICO CON POTENCIAL ACCIÓN ANTINEOPLÁSICA, INHIBIDOR DE LA HISTONA DESACETILASA",
    number: "95618",
    date: "2018-11-12",
    status: "OTORGADA",
    summary: "COMPUESTO ANTICANCEROSO DERIVADO DEL ÁCIDO VALPRÓICO MODULADOR DE HISTONA DESACETILAZA",
    authors: "ITZIA IRENE PADILLA MARTÍNEZ, JOSÉ CORREA BASURTO, JOSÉ GUADALUPE TRUJILLO FERRARA, ISMAEL VÁZQUEZ MOCTEZUMA, JORGE ANTONIO BERMÚDEZ LUGO, OSCAR ALBERTO PÉREZ GONZÁLEZ"
  },
  {
    title: "SYNTHESIS OF ANALOGUES OF Y-AMINO ACIDS AND RESULTING PRODUCTS",
    number: "N/A (Patente Internacional)",
    date: "No Especificada",
    status: "OTORGADA",
    summary: "THE INVENTION RELATES TO A COMPOUND OF FORMULA (SEE FORMULA), SUITABLE FOR USE AS DRUGS IN THE TREATMENT OF CHRONIC NEURODEGENERATIVE DISORDERS OF THE HUNTINGTON'S DISEASE, PARKINSON'S DISEASE AND EPILEPSY TYPE, INTER ALIA. THE INVENTION RELATES TO NOVEL METHODS FOR THE SYNTHESIS OF SAID ANALOGUES AND THE PHARMACEUTICALLY ACCEPTABLE SOLVATES AND SALTS THEREOF.",
    authors: "ERIKA TOVAR GUDIÑO, JOSÉ GUADALUPE TRUJILLO FERRARA, JUAN ALBERTO GUEVARA SALAZAR, MARIO FERNÁNDEZ ZERTUCHE, GUSTAVO URQUIZA BELTRÁN"
  },
  {
    title: "QUERCETINA Y DERIVADOS DE ANHÍDRIDO MALEICO PARA EL TRATAMIENTO DE CARCINOMA HEPATOCELULAR",
    number: "2018008239",
    date: "2018-07-03",
    status: "SOLICITADA EN EXAMEN DE FONDO",
    summary: "LA PRESENTE INVENCIÓN PROPONE UNA ALTERNATIVA TERAPÉUTICA PARA TRATAR EL CARCINOMA HEPATOCELULAR, QUE CONSISTE EN ADMINISTRAR COMPOSICIONES QUE COMPRENDEN DERIVADOS DEL ANHÍDRIDO MALEICO Y QUERCETINA PARA ACTUAR DE MANERA SINÉRGICA EN LA INDUCCIÓN DE APOPTOSIS DE CÉLULAS DE CARCINOMA HEPATOCELULAR MEDIANTE LA MODULACIÓN DEL ESTRÉS OXIDATIVO Y CITOTOXICIDAD. EFECTOS SELECTIVOS SIN AFECTAR CÉLULAS NORMALES.",
    authors: "ERIK ANDRADE JORGE, GABRIELA CARRASCO TORRES, SAÚL VILLA TREVIÑO, VERÓNICA ROCÍO VÁSQUEZ GARZÓN, JOSÉ GUADALUPE TRUJILLO FERRARA"
  },
  {
    title: "SÍNTESIS DE ANÁLOGOS DE GABA-AMINOÁCIDOS Y PRODUCTOS OBTENIDOS",
    number: "20151130",
    date: "2015-05-28",
    status: "SOLICITADA EN EXAMEN DE FONDO",
    summary: "SE REFIERE A PROCESOS PARA LA SÍNTESIS DE COMPUESTOS ALQUILOS AROMÁTICOS C3-C6 CON ÁTOMOS DE HALÓGENO Y CICLICOS C3-C8 SUSTITUIDOS CON HETEROÁTOMOS PARA FINES FARMACOLÓGICOS (O SUS SALES Y SOLVATOS FARMACÉUTICAMENTE ACEPTABLES).",
    authors: "ERIKA TOVAR GARDUÑO, JOSÉ GUADALUPE TRUJILLO FERRARA, JUAN ALBERTO GUEVARA SALAZAR, GUSTAVO URQUIZA BELTRÁN, MARIO FERNÁNDEZ ZERTUCHE"
  }
];

  return (
    <section id="extras" className="section container fade-in">
      <h2 className="section-title">{t('extras', 'title')}</h2>
      <div className="extras-grid">
        <div className="extra-card">
          <div className="extra-icon">🎓</div>
          <h3 className="extra-heading">{t('extras', 'theses')}</h3>
          <p className="extra-desc">{t('extras', 'thesesDesc')}</p>
          <ul className="extra-list">
            
          {language === 'es' ? (
            [...theses].sort((a, b) => parseInt(b.year) - parseInt(a.year)).map((t, idx) => (
              <li key={idx}><strong>{t.level}</strong> ({t.year}) - {t.name}<br/><span style={{fontSize: '0.85em', color: 'var(--text-color)', opacity: 0.8}}>{t.title}</span></li>
            ))
          ) : (
            [...theses].sort((a, b) => parseInt(b.year) - parseInt(a.year)).map((t, idx) => {
              const levelEn = t.level === 'DOCTORADO' ? 'Doctoral' : t.level === 'MAESTRÍA' ? "Master's" : "Bachelor's";
              return (
                <li key={idx}><strong>{levelEn} Thesis</strong> ({t.year}) - {t.name}<br/><span style={{fontSize: '0.85em', color: 'var(--text-color)', opacity: 0.8}}>{t.title}</span></li>
              );
            })
          )}

          </ul>
        </div>
        <div className="extra-card">
          <div className="extra-icon">💡</div>
          <h3 className="extra-heading">{t('extras', 'patents')}</h3>
          <p className="extra-desc">{t('extras', 'patentsDesc')}</p>
          <ul className="extra-list">
            {patents.map((p, idx) => (
              <li key={idx} style={{marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px dashed var(--border-color)'}}>
                <strong style={{color: 'var(--primary-color)'}}>{p.title}</strong>
                <br/>
                <span style={{fontSize: '0.85em', color: 'var(--text-color)', opacity: 0.9}}>
                  <strong>Estado:</strong> {p.status} | <strong>Solicitud:</strong> {p.number} ({p.date})
                </span>
                <br/>
                <span style={{fontSize: '0.85em', color: 'var(--text-color)', opacity: 0.8, fontStyle: 'italic', display: 'block', margin: '0.4rem 0'}}>
                  "{p.summary}"
                </span>
                <span style={{fontSize: '0.8em', color: 'var(--text-color)', opacity: 0.7}}>
                  <strong>Titulares:</strong> {p.authors}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CurriculumExtras;
