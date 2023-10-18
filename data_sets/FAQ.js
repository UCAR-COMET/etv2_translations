
const faq = {
    registration: {
        title: "Registration",
        description: "Frequently asked questions about the MetEd registration system.",
        questions: [
            {
                question: "Why are we asking you to register?",
                answer:
                "COMET® began to deliver online education and training in 1997. Since that time, our website usage has increased dramatically. Today we deliver over 1,500,000 user sessions per year. Our sponsoring agencies support COMET® efforts to make our online training freely available, and they have asked COMET® to collect better usage statistics. The best way to develop this information, and improve our services, is to implement a mandatory registration system. Everything on the MetEd website will continue to be available to you at no cost. All of us at COMET® appreciate your cooperation and your support, and we hope you will continue to use the education and training that we make available through the MetEd website.",
            },
            {
                question: "Is this secure?",
                answer:
                "Our goal is to make the information you provide to us as secure as possible. Registration information, including user profiles will be protected using a secure (https) connection and passwords are encrypted before transfer to our database. Because of this, we cannot send you your password if you forget it. Instead, we will create a new one and send it to you via e-mail. You'll need to change that password immediately. Our databases are housed within the UCAR security perimeter, and are not acessible by outside computers."
            },
            {
                question: "What will you do with my information?",
                answer: "We ask for a minimal amount of required information: e-mail address, affiliation, and the country in which you live. Other fields are optional, although we suggest adding your name if you share your quiz scores with others or if you want your name on any certificates of completion you earn. All information you provide will be used only to develop user demographics. User data will be reported to COMET sponsors only on an aggregate basis with no personal, individual information identified. No individual information will be released without your explicit permission. You will have the option to forward your quiz scores and list of lessons completed to your supervisor, instructor, or any other e-mail address."
            },
            {
                question: "Is this service free?",
                answer: "Yes. You are required to register to use our materials but there is no cost involved and it is a very simple process. Once you have registered you have access to our entire library of lessons. "
            },
            {
                question: "Can I receive college credit for COMET lessons?",
                answer: "COMET does not offer any college courses or credit of any kind. Our lessons are used widely in university courses, and some organizations such as the American Meteorological Society, do give continuing education credits for completion of lessons but none of that is administered through our program."
            },

        ]
    },
    accountProblems: {
        title: "Login and User Account Problems",
        description: "Frequently asked questions about login and account problems.",
        questions: [
            {
                question: "My account doesn't seem to exist",
                answer:
                "Are you using the correct e-mail address? We've seen instances of people mistyping their e-mail addresses when registering. \nFeel free to register again. If you get a message stating the newly-registered e-mail address is already on file, and you do not know the password, click on the \"Did you forget your password?\" link found on the error page. For this, your e-mail address will have to be valid, so we can send a new password to it.",
            },
            {
                question: "I forgot my password!",
                answer: "You can have a new password emailed to you <a href='/reset_password.php'>here</a>."
            },
            {
                question: "A new password was sent to me and it does not work",
                answer: "<ol><li>Remember, the passwords we send you are case sensitive - letters must be typed in exactly as they appear in the e-mail we send you.</li><li>If logged in, log out of MetEd.</li><li>Clear your browser's cache. Note clearing cookies and cache will require that you log into MetEd again.</li><li>Completely exit out of your browser (File -&gt; Quit or equivalent, rather than the icon in the upper corner of the browser), then reopen.</li></ol>"
            },
            {
                question: "I asked to have my password changed, but MetEd did not send me a new one",
                answer: "<ul><li>The password we sent you was probably trapped in a Spam filter. Check your junk mail folder for a message from \"meted_support@comet.ucar.edu\".</li><li>If you do not find one, we will need to create a password for you manually. Go to our <a href='resources_form.php'> support form</a> and we will help you out. </li></ul>"
            },
            {
                question: "My email address is not in your system",
                answer: "I have registered with you before and have an email address and password. I attempted to login using my old info and received an error message stating my email address is not in the system. I attempted to register again using the same email address and new password. Your message stated my email address is already on file. <ul><li>The password we sent you was probably trapped in a Spam filter. Check your junk mail folder for a message from \"meted_support@comet.ucar.edu\".</li><li>If you do not find one, we will need to create a password for you manually. Go to our <a href=\"resources_form.php\"> support form</a> and we will help you out. </li></ul>"
            },
            {
                question: "I registered using the incorrect e-mail address",
                answer: "<ul><li>You can change your e-mail address in your profile if you can successfully log in.</li><li>If you are not able to log in, go to our <a href='resources_form.php'> support form</a> and we’ll be able to help you.</li></ul>"
            },
            {
                question: "I need to change my e-mail address",
                answer: "<p>Follow these instructions:</p><ol><li>Log in using your username.</li><li>Click the “Your Account” button in the upper right of the home page.</li><li>Change your e-mail address and submit.</li><li>Your records will be applied to the new e-mail address.</li></ol>"
            },
            {
                question: "Redirect error (\"The page isn't redirecting properly\", \"This webpage has a redirect loop\", etc.)",
                answer: "<p>Usually, these types of errors are due to browser cookies. Try the following:</p><ul><li>First, try refreshing your browser (reloading the page).</li><li>If logged in, log out of MetEd using the button in the upper right of most MetEd pages.</li><li>Clear your browser's cache. Note: clearing cookies and cache will require that you log into MetEd again.</li><li>Completely exit out of your browser (File -&gt; Quit or equivalent, rather than the icon in the upper corner of the browser), then revisit the MetEd site and login.</li></ul>"
            },
            {
                question: "Getting to MetEd from Moodle, Blackboard, or an external LMS",
                answer: "We've seen some issues with getting to MetEd content via various course or learning management systems, including our own COMET Virtual Classroom Moodle server:  Go directly to our site (http://www.meted.ucar.edu) - log in using your MetEd username and password, and search for the item you are interested in."
            },
            {
                question: "I don’t know the usernames or passwords for my K-12 student accounts",
                answer: "If you created accounts for K-12 students, their email addresses and passwords for login were automatically generated. These student email addresses are based on your email address, with an underscore and number appended to the part of your email address left of the \"@\". The student password is the part of the student email address left of the \"@\". For example, if your email address is john.doe@someschool.someplace, your K-12 student email addresses for login will be john.doe_1@someschool.someplace, john.doe_2@someschool.someplace, etc. Your student passwords will be john.doe_1, john.doe_2, etc. Student email addresses and passwords can be changed individually by going to the “My K-12 Students tab” in My MetEd and clicking “Edit” on a student."
            },
        ]
    },
    metedLessons: {
        title: "MetEd Lessons",
        description: "Questions about MetEd Lessons, Courses, Quizzes, Certificates, and other education and training resources.",
        questions: [
            {
                question: "Saving and accessing download versions",
                answer:
                "<p>Most lessons are available as a take-away for use on a local computer or server. Downloads are made available as .zip files. These files need to be downloaded and extracted on your local computer before they can be used. Please follow these instructions when downloading a lesson:</p><ol><li>Access the download file by clicking the \"Download Version\" link available in most lessons.</li><li>Review the license agreement and click \"I Accept\".</li><li>The download should then begin. Sometimes, a lesson's download file will need to be repackaged before the download begins; if that is the case, a message will be displayed before the download begins.</li><li>Save the .zip file (*lesson_name*.zip) to your local computer. Take note of where the file is saved.</li><li>Use a .zip extraction program to extract the lesson files. By default, the files will be saved in a new folder called \"comet\". When properly extracted and installed, the material can be found in a directory comet/*topicarea*/*lessonname*/ that contains all the files required to run this lesson.</li><li>Point your browser to the file comet/*topicarea*/*lessonname*/index.htm to launch the lesson in a browser.</li><li>You may wish to create a bookmark or favorite to enable rapid access to this location in the future.</li><li><strong>NOTE:</strong> Some operating systems, such as Microsoft Windows 7, will open .zip files without extracting them. This can be misleading as the index.htm file will open in a browser but it will not display properly. Be sure to fully extract the .zip file before accessing the lesson files.</li></ol>",
            },
            {
                question: "The download version does not work",
                answer: "Patience is a virtue here. The download version of a lesson is sometimes dynamically created if the content has been recently updated. Creating the download files can take several minutes, depending on the size of the lesson. As soon as the download file has been rebuilt, the download should begin. The transfer of the lesson download file to your local machine can take time. Do not start unzipping the lesson download file until it has been fully transferred to your local machine."
            },
            {
                question: "The print version does not work",
                answer: "The transfer of the print version can take time, depending on the speed of the network and the size of the lesson. Do not start the print version until it has fully loaded in your browser."
            },
            {
                question: "Other technical issues such as with animations, videos, pop-up windows, content not loading, etc.",
                answer: "For any of these issues, please visit our Tech Notes page."
            },
            {
                question: "Note for NOAA LMS users",
                answer: "The Department of Commerce maintains a learning management system for internal use. Please see our information page for more details. "
            },
            {
                question: "Sharing quiz scores",
                answer: "Quiz scores can be shared automatically if you select that option on Your Account profile. You can also share quiz scores individually and send them to whomever you like, whenever you like. Go to the My Lessons tab in My MetEd to access your quiz scores. Find the quiz score of interest and click the \"Share Score\" button. Follow the instructions in the pop up window."
            },
            {
                question: "Not all of my records show up",
                answer: "Do you have two accounts? If so, we can merge them if we have enough information to verify you are the owner of both accounts. Names, affiliations, etc. can be used to confirm this. Go to our support form and provide us with whatever information you can and we'll see what we can do."
            },
            {
                question: "My browser died while I'm taking a quiz",
                answer: "All answers will be recorded as you save them, so they are safe. (Make sure you choose “Continue quiz” rather than “Start quiz over” when you go to finish the quiz.)"
            },
            {
                question: "My supervisor/instructor is not getting any of my lesson quiz scores ",
                answer: "Have you entered your supervisor/instructor’s email address on your Account page? If so, is it correct? If it is, the emails might be getting trapped in a spam filter. You may email the records individually, see the section \"Sharing quiz scores\". Or, go to our support form to email us for help."
            },
            {
                question: "How do I find my certificate?",
                answer: "For a lesson certificate, log in and go to My MetEd in the main navigation area. The \"My Lessons\" tab will appear and you will see a list of all your MetEd lessons. For any lesson whose quiz you passed (i.e. scored 70% or better), you will see a blue \"Certificate\" button toward the right. Click this button to access your certificate. (Note that if you haven’t yet completed a user survey for a lesson, you will be asked to do so before you can view your certificate for that lesson.) Finding a certificate for a course is similar. Log in and go to My MetEd. Then select the “My Courses” tab to see a list of your completed MetEd courses. For each completed course whose overall average score is 70% or greater, you will see a blue \"Certificate\" button toward the right. Click this button to access your certificate."
            },
            {
                question: "I can't print my certificate",
                answer: "Certificates are made available as PDF files. You will need to have a PDF viewer installed in order to view and print certificates. Certificates are designed for printing in landscape mode."
            }
        ]
    },
    supervisors: {
        title: "Instructors and Learner Supervisors",
        description: "Frequently asked questions about supervising other learners on MetEd.",
        questions: [
            {
                question: "How can I supervise progress of my K-12 students on MetEd?",
                answer: "As a K-12 educator, you can go to your Account page to create student accounts on MetEd. Your students should sign in to these accounts to take any lessons and complete lesson quizzes. Click the “My K-12 Students” tab in My MetEd to view and download all quiz scores at once."
            },
            {
                question: "How do I create K-12 student accounts?",
                answer: "On your Account page, choose “Education” for your Affiliation and “K-12 Educator” for your Sub-Affiliation, then indicate how many student accounts to create. The \"localpart\" (before the @) of each email address will be the password for each account created. (Eg: localpart_03@example.edu, pw: localpart_03) After saving this change, go to My MetEd and click the “My K-12 Students” tab to see your student accounts. If you wish, use the “Edit” buttons to add names or change email addresses or passwords. Your students can now sign in to MetEd and begin a lesson."
            },
            {
                question: "How can I supervise progress of my adult students or staff on MetEd?",
                answer: "Supervising the progress of adult students or staff on MetEd can be done formally or informally. Formal supervision involves having your learners list you as the supervisor on their Account page. As a result, you can:<ul><li>Automatically have quiz scores shared with you whenever your learners complete a lesson.</li><li>View all your learners’ scores on the MetEd website.</li><li>Download these scores to use in a spreadsheet.</li></ul>If you don’t need these tools, informal supervision is another option. Just ask your learners to share individual quiz scores with you by clicking the “Share Score” button. This button is found on each lesson listed in the “My Lessons” tab in My MetEd, and on the description pages for those lessons. Scores will be shared via email."
            },
            {
                question: "How can I get listed as a supervisor on a MetEd account?",
                answer: "Have your learners sign in to MetEd, go to their Account page, and enter your email address in the \"Supervisor / Instructor Email\" field. While they are there, encourage them to enter their first and last name as well. Name is optional -- but it will be much easier for you to distinguish your learners by their names than by their email addresses. Once this has been done, go to My MetEd and click the “My Staff / Students” tab to see a list of your learners. Here you can view and download all quiz scores."
            },
            {
                question: "How can I get quiz scores automatically sent to me?",
                answer: "If your students or staff have listed you as their MetEd supervisor on their Account page, we will email quiz scores to you whenever your learners complete a quiz."
            },
            {
                question: "How can I view my learners’ scores on MetEd?",
                answer: "Go to My MetEd. If you are a K-12 teacher, click the “My K-12 Students” tab; if you supervise adult students or staff, click the “My Staff / Students” tab. You will see all your learners listed. To view all lesson quiz scores or average course scores for a given learner, click the Lessons or Courses button for that learner. "
            },
            {
                question: "Can I download these scores to my computer?",
                answer: "Yes. K-12 teachers can download their “MetEd Learner Scores” report in the “My K-12 Students” tab. Supervisors can download this report in the “My Staff / Students” tab. These files are in tab-separated .csv format and can easily be opened by any spreadsheet program."
            },
            {
                question: "How do I stop following a learner’s progress and hide him/her from view?",
                answer: "K-12 educators, if you no longer need to follow the progress of a specific student, go to the “My K-12 Students” tab, click the “X” next to that learner’s name, then click “OK” to confirm. To remove all your students, click the “Close Accounts” button at the right side of the page, then click “OK” to confirm. Supervisors, if you no longer need to follow the progress of an adult student or staff member, go to the “My Staff / Students” tab, click the “X” next to that learner’s name, then click “OK” to confirm.  Once you have removed a learner from your tracking list, you will no longer be able to see or download any of their scores."
            }
        ]
    }
};

export const additionalComponents = {
    title: "Frequently Asked Questions",
    backToTop: "Back to top"
};

export default faq;