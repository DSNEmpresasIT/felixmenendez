import { ProductTypes, type ProductData } from "./types";

export const insecticidasDataMock: ProductData[] = [
  {
    img: 'bifentrim',
    name: 'Bifentrim',
    filters: ['insecticidas'],
    specs: {
      description: 'Acaricida-insecticida que actúa por contacto e ingestión, con muy buen efecto de choque y persistencia. Controla una amplia gama de ácaros e insectos en frutales, vides, hortalizas, cereales, praderas y otros cultivos. Destaca su acción sobre arañitas, polillas, enrolladores, trips, minadores, pulgones, cuncunilla negra y burrito del frambueso, entre otras plagas.',
    }
  },
]

export const fungicidasDataMock: ProductData[] = [
  {
    img: 'azoxypro',
    name: 'Azoxypro',
    filters: ['fungicidas'],
    specs: {
      description: 'Es un fungicida de acción sistémica y de contacto. Presenta una alta persistencia y rápida acción, gracias a la acción combinada de la azoxistrobina (acción preventiva y antiesporulante) y el ciproconazole (efecto CURATIVO y erradicante).',
    }
  },
  {
    img: 'dithanent80wp',
    name: 'Dithane NT 80 WP',
    filters: ['fungicidas'],
    specs: {
      description: 'Fungicida-Ditiocarbamato. Mancozeb. Preventivo de contacto que inhibe el desarrollo del tubo germinativo de la espora del hongo. Bloquea los procesos enzimáticos.',
    }
  }
]

export const hermicidasDataMock:ProductData[] = [
  {
    img: 'fipronilfender',
    name: 'Fipronil Fender',
    filters: ['hermicidas'],
    specs: {
      description: 'Insecticida que actúa por contacto e ingestión. Es persistente en el suelo por su baja solubilidad, prolongando así el control sobre insectos perforadores, chupadores y masticadores. Trabaja sobre el sistema nervioso de los insectos, causando bloqueo sobre el ácido gamma amino butírico (GABA) responsable de la transferencia de los impulsos nerviosos.',      
    }
  },
  {
    img: 'myrmec',
    name: 'Myrmec',
    filters: ['hermicidas'],
    specs: {
      description: 'MYRMEC es un insecticida hormiguicida de contacto e ingestión formulado en cebo pellets. Posee poder atractivo lo que determina que las hormigas tomen los pellets, llevándolos al interior del hormiguero.',      
    }
  },
]

