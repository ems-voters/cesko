// ===== CEC VOTER DATABASE =====

const DATA = [

    {
        id: "01955003022",
        real: true,
        lastName: "თინიკაშვილი",
        firstName: "ლუკა",
        surname: "თინიკაშვილი",
        birth: "16.01.2005",
        station: "09.60",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 7ა, ბინა 18",
        photo: "tinka.jpg"
    },

    // >> neighbours of თინიკაშვილი

    {
        id: "",
        real: false,
        lastName: "თინიკაშვილი",
        firstName: "მარიამ",
        surname: "თინიკაშვილი",
        birth: "03.07.1978",
        station: "09.60",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 7ა, ბინა 18",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "თინიკაშვილი",
        firstName: "გიორგი",
        surname: "თინიკაშვილი",
        birth: "14.11.1975",
        station: "09.60",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 7ა, ბინა 18",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "კვირიკაშვილი",
        firstName: "ანა",
        surname: "კვირიკაშვილი",
        birth: "22.04.2001",
        station: "09.60",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 7ა, ბინა 18",
        photo: ""
    },

    {
        id: "43650000388",
        real: true,
        lastName: "ხუციშვილი",
        firstName: "ნიკოლოზ",
        surname: "ხუციშვილი",
        birth: "13.12.2006",
        station: "09.60",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 5, ბინა 11",
        photo: "xuco.jpg"
    },

    // >> neighbours of ხუციშვილი

    {
        id: "",
        real: false,
        lastName: "ხუციშვილი",
        firstName: "თამარ",
        surname: "ხუციშვილი",
        birth: "09.03.1980",
        station: "09.60",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 5, ბინა 11",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ხუციშვილი",
        firstName: "ვახტანგ",
        surname: "ხუციშვილი",
        birth: "17.06.1977",
        station: "09.60",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 5, ბინა 11",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "მელიქიძე",
        firstName: "სოფო",
        surname: "მელიქიძე",
        birth: "30.12.2003",
        station: "09.60",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 5, ბინა 11",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "მელიქიძე",
        firstName: "დავით",
        surname: "მელიქიძე",
        birth: "05.08.1948",
        station: "09.60",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 5, ბინა 11",
        photo: ""
    },

    {
        id: "01355005230",
        real: true,
        lastName: "არდაზიშვილი",
        firstName: "ალექსანდრე",
        surname: "არდაზიშვილი",
        birth: "17.08.2004",
        station: "09.60",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 5, ბინა 27",
        photo: "ardaza.jpg"
    },

    // >> neighbours of არდაზიშვილი

    {
        id: "",
        real: false,
        lastName: "არდაზიშვილი",
        firstName: "ნინო",
        surname: "არდაზიშვილი",
        birth: "11.02.1979",
        station: "09.60",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 5, ბინა 27",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "არდაზიშვილი",
        firstName: "ზაზა",
        surname: "არდაზიშვილი",
        birth: "28.09.1974",
        station: "09.60",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 5, ბინა 27",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ჯიქია",
        firstName: "ეკა",
        surname: "ჯიქია",
        birth: "15.07.2000",
        station: "09.60",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 5, ბინა 27",
        photo: ""
    },

    {
        id: "01752005600",
        real: true,
        lastName: "თურმანიძე",
        firstName: "ლაშა",
        surname: "თურმანიძე",
        birth: "15.09.2003",
        station: "09.60",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, 11 მიკრო, 2 კვარტალი, კორპუსი 31, ბინა 13",
        photo: "buto.jpg"
    },

    // >> neighbours of თურმანიძე

    {
        id: "",
        real: false,
        lastName: "თურმანიძე",
        firstName: "ეთერ",
        surname: "თურმანიძე",
        birth: "07.05.1982",
        station: "09.60",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, 11 მიკრო, 2 კვარტალი, კორპუსი 31, ბინა 13",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "თურმანიძე",
        firstName: "ბექა",
        surname: "თურმანიძე",
        birth: "19.10.1980",
        station: "09.60",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, 11 მიკრო, 2 კვარტალი, კორპუსი 31, ბინა 13",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ღლონტი",
        firstName: "ლელა",
        surname: "ღლონტი",
        birth: "23.01.1952",
        station: "09.60",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, 11 მიკრო, 2 კვარტალი, კორპუსი 31, ბინა 13",
        photo: ""
    },

    {
        id: "01354003762",
        real: true,
        lastName: "ბეთხოშვილი",
        firstName: "ნუცა",
        surname: "ბეთხოშვილი",
        birth: "02.02.2007",
        station: "09.60",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 9, ბინა 4",
        photo: "nuca.jpg"
    },

    // >> neighbours of ბეთხოშვილი

    {
        id: "",
        real: false,
        lastName: "ბეთხოშვილი",
        firstName: "მანანა",
        surname: "ბეთხოშვილი",
        birth: "14.06.1985",
        station: "09.60",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 9, ბინა 4",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ბეთხოშვილი",
        firstName: "შოთა",
        surname: "ბეთხოშვილი",
        birth: "02.03.1983",
        station: "09.60",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 9, ბინა 4",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ბეთხოშვილი",
        firstName: "ნიკა",
        surname: "ბეთხოშვილი",
        birth: "18.11.2008",
        station: "09.60",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ზღვის უბნის დასახლება, IV კვარტალი, კორპუსი 9, ბინა 4",
        photo: ""
    },

    {
        id: "01317065103",
        real: true,
        lastName: "ზაზაძე",
        firstName: "ნიკოლოზი",
        surname: "ზაზაძე",
        birth: "28.11.2002",
        station: "04.03",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ბეგლარ ახოსპირელის III ჩიხი N 1/17",
        photo: "Zazadz.jpg"
    },

    // >> neighbours of ზაზაძე

    {
        id: "05301013673",
        real: true,
        lastName: "გვარამაძე",
        firstName: "ნიკოლოზი",
        surname: "გვარამაძე",
        birth: "17.06.2002",
        station: "05.12",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: "Gvarama.jpg"
    },

    // >> neighbours of გვარამაძე

    {
        id: "",
        real: false,
        lastName: "გვარამაძე",
        firstName: "ნატო",
        surname: "გვარამაძე",
        birth: "19.09.1978",
        station: "05.12",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "გვარამაძე",
        firstName: "ბადრი",
        surname: "გვარამაძე",
        birth: "03.12.1976",
        station: "05.12",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ბენქლიანი",
        firstName: "გრიგოლ",
        surname: "ბენქლიანი",
        birth: "10.06.1949",
        station: "05.12",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ბენქლიანი",
        firstName: "დავითი",
        surname: "ბენქლიანი",
        birth: "26.08.2006",
        station: "05.12",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "გავრილოვა",
        firstName: "ვალენტინა",
        surname: "გავრილოვა",
        birth: "03.01.1947",
        station: "05.12",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },

    {
        id: "05501013127",
        real: true,
        lastName: "ხარატიშვილი",
        firstName: "ამირანი",
        surname: "ხარატიშვილი",
        birth: "07.02.2002",
        station: "05.14",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: "1.jpg"
    },

    // >> neighbours of ხარატიშვილი

    {
        id: "",
        real: false,
        lastName: "ხარატიშვილი",
        firstName: "ნინო",
        surname: "ხარატიშვილი",
        birth: "27.07.1980",
        station: "05.14",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ხარატიშვილი",
        firstName: "ლევან",
        surname: "ხარატიშვილი",
        birth: "11.03.1978",
        station: "05.14",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ოთარაშვილი",
        firstName: "ეკა",
        surname: "ოთარაშვილი",
        birth: "16.05.1955",
        station: "05.14",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "01708069303",
        real: true,
        lastName: "კორკოტაშვილი",
        firstName: "ნიკოლოზ",
        surname: "კორკოტაშვილი",
        birth: "05.04.2003",
        station: "07.22",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ზაქარია ფალიაშვილის ქ. N 33ა ბ. 15",
        photo: "2.jpg"
    },

    // >> neighbours of კორკოტაშვილი

    {
        id: "",
        real: false,
        lastName: "კორკოტაშვილი",
        firstName: "ქეთინო",
        surname: "კორკოტაშვილი",
        birth: "08.02.1981",
        station: "07.22",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ზაქარია ფალიაშვილის ქ. N 33ა ბ. 15",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "კორკოტაშვილი",
        firstName: "ირაკლი",
        surname: "კორკოტაშვილი",
        birth: "20.11.1979",
        station: "07.22",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ზაქარია ფალიაშვილის ქ. N 33ა ბ. 15",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "სვანიძე",
        firstName: "თამარ",
        surname: "სვანიძე",
        birth: "04.09.1963",
        station: "07.22",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ზაქარია ფალიაშვილის ქ. N 33ა ბ. 15",
        photo: ""
    },

    {
        id: "01808066522",
        real: true,
        lastName: "დემეტრაძე",
        firstName: "ზურა",
        surname: "დემეტრაძე",
        birth: "05.04.2003",
        station: "08.05",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ტიციან ტაბიძის ქუჩა, N 5",
        photo: "3.jpg"
    },

    // >> neighbours of დემეტრაძე

    {
        id: "",
        real: false,
        lastName: "დემეტრაძე",
        firstName: "ლელა",
        surname: "დემეტრაძე",
        birth: "13.07.1984",
        station: "08.05",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ტიციან ტაბიძის ქუჩა, N 5",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "დემეტრაძე",
        firstName: "გოჩა",
        surname: "დემეტრაძე",
        birth: "29.04.1982",
        station: "08.05",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ტიციან ტაბიძის ქუჩა, N 5",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ახვლედიანი",
        firstName: "ნინო",
        surname: "ახვლედიანი",
        birth: "01.11.1960",
        station: "08.05",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ტიციან ტაბიძის ქუჩა, N 5",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ახვლედიანი",
        firstName: "რევაზ",
        surname: "ახვლედიანი",
        birth: "17.03.1957",
        station: "08.05",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ტიციან ტაბიძის ქუჩა, N 5",
        photo: ""
    },

];