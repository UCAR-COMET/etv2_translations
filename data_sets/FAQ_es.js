
const faq = {
    registration: {
        title: "Inscripción",
        description: "Preguntas frecuentes sobre el sistema de registro de MetEd",
        questions: [
            {
                question: "¿Por qué le pedimos que se inscriba?",
                answer:
                "COMET® comenzó a distribuir materiales de educación y formación en línea en el año 1997. Desde aquel entonces, el uso de nuestro sitio web ha aumentado exponencialmente y en la actualidad registra más de 1 500 000 sesiones de usuario al año. Nuestras agencias patrocinadoras apoyan los esfuerzos de COMET® por garantizar que nuestros materiales de formación en línea se puedan obtener libremente, pero nos han pedido que recopilemos mejores estadísticas sobre la utilización del sitio. La mejor forma de obtener esta información y de mejorar nuestros servicios consiste en implementar un sistema de inscripción obligatoria. Todos los materiales del sitio web MetEd seguirán estando disponibles sin costo alguno. El equipo de COMET® agradece su colaboración y su apoyo, y espera sinceramente que usted siga utilizando los materiales de educación y formación que ponemos a su disposición a través de MetEd, tanto en inglés como en español.",
            },
            {
                question: "¿Es seguro el sistema?",
                answer:
                "Nuestro objetivo es asegurar el máximo grado de seguridad posible para la información que usted nos proporciona. Los datos de inscripción, incluidos los perfiles de usuario, están protegidos por medio de una conexión segura (https) y las contraseñas se cifran antes de su transferencia a nuestra base de datos. Esto explica por qué si se le olvida la contraseña no se la podemos enviar. En su lugar, crearemos una contraseña nueva y se la enviaremos a su dirección electrónica. Tendrá que cambiar esa contraseña inmediatamente. Nuestras bases de datos se hallan dentro del perímetro de seguridad de UCAR y no es posible acceder a ellas desde ningún equipo externo."
            },
            {
                question: "¿Qué van a hacer con mis datos?",
                answer: "Pedimos un mínimo de información obligatoria para la inscripción: su dirección de correo electrónico, su afiliación y su país de residencia. Los demás campos son opcionales, aunque sugerimos que agregue su nombre y apellidos, por si decide compartir los resultados de las pruebas que tome con otra persona o si desea que su nombre figure en el certificado de finalización que recibirá al aprobar una prueba. Toda la información que usted nos proporcione se utilizará exclusivamente para generar datos demográficos sobre los usuarios de nuestros materiales. COMET comunicará los datos de usuario a sus patrocinadores solo en forma agregada, sin identificar datos personales o individuales. No divulgaremos ningún dato personal sin su consentimiento explícito. Usted podrá optar por transmitir los resultados de las pruebas y la lista de las lecciones que ha finalizado a su supervisor(a), a su instructor o a la dirección electrónica que indique."
            },
            {
                question: "¿Es gratis este servicio?",
                answer: "Absolutamente. Aunque es obligatorio inscribirse para acceder a nuestros materiales, el proceso es muy sencillo y no implica costo alguno. Una vez que se inscriba, podrá acceder libremente a todas las lecciones que integran nuestra biblioteca."
            },
            {
                question: "¿Puedo obtener crédito universitario si estudio las lecciones de COMET?",
                answer: "COMET no ofrece ningún tipo de curso o crédito universitario. Nuestras lecciones se usan ampliamente en cursos universitarios y algunas organizaciones, como la American Meteorological Society, ofrecen créditos de educación continua por completarlas, pero nada de eso se administra a través de nuestro programa."
            },

        ]
    },
    accountProblems: {
        title: "Problemas de inicio de sesión y con su cuenta de usuario",
        description: "Preguntas frecuentes sobre las cuentas y el inicio de sesión",
        questions: [
            {
                question: "Mi cuenta no parece existir",
                answer:
                "¿Está usando la dirección electrónica equivocada? Se han dado casos de usuarios que han cometido un error al introducir su dirección de correo electrónico en el formulario de inscripción. \nTrate de volver a inscribirse. Si aparece un mensaje indicando que la dirección electrónica que acaba de introducir ya consta en nuestros expedientes y usted no recuerda la contraseña, haga clic en el enlace «¿Olvidó la contraseña?» que se incluye en el mensaje de error. Para que esto funcione, deberá tratarse de una dirección electrónica válida, ya que enviaremos allí la contraseña nueva.",
            },
            {
                question: "¡No recuerdo la contraseña!",
                answer: "Utilice <a href='/reset_password_es.php'>este enlace</a> para pedir una contraseña nueva."
            },
            {
                question: "La contraseña nueva que me enviaron no funciona",
                answer: "<ol><li>Tenga en cuenta que las contraseñas que generamos son sensibles a mayúsculas y minúsculas, de modo que cada letra se debe escribir exactamente como aparece en nuestro mensaje.</li><li>Si tiene una sesión abierta en MetEd, ciérrela.</li><li>Borre la memoria caché del navegador. Cuando se borran las cookies y la memoria caché, MetEd exige que se inicie sesión otra vez.</li><li>Salga por completo del navegador (no use el cuadro de cierre en la esquina del navegador, sino la opción de menú Archivo > Salir) y después vuelva a abrirlo.</li></ol>"
            },
            {
                question: "Pedí un cambio de contraseña, pero MetEd no me envió la contraseña nueva",
                answer: "<ul><li>Es probable que la contraseña que le enviamos haya sido interceptada por un filtro de spam. Busque un mensaje de «meted_support@comet.ucar.edu» en su carpeta de correo basura.</li><li>Si no lo encuentra, tendremos que asignarle una contraseña en forma manual. Utilice nuestro <a href='resources_form_es.php'>Formulario de soporte técnico</a> y le ayudaremos a solucionar el problema.</li></ul>"
            },
            {
                question: "Mi dirección electrónica no está en su sistema",
                answer: "Estoy inscrito en el sitio y recuerdo mi dirección de correo electrónico y contraseña. Cuando trato de iniciar sesión con los datos que he usado antes, aparece un mensaje de error indicando que mi dirección electrónica no consta en el sistema. He intentado inscribirme otra vez con la misma dirección de correo electrónico y otra contraseña, pero entonces aparece un mensaje indicando que mi dirección electrónica ya está registrada.<ul><li>Lo más probable es que la contraseña que le enviamos haya sido interceptada por un filtro de spam. Busque un mensaje de «meted_support@comet.ucar.edu» en su carpeta de correo basura.</li><li>Si no lo encuentra, tendremos que asignarle una contraseña en forma manual. Utilice nuestro <a href='resources_form_es.php'>Formulario de soporte técnico</a> y le ayudaremos a solucionar el problema.</li></ul>"
            },
            {
                question: "Me registré con la dirección electrónica equivocada",
                answer: "<ul><li>Si logra iniciar sesión, puede cambiar la dirección de correo electrónico directamente en su perfil.</li><li>En caso contrario, utilice nuestro <a href='resources_form_es.php'>Formulario de soporte técnico</a> para pedir asistencia.</li></ul>"
            },
            {
                question: "Necesito cambiar mi dirección electrónica",
                answer: "<p>Siga estas instrucciones:</p><ol><li>Inicie sesión con su nombre de usuario.</li><liHaga clic en el botón «Mi cuenta» que aparece en la parte superior derecha de la mayoría de las páginas de MetEd.</li><li>Cambie la dirección electrónica y haga clic en «Enviar»</li><li>Los datos de su cuenta se vincularán a la dirección electrónica que acaba de introducir.</li></ol>"
            },
            {
                question: "Error de redireccionamiento («La página no se está redireccionando apropiadamente», «Esta página web tiene un bucle de redireccionamiento», etc.)",
                answer: "<p>Normalmente, los errores de este tipo se deben a problemas con las cookies del navegador. Siga este procedimiento:</p><ul><li>En primer lugar, trate de volver a cargar la página en el navegador.</li><li>Si tiene una sesión abierta en MetEd, ciérrela con el botón «Cerrar sesión» que aparece en la mayoría de las páginas de MetEd.</li><li>Borre la memoria caché del navegador. Nota: cuando se borra la memoria caché, MetEd exige que se inicie sesión otra vez.</li><li>Salga por completo del navegador (no use el cuadro de cierre de la esquina del navegador, sino la opción de menú Archivo > Salir) y después regrese a MetEd e inicie sesión.</li></ul>"
            },
            {
                question: "Cómo pasar a MetEd desde Moodle, Blackboard o un sistema LMS externo",
                answer: "Algunos usuarios han tenido problemas para pasar al contenido de MetEd desde distintos sistemas de administración de cursos o de aprendizaje, incluido el servidor Moodle de la clase virtual de COMET. Si esto ocurre:  Vaya directamente a nuestro sitio (http://www.meted.ucar.edu/index_es.php), inicie sesión con su nombre de usuario y contraseña de MetEd y busque el material que desea consultar."
            },
            {
                question: "I don’t know the usernames or passwords for my K-12 student accounts",
                answer: "If you created accounts for K-12 students, their email addresses and passwords for login were automatically generated. These student email addresses are based on your email address, with an underscore and number appended to the part of your email address left of the \"@\". The student password is the part of the student email address left of the \"@\". For example, if your email address is john.doe@someschool.someplace, your K-12 student email addresses for login will be john.doe_1@someschool.someplace, john.doe_2@someschool.someplace, etc. Your student passwords will be john.doe_1, john.doe_2, etc. Student email addresses and passwords can be changed individually by going to the “My K-12 Students tab” in My MetEd and clicking “Edit” on a student."
            },
        ]
    },
    metedLessons: {
        title: "Las lecciones de MetEd",
        description: "Preguntas sobre las lecciones, los cursos, las pruebas, los certificados y otros recursos de educación y formación de MetEd",
        questions: [
            {
                question: "Guardar y acceder a las versiones descargables",
                answer:
                "<p>Casi todas nuestras lecciones incluyen una versión descargable que se puede usar en una computadora o un servidor local. Esta versión de la lección se distribuye en un archivo .zip que se debe descargar y extraer en el equipo local antes del uso. Siga estas instrucciones para descargar una lección:</p><ol><li>En la mayoría de las lecciones, haga clic en el enlace «Descargar lección » para obtener el archivo.</li><li>Lea el acuerdo de licencia y haga clic en «Acepto».</li><li>El proceso de descarga comenzará automáticamente. A veces, el sistema debe preparar el archivo .zip de la versión descargable de la lección antes de iniciar la transferencia del archivo; en estos casos, aparecerá un mensaje antes de que comience la operación de descarga del archivo.</li><li>Guarde el archivo .zip (titulado [nombre_lección].zip) en su equipo local. Procure saber dónde se guardará el archivo.</li><li>Utilice un programa de extracción de archivos .zip para extraer los componentes de la lección. Los archivos se guardan automáticamente en una carpeta nueva llamada «comet». Si los archivos de la lección se extraen y se instalan correctamente, los materiales correspondientes estarán en la estructura de directorios comet/[área_temática]/[nombre_lección]/ que contiene todos los elementos necesarios para ejecutar la lección.</li><li>Utilice su navegador para abrir el archivo comet/[área_temática]/[nombre_lección]/index.htm e iniciar la lección.</li><li>Si lo desea, puede crear un marcador o favorito para volver directamente a ese directorio en el futuro.</li><li><strong>NOTA</strong>: algunos sistemas operativos, como Microsoft Windows 7, son capaces de abrir un archivo .zip sin extraer el contenido. Esto puede dar la impresión errónea de que el archivo index.htm se abrirá en el navegador, pero en realidad el contenido no se presentará correctamente. Asegúrese de extraer el contenido del archivo .zip antes de acceder a los archivos de la lección.</li></ol>",
            },
            {
                question: "La versión descargable no funciona",
                answer: "Esta situación requiere un poco de paciencia. A veces, después de la actualización del contenido de la lección el sistema debe crear la versión descargable en forma dinámica. Dependiendo de la lección, crear este archivo puede llevar varios minutos. El proceso de descarga comenzará en cuanto se haya creado el archivo. La transferencia de la versión descargable de una lección al equipo local puede tardar bastante. No trate de abrir el archivo .zip de la lección antes de que se termine de transferir completamente a su equipo local."
            },
            {
                question: "La versión para imprimir no funciona",
                answer: "La transferencia de la versión para imprimir puede tomar bastante tiempo, según las prestaciones de la red y el tamaño de la lección. No comience a usar la versión para imprimir de una lección hasta que se haya cargado del todo en el navegador."
            },
            {
                question: "Otros problemas técnicos con animaciones Flash, videos, ventanas emergentes, contenido que no se carga, etc.",
                answer: "Para cualquier problema de este tipo, visite nuestra página de notas técnicas."
            },
            {
                question: "Nota para los usuarios de la NOAA",
                answer: "El Departamento de Comercio mantiene un sistema de administración de aprendizaje (<em>Learning Management System</em>, o LMS) para uso interno. Encontrará los detalles en nuestra página de información. Nota: el LMS de la NOAA no contiene ningún módulo en español."
            },
            {
                question: "Compartir los resultados de una prueba",
                answer: "Puede optar por compartir los resultados de todas las pruebas que tome seleccionando la opción correspondiente en su perfil, en la página Mi cuenta. También puede compartir el resultado de una prueba individual con cualquier persona y en cualquier momento. Puede acceder a los resultados de sus pruebas en la pestaña «Sus lecciones» de la página Su MetEd. Busque la prueba cuyo resultado desee compartir, haga clic en el botón «Compartir» y siga las instrucciones que aparecen en la ventana emergente."
            },
            {
                question: "Mi expediente es incompleto",
                answer: "¿Tiene dos cuentas distintas? Si es así, podemos combinarlas, siempre y cuando usted nos proporcione información suficiente para comprobar que ambas le pertenecen (por ejemplo, su nombre, sus afiliaciones, etc.). Utilice el Formulario de soporte técnico para enviarnos toda la información posible y trataremos de hacerlo."
            },
            {
                question: "El navegador falló mientras tomaba una prueba",
                answer: "Las respuestas se graban siempre en el momento de guardarlas, de modo que los datos no se han perdido. Asegúrese de elegir «Continuar» en lugar de «Comenzar de vuelta» cuando vuelva a la prueba para terminarla."
            },
            {
                question: "Mi supervisor(a) o instructor(a) no recibe el resultado de ninguna de mis pruebas",
                answer: "¿Incluyó la dirección electrónica de su supervisor(a) o instructor(a) en la página Mi cuenta? Si lo hizo, ¿la escribió correctamente? Si la dirección es correcta, es posible que los mensajes hayan sido interceptados por un filtro de correo basura en el destino. Es posioble enviar los registros individualmente, lea el apartado «Compartir los resultados de una prueba». También puede utilizar el Formulario de soporte técnico para solicitar asistencia."
            },
            {
                question: "¿Dónde están los certificados?",
                answer: "En el caso de una lección, inicie sesión en el sitio y luego seleccione la pestaña de navegación principal Su MetEd. Se abrirá la página «Sus lecciones» con una lista de todas las lecciones que ha estudiado en MetEd. A la derecha de cada prueba con un resultado mínimo del 70&nbsp;% aparecerá un botón azul rotulado «Certificado». Haga clic en ese botón para abrir el certificado correspondiente. (Si aún no ha completado la encuesta al usuario para la lección, el sistema le pedirá que lo haga antes de presentar el certificado correspondiente.) Los certificados de los cursos se obtienen de forma similar: inicie sesión en MetEd y pase a la pestaña Su MetEd. Haga clic en «Sus cursos» para ver una lista de los cursos que ha completado en MetEd. A la derecha de cada curso finalizado con una media del 70&nbsp;% aparecerá un botón azul rotulado «Certificado». Haga clic en ese botón para abrir el certificado."
            },
            {
                question: "No puedo imprimir el certificado",
                answer: "Los certificados se presentan en formato PDF. Debe tener instalado un lector de archivos PDF para ver e imprimir los certificados. Los certificados han sido diseñados para imprimirse en orientación horizontal o apaisada."
            }
        ]
    },
    supervisors: {
        title: "Para docentes",
        description: "Preguntas frecuentes sobre cómo supervisar el aprendizaje de otras personas en MetEd",
        questions: [
            {
                question: "¿Puedo supervisar el progreso académico de los estudiantes adultos o de mi personal en MetEd?",
                answer: "MetEd permite seguir el progreso académico de sus estudiantes adultos o de los miembros de su personal de manera formal o informal. Para una supervisión formal, todos sus estudiantes deberán incluir sus datos en el campo del correo electrónico del supervisor de su propia página «Mi cuenta» en MetEd. De este modo, usted podrá:<ul><li>recibir automáticamente el resultado de cada prueba que estas personas finalicen después de estudiar una lección;</li><li>ver los resultados de todas estas personas en una página de MetEd;</li><li>descargar esos resultados en un formato compatible con las hojas de cálculo.</li></ul>Si no necesita estas funciones, quizás la supervisión informal sea una alternativa más adecuada en su caso: simplemente pida que sus estudiantes compartan con usted el resultado de cada prueba individual mediante el botón «Compartir» que aparece junto a cada lección que figura en la lista «Sus lecciones» de la página «Su MetEd» y en la página de descripción cada lección. Usted recibirá los resultados por correo electrónico."
            },
            {
                question: "¿Qué hay que hacer para figurar como supervisor(a) en una cuenta de MetEd?",
                answer: "Pida que sus estudiantes inicien sesión en MetEd y que escriban la dirección electrónica de usted en el campo «Correo electrónico del supervisor o instructor» de la página Mi cuenta. Es buena idea pedirles que también incluyan su propio nombre y apellido en sus respectivas cuentas. Si bien el nombre no es un dato obligatorio en las cuentas de MetEd, a usted le resultará mucho más fácil identificar a las personas por su nombre —si lo incluyen— que por su dirección electrónica. Una vez que lo hagan, cuando usted seleccione la pestaña «Su personal y alumnos» en Su MetEd, verá una lista completa. Esta página también le permitirá ver y descargar los resultados de todas las pruebas a la vez."
            },
            {
                question: "¿Cómo recibo automáticamente los resultados de las pruebas?",
                answer: "Siempre la persona que le designe como su supervisor(a) en MetEd termine una prueba, le enviaremos el resultado por correo electrónico."
            },
            {
                question: "¿Cómo puedo ver los resultados de mis estudiantes en MetEd?",
                answer: "En Su MetEd, haga clic en la pestaña «Su personal y alumnos» para ver una lista de todos los estudiantes. Para ver el resultado de las pruebas individuales o el promedio de todas las pruebas de un estudiante en particular, haga clic en el botón «Lecciones» o «Cursos» junto al nombre de esa persona."
            },
            {
                question: "¿Puedo descargar esos resultados en mi computadora?",
                answer: "Sí, el supervisor o la supervisora puede descargar el informe «Resultados para alumnos de MetEd» desde la página «Su personal y alumnos» de «Su MetEd». Este archivo en formato .csv separado por tabuladores se puede importar fácilmente en cualquier hoja de cálculo."
            },
            {
                question: "¿Puedo quitar a algún estudiante en particular de la lista cuando ya no necesite seguir su progreso académico?",
                answer: "Cuando ya no necesite seguir el progreso académico de una persona, puede hacer clic en la «X» junto al nombre de esa persona en la página «Su personal y alumnos» y luego hacer clic en «Aceptar» para confirmar su eliminación. Una vez que quite a alguien de la lista de seguimiento, ya no podrá ver ni descargar ninguno de sus resultados."
            }
        ]
    }
};

export const additionalComponents_es = {
    title: "Preguntas frecuentes",
    backToTop: "Arriba"
};

export default faq;