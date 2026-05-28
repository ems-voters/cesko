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
        id: "",
        real: false,
        lastName: "სიმონიანი",
        firstName: "ლევან",
        surname: "სიმონიანი",
        birth: "10.07.1950",
        station: "04.03",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ბეგლარ ახოსპირელის III ჩიხი N 1/17",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "პარიზიანი",
        firstName: "ოთარი",
        surname: "პარიზიანი",
        birth: "19.06.1997",
        station: "04.03",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ბეგლარ ახოსპირელის III ჩიხი N 1/17",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "კურტანიძე",
        firstName: "ლაშა",
        surname: "კურტანიძე",
        birth: "02.03.1983",
        station: "04.03",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ბეგლარ ახოსპირელის III ჩიხი N 1/17",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ფარესიშვილი",
        firstName: "აკაკი",
        surname: "ფარესიშვილი",
        birth: "10.12.1991",
        station: "04.03",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ბეგლარ ახოსპირელის III ჩიხი N 1/17",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "მარტიროსოვი",
        firstName: "ედუარდ",
        surname: "მარტიროსოვი",
        birth: "30.01.2001",
        station: "04.03",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ბეგლარ ახოსპირელის III ჩიხი N 1/17",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "შავგულიძე",
        firstName: "ნაველინა",
        surname: "შავგულიძე",
        birth: "15.09.1953",
        station: "04.03",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ბეგლარ ახოსპირელის III ჩიხი N 1/17",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "აგლაძე-მერფი",
        firstName: "მზია",
        surname: "აგლაძე-მერფი",
        birth: "18.08.1974",
        station: "04.03",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ბეგლარ ახოსპირელის III ჩიხი N 1/17",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ტუტელიან",
        firstName: "არმენ",
        surname: "ტუტელიან",
        birth: "20.05.1981",
        station: "04.03",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ბეგლარ ახოსპირელის III ჩიხი N 1/17",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ლაჭყეპიანი",
        firstName: "მევლუდ",
        surname: "ლაჭყეპიანი",
        birth: "03.04.1977",
        station: "04.03",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ბეგლარ ახოსპირელის III ჩიხი N 1/17",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ფარესიშვილი",
        firstName: "სალომე",
        surname: "ფარესიშვილი",
        birth: "26.09.1993",
        station: "04.03",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ბეგლარ ახოსპირელის III ჩიხი N 1/17",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "პარიზიანი",
        firstName: "დავით",
        surname: "პარიზიანი",
        birth: "22.06.1987",
        station: "04.03",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ბეგლარ ახოსპირელის III ჩიხი N 1/17",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "შავგულიძე-ზაზაძე",
        firstName: "ელენე",
        surname: "შავგულიძე-ზაზაძე",
        birth: "02.06.1977",
        station: "04.03",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ბეგლარ ახოსპირელის III ჩიხი N 1/17",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ზაზაძე",
        firstName: "ნიკოლოზი",
        surname: "ზაზაძე",
        birth: "28.11.2006",
        station: "04.03",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ბეგლარ ახოსპირელის III ჩიხი N 1/17",
        photo: ""
    },

    {
        id: "05301013673",
        real: true,
        lastName: "გვარამაძე",
        firstName: "ნიკოლოზი",
        surname: "გვარამაძე",
        birth: "17.06.2002",
        station: "39.01",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: "Gvarama.jpg"
    },

    // >> neighbours of გვარამაძე

    {
        id: "",
        real: false,
        lastName: "ზაზაძე",
        firstName: "მზია",
        surname: "ზაზაძე",
        birth: "17.10.1992",
        station: "39.01",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ივანიძე",
        firstName: "ფიქრია",
        surname: "ივანიძე",
        birth: "04.08.1995",
        station: "39.01",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ბერიძე",
        firstName: "ნინო",
        surname: "ბერიძე",
        birth: "17.05.1990",
        station: "39.01",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ზედგინიძე",
        firstName: "ირა",
        surname: "ზედგინიძე",
        birth: "27.01.1958",
        station: "39.01",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ზედგინიძე",
        firstName: "ელზა",
        surname: "ზედგინიძე",
        birth: "05.11.1971",
        station: "39.01",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "იველაშვილი",
        firstName: "შუშანა",
        surname: "იველაშვილი",
        birth: "27.02.1982",
        station: "39.01",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "გვარამაძე",
        firstName: "ნიკოლოზ",
        surname: "გვარამაძე",
        birth: "17.06.2006",
        station: "39.01",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "თაქთაქიძე",
        firstName: "დავით",
        surname: "თაქთაქიძე",
        birth: "04.11.1972",
        station: "39.01",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "გვარამაძე",
        firstName: "ნოდარ",
        surname: "გვარამაძე",
        birth: "20.08.1982",
        station: "39.01",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "თაქთაქიძე",
        firstName: "დავით",
        surname: "თაქთაქიძე",
        birth: "27.06.2005",
        station: "39.01",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "თაქთაქიძე",
        firstName: "გიორგი",
        surname: "თაქთაქიძე",
        birth: "08.06.2004",
        station: "39.01",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "გვარამაძე",
        firstName: "მაია",
        surname: "გვარამაძე",
        birth: "01.05.1984",
        station: "39.01",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "გვარამაძე",
        firstName: "ტარიელ",
        surname: "გვარამაძე",
        birth: "02.08.1956",
        station: "39.01",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "თედორაძე",
        firstName: "თამარი",
        surname: "თედორაძე",
        birth: "04.08.1972",
        station: "39.01",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ბერიძე",
        firstName: "ქეთევანი",
        surname: "ბერიძე",
        birth: "01.10.1996",
        station: "39.01",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა სანაპიროს ქ. N 16",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ზედგინიძე",
        firstName: "როზალია",
        surname: "ზედგინიძე",
        birth: "25.08.1944",
        station: "39.01",
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
        lastName: "კარაკაშიან",
        firstName: "ლალი",
        surname: "კარაკაშიან",
        birth: "15.09.1984",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ლაზარაშვილი",
        firstName: "ცისანა",
        surname: "ლაზარაშვილი",
        birth: "04.05.1952",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ლეკიშვილი",
        firstName: "ცარო",
        surname: "ლეკიშვილი",
        birth: "15.11.1950",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "პაპაშვილი",
        firstName: "დავით",
        surname: "პაპაშვილი",
        birth: "01.01.1984",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ქუქჩიშვილი",
        firstName: "ნიკა",
        surname: "ქუქჩიშვილი",
        birth: "18.07.2003",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ჭელიშვილი",
        firstName: "ანი",
        surname: "ჭელიშვილი",
        birth: "26.05.1994",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ბედუკაძე",
        firstName: "ილია",
        surname: "ბედუკაძე",
        birth: "23.05.2007",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ზაზაძე",
        firstName: "გიორგი",
        surname: "ზაზაძე",
        birth: "11.07.1984",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ზედგინიძე",
        firstName: "გიორგი",
        surname: "ზედგინიძე",
        birth: "03.08.1969",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "თედორაძე",
        firstName: "ქეთევანი",
        surname: "თედორაძე",
        birth: "26.11.2005",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "კარაკაშიან",
        firstName: "სიმონ",
        surname: "კარაკაშიან",
        birth: "21.07.1971",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ლეკიშვილი",
        firstName: "დიმიტრი",
        surname: "ლეკიშვილი",
        birth: "17.10.1981",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "მაისურაძე",
        firstName: "გიორგი",
        surname: "მაისურაძე",
        birth: "08.12.1998",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "სანდოძე",
        firstName: "ლაზარე",
        surname: "სანდოძე",
        birth: "28.03.1957",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "შეშაბერიძე",
        firstName: "მარიამი",
        surname: "შეშაბერიძე",
        birth: "07.01.1999",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ჭელიშვილი",
        firstName: "გია",
        surname: "ჭელიშვილი",
        birth: "31.08.1964",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "გრიგორიან",
        firstName: "მიხეილ",
        surname: "გრიგორიან",
        birth: "30.08.1977",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ზაზაძე",
        firstName: "ნიკოლოზ",
        surname: "ზაზაძე",
        birth: "22.09.2006",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "თაქთაქიძე",
        firstName: "ელიზავეტა",
        surname: "თაქთაქიძე",
        birth: "17.09.1981",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ივანიძე",
        firstName: "გოჩა",
        surname: "ივანიძე",
        birth: "25.01.1982",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა შ.რუსთაველის ქ. N 12",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "კარაკაშიან",
        firstName: "მარიამი",
        surname: "კარაკაშიან",
        birth: "16.08.2006",
        station: "39.23",
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
        station: "02.16",
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
        firstName: "ნიკოლოზ",
        surname: "კორკოტაშვილი",
        birth: "05.04.2006",
        station: "02.16",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "თბილისი ზაქარია ფალიაშვილის ქ. N 33ა ბ. 15",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "კვანტალიანი",
        firstName: "გვანცა",
        surname: "კვანტალიანი",
        birth: "23.04.1985",
        station: "02.16",
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
        station: "02.09",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ტიციან ტაბიძის ქუჩა, N 5",
        photo: "3.jpg"
    },

    // >> neighbours of დემეტრაძე

    {
        id: "",
        real: false,
        lastName: "შიხალოვი",
        firstName: "ზეინაბ",
        surname: "შიხალოვი",
        birth: "02.11.1961",
        station: "02.09",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ტიციან ტაბიძის ქუჩა, N 5",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "შიხალოვი",
        firstName: "თამარ",
        surname: "შიხალოვი",
        birth: "23.05.2001",
        station: "02.09",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ტიციან ტაბიძის ქუჩა, N 5",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "დემეტრაძე",
        firstName: "ზურა",
        surname: "დემეტრაძე",
        birth: "05.04.2006",
        station: "02.09",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ტიციან ტაბიძის ქუჩა, N 5",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "გუნდიშვილი",
        firstName: "სოფიო",
        surname: "გუნდიშვილი",
        birth: "24.06.1988",
        station: "02.09",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ტიციან ტაბიძის ქუჩა, N 5",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "მჭედლიშვილი",
        firstName: "მაია",
        surname: "მჭედლიშვილი",
        birth: "11.03.1988",
        station: "02.09",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ტიციან ტაბიძის ქუჩა, N 5",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "შიხალოვი",
        firstName: "მარინე",
        surname: "შიხალოვი",
        birth: "01.01.1960",
        station: "02.09",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ტიციან ტაბიძის ქუჩა, N 5",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "შიხალოვი",
        firstName: "რაისა",
        surname: "შიხალოვი",
        birth: "22.04.1965",
        station: "02.09",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ტიციან ტაბიძის ქუჩა, N 5",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "დემეტრაძე",
        firstName: "საბა",
        surname: "დემეტრაძე",
        birth: "02.01.2008",
        station: "02.09",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ტიციან ტაბიძის ქუჩა, N 5",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "გოცირიძე",
        firstName: "თამარ",
        surname: "გოცირიძე",
        birth: "08.07.1982",
        station: "02.09",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ტიციან ტაბიძის ქუჩა, N 5",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "შიხალოვი",
        firstName: "ნუგზარ",
        surname: "შიხალოვი",
        birth: "01.11.1963",
        station: "02.09",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "საქართველო, ქალაქი თბილისი, ტიციან ტაბიძის ქუჩა, N 5",
        photo: ""
    },

    {
        id: "05801013134",
        real: true,
        lastName: "ბერიძე",
        firstName: "ბექა",
        surname: "ბერიძე",
        birth: "30.11.2002",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა დ.არაყიშვილის ქ. N 6",
        photo: "4.jpg"
    },

    // >> neighbours of ბერიძე

    {
        id: "",
        real: false,
        lastName: "ბერიძე",
        firstName: "ბესიკ",
        surname: "ბერიძე",
        birth: "10.10.1979",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა დ.არაყიშვილის ქ. N 6",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ბერიძე",
        firstName: "ბექა",
        surname: "ბერიძე",
        birth: "30.11.2006",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა დ.არაყიშვილის ქ. N 6",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ბერიძე",
        firstName: "თემურ",
        surname: "ბერიძე",
        birth: "21.12.1955",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა დ.არაყიშვილის ქ. N 6",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ბერიძე",
        firstName: "ლუკა",
        surname: "ბერიძე",
        birth: "20.03.2008",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა დ.არაყიშვილის ქ. N 6",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "გვირჯიშვილი",
        firstName: "შალვა",
        surname: "გვირჯიშვილი",
        birth: "03.08.1997",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა დ.არაყიშვილის ქ. N 6",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "მაგრაქველიძე",
        firstName: "ივანე",
        surname: "მაგრაქველიძე",
        birth: "08.08.2003",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა დ.არაყიშვილის ქ. N 6",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "ლონდარიძე",
        firstName: "მარინე",
        surname: "ლონდარიძე",
        birth: "24.10.1968",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა დ.არაყიშვილის ქ. N 6",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "გიგანი",
        firstName: "ნანა",
        surname: "გიგანი",
        birth: "25.07.1980",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა დ.არაყიშვილის ქ. N 6",
        photo: ""
    },

    {
        id: "",
        real: false,
        lastName: "მაგრაქველიძე",
        firstName: "ლევანი",
        surname: "მაგრაქველიძე",
        birth: "07.06.2005",
        station: "39.23",
        stationType: "ელექტრონული",
        mapUrl: "https://maps.google.com",
        address: "დ. ასპინძა დ.არაყიშვილის ქ. N 6",
        photo: ""
    },

];