export const db: ProductData[] = [
  {
    name: 'Urea Granulada',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_GRANULADOS],
    formulacion: '46-0-0',
    specs: {
      description: `
      La urea granulada es un fertilizante que suministra nitrógeno a la tierra para 
      incrementar su productividad123
      . Es el fertilizante más concentrado en nitrógeno 
      (46%) y normalmente, el más económico en el mercado3. Se aplica a todos los 
      cultivos1
      . El fertilizante urea enriquece el suelo con nitrógeno para promover el 
      desarrollo de las hojas verdes de las plantas y hacer que el follaje sea más 
      frondoso2.
      `,
    }
  },
  {
    name: 'Fosfato Monoamonico',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_GRANULADOS],
    formulacion: '0-0-22-11Mg-22s',
    specs: {
      description: `
      El fosfato monoamónico (MAP) es una sal de fosfato de amonio soluble en 
      agua que se utiliza como fertilizante agrícola12345
      . Proporciona nitrógeno y 
      fósforo a las plantas en una forma utilizable1
      . También se utiliza como 
      componente del polvo ABC en algunos extintores de incendios1
      . El fosfato 
      monoamónico es completamente soluble en agua y es una fuente eficiente de 
      fósforo y nitrógeno para las plantas2
      . Es una materia prima ideal para 
      fertilizantes compuestos NP3
      . El fosfato monoamónico es menos agresivo con 
      las semillas durante el proceso de germinación y sobre plántulas recién 
      trasplantadas5.
      `
    }
  },
  {
    name: 'Fosfato Diamonico',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_GRANULADOS],
    formulacion:'18-46-0',
    specs: {
      description: `
        El Fosfato Diamónico (DAP) es un fertilizante complejo que asegura la nutrición 
        en fósforo durante todo el ciclo de crecimiento y desarrollo del cultivo123
        . 
        También proporciona una dosis inicial de nitrógeno (forma amoniacal) y una 
        ligera dosis de azufre1
        . El azufre que contiene también contribuye a una mejor 
        absorción del nitrógeno y fósforo por las raíces de las plantas1
        . El DAP es 
        utilizado como nutriente de la levadura en la elaboración del vino, aguamiel y 
        cerveza4
        . También es utilizado como atrayente alimenticio en el trampeo de la 
        mosca del olivo (Bractocera oleae) para su monitoreo o para su trampeo 
        masivo como medida de control4.
      `
    }
  },
  {
    name: '15-6-16-6 Consulp',
    isActiveSubstance: true,
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_GRANULADOS]
  },
  {
    name: '15-15-15',
    isActiveSubstance: true,
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_GRANULADOS], 
    specs: {
      description: `
      El 15-15-15 es un fertilizante especialmente diseñado para su 
      empleo en jardines, invernáculos, cultivos y huertas en granel. 
      Su alto contenido de nutrientes acelera el crecimiento de las 
      plantas y arbustos, proporcionándoles los elementos 
      fertilizantes que estos necesitan para su normal desarrollo.
      `
    }
  },
  {
    name: 'Nitrato Doble',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_GRANULADOS], 
    specs: {
      description: `
      Nitrato doble (27-0-0 + 6% CaO + 4% Mg) es el 
      fertilizante nitrogenado más eficiente. Por contener nitrógeno 
      en forma de nitrato de amonio brinda una rápida respuesta por 
      parte del cultivo y minimiza las pérdidas por volatilización, 
      asegurando el máximo aprovechamiento del nitrógeno.
      Composición
      Nitrógeno (N) 15%
      fósforo (P2O5 ) 15%
      Azufre (S) 3%
      Calcio (CaO) 6%.
      Asegura un suministro de nutrientes inmediatamente 
      disponible para el cultivo.
      `
    }
  },
  {
    name: '15-6-16-6 Nitro Doble',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_GRANULADOS], 
    specs: {
      description: `
      15-6-16-6 Nitro Doble Por contener nitrógeno en forma de nitrato 
      de amonio brinda una rápida respuesta por parte del cultivo y 
      minimiza las pérdidas por volatilización, asegurando el máximo 
      aprovechamiento del nitrógeno.
      `
    }
  },
  {
    name: '7-30-20 Arrocera',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_GRANULADOS]
  },
  {
    name: 'Cloruro de Potasio',
    formulacion: '0-0-60',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_GRANULADOS]
  },
  {
    name: 'Harvest More Micro Granulados',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_GRANULADOS], 
    specs: {
      description: `
      Harvest More Micro Granulados Presenta una fórmula balanceada de 
      alto análisis de Nitrógeno, Fósforo y Potasio, contiene además 
      todos los micronutrientes necesarios para la adecuada 
      nutrición de los cultivos; 100% soluble en agua, es ideal para 
      ser aplicado vía foliar o a través de sistemas de riego 
      tecnificado, en todo tipo de suelo y cultivos tanto anuales como 
      perennes, hortícola, frutales y otros, así como para plantas de 
      invernadero y ornamentales.
      `
    }
  },
  {
    name: 'Nitrato de Calcio',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_SOLUBLES], 
    formulacion: '15-0-0-0-0-19Ca',
    specs: {
      description: `
      Nitrato de Calcio El Nitrato de Calcio es un fertilizante sólido 100% soluble en 
      agua1
      . Es el fertilizante más usado como fuente de Calcio, aporta 24.88% de 
      CaO y 15.14% de Nitrógeno1
      . Tiene una gran solubilidad, se puede disolver 
      hasta 1,100 gramos por litro de agua, lo que lo hace ideal para fertirriego1
      . 
      También se le conoce como Norgessalpeter o nitrato de cal de Noruega2
      . Es 
      una sal incolora que absorbe la humedad del aire y se utiliza principalmente 
      como componente de fertilizantes2.
      `
    }
  },
  {
    name: 'Nitrito de Potasio',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_SOLUBLES], 
    formulacion: '13-0-44',
    specs: {
      description: `
      El nitrato de potasio es una fuente de potasio ideal para la fertirrigación de los 
      árboles frutales, los cultivos, las flores y las hortalizas1
      . Es una fuente soluble 
      de 2 nutrientes esenciales de gran importancia2
      . El fertilizante sólido NKS es
      100% soluble en agua, con una concentración de 13% de Nitrógeno en forma 
      nítrica y 45% de Potasio, además contiene un 3% de Azufre. Es ideal como 
      fuente de potasio en etapas de llenado3.
      `
    }
  },
  {
    name: 'Cloruro de Potasio',
    formulacion: '0-0-60',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_SOLUBLES]
  },
  {
    name: 'Sulfato de Magnesio',
    formulacion: 'S 19 % - Mn 31 %',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_SOLUBLES], 
    specs: {
      description: `
      El sulfato de magnesio es un fertilizante que contiene magnesio y azufre, que 
      son elementos necesarios para el crecimiento de las plantas1234
      . Se utiliza 
      principalmente en la agricultura intensiva y en suelos neutros o ligeramente 
      ácidos2
      . Se dice que mejora el color, la fuerza y la salud de las plantas, así como 
      la calidad de los frutos3
      . Se presenta en forma de cristales o granulados 
      solubles y de rápida asimilación14
      . Hay que tener cuidado de no exceder las 
      necesidades de azufre del cultivo para no crear un exceso1.
      `
    }
  },
  {
    name: 'Sulfato de Amonio Cristalino',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_SOLUBLES], 
    formulacion: '21-0-0-24',
    specs: {
      description: `
      El sulfato de amonio es un fertilizante químico que satisface los 
      requerimientos de nitrógeno de las plantas y que también ayuda en la 
      absorción de otros nutrientes como el fósforo y potasio debido al azufre de 
      rápida asimilación que contiene1
      . Se produce a partir del amoniaco y el sulfato 
      de calcio2
      . El sulfato de amonio es una sal formada por reacción entre 
      amoníaco y ácido sulfúrico, utilizado en cultivos extensivos como intensivos3
      . El 
      SAM hace un aporte balanceado de ambos nutrientes, nitrógeno y azufre, lo que 
      lo hace muy útil como fertilizante4.
      `
    }
  },
  {
    name: 'Sulfato de Potasio',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_SOLUBLES], 
    formulacion: '0-0-52-18s',
    specs: {
      description: `
      El sulfato de potasio estandar es un fertilizante sólido 100% soluble en agua12
      . Contiene una concentración de Potasio del 51% y de Azufre al 18% con una 
      pureza del 99%12
      . Es ideal para aportar Potasio sin aplicar Nitrógeno y en 
      cultivos sensibles al Cloro1
      . Es una fuente de Potasio en forma de sulfato 
      extraído directamente de mina en presentación de cristales para ser incluido en 
      los programas de nutrición de cultivos3
      . Es un producto no apto para uso en 
      fertirriego y su ventaja es que es libre de cloro (Cl)
      `
    }
  },
  {
    name: 'Harvest More',
    formulacion: '5--5--45',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_SOLUBLES],

  },
  {
    img: 'masterminsplus',
    name: 'Mastermins Plus',
    formulacion: '3N-17P-5K-1Mg-2S-1Zn',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
    specs: {
      description: 'Es un fertilizante líquido, de aplicación foliar que contiene macro y micronutrientes y es apto en todos los cultivos. Nutren la planta en forma equilibrada. Es rápidamente absorbido por las hojas, ramas y raíces. Es líquido, facilitando la preparación del caldo y su aplicación. Mejora la acción de los plaguicidas aplicados en conjunto. Mayor número de frutos por plantas.',
    }
  },
  {
    img: 'nitroplus18',
    name: 'Nitro Plus 18',
    formulacion: '18 % N',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
    specs: {
      description: 'Es un fertilizante que contiene una exclusiva combinación de nitrógeno amínico y calcio, totalmente solubles en agua. Esta asociación maximiza el aprovechamiento de estos nutrientes por la planta. Nitroplus 18 es un complejo que promueve la reducción de estrés en la planta, mejorando la uniformidad del producto cosechado, reduciendo las enfermedades e incrementando la calidad y rentabilidad.',
    }
  },
  {
    name: 'Estimulante marca Stoller',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
    specs: {
      description: `
      Promueve un adecuado equilibrio 
      hormonal. Mejora la germinación y crecimiento inicial del 
      cultivo. Estimula el desarrollo del sistema radicular, 
      incrementando la absorción de agua y nutrientes. Mejora el 
      comportamiento ante situaciones de estrés. Incrementa la 
      retención y el crecimiento de flores y frutos
      `,
    }
  },
  {
    img: 'nutriminssemilla',
    name: 'Nutrimins Semilla',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
    specs: {
      description: 'Es un Bioestigulador de crecimiento para tratamiento de semilla en gramíneas, formulado con un balance hormonal más Zinc quelatado y Azufre. Los cofactores de crecimiento estimulan una rápida germinación, uniformidad de plántulas, un rápido y vigoroso desarrollo radicular asegurando un stand de plantas adecuado.',
    }
  },
  {
    img: 'bioforgeadvance',
    name: 'Bio Forge',
    formulacion: '2 % N-2,5 P',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
    specs: {
      description: `Fertilizante líquido con una combinación exclusiva de nitrógeno, potasio, cobalto y molibdeno, para el manejo de estrés abiótico durante todo el ciclo de cultivo. Su formulación renovada posee mayor concentración de cofactores de crecimiento que estimulan una rápida recuperación del cultivo en momentos críticos. A su vez, aporta nitrógeno a través de una fuente de alta eficiencia, lo cual favorece el proceso de recuperación.
      Promueve un adecuado equilibrio 
      hormonal. Mejora la germinación y crecimiento inicial del 
      cultivo. Estimula el desarrollo del sistema radicular, 
      incrementando la absorción de agua y nutrientes. Mejora el 
      comportamiento ante situaciones de estrés. Incrementa la 
      retención y el crecimiento de flores y frutos.
      `,
    }
  },
  {
    name: 'Fosfito Potasico',
    formulacion: 'urea + boro',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
    specs: {
      description: `El fosfito de potasio es una sal blanca soluble en agua que se usa como 
      fungicida1
      . Es una mezcla de fósforo y potasio, con una alta concentración de 
      ambos elementos2
      . Su fórmula química es K3PO3 y es un tipo de oxisal3
      . El 
      fosfito de potasio estimula la defensa natural de las plantas al ser absorbido 
      como fosfato inorgánico14.
      `,
    }
  },
  {
    name: 'Stoller Magnesio',
    formulacion: '4 % Mg - 2 % S',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
    specs: {
      description: `
      Es un fertilizante líquido quelatado, que contiene 4 % de Magnesio y 3 % de 
      Azufre. Indicado para la fertilización de Magnesio en todos los cultivos.
      Stoller Magnesio es absorbido por las hojas, por el tejido leñoso y por los 
      frutos, la parte de la pulverización que cae en el suelo es aprovechado por 
      las raíces
      `,
    }
  },
  {
    name: 'Calcio Boro',
    formulacion: ' 8 % Ca - 0,5 % Bo',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
    specs: {
      description: `
        Promueve una sinergia en la planta que favorece la estructura de la 
        pared celular de las plantas.
        • El boro colabora con la movilidad del calcio en la planta.
        • La deficiencia de alguno de ellos afecta la concentración del otro.
        El nitrato de calcio + boro es un fertilizante rico en calcio y nitrógeno2
        . El calcio 
        es fundamental para darle firmeza a las estructuras de la planta y al fruto. El 
        boro actúa en conjunto con el calcio dando firmeza y elasticidad a las células2.
      `,
    }
  },
  {
    name: 'Stoller Hierro',
    formulacion: '10 % Bo',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
    specs: {
      description: `
        Stoller Hierro La línea STOLLER® corresponde a fertilizantes 
        líquidos indicados para aplicaciones foliares en todos los 
        cultivos, aportando los nutrientes de forma eficiente y rápida, 
        quedando disponibles para la planta de forma inmediata. 1 
        Litros. 10 Litros. 20 Litros.
      `,
    }
  },
  {
    name: 'Starte Plus',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
    specs: {
      description: `
        Starter Plus es un fertilizante foliar, líquido quelatado, indicado 
        para la nutrición mineral con la finalidad de producir un 
        equilibrio de nutrientes en la planta.
      `,
    }
  },
  {
    name: 'Fosfito de Calcio',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
    specs: {
      description: `
        Es una fuente soluble de Fósforo y Calcio de 
        rápida asimilación, imprimiendo en las plantas con estos 
        elementos, las defensas naturales de las plantas al ataque de 
        enfermedades.
      `,
    }
  },
  {
    name: 'Stoller Zinc',
    formulacion: '7 % Zn - 3 % S',
    filters: [ProductTypes.FERTILIZANTES_LIQUIDOS],
    specs: {
      description: `
        Stoller® Zinc es un fertilizante quelatado, indicado para el 
        suministro de zinc en la mayoría de los cultivos. Stoller Zinc 
        aporta el nutriente en forma muy eficiente y rápida. Es 
        absorbido por las hojas, tejidos leñosos y frutos la parte de 
        pulverización que cae al suelo puede ser aprovechada por las 
        raíces.
      `,
    }
  },
  {
    name: 'Toprice PN Nuro Arno',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true, //[ProductTypes.FERTILIZANTES_LIQUIDOS, ProductTypes.FERTILIZANTES_LIQUIDOS_HERBICIDAS],
    formulacion: 'Imazapir 48 % + Imazapic 70%',
    specs: {
      description: `
        TOP RICE es un herbicida con acción residual, para aplicación 
        secuencial en pre-emergencia y post-emergencia temprana, 
        indicado para cultivos de arroz tolerante a las imidazolinonas, 
        por ejemplo las variedades Puitá INTA CL, Tuno CL y CL 161. El 
        producto está recomendado cuando existe invasión de malezas 
        susceptibles, gramíneas, ciperáceas y latifoliadas, tanto 
        anuales como perennes, que afectan al cultivo. Debido a su 
        actividad residual, controla malezas que nacen después de la 
        aplicación, una vez que ha sido incorporado al suelo por 
        precitaciones adecuadas. Su acción herbicida, especialmente 
        contra arroz colorado, se complementa con la inundación 
        temprana del cultivo.
      `,
    }
  },
  {
    img: 'claron',
    name: 'Claron',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true, //[ProductTypes.FERTILIZANTES_LIQUIDOS, ProductTypes.FERTILIZANTES_LIQUIDOS_HERBICIDAS],
    formulacion: 'Bentazon 60 %',
    specs: {
      description: 'Es un herbicida post-emergente, para el control de gramíneas, con acción sistémica y selectiva para cultivos de arroz de inundación y secano. Se absorbe rápidamente a través del follaje y se transloca a los tejidos meristemáticos de la planta donde ejerce su acción herbicida. La detención del crecimiento de las malezas comienza a las pocas horas de la aplicación. A los pocos días se observan: clorosis en las hojas y tallos, coloración que va del rojo al morado y necrosis en los puntos de crecimiento.',
      features: {
        activeSkill: 'Cyhalofop-butil 18%',
        action: 'Sistémico',
        applicationMethod: 'Inhibidor de la enzaima ACCasa. Grupo A.',
        dosage: '1,5 a 2 L/ha.',
        usageRecommendations: "Aplicar cuando las gramíneas están en activo crecimiento, las mismas deben tener entre 3 hojas verdaderas y 1 a 2 macollos. Para un control más efectivo, se debe proceder a inundar definitivamente el cultivo a las 24 horas posteriores a la aplicación del producto.", 
        malezas: 'Capín',
        cultivos: "Arroz",
        pdfFiles: {
          flyer: true,
          marbete: true,
          securityDataPaper: true,
        }
      }
    }
  },
  {
    name: 'Clomazone Upstage',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true, //[ProductTypes.FERTILIZANTES_LIQUIDOS, ProductTypes.FERTILIZANTES_LIQUIDOS_HERBICIDAS],
    specs: {
      description: `
        Descripción Definición Herbicida preemergente selectivo para los cultivos de soja, maní, arroz, y 
        tabaco con prolongada acción residual. Tiene la ventaja de 
        requerir una mínima humedad para ser activado en el suelo.
      `,
    }
  },
  {
    name: 'Ectran-Ectran Plus',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true, //[ProductTypes.FERTILIZANTES_LIQUIDOS, ProductTypes.FERTILIZANTES_LIQUIDOS_HERBICIDAS],
    specs: {
      description: `
        ECTRAN PLUS es un herbicida de amplio espectro, que 
        combina bispiribac sodio y quinclorac, dos principios activos 
        con mecanismos de acción diferentes, indicado especialmente 
        para el control de Capín (Echinochloa sp) resistente a 
        herbicidas inhibidores de la ALS, como así también de otras 
        malezas gramíneas, latifoliadas y ciperáceas, en postemergencia temprana del cultivo de arroz. Por su poder 
        residual, controla malezas que germinan después de la 
        aplicación
      `,
    }
  },
  {
    name: 'Facet',
    filters: [ProductTypes.HERBICIDAS],//[ProductTypes.FERTILIZANTES_LIQUIDOS, ProductTypes.FERTILIZANTES_LIQUIDOS_HERBICIDAS],
    isActiveSubstance: true,
    formulacion: 'Quinclorac 25%', 
    specs: {
      description: `
        GENERALIDADES: Fertilizante en polvo para aplicación 
        foliar. Compuesto por elementos de fácil y rápida disolución en 
        agua. Fórmula balanceada con macro y micronutrientes, ideal 
        para corregir deficiencias en forma instantánea. Contiene 
        nutrientes esenciales que favorecen el crecimiento de los 
        vegetales mejorando los rendimientos y la calidad de 
        producción. Aporta micronutrientes quelatados de fácil 
        asimilación. Puede ser aplicado en cultivos extensivos, frutales    
        y hortalizas. Se recomienda realizar de 1 a 2 aplicaciones de 
        acuerdo a la fertilidad del suelo y requerimientos del cultivo.
      `,
    }
  },
  {
    name: 'Aura',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true, //[ProductTypes.FERTILIZANTES_LIQUIDOS, ProductTypes.FERTILIZANTES_LIQUIDOS_HERBICIDAS],
    formulacion: 'Profoxidin 20%',
    specs: {
      description: `
        es un herbicida de postemergencia con acción sistémica, selectivo para el 
        cultivo de arroz, indicado para el control de malezas gramíneas. No controla 
        malezas de hoja ancha ni Ciperáceas. Aura es absorbido rápidamente por vía 
        foliar y trasladado hacia los tejidos meristemáticos donde ejerce su acción, 
        inhibiendo la biosíntesis de los ácidos grasos y de los lípidos, bloqueando la 
        formación y funcionamiento de la membrana celular. Aura debe ser aplicado 
        con el coadyuvante Dash HC al 0,5 % (500 cm3/100 l caldo de pulverización). Para 
        una correcta actividad de Aura es importante que el suelo tenga buena 
        humedad y malezas gramíneas en activo crecimiento. No aplicar Aura en 
        condiciones de suelo seco. Aplicar Aura con el cultivo de arroz a partir de la 
        cuarta hoja y en activo crecimiento. Aura es absorbido dentro de las dos 
        primeras horas de aplicación. Lluvias posteriores no afectan su control. Aura es 
        degradado a metabolitos no tóxicos, no deja residuos en el suelo ni agua 
        facilitando la rotación de cultivos. Tiene muy bajo impacto ambiental. En 
        algunos casos se han observado manchas cloróticas en las hojas del arroz luego 
        de la aplicación de Aura, donde las mismas desaparecen al poco tiempo de la 
        aplicación, no afectando el rendimiento.
      `,
    }
  },
  {
    name: 'Loyant',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true, //[ProductTypes.FERTILIZANTES_LIQUIDOS, ProductTypes.FERTILIZANTES_LIQUIDOS_HERBICIDAS],
    specs: {
      description: `
      es un herbicida de postemergencia con acción sistémica, selectivo para el 
      cultivo de arroz, indicado para el control de malezas gramíneas. No controla 
      malezas de hoja ancha ni Ciperáceas. Aura es absorbido rápidamente por vía 
      foliar y trasladado hacia los tejidos meristemáticos donde ejerce su acción, 
      inhibiendo la biosíntesis de los ácidos grasos y de los lípidos, bloqueando la 
      formación y funcionamiento de la membrana celular. Aura debe ser aplicado 
      con el coadyuvante Dash HC al 0,5 % (500 cm3/100 l caldo de pulverización). Para 
      una correcta actividad de Aura es importante que el suelo tenga buena 
      humedad y malezas gramíneas en activo crecimiento. No aplicar Aura en 
      condiciones de suelo seco. Aplicar Aura con el cultivo de arroz a partir de la 
      cuarta hoja y en activo crecimiento. Aura es absorbido dentro de las dos 
      primeras horas de aplicación. Lluvias posteriores no afectan su control. Aura es 
      degradado a metabolitos no tóxicos, no deja residuos en el suelo ni agua 
      facilitando la rotación de cultivos. Tiene muy bajo impacto ambiental. En 
      algunos casos se han observado manchas cloróticas en las hojas del arroz luego 
      de la aplicación de Aura, donde las mismas desaparecen al poco tiempo de la 
      aplicación, no afectando el rendimiento.
      `,
    }
  },
  {
    name: 'Xeyelo',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true, //[ProductTypes.FERTILIZANTES_LIQUIDOS, ProductTypes.FERTILIZANTES_LIQUIDOS_HERBICIDAS],
    specs: {
      description: `
      Xeyelo es una marca de fertilizantes biológicos que se dedica a la fabricación 
      de productos formulados con organismos vivos que se utilizan para favorecer 
      la nutrición de las plantas.
      `,
    }
  },
  {
    img: 'preside',
    name: 'Preside',
    isActiveSubstance: true,
    formulacion: 'Propanil 48%',
    filters: [ProductTypes.HERBICIDAS],
    specs: {
      description: 'Preside es un herbicida selectivo para el control de malezas de hoja ancha en semilleros y pasturas de alfalfa, trébol blanco, trébol rojo, lotus (corniculatus, tenuis y subbiflorus), melilotus y achicoria tanto puras como consociadas con cereales y gramíneas forrajeras (avena, trigo, cebadilla criolla, falaris, pasto ovillo, raigrás anual y perenne, agropiro, festuca, entre otras).',
    }
  },
  {
    name: 'Mulan',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true,
    specs: {
      description: `
        Mulan ® Herbicida a base de prosulfocarb perteneciente a la 
        familia química de los tiocarbamatos para aplicación en pre y 
        postemergencia temprana. Es absorbido por raíces, hojas y 
        semillas de las malas hierbas cuando éstas germinan siendo 
        traslocado a través de la planta.
      `,
    }
  },
  {
    img: 'mulan48',
    name: 'Mulan 48',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true,
    specs: {
      description: 'Herbicida residual y selectivo para el control de malezas de hoja ancha. A base de Flumetsulam más concentrado del mercado. Exclusiva formulación compatible con glifosato líquido y granulado. Absorción foliar y radical, con rápida translocación vía xilema y floema, acumulándose en las regiones meristemáticas. Las malezas detienen rápidamente el crecimiento, dado que trabaja en las zonas meristemáticas. Herbicida banda verde. Más amigable con el medio ambiente.',
    }
  },
  {
    name: 'Spider',
    filters: [ProductTypes.HERBICIDAS],
    formulacion: 'Diclosulam 84%',
    isActiveSubstance: true,
  },
  {
    name: 'Picloran 24 sigma-nova',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true,
  },
  {
    name: 'Tordon D30',
    filters: [ProductTypes.HERBICIDAS],
    formulacion: '2,4 D 24 % + Picloran 6,41 %',
    isActiveSubstance: true,
    specs: {
      description: `
      Tordon* D30 es un herbicida sistémico de aplicación foliar en 
      cobertura total o dirigida. Controla malezas herbáceas, 
      semileñosas y leñosas de bajo porte en renovales, con 
      excelente selectividad para gramíneas forrajeras naturales e 
      implantadas. Unico producto para aplicaciones foliares.
      `,
    }
  },
  {
    name: 'Starane Extra',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true,
    formulacion: 'Fluroxyfyr',
    specs: {
      description: `
        Alta selectividad en cereales. Total eficacia en 
        malezas tolerantes. Malezas latifoliadas Recomendado para el 
        control de malezas latifoliadas en barbecho químico y en 
        aplicaciones en postemergencia en cultivos de cereales como 
        trigo, cebada y demás cereales de invierno.
      `,
    }
  },
  {
    name: 'Atrazina WG 90',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true,
    formulacion: 'Atrazina 90%',
    specs: {
      description: `
        Es absorbido principalmente a través de las raíces 
        y también por las hojas de las malezas. La calidad de la 
        formulación WG de Atrazina garantiza una gran efectividad 
        herbicida, una optima disolución en el caldo de aplicación y 
        permite las mezclas clásicas con Acierto o Metolagan para 
        ampliar el espectro de control en Maíz.
      `,
    }
  },
  {
    name: 'Galan HL',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true,
    formulacion: 'Haloxifop metil 54%',
    specs: {
      description: `
        Galant® HL es un herbicida postemergente, sistémico, selectivo para cultivos de 
        soja, maní, poroto y algodón, que controla malezas gramíneas perennes y 
        anuales. Por su capacidad de penetración y translocación, elimina la 
        competencia de las malezas inmediatamente después de ser aplicado.
      `,
    }
  },
  {
    name: '2,4 D Colina Ellist',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true,
    specs: {
      description: `
        2,4 D Colina Ellist La sal colina del ácido 2,4-D penetra en las 
        malezas fundamentalmente a través del follaje. Una vez 
        absorbido, se transloca hasta las regiones meristemáticas, 
        donde ejerce su acción herbicida. El 2,4-D actúa como un 
        regulador de crecimiento, imitando la presencia de auxinas 
        naturales en el vegetal.
      `,
    }
  },
  {
    name: 'Cletodin sigma-nova',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true,
    specs: {
      description: `
        CLETODIM SIGMA es un herbicida selectivo postemergente sistémico, para el control de 
        malezas gramíneas anuales y perennes. No controla malezas de hoja ancha ni ciperáceas. Es 
        absorbido rápidamente por el follaje y se trasloca por floema y xilema, acumulándose en las 
        regiones meristemáticas de las hojas, tallos y raíces; provocando una rápida detención del 
        crecimiento de las malezas. En 3-4 días se produce una clorosis de las malezas y la muerte de 
        los tejidos meristemáticos. A continuación se destruyen los tejidos, aparece una coloración 
        rojiza a morada y finalmente ocurre la muerte de las malezas. La acción total demora entre 7-
        14 días.
      `,
    }
  },
  {
    img:'pastar',
    name: 'Pastar',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true,
    formulacion: 'Aminopiralit + Fluroxypir',
    specs: {
      description: 'Pastar® es un nuevo herbicida sistémico para aplicaciones foliares de cobertura total para el control de malezas arbustivas y semiarbustivas en pasturas, con excelente selectividad en gramíneas forrajeras.',
    }
  },
  {
    name: 'Koltar',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true,
    formulacion: 'Oxifluorfen 24%',
    specs: {
      description: `
        Koltar® EC es un herbicida indicado para el control pre y post￾emergente de malezas latifoliadas y gramíneas en diversos cultivos. 
        De acuerdo con los mismos y el manejo del producto, podrá ser 
        selectivo o no (ver recomendaciones de uso). Actúa únicamente por 
        contacto sobre el follaje de las malezas de hasta 3 cm de desarrollo.
        No tiene ningún efecto sobre los tejidos de la raíz. Mata las malezas 
        dañando sus órganos aéreos. No es sistémico. No se transloca. 
        Además de su acción directa sobre las plántulas de las malezas, el 
        herbicida que llega al suelo, forma una barrera químico-residual en la 
        superficie del suelo, que daña y provoca la muerte de las nuevas 
        malezas que van naciendo.
      `,
    }
  },
  {
    name: 'Paraquat',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true,
    formulacion: 'Parquat 27,6%',
    specs: {
      description: `
        PARAQUAT SIGMA es un herbicida que actúa en todos los 
        tejidos vegetales verdes, y es particularmente activo contra 
        gramíneas anuales y malezas de hoja ancha. Necesita de la 
        fotosíntesis activa para manifiesta su efecto herbicida, que se 
        caracteriza por el colapso de la estructura celular y la 
        desecación.
          `,
    }
  },
  {
    name: 'Flumioxazim',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true,
    specs: {
      description: `
        Flumioxazin es un activo muy versátil e interesante, ya que presenta registro de 
        uso en muchos cultivos, tanto regionales como extensivos. “Algunas de sus 
        características principales que permiten su flexibilidad en su uso, su baja vida 
        media, sus bajas restricciones en cuanto al sistema de rotación de los lotes, su 
        amplio espectro de control y la residualidad que brinda al manejo de malezas”
      `,
    }
  },
  {
    name: 'Heat',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true,
    formulacion: 'Saxuflenazim',
    specs: {
      description: `
        Los atributos de Heat® son: Control de malezas difíciles de 
        hoja ancha, con excelente compatibilidad con glifosato. 
        Contundente y rápido control de malezas de hoja ancha. 
        Excelente herramienta para el manejo anti-resistencia de 
        malezas de hoja ancha.
      `,
    }
  },
  {
    name: '2,4DB Adama-Atanor',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true,
    specs: {
      description: `
        2,4DB Adama-Atanor 2,4DB es un herbicida indicado para el control de 
        malezas de hoja ancha en cultivos y praderas consociadas formadas 
        por leguminosas. Relacionado con el 2,4-D pero mucho menos activo. 
        Bajo la acción de ciertas sustancias, se transforma en 2,4-D en las 
        plantas.
      `,
    }
  },
  {
    name: 'Ricer',
    filters: [ProductTypes.HERBICIDAS],
    isActiveSubstance: true,
    formulacion: '46-0-0',
    specs: {
      description: `
        Ricer® es un herbicida sistémico y selectivo, de aplicación postemergente, que 
        controla malezas gramíneas, latifoliadas y ciperáceas en el cultivo de arroz. Las 
        malezas tratadas detienen su crecimiento casi inmediatamente, evitándose así 
        la competencia con el cultivo.
      `,
    }
  },
  {
    name: 'Quintal',
    filters: [ProductTypes.INSECTICIDAS_GENERAL],
    isActiveSubstance: true,
  },
  {
    name: 'Expedition',
    filters: [ProductTypes.INSECTICIDAS_GENERAL],
    isActiveSubstance: true,
    specs: {
      description: `
        Es un insecticida foliar de amplio espectro, integrado por dos principios 
        activos que poseen características complementarias. Actúa sobre las plagas por contacto 
        e ingestión. De esta manera, se caracteriza por su poder de volteo y persistencia de 
        control.
      `,
    }
  },
  {
    img: 'imida35',
    formulacion: 'Imidacloprid 35%',
    name: 'I Mida 35 Imidacloprid35',
    filters: [ProductTypes.INSECTICIDAS_GENERAL],
    isActiveSubstance: true,
    specs: {
      description: 'Insecticida sistémico que actúa por ingestión y contacto, específico para el control de insectos como pulgones, mosquita blanca, trips y otros, que afectan a cultivos de cereales, frutales de carozo, cítricos, tabaco, hortalizas y ornamentales. Se aplica vía tratamiento foliar, mediante aspersiones y radicular mediante riego por goteo.',
    }
  },
  {
    name: 'Lambda 25',
    filters: [ProductTypes.INSECTICIDAS_GENERAL],
    isActiveSubstance: true,
    specs: {
      description: `
        Lambdacialotrina es un insecticida perteneciente a la familia de los 
        piretroides, con acción sobre el sistema nervioso del insecto, siendo 
        un producto efectivo para el control de insectos masticadores, 
        picadores y chupadores en cultivos extensivos e intensivos. Acción por 
        contacto, ingestión y repelencia de larvas y adultos. Afecta el sistema 
        nervioso central mediante la intervención en los canales de sodio, 
        causando hiperexcitación y bloqueo nervioso, seguido por la muerte 
        del insecto. Amplio espectro de control, brindando un rápido efecto de 
        volteo y un efecto residual.
      `,
    }
  },
  {
    name: 'Tracer',
    formulacion: 'Spinosad 43%',
    filters: [ProductTypes.INSECTICIDAS_GENERAL],
    isActiveSubstance: true,
    specs: {
      description: `
        Una vez que el producto es pulverizado sobre el cultivo, 
        actúa sobre las plagas por contacto o ingestión. 
        Inmediatamente éstas dejan de alimentarse y se paralizan. A 
        las pocas horas de la aplicación las larvas mueren.
      `,
    }
  },
  {
    name: 'Flipper',
    formulacion: 'Spinosad 0,024%',
    filters: [ProductTypes.INSECTICIDAS_GENERAL],
    isActiveSubstance: true,
    specs: {
      description: `
        Flipper® es un insecticida natural a base de spinosad, recomendado para el control 
        de mosca del mediterráneo (Ceratitis capitata) en frutales.
        Gracias a su alta eficacia y comodidad en su aplicación, Flipper® es el producto 
        ideal para el control de la mosca de la fruta.
      `,
    }
  },
  {
    name: 'Bifentrin',
    formulacion: 'Bifentrin 10%',
    filters: [ProductTypes.INSECTICIDAS_GENERAL],
    isActiveSubstance: true,
    specs: {
      description: `
        Bifentrin 100 EC es acaricida-insecticida que actúa por contacto e ingestión, 
        con muy buen efecto de choque y persistencia. Controla una amplia gama de 
        ácaros e insectos en frutales, vides, hortalizas, cereales, praderas y otros 
        cultivos. Destaca su acción sobre arañitas, polillas, enrolladores, trips, 
        minadores, pulgones, cuncunilla negra y burritos, entre otras plagas
      `,
    }
  },
  {
    img: 'abamectina',
    name: 'Abamectina',
    formulacion: 'Abamectina 1.8%',
    filters: [ProductTypes.INSECTICIDAS_GENERAL],
    isActiveSubstance: true,
    specs: {
      description: 'ABAMECTINA DEL MONTE 1.8 EC es una abamectina que resulta de una mezcla de Avermectina B1A y Avermectina B1B que actúa estimulando la liberación presináptica del inhibidor neurotransmisor ácido g-aminobutírico (GABA) desde las terminales nerviosas y potenciando la fijación del GABA a los receptores postsinápticos. En los artrópodos impide la transmisión de señales en las conexiones neuromusculares por el mismo mecanismo de amplificación de la acción del GABA, a través de un aumento de la permeabilidad de la membrana al calcio. Los insectos sensibles quedan paralizados irreversiblemente y mueren. A diferencia de la mayoría de los insecticidas no afecta al sistema colinérgico.',
    }
  },
  {
    img: 'carbendazim',
    name: 'Carbendazim - Philagel',
    filters: [ProductTypes.FUNGICIDAS],
    isActiveSubstance: true,
    specs: {
      description: `
        Carbendazim 50 F es un funguicida sistémico formulado como 
        suspensión concentrada, de efecto preventivo y/o curativo, 
        indicado para pulverización o baño de inmersión en diversos 
        cultivos indicados en la etiqueta, tanto en plantas como en 
        post- cosecha, para el control de hongos durante el 
        almacenamiento.
      `,
    }
  },
  {
    img: 'dithanent80wp',
    name: 'Dithane',
    filters: [ProductTypes.FUNGICIDAS],
    isActiveSubstance: true,
    specs: {
      description: `
        Dithane™ NT es un fungicida protectante de contacto que inhibe el 
        desarrollo del tubo germinativo de la espora del hongo, ya que bloquea 
        los proceso enzimáticos a nivel del citoplasma y mitocondria, lo que 
        ocasiona una deficiencia de ATP en la célula.
      `,
    }
  },
  {
    name: 'Tritac',
    filters: [ProductTypes.FUNGICIDAS],
    isActiveSubstance: true,
    formulacion: 'Procloras 45%',
    specs: {
      description: `
        Fungicida de amplio espectro para el control de enfermedades que 
        producen las podredumbres. Tiene acción preventiva, curativa y erradicante. 
        Su ingrediente activo, procloraz, de la familia de los imidazoles, actúa 
        inhibiendo la síntesis de ergosterol y posee una gran acción de penetración y 
        sistemia localizada.
      `,
    }
  },
  {
    name: 'Xedrel',
    filters: [ProductTypes.FUNGICIDAS],
    isActiveSubstance: true,
    formulacion: 'Imazalil 50%',
    specs: {
      description: `
        XEDREL 50 tiene propiedades fungicidas, 
        fungistáticas y antiespurulante; resultando recomendable su 
        aplicación a manzanas, peras y cítricos, exclusivamente en 
        tratamientos de postcosecha.
      `,
    }
  },
  {
    name: 'Ziram Granuflo',
    filters: [ProductTypes.FUNGICIDAS],
    isActiveSubstance: true,
    formulacion: 'Ziram 76%',
    specs: {
      description: `
        Ziram Granuflo es un fungicida foliar de contacto con acción 
        preventiva y amplio espectro. Es bién tolerado por cualquier cultivo y 
        es usado principalmente en frutales de carozo y pepita , citrus , 
        cultivos hortícolas y cultivos florales. Se utiliza en dosis desde 
        180gr/hl. Ziram Granuflo a diferencia de otros ditiocarbamatos no 
        genera en su degradación moléculas de ETU (Ethilenethiourea) 
        altamente peligrosas para el ser Humano. Ziram Granuflo es también 
        un útil repelente para pájaros y roedores. Puede ser utilizado solo o en 
        combinación con otros funguicidas.
      `,
    }
  },
  {
    img: 'racerm',
    name: 'Race RM',
    filters: [ProductTypes.FUNGICIDAS],
    isActiveSubstance: true,
    specs: {
      description: `
        RACE RM combina las fortalezas de ambas moléculas, dando 
        como resultado un producto único por su gran espectro de 
        control de enfermedades. Tiene acción curativa, preventiva, 
        residual y erradicante. Promueve un rendimiento superior 
        debido a su excelente eficacia durante el final del ciclo de la 
        soja, trigo y maíz.
      `,
    } 
  },
  {
    name: 'Hidroxido de Cobre',
    filters: [ProductTypes.FUNGICIDAS],
    isActiveSubstance: true,
    specs: {
      description: `
        Es un nutriente vegetal de aplicación foliar, 
        que provoca que la planta presente una respuesta protectora 
        para infestaciones de hongos o bacterias en sus primeros 
        estadíos de desarrollo, además de, ser una excelente fuente de 
        cobre y nitrógeno.
      `,
    } 
  },
  {
    name: 'Oxicloruro de Cobre',
    filters: [ProductTypes.FUNGICIDAS],
    isActiveSubstance: true,
    specs: {
      description: `
        El oxicloruro de cobre es un fungicida de contacto con acción preventiva y 
        amplio espectro123
        . Se extrae del mineral calcantita y tiene usos en agricultura y 
        nutrición animal4
        . Su ingrediente activo es el oxicloruro de cobre, que equivale a 
        un porcentaje de cobre123
        . Es una sustancia química peligrosa y tóxica que se 
        debe almacenar y transportar con precaución5
        . Actúa por contacto inhibiendo la 
        germinación y la movilidad de las esporas, y sustituyendo a otros metales 
        esenciales para los organismos23
        . Se presenta en sacos de polipropileno o en 
        forma líquida35.
      `,
    }
  },
  {
    name: 'Azoxitrobin - Azostart',
    filters: [ProductTypes.FUNGICIDAS],
    isActiveSubstance: true,
  },
  {
    name: 'Azoxy Pro',
    filters: [ProductTypes.FUNGICIDAS],
    isActiveSubstance: true,
  },
  {
    name: 'Tebucanazole Falcrop',
    filters: [ProductTypes.FUNGICIDAS],
    isActiveSubstance: true,
  },
  {
    name: 'Difenoconazole Multiplicar',
    filters: [ProductTypes.FUNGICIDAS],
    isActiveSubstance: true,
  },
  {
    name: 'Bumper',
    filters: [ProductTypes.FUNGICIDAS],
    isActiveSubstance: true,
  },
  {
    name: 'Comet',
    filters: [ProductTypes.FUNGICIDAS],
    isActiveSubstance: true,
    formulacion: 'Pyraclostrobin 25%'
  },
  {
    name: 'Cura Semilla Nova',
    filters: [ProductTypes.FUNGICIDAS],
    isActiveSubstance: true,
    formulacion: 'Thiram 10 + Carbendazim 10',
  },
  {
    name: 'Matiz Kws Linta Proncross',
    filters: [ProductTypes.SEMILLA],
  },
  {
    name: 'Sorgo-Tobin',
    filters: [ProductTypes.SEMILLA],
  },
  {
    name: 'Solibolsas - Agrinplex',
    filters: [ProductTypes.SEMILLA],
  },
  {
    name: 'Myrmex',
    filters: [ProductTypes.HERMICIDAS],
    isActiveSubstance: true,
  },
  {
    img: 'fipromirex',
    name: 'Fipromirex',
    filters: [ProductTypes.HERMICIDAS],
    isActiveSubstance: true,
    specs: {
      description: 'Fipromirex es un insecticida de la familia de los Fenilpirazoles que actúa por contacto e ingestión, tiene efecto sobre el sistema nervioso central interfiriendo en la transmisión GABA (ácido gama amino butírico) sobre los canales del ión cloro. Es efectivo en el control de varias especies (Hormiga minera, Isaú, negra del sud, negra común, colorada e invasora).',      
    }
  },
  {
    name: 'Sulfamirex',
    filters: [ProductTypes.HERMICIDAS],
    isActiveSubstance: true,
  },
  {
    name: 'Sulfato De Hierro',
    filters: [ProductTypes.FERTILIZANTES, ProductTypes.FERTILIZANTES_SOLUBLES],
  },
  {
    name: 'Cipermetrina',
    filters: [ProductTypes.INSECTICIDAS_GENERAL]
  }
]
